export function czyPoprawnyNumer(e){
    if(isNaN(parseInt(e.key,10))===true) 
        return e.preventDefault();
    return true;
}