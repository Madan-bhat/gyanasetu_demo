import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_STUDENTS, MOCK_EVENTS, MOCK_NOTICES } from "@/lib/mock-data"
import { CalendarDays, GraduationCap, Bell } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{MOCK_STUDENTS.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{MOCK_EVENTS.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Notices</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{MOCK_NOTICES.length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Notices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_NOTICES.map(notice => (
                <div key={notice.id} className="border-b pb-4 last:border-0">
                  <h3 className="font-medium">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground">{notice.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notice.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_EVENTS.map(event => (
                <div key={event.id} className="border-b pb-4 last:border-0">
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{event.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

