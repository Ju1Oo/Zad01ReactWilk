export function czyPoprawnyNumer(e){
    if(isNaN(parseInt(e.key,10))===true) 
        return e.preventDefault();
     return true;
}

export function czyPoprawnyNumer2(e){
    if(!(e.key >= 0) && e.key !=="Backspace") return e.preventDefault();
    return true;
}

//jedyna działające z wyswietlaniem błedu
export function czyPoprawnyNumerRegex(e) {
    const regex = /^[0-9]$/;
  
    if (!regex.test(e.key) && e.key !== "Backspace") {    
        e.preventDefault();
        return false; 
    }
    return true;
}

export function zmienZnakiNaLiczbe(val){
    if(val === "")
        return -1;
    return parseInt(val,10); 
}

export function czyNazwaIstnieje(val){
    if(val.length > 0)
        return true

    return false
}
