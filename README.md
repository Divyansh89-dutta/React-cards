ASYNC JS :-
aisa koi bhi code jismein kuchh time lagta hai, js mein usey by default in most cases aync maan kar side stack mein daal diya jaata hai 
settimeout:-
settimeout function ka use time lagne wale code ko execute karne ke liye hota
setinterval:-
setinterval function ka use interval ke time ke baad execute hone wala code ko execute karne
Fetch Api
fetch api ka use data ko fetch karne ke liye hota hai
Axios :-
axios ka use data ko fetch karne ke liye hota hai
Promise :- ye janaab ke andar jo code likhoge wo aapan kaam karega aur ye khud side stack mein chale jaayege us code ko lekar aur jab andar se code resolved kiya jaayega tab ye chalenge 
ye sabhi use hi tab kiya jaata hai jab aapko kuchh asisa karna ho jismein time lagega
Promise kya hai?
kuchh code socho man mein socho, jo ki async ho, matlab ki ye side stack mein jaayega aur baad mei chalega main stack ke, ab ye socho ki aapne is code ko likha to isska answer kabhi aayega aur aisa bhi ho sakta hai kis answer naa aaye
Callback :-
callback ka use aapne code ko execute karne ke liye hota hai
async/await :-
koi bhi function banalo and uske andar jo man mein aaye wo async code likhdo, ab jab aap async likhte ho to baad waali line pahle chal jaati hai kyuki asyn side stack pe hota hai aur baad waali line agar async ke basis par hui to aapka code fail ho jaayega, wo isliye kyuki aapke code depend karta hai async code par jo bhi baad mein chalega sync code chalne ke baad 
async/await ka use aapne code ko execute karne ke liye hota hai
Event loop :- 
Event loop ek JavaScript ka mechanism hai jo asynchronous operations ko handle karta hai. Yeh ek queue-based system hota hai jo tasks ko manage karta hai, jaise ki API calls, timers, aur user interactions. Jab ek task complete hota hai, event loop usko execution stack me dalta hai, jisse JavaScript ek time par ek hi task execute kare, bina baki tasks ko block kiye.
Callbacks vs Promises vs Async/Await
1️⃣ Callbacks (Puraana Tareeka - Nested Code)
Callback ek function hota hai jo ek doosre function ke andar pass kiya jata hai, jo baad me execute hota hai jab operation complete ho jaye.

🔹 Problem: Callback Hell (nested callbacks ka jungle)

js
Copy
Edit
function getData(callback) {
  setTimeout(() => {
    console.log("Data received!");
    callback();
  }, 1000);
}

getData(() => {
  console.log("Process complete!");
});
👎 Cons: Code complex ho jata hai aur readability khatam ho jati hai. (Callback Hell)

2️⃣ Promises (Better Tareeka - Chainable)
Promise ek object hota hai jo future me complete ya fail hoga. Yeh .then() aur .catch() ke saath use hota hai.

js
Copy
Edit
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 1000);
  });
}

getData()
  .then((data) => {
    console.log(data);
    console.log("Process complete!");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
👍 Pros: Code readable ho jata hai aur callback hell avoid hoti hai.

3️⃣ Async/Await (Sabse Modern & Cleanest)
Async/Await promises ka hi ek better version hai jo code ko synchronous jaisa readable banata hai.

js
Copy
Edit
async function fetchData() {
  try {
    let data = await getData();
    console.log(data);
    console.log("Process complete!");
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
✅ Best Option: Code clean, readable, aur debug-friendly hota hai.
