import { renderPlayers } from "./utils.js";

document.addEventListener("DOMContentLoaded", ()=>{
    
    const useParams = new URLSearchParams(window.location.search);
    if (!useParams.has("sport")){
        useParams.delete("sport")
        window.location.href = ".././index.html?"+useParams.toString()
        return
    }

    const sport = useParams.get("sport");

    const playersDom = document.querySelector(".players")

    renderPlayers(playersDom, sport)

    const heading = document.querySelector(".heading");
    heading.textContent = sport+" Players"

    document.querySelector("#backbtn").addEventListener("click",()=>{
        useParams.delete("sport");
        window.location.href=".././index.html?"+useParams.toString();
    })

})