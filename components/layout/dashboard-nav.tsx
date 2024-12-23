"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Calendar, ClipboardList, GraduationCap, Home, School, Users } from 'lucide-react'

const teacherRoutes = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: Users,
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: ClipboardList,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: School,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {teacherRoutes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === route.href ? "bg-accent" : "transparent"
          )}
        >
          <route.icon className="mr-2 h-4 w-4" />
          <span>{route.title}</span>
        </Link>
      ))}
    </nav>
  )
}

