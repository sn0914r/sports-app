import { Categories, descriptions } from "./data.js";

// validation
const validationHOC=()=>{
    const dom = document.querySelector(".message-box");
    const alertDiv = (msg, isGood) => 
        `<div class="alert ${isGood ? 'alert-success' : 'alert-danger'} alert-dismissible fade show" role="alert">
            ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`; 
    const setMsg=(msg, isGood=false)=>dom.innerHTML = alertDiv(msg, isGood)

    return function(name){
        if (name.value===""){
            setMsg("username cannot be empty")
            return false
        }
        setMsg("login success", true)
        return true
    }
}

const validation = validationHOC()

// render categories
const renderHOC=()=>{
    
    const card=(key, title, bgImg)=>{
        let elemt = document.createElement('div');
        elemt.classList.add("col-md-4")
        elemt.innerHTML=
        `
        <div id=${key} class="card position-relative border rounded shadow-sm mb-3 category-card">
            <div class="card-title position-absolute top-0 start-0 rounded m-1 text-white p-2 fw-bold">${title}</div>
        </div>
        `
        elemt.firstElementChild.style.backgroundImage=`url(${bgImg})`
        return elemt;
    }
    return function(dom){
        let namesAndImgs =  Object.keys(Categories).map(e=>({
            name: Categories[e].name,
            bgImg: Categories[e].bgImg,
            key: e,
        }))

        const elemnts = namesAndImgs.map(e=>card(e.key ,e.name, e.bgImg))

        elemnts.forEach(e=>dom.appendChild(e));
        
    }
}

const render = renderHOC();

//render players

const renderPlayersHOC=()=>{
    
    const card=(title, bgImg, href)=>{
        let elemt = document.createElement('div');
        elemt.classList.add("col-md-4")
        elemt.innerHTML=
        `
        <a href=${href} class="card position-relative border rounded shadow-sm mb-3 category-card">
            <div class="card-title position-absolute top-0 start-0 rounded m-1 text-white p-2 fw-bold">${title}</div>
        </a>
        `
        elemt.firstElementChild.style.backgroundImage=`url(${bgImg})`
        return elemt;
    }
    return function(dom, sport){

        const useParams = new URLSearchParams(window.location.search)

        let players = Categories[sport].players;
        const elemnts = players.map(e=>{
            useParams.set("player", e.name);
            console.log(useParams.toString())
            const href = "./description.html?"+useParams.toString()
            return card(e.name, e.bgImg, href)
        })

        elemnts.forEach(e=>dom.appendChild(e));
        
    }
}

const renderPlayers = renderPlayersHOC();

//renderPlayerData

const renderPlayerDataHOC=()=>{

    const elemt=(img, name, dob, fName,mName, pob, description, wikiURL)=>`
        <div class="card border-0 d-flex flex-column flex-md-row">
          <div class="d-flex flex-shrink-0">
            <img src=${img}
                 alt=${name}
                 class="img-fluid shadow-lg"
                 style="max-width: 800px; width: 100%;">
          </div>
          <div class="card-body">
            <h1 class="card-title text-center border-bottom fw-semibold">${name.toUpperCase()}</h1>
            <div class="card-text">
              <p><strong>Date of Birth: </strong>${dob}</p>
              <p><strong>Father Name: </strong>${fName}</p>
              <p><strong>Mother Name: </strong>${mName}</p>
              <p><strong>Place of Birth: </strong>${pob}</p>
              <p>
                <strong>About ${name}: </strong>
                ${description}
                <a class="m-2 btn btn-sm text-info" href=${wikiURL}>Read more <i class="bi bi-arrow-right"></i></a>
              </p>
            </div>
          </div>
        </div>
    `

    return function (dom, sport, playerName){
        let targetPlayer = descriptions[sport].filter(e=>{
            return e.name===playerName
        }) 

        const { img, name, dateOfBirth, fatherName, motherName, placeOfBirth, description, url } = targetPlayer[0]
        const elemnet = elemt(img, name, dateOfBirth, fatherName, motherName, placeOfBirth, description, url)
        dom.innerHTML = elemnet;
    }
}

const renderPlayerData = renderPlayerDataHOC()

export { validation, render, renderPlayers, renderPlayerData };