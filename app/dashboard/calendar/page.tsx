import { CalendarView } from "@/components/calendar/calendar-view"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NewEventForm } from "@/components/calendar/new-event-form"

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Create a new calendar event for your class
              </DialogDescription>
            </DialogHeader>
            <NewEventForm />
          </DialogContent>
        </Dialog>
      </div>
      <CalendarView />
    </div>
  )
}

