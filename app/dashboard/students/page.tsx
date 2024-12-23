import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MOCK_STUDENTS } from "@/lib/mock-data"

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Students</h1>
        <div className="w-64">
          <Input placeholder="Search students..." />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Attendance Rate</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_STUDENTS.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.attendance}%</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      student.attendance >= 90 
                        ? 'bg-green-100 text-green-700' 
                        : student.attendance >= 80 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {student.attendance >= 90 
                        ? 'Excellent' 
                        : student.attendance >= 80 
                        ? 'Good' 
                        : 'Needs Improvement'}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

