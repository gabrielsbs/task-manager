import moment from 'moment'

export function getDays(month = moment().month()): moment.Moment[] {
  const year = moment().year()
  let currentMonthCount = 0
  return new Array(30).fill(null).map(() => {
    currentMonthCount += 1
    return moment(new Date(year, month, currentMonthCount))
  })
}
