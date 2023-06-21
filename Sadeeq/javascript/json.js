const {log} = console;

//JSON - light weight data in string format useful for transfering data accross the internet.

//JSON has two methods JSON.parse() and JSON.stringify()

//JSON.parse()

const usersText = `{ "users":[ { "firstName":"Asabeneh", "lastName":"Yetayeh", "age":250, "email":"asab@asb.com" }, { "firstName":"Alex", "lastName":"James", "age":25, "email":"alex@alex.com" }, { "firstName":"Lidiya", "lastName":"Tekle", "age":28, "email":"lidiya@lidiya.com" } ] }`

const data = JSON.parse(usersText);

log(data);