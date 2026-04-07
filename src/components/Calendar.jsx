import { useState } from 'react'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { format, parse, startOfWeek, getDay, startOfMonth, endOfMonth } from 'date-fns'
import nb from 'date-fns/locale/nb'

import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'

const GET_EVENTS = gql`
    query GetEvents($start: DateTime!, $end: DateTime!) {
        events(
            filters: {
            and: [
                { start: { lte: $end } }
                { end: { gte: $start } }
            ]
            } 
            ) {
            title
            start
            end
        }
    }
`

const locales = {
    'nb': nb,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek, 
    getDay,
    locales,
})

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState('month');

    const [range, setRange] = useState({
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date()),
    });

    const { loading, error, data } = useQuery(GET_EVENTS, {
        variables: {
            start: range.start.toISOString(),
            end: range.end.toISOString(),
        },
        fetchPolicy: 'cache-and-network',
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const events = data?.events.map(event => ({
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
    })) || []

    //console.log(events);

    return (
        <section className='max-w-7xl mx-auto px-6 py-16 items-center bg-[#f5f5f5]'>
            <div className="h-[60vh]">
                <Calendar
                    messages={{
                        today: 'I dag',
                        next: 'Neste',
                        previous: 'Forrige',
                        month: 'Måned',
                        week: 'Uke',
                        day: 'Dag',
                    }}
                    date={date}
                    view={view}
                    onNavigate={(newDate) => setDate(newDate)}
                    onView={(newView) => setView(newView)}
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    views={['month', 'week', 'day']}
                    selectable
                    onSelectSlot={(slotInfo) => {
                        console.log(slotInfo)
                    }}
                    onSelectEvent={(event) => {
                        console.log(event)
                    }}
                    onRangeChange={range => {
                        if (Array.isArray(range)) {
                            setRange({ start: range[0], end: range[range.length - 1] })
                        } else {
                            setRange({ start: range.start, end: range.end })
                        }
                    }}
                />
            </div>
        </section>
    )
}

export default MyCalendar