/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    var date = new Date(year,month-1,day-1);
    console.log('year: ',date.getFullYear());
    console.log('Month: ',date.getMonth());
    console.log('day: ', date.getDate());
    console.log(date.getDay());
    var arr=[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    return arr[date.getDay()];



}
//
dayOfTheWeek(31,8,2019);