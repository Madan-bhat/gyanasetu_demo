"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { MOCK_STUDENTS } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"


export function AttendanceForm() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [attendance, setAttendance] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit() {
    if (!date) return

    setIsSubmitting(true)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Success",
      description: "Attendance has been recorded",
    })
    
    setIsSubmitting(false)
    // Reset form
    setAttendance({})
  }

  return (
    <div className="space-y-6">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead>Present</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MOCK_STUDENTS.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <Checkbox
                  checked={attendance[student.id] || false}
                  onCheckedChange={(checked) =>
                    setAttendance((prev) => ({
                      ...prev,
                      [student.id]: checked === true,
                    }))
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button 
        onClick={handleSubmit} 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Attendance"}
      </Button>
    </div>
  )
}

