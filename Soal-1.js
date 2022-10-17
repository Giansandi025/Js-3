const cekHariKerja = (day) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'minggu']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Hari ini Bukan Hari Kerja'))
            }
        }, 3000)
    })
}

 const tryCatch = async () => {
   try {
     const output = await cekHariKerja(hariIni.toLowerCase())
     console.log(hasil(output))
   } catch (error) {
     console.log(error.message)
   } finally {
     console.log("Selesai")
   }
 }
 tryCatch()
