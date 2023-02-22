function getLocalItem (value) {
    try{
      return JSON.parse(localStorage.getItem(value));    
    }catch(error) {
      alert(`Parse error: ${error.message}`)
    }
  }

  export {getLocalItem}