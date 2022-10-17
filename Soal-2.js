
const getMonth = (callback) => {
    setTimeout(() => {
      let error = false,
      month = [
        'January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'
      ]
  
      if (!error) {
        callback(null, month)
        console.log("resolve")
      } else {
        callback(new Error('Sorry, data not found'), [])
        console.log("reject")
      }
    }, 4000)
  }
  
  const monthMap = async (error, arr) => {
    try {
      if(arr.length == 0) throw 'Sorry, data not found'
      const data = await arr.map((item) => {
        return item
      }).join('\n')
      console.log(data)
    } catch (err) {
      console.log("error",error.message)
    }
  }

  getMonth(monthMap)
