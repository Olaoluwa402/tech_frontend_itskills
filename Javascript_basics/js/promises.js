//promises
//callback concept in asynchronous operations
const add = (callback, num1, num2) => {
  setTimeout(() => {
    if (num1 && num2) {
      const sum = num1 + num2;
      return callback(null, sum);
    } else {
      console.log("here");
      return callback("Error: Num1 and num2 must be supplied", null);
    }
  }, 5000);
};

function callback(err, result) {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(result);
  return result;
}

// add(callback, 2);

//promise example

const product = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 && num2) {
        const product = num1 * num2;
        return resolve(product);
      } else {
        console.log("here");
        return reject("Error: Num1 and num2 must be supplied");
      }
    }, 5000);
  });
};

//handling returned promise using then()catch() block
product(2)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

//handling returned promise using async await and try catch block

async function getResult() {
  try {
    const finalValue = await product(5, 9);
    console.log(finalValue, "finalValue");
  } catch (err) {
    console.log(err);
  }
}

getResult();
// console.log(finalPromise, "finalPromise");

//fetch AAPP call example
const baseUrl = "https://jsonplaceholder.typicode.com";
const body = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
const fetchApi = async () => {
  try {
    //make api call
    const response = await fetch(`${baseUrl}/posts`, { method: "GET" });
    const result = await response.json();
    //post
    const postResponse = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const postresult = await postResponse.json();

    //promise all xample
    const photosPromise = fetch(`${baseUrl}/photos`, { method: "GET" });
    const todoPromise = fetch(`${baseUrl}/todos`, { method: "GET" });
    const usersPromise = fetch(`${baseUrl}/users`, { method: "GET" });

    const allResponse = await Promise.all([
      await fetch(`${baseUrl}/photos`, { method: "GET" }),
      await fetch(`${baseUrl}/todos`, { method: "GET" }),
      await fetch(`${baseUrl}/users`, { method: "GET" }),
    ]);

    // const allResult = await allResponse.json();
    allResponse.forEach(async (response) => {
      const res = await response.json();
      console.log(res, "res");
    });

    console.log(result.slice(0, 5), "result");
    console.log(postresult, "postresult");
  } catch (error) {
    console.log(error);
  }
};

fetchApi();
