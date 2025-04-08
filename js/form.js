import { validation } from "./utils.js";
document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault()
        const usernameDom = document.querySelector("#username");

        if (validation(usernameDom)){
            window.location.href=`../index.html?name=${usernameDom.value}`;
        }
        return
    })
    
})