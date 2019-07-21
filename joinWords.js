module.exports = (string) => {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetsArray = alphabets.split('');
    let newString = string.toLowerCase().split(/\W/);
    for(let i = 0; i < newString.length; i++) {
      if(newString[i] === '' ) {
        newString.splice(i, 1)
      }
    }
    
    var newerString = newString.join(' ').split('');
    for(let j = 0; j < newerString.length; j++) {
      if(alphabetsArray.includes(newerString[j]) === false) {
        newerString.splice(j, 1, '-');
      }
    }
    return newerString.join('');   
}