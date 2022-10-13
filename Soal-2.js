const getmonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","August","September","October","November","Desember"];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found", []))
        }
    }, 4000);
}


const callback = (error, data) => {
   if (error) {
     console.log(error.message)
   } else {
     data.map((error, i) => {
       let num = i + 1;
       console.log(`${num}, ${error}`)
     })
   } console.log("Selesai")
}
console.log("Menampilkan nama bulan:");
getmonth(callback);

getmonth((error, bulan) => {
    error ? console.log(error) : bulan.map((item) => {
        console.log(item);
    });
});



/* 
getmonth((err,data)=>{
    if(!err){
        data.map(month =>month);
    }
    return err;
})
getmonth()
 */
/* function listBulan(callback){
    month.map(() => {
        callback();
    })
    console.log(listBulan)
}
 */
/* const printMonth = function(month) {
    month.map(function(month) {
        console.log(month); 
      });
  }
 */
