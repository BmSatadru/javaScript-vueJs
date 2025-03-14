const colors = ['red', 'gree', 'blue'];
const newArr = colors.map(function(color){
    return `<li>${color}</li>`;
})

console.log(newArr);
const newArr1 = colors.map(color => `<li>${color}</li>`);
console.log(newArr1) 
