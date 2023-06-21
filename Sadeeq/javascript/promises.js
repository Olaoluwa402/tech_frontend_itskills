// callback

const add = (callback, num1, num2) => {
    setTimeout(()=> {
        if(num1 && num2){
            const sum = num1 + num2;
            return callback(null, sum)
        }else{
            return callback("Error: num1 and num2 must be supplied", null);
        }
    }, 5000);
};

function callback(err, result){
    if(err){
        console.log(err);
        return err;
    }
    console.log(result);
    return result;
}

add(callback, 2, 3);

//promise

const sum = (num1, num2) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(num1 && num2){
                const sum = num1 + num2;
                return resolve(sum);
            }else{
                return reject("Error: num1 and num2 must be supplied");
            }
        }, 5000);
    });
};


//handling returned promise using then()catch() block
sum(2).then((result)=> console.log(result)).catch((err)=> console.log(err));

//handling returned promise using async await and try catch block
async function result(){
    try{
        const finalValue = await sum(2,5);
    }catch(err){

    }
};


//fetch api call
const basUrl = "https://jsonplaceholder.typicode.com"
const body = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
const fetchApi = async ()=> {
    try{
        //make api call
    const response = await fetch(`${basUrl}/posts`, {method: "GET"});
    const results = await response.json();

    //post
    const postResponse = await fetch(`${basUrl}/posts`, {method: "POST", body: JSON.stringify(body)});
    const postResult = await postResponse.json();

    //promise all example
    const photosPromise = fetch(`${basUrl}/photos`, {method: "GET"});
    const todoPromise = fetch(`${basUrl}/todos`, {method: "GET"});
    const usersPromise = fetch(`${basUrl}/users`, {method: "GET"});

    const allResponse = await Promise.all([photosPromise, todoPromise, usersPromise]);

    //const allResult = await allResponse.json()
    allResponse.forEach(async(response)=> {
        const res = await response.json();
        console.log(res, "res");
    });
    //console.log(allResult, "allresult");
    //console.log(allResponse, "allResponse");

    console.log(results, "result");
    console.log(postResult, "postResult");
    }catch(error){
        console.log(error);
    }
}

fetchApi();
