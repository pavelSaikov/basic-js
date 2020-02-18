module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)) return false;

  let name = '';

  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) == 'string') {
      let word = members[i];
      word = word.trim();
      // word = word.toUpperCase();
      name += word[0].toUpperCase();
    }
  }

  let arr = [];
  for(let i = 0; i < name.length; i++) {
    arr[i] = name[i];
  }

  arr.sort();

  name = arr.toString();
  while(name.includes(',')) { 
    name = name.replace(',', '');
  }

  return name;
};