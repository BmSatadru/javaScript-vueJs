arr1 = [
    {name:'Satadru', isActive: true},
    {name:'Jiniya', isActive: true},
    {name:'Rahul', isActive: false}
]

const result = arr1.filter((item)=> item.isActive)
console.log(result) // Logs [{name: 'Satadru', isActive: true}]
// Explanation  
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// In this case, the provided function is (item) => item.isActive, which returns true for items with isActive equal to true.    
// Therefore, the result array contains only the objects with isActive equal to true.


const person1 = {
    talk(){ 
        var self = this;
        setTimeout (function(){
            console.log('self', self)
        }
    )}
}
person1.talk()

const person = {
    talk() {
        // var self=this;
        setTimeout(()=>{ // using arrow function
            console.log('this', this)
        }, 1000);
    }
};

person.talk()

/*
-- Explanation
Using self to Preserve this Context:
In the person1 object, the talk method uses a regular function inside setTimeout.
Regular functions have their own this context, which means this inside the setTimeout function does not refer to the person1 object.
To work around this, the talk method assigns this to a variable self before the setTimeout function.
Inside the setTimeout function, self still refers to the person1 object.
Therefore, console.log('self', self) logs the person1 object.

Using Arrow Function to Preserve this Context:
In the person object, the talk method uses an arrow function inside setTimeout.
Arrow functions do not have their own this context. Instead, they inherit this from the enclosing scope.
In this case, this inside the arrow function refers to the person object because it inherits this from the talk method.
Therefore, console.log('this', this) logs the person object.

Key Points:
-Regular functions have their own this context, which can lead to unexpected behavior when used inside other functions or methods.
-Arrow functions inherit this from the enclosing scope, making them useful for preserving the context of this in nested functions or callbacks.
-Using a variable like self to store the value of this is a common workaround for preserving context in regular functions.
-This example demonstrates the difference between regular functions and arrow functions in terms of how they handle the this context.
*/