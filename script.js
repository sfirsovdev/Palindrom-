const palindrom = str => {
    //нижний регистр
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}
console.log(palindrom('abba'));
 