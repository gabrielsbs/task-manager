import moment from 'moment'
import { Task, User } from './interfaces'

export const users: User[] = [
  {
    name: 'Thelma',
    photoUrl: '123ndsj',
    id: '1'
  },
  {
    name: 'Gabriel',
    photoUrl: '123ndsj',
    id: '2'
  },
  {
    name: 'Arthur',
    photoUrl: '123ndsj',
    id: '3'
  },
  {
    name: 'Gomes',
    photoUrl: '123ndsj',
    id: '4'
  }
]

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
export const tasks: Task[] = [
  {
    id: '1',
    name: 'Research',
    description,
    reporterId: '1',
    assigneeId: '1',
    priority: 'MEDIUM',
    status: 'STARTED',
    startDate: '2022-07-12',
    endDate: '2022-07-16'
  },
  {
    id: '2',
    name: 'Wirefram design',
    description,
    reporterId: '1',
    assigneeId: '2',
    priority: 'MEDIUM',
    status: 'STARTED',
    startDate: '2022-07-12',
    endDate: '2022-07-16'
  }
]
const projectNames = [
  'Investing App',
  'Bank App',
  'Journaling App',
  'Market Place',
  'Nike Run App',
  'Landing For Education',
  'Scouting Score'
]

const tasksNames = ['Research', 'Refinement', 'Wireframe design', 'Prototyping', 'Workshop', 'Development', 'Testing']

export const generateProjectsMock = (numberOfProjects = 5, startDate = moment()) => {
  return Array(numberOfProjects)
    .fill(null)
    .map(() => {})
}
