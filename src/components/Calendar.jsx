import { useState } from 'react'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import nb from 'date-fns/locale/nb'

const locales = {
    'nb': nb,
}

const events = [
    {
        title: 'Meeting',
        start: new Date(2026, 2, 25, 10, 0),
        end: new Date(2026, 2, 25, 12, 0),
    },
]

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { locale: nb }),
    getDay,
    locales,
})

function MyCalendar() {

    const [date, setDate] = useState(new Date());
    const [view, setView] = useState('month')

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

                />
            </div>
        </section>
    )
}

export default MyCalendar