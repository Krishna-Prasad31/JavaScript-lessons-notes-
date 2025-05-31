/*
const jsonNames = `["Spongebob", "patrick", "squidward", "Sandy"]`
const jsonPerson = `{"name": "Spongebob","age": 35,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "cooking"]}`
const jsonPeople = `[{"name": "Spongebob","age": 35,"isEmployed": true},
                     {"name": "Patrick","age": 36,"isEmployed": false},
                     {"name": "Squidward","age": 40,"isEmployed": true},
                     {"name": "sandy","age": 25,"isEmployed": false}]`
      /*
const jsonString = JSON.stringify(people);

console.log(jsonString)
*/
/*
const parsedData = JSON.parse(jsonPerson);

console.log(parsedData)
*/

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.isEmployed)) )
.catch(error => console.error(error))