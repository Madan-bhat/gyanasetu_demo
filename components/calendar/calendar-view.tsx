"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { MOCK_EVENTS } from "@/lib/mock-data"

interface Event {
  id: string
  title: string
  date: string
  description: string
}

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    if (date) {
      // Filter events for selected date
      const dateStr = date.toISOString().split('T')[0]
      const filteredEvents = MOCK_EVENTS.filter(event => event.date === dateStr)
      setEvents(filteredEvents)
    }
  }, [date])

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex space-x-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="flex-1">
            <h3 className="font-medium">Events for {date?.toDateString()}</h3>
            <div className="mt-4">
              {events.length === 0 ? (
                <p className="text-sm text-muted-foreground">No events scheduled</p>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="rounded-lg border p-3"
                    >
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

