const address = {
    street: 'NS Road',
    city: 'Utarpara',
    countre: 'India'
}
const {street, city, countre} = address
console.log(street, city, countre)
const {street:st} = address
console.log(st)

/*
Explanation
Object Declaration:

An object named address is declared with three properties: street, city, and countre.
Object Destructuring:

The line const {street, city, countre} = address; uses object destructuring to extract the values of the street, city, and countre properties from the address object and assign them to variables with the same names.
After this line, the variables street, city, and countre hold the values 'NS Road', 'Utarpara', and 'India', respectively.
console.log(street, city, countre); logs these values to the console.
Renaming During Destructuring:

The line const {street: st} = address; also uses object destructuring but renames the street property to st.
After this line, the variable st holds the value 'NS Road'.
console.log(st); logs this value to the console.
*/