
export const timeService = {
  getDate,
  getTime,
};

const SEC_IN_HOUR = 60 * 60
const SEC_IN_DAY = 24 * SEC_IN_HOUR
const SEC_IN_YEAR = 365 * SEC_IN_DAY


function padTwo(num) {
    return String(num).padStart(2, '0')
}

function getDate(time) {
  const dateObj = new Date(time)
  const month = dateObj.toLocaleString('en-IL', { month: 'short' })
  const day =  dateObj.getDate()
  return `${month} ${day}`
}

function getTime(time) {
  const dateObj = new Date(time)
  let hours = padTwo(dateObj.getHours())
  const AmPm = (hours >= 12 ? "PM" : "AM")
  hours %= 12
  const minutes = padTwo(dateObj.getMinutes())
  return `${hours}:${minutes} ${AmPm}`
}
