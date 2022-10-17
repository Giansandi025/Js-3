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
