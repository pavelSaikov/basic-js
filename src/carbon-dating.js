const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!(typeof sampleActivity == "string")) return false;
  if(isNaN(sampleActivity)) return false;
  if(new Number(sampleActivity) <= 0) return false;
  if(sampleActivity >= MODERN_ACTIVITY) return false;
  if(sampleActivity == null) return false;

  let ratio = MODERN_ACTIVITY / sampleActivity;
  let degree = Math.log2(ratio);
  let age = HALF_LIFE_PERIOD * degree;
  age = Math.round(age);

  return age;
};
