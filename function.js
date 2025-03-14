const person = function() {
    this.name = 'John';
    this.walk = function() {
        console.log(this);
    };
}

console.log("===1===",person); // Logs the function definition
person()
const john = new person(); 
console.log("===2===",john)
console.log("===3===",john.walk);
john1=john.walk.bind(person);
john2=john.walk.bind(john);

john1()
console.log("============================")
john2()
console.log("===4===",john1);
console.log("===5===",john2);


const person1={
    name: 'Satadru',
    walk(){
        console.log(this);
    }  
};

console.log("===6===",person1); 
console.log("===7===",person1.walk); 
const walk1 = person1.walk.bind(person1);
walk1()  
console.log("===8===",walk1());


/*
---------------------------------------------------------------
| Line | Code                                   | Explanation                          | Output                          |
|------|----------------------------------------|--------------------------------------|--------------------------------|
| 1    | john1 = john.walk.bind(person);       | Binds `john.walk` to `person`       | -                              |
| 2    | john2 = john.walk.bind(john);         | Binds `john.walk` to `john`         | -                              |
| 3    | john1();                               | Logs `this` as `person` (a function)| [Function: person]             |
| 4    | john2();                               | Logs `this` as `john` (an object)   | { name: 'John', walk: [Function] } |
| 5    | console.log("===4===", john1);        | Logs `john1` function reference     | ===4=== [Function: bound ]     |
| 6    | console.log("===5===", john2);        | Logs `john2` function reference     | ===5=== [Function: bound ]     |
| 7    | console.log("===7===", person1.walk); | Logs function reference of `walk`   | ===7=== [Function: walk]       |
| 8    | walk1 = person1.walk.bind(person1);   | Binds `walk` to `person1`           | -                              |
| 9    | walk1();                               | Logs `person1` because `this` is bound to it | { name: 'Satadru', walk: [Function: walk] } |
---------------------------------------------------------------
*/