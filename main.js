const detailsform = document.getElementById("spacelistform")

spacelistform.addEventListener("submit", handleformsubmit);

function handleformsubmit(event){
    event.preventDefault();

    const eventname = document.getElementById("name").value;
    const dandt = document.getElementById("timeanddist").value;
    const photourl = document.getElementById("url").value;
    const descri = document.getElementById("description").value;

    
for(let i = 0; i < detailsform.length; i++){
    detailsform.elements[i].value = "";
}


const infocard = cardcreationfunction(eventname,dandt,photourl,descri);

const title = document.getElementById('cardscont')

if(title.children.length === 0){
    document.getElementById('listtitle').innerHTML = "That is Soo Cool!!!"
}


//Creating the Card

document.getElementById("cardscont").appendChild(infocard);

}

function cardcreationfunction(name,timeanddistance,photourl,description){
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);
    img.className = "img-fluid";
    //Image Input Created 
    const defaultphoto = "https://th.bing.com/th/id/R.5df39eb0052b6aaf6b5934523d3c4a04?rik=9fGVDfATtpUO8Q&riu=http%3a%2f%2fwww.wallpaperup.com%2fuploads%2fwallpapers%2f2015%2f04%2f24%2f670127%2f5df39eb0052b6aaf6b5934523d3c4a04.jpg&ehk=EZ6WrKsxDcbS8ai4ubYEeveyauBvcan0gzYior5BbYg%3d&risl=&pid=ImgRaw&r=0";

    if(photourl === '' ){
        console.log(photourl)
        img.setAttribute("src",defaultphoto);
    }
    else{
        img.setAttribute("src",photourl);
    }
    
    card.appendChild(img)



    const cardbody = document.createElement("div");
    cardbody.className = "info";

    //Name of the Event with the Span Created
    const cardinfo = document.createElement("h5");
    cardinfo.innerText = `Name:${name}`;
    cardbody.appendChild(cardinfo)



    //DD of the Event with the Span Created
    const cardinfo1 = document.createElement("h5");
    cardinfo1.innerText = `Date/Distance:${timeanddistance}`;
    cardbody.appendChild(cardinfo1);



    //Description of the Event with Span Created
    if(description.length !== 0){
    const cardinfo2 = document.createElement("h5");
    cardinfo2.innerText = `Description:${description}`;
    cardbody.appendChild(cardinfo2);
}


    const deletebutton = document.createElement("button");
    deletebutton.innerText = "Remove";
    deletebutton.className = "cardbtn";

    deletebutton.addEventListener("click", removecardfuntion);
    cardbody.appendChild(deletebutton);


    card.appendChild(cardbody);
    return card;
}




function removecardfuntion(event) {
    const card = event.target.closest('.card');
    if (card) {
        card.remove();
    }
}
