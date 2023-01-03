export const parseTime = (timeStamp) => {
  var newDate = new Date()
  newDate.setTime(timeStamp * 1000)
  return newDate.toLocaleString()
}