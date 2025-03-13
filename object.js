const person = {
    name: 'John',
    walk() {},
    talk() {}
};

function updatePerson() {
    const targetName = document.getElementById('targetName');
    person[targetName.value] = 'Mary'; // person['name'] = 'Mary' if targetName.value is 'name'
    console.log(person);
}