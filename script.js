const URL="https://potterapi-fedeperin.vercel.app/en/characters";
let btn=document.querySelector(".btn")
let msg=document.querySelector(".msg");
btn.addEventListener("click",async()=>{
    let response = await fetch(URL);//most important for API calling.
    let character= await response.json();
    console.log(character);
    let convert= character[Math.floor(Math.random()*character.length)];

 
    const mapping={
        "Harry James Potter": "Harry Potter",
        "Hermione Jean Granger":"Hermione Granger",
        "Albus Percival Wulfric Brian Dumbledore":"Albus Dumbledore"
 };
 let simplified = mapping[convert.fullName]||convert.fullName;

 let name=simplified.toLowerCase().replace(/ /g,"_");
 console.log(name);



    msg.innerText=convert.fullName;
    let img=document.querySelector("img");
    let newSrc=`https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/${name}.png`;
    img.src=newSrc;


});
