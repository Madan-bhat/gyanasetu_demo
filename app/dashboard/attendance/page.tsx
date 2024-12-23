import { AttendanceForm } from "@/components/attendance/attendance-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Attendance Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Take Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <AttendanceForm />
        </CardContent>
      </Card>
    </div>
  )
}

