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