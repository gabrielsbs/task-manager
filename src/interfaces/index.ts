// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Status = 'TODO' | 'STARTED' | 'DONE' | 'ARCHIVED'
export type Priority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
export type UUID = string

export type User = {
  id: UUID
  name: string
  photoUrl: string
}

export interface Task {
  id: UUID
  name: string
  description: string
  reporterId: UUID
  assigneeId: UUID
  status: Status
  priority: Priority
  startDate: string
  endDate: string
}

export interface Project {
  id: UUID
  name: string
  tasks: Task[]
}
