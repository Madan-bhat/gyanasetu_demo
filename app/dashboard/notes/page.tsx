import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_NOTES } from "@/lib/mock-data"
import { PlusCircle } from 'lucide-react'
import { NewNoteDialog } from "@/components/notes/new-note-dialog"

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notes</h1>
        <NewNoteDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Note
          </Button>
        </NewNoteDialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {MOCK_NOTES.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{note.content}</p>
              <p className="text-xs text-muted-foreground mt-4">{note.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

