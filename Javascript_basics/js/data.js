const data_1 = {
  users: [
    {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      age: 250,
      email: "asab@asb.com",
    },
    {
      firstName: "Alex",
      lastName: "James",
      age: 25,
      email: "alex@alex.com",
    },
    {
      firstName: "Lidiya",
      lastName: "Tekle",
      age: 28,
      email: "lidiya@lidiya.com",
    },
  ],
};

const data_2 = `{ "users":[ { "firstName":"Asabeneh", "lastName":"Yetayeh", "age":250, "email":"asab@asb.com" }, { "firstName":"Alex", "lastName":"James", "age":25, "email":"alex@alex.com" }, { "firstName":"Lidiya", "lastName":"Tekle", "age":28, "email":"lidiya@lidiya.com" } ] }`;

const data_3 = "John";
//name export
export { data_1, data_2 };

//default export
export default data_3;
