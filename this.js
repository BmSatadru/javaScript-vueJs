const person = {
    name: 'John',
    walk: function() {
        console.log(this); // Logs the context in which the function is called
    }
};

person.walk(); // Logs the 'person' object because 'walk' is called as a method of 'person'

const walk = person.walk;
walk(); // Logs 'undefined' (or the global object in non-strict mode) because 'walk' is called as a standalone function

/*
Explanation

`Method Call` (person.walk()):
When person.walk() is called, this inside the walk function refers to the person object.
Therefore, console.log(this) logs the person object.

`Standalone Function Call` (walk()):
When const walk = person.walk; is executed, the walk function is assigned to the variable walk.
When walk() is called, it is no longer a method of the person object. It is now a standalone function.
In a standalone function call, this refers to the global object (window in browsers) in non-strict mode, or undefined in strict mode.
Therefore, console.log(this) logs undefined (or the global object in non-strict mode).

**Key Points
The value of this depends on how a function is called.
When a function is called as a method of an object, this refers to the object.
When a function is called as a standalone function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
This example demonstrates the importance of understanding the context in which a function is called to correctly determine the value of this.
*/