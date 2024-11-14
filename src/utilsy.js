export function czyPoprawnyNumer(e){
    if(isNaN(parseInt(e.key,10))===true) 
        return e.preventDefault();
    return true;
}


export function czyPoprawnyNumerRegex(e) {
    const regex = /^[0-9]$/;  
  
    if (!regex.test(e.key)) {
      e.preventDefault(); 
    }
  }