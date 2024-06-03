const increase= document.querySelector("#increase");
const decrease= document.querySelector("#decrease");
const reset= document.querySelector("#reset");
const digit= document.querySelector(".digit");
let val= 0;

function incFunction(){
    val++;
    digit.innerHTML= `<h1>${val}</h1>`;
    return val;
}

function decFunction(){
    if(val>0)
    {
        val--;
        digit.innerHTML= `<h1>${val}</h1>`;
        return val;
    }
    else{
        val =0 ;
        return val;
    }
}

function resetFunction(){
    val =0; 
    digit.innerHTML= `<h1>${val}</h1>`;
    return val;
    
}


decrease.addEventListener("click", ()=>{
    val = decFunction();
})
reset.addEventListener("click", ()=>{
    val = resetFunction();
});
increase.addEventListener("click", ()=>{
    val = incFunction();
});

