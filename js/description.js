import { renderPlayerData } from "./utils.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const useParams = new URLSearchParams(window.location.search);
    const sport = useParams.get("sport");
    const player = useParams.get("player");
    console.log("Sport: ",sport, "and ","Player: ", player)

    const targetDom = document.querySelector(".target-insert");
    renderPlayerData(targetDom, sport, player)

    document.querySelector("#backBtn").addEventListener("click",()=>{
        useParams.delete("player");
        window.location.href="./players.html?"+useParams.toString();
    })
})

