module.exports = function getSeason(date) {
  if(date == null) return 'Unable to determine the time of year!';
  if(!(date instanceof Date)) throw new Error();

  let propArg = Object.keys(date);
  if(propArg.length != 0) throw new Error();

  let month = date.getMonth();
  if(month == 11 || month == 0 || month == 1) return 'winter';
  if(month >= 2 && month <= 4) return 'spring';
  if(month >= 5 && month <= 7) return 'summer';
  return 'autumn';
};
