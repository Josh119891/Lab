var busyStudent = function (startTime, endTime, queryTime) {
  return startTime.filter((item, index) => (item <= queryTime && endTime[index] >= queryTime)).length
};