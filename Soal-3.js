/* const ids = [1,2,3,4]
const url = 'https://jsonplaceholder.typicode.com/posts/';
let promises = ids.map((id) => {
  return fetch(url+id).then(result => result.json())
})

Promise.all(promises).then((results) => {
  console.log(results)
}) */
/* 
return new Promise((resolve, reject) => {
  if(somethingSuccesfulHappened) {
     const successObject = {
        msg: 'Success',
        data,//...some data we got back
     }
     resolve(successObject); 
  } else {
     const errorObject = {
        msg: 'An error occured',
        error, //...some error we got back
     }
     reject(errorObject);
  }
})
 */
/* const p1 = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
   setTimeout(() => {
       resolve('AppDividend');
   }, 1000);
});

p1.then(values => { 
   console.log(values);
});
 */


/* const listUsername = ["lidiya11", "lidiya22", "", "yaya"]

const step1 = () => {
  console.log("Mengecek username...")
}
const step2 = (name, dataName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cekUsername = dataName.includes(name)
      if (cekUsername) {
        reject(new Error(`Username ${name} tidak dapat digunakan atau telah dipakai`))
      } else if (name.length <= 5) {
        reject(new Error("Username harus lebih dari 5 huruf"))
      } else {
        resolve(`Username ${name} dapat digunakan`)
      }
    }, 3000);
  })
}
const finalStep = () => {
  console.log("Proses selesai.")
}
step1()
step2("lidiya11", listUsername)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error.message)
  })
  .finally(() => {
    finalStep()
  })
 */

  

const listUsername = ["yuji", "lidia", "dani", "yaya"]

const step1 = () => {
  console.log("Mengecek username...")
}
const step2 = (name, dataName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cekUsername = dataName.includes(name)
      if (cekUsername) {
        reject(new Error(`Username ${name} tidak dapat digunakan atau telah dipakai`))
      } else if (name.length <= 5) {
        reject(new Error("Username harus lebih dari 5 huruf"))
      } else {
        resolve(`Username ${name} dapat digunakan`)
      }
    }, 3000);
  })
}
const finalStep = () => {
  console.log("Proses selesai.")
}
step1()
step2("yuji12", listUsername)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error.message)
  })
  .finally(() => {
    finalStep()
  })
