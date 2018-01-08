const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatDate = (str) => {
  let year = parseInt(str.slice(0, 4));
  let month = parseInt(str.slice(4, 6));
  let date = parseInt(str.slice(6));
  let myDate = new Date(year,month-1,date);
  return `${myDate.getMonth()+1}月${myDate.getDate()}日  ${switchWeek(myDate.getDay())}`
}

const switchWeek = (num) => {
  switch(num){
    case 0: 
      return "星期一";
      break;
    case 1:
      return "星期二";
      break;
    case 2:
      return "星期三";
      break;
    case 3:
      return "星期四";
      break;
    case 4:
      return "星期五";
      break;
    case 5:
      return "星期六";
      break;
    case 6:
      return "星期日";
      break;
    default: 
      return;
  }
}



module.exports = {
  formatTime: formatTime,
  formatDate: formatDate
}
