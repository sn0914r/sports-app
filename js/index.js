import { render } from "./utils.js";
document.addEventListener("DOMContentLoaded",()=>{
    
    const useParams = new URLSearchParams(window.location.search);

    if(!useParams.has("name")){
        window.location.href="./html/form.html";
        return
    }

    let username = useParams.get("name");
    document.querySelector("#username").innerHTML = username;

    const sportsDom = document.querySelector(".sports");

    render(sportsDom);

    sportsDom.addEventListener("click",e=>{
        if (e.target.classList.contains("card")){
            useParams.append("sport", e.target.id)
            const parameters = useParams.toString();
            window.location.href = "./html/players.html?"+parameters
        }
    })

})