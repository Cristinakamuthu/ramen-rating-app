const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "../images.file/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "../images.file/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "../images.file/naruto.jpg", rating:3, comment : "yummy"},
    {id: 4,  name: "korijo Ramen", restaurant: "Chiamanuka", image:"images.file/kojiro.jpg", rating:2, comment : "ehhhheh"},
    {id: 5, name: "gyukotsu", restaurant:"Cristina", image: "images.file/gyukotsu.jpg", rating:4, comment :" Tamu sana"}

 ];

 let body = document.body
 const title= document.querySelector("div")
 title.innerText = "Ramen rater"
 title.style.color = "white"
 title.style.backgroundColor = "black"
 title.style.textAlign = "center"
 title.style.height = "5vh"
 title.style.fontSize = "30px"

 


 function displayRamens(){
    const menu = document.getElementById("ramen-menu")
    ramens.forEach(ramen => {
      html = `<div>
      <img src = "${ramen.image}" alt = ${ramen.name}
      <div id = "ramen-menu">
      <div id = "name"></div>
      </div>
      </div>`

      menu.innerHTML += html

    
    });

 }

 displayRamens()

 







































 //  function displayRamens(){
//     //     let menu = document.getElementById("ramen-detail");
//     //     menu.innerHTML ="" ;
//     // ramens.forEach(ramen => {
//     //     let img = document.createElement("img")
//     //     img.src = ramen.img;
//     //     img.alt = ramen.name;
//     //     img.addEventListener("click", function(){
//     //         handlClick(ramen);
//     //     });
//     //     menubar.appendChild(img);

       
       
       
       
//       // document.addEventListener("DOMContentLoaded", displayRamens)
       
       
       
       
       
//         html = `<div>
//         <img src ="${ramen.image}" alt = "${ramen.name}">
//         <div id = "ramen-detail">
//         <div id = "name"></div>
        
//         </div>
//         </div>`
//         wrapper.innerHTML += html


        
// })
    
// }
 



