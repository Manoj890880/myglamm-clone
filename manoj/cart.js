var i = 0;
    function move() {
    if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

async function fetchAlldata() {

    try {
        let fetch_request = await fetch("https://636a9c11b10125b78fe075f7.mockapi.io/products")

        let fetched_data = await fetch_request.json()

        let fetched_data_array = fetched_data.map((item) => {
            return `
            <a style="text-decoration: none;" href="http://127.0.0.1:5501/manoj/description.html">
            <div>
            <img src=${item.avatar} alt="">
            <br>
            <br>
            <h3 class="w3-large title">${item.category}</h3>
            
            <h3 class="w3-large description">${item.description}</h3>
            <br>

            <h1 class="w3-large price">₹ ${item.price}</h1>
            </div>
            </a>
            `
        })
        // console.log(fetched_data_array)
        move()
        let mainContainer=document.querySelector(".makeup-items-page")

        mainContainer.innerHTML=""

        mainContainer.innerHTML=fetched_data_array.join("")
    } catch (error) {
        console.log(error)
    }
}

fetchAlldata()

// let hareCare_btn=document.querySelector(".ChangeCart button")

// hareCare_btn.addEventListener("click",()=>{
    
//     document.getElementById("mainHeading").innerText="HAIR CARE"


//     async function fetchAlldata() {

//         try {
//             let fetch_request = await fetch("https://636a9c11b10125b78fe075f7.mockapi.io/products-2")
    
//             let fetched_data = await fetch_request.json()
    
//             let fetched_data_array = fetched_data.map((item) => {
//                 return `
                
//                 <div>
                
//                 <img src=${item.avatar} alt="">
//                 <br>
//                 <br>
//                 <h3 class="w3-large title">${item.category}</h3>
                
//                 <h3 class="w3-large description">${item.description}</h3>
//                 <br>
    
//                 <h1 class="w3-large price">₹ ${item.price}</h1>
                
//                 </div>
                
                
//                 `
//             })
//             console.log(fetched_data_array)
            
//             let mainContainer=document.querySelector(".makeup-items-page")
    
//             mainContainer.innerHTML=""
    
//             mainContainer.innerHTML=fetched_data_array.join("")
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
//     fetchAlldata()
// })

// let data=[
//     {
//       "createdAt": "2022-12-13T17:49:34.521Z",
//       "name": "Domingo Deckow",
//       "title": "Gloves",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Mykonos-1-1-1.jpg",
//       "category": "COMBO OF 3 WANDERLUST CHROME MATTE NAIL POLISH",
//       "description": "Long-lasting Chrome Matte Nail Polish",
//       "price": 747,
//       "id": "1"
//     },
//     {
//       "createdAt": "2022-12-13T09:31:46.161Z",
//       "name": "Dave Hoppe",
//       "title": "Mouse",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Red-Sensation.jpg",
//       "category": "MYGLAMM LIT MOIST MATTE LIPSTICK - RED SENSATION",
//       "description": "Hydrating Matte Lipstick With a Super-Comfy Finish",
//       "price": 299,
//       "id": "2"
//     },
//     {
//       "createdAt": "2022-12-14T05:27:43.299Z",
//       "name": "Amanda Schaden",
//       "title": "Soap",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Bge1.jpg",
//       "category": "MYGLAMM SUPER SERUM COMPACT - 102W BEIGE",
//       "description": "Skin-perfecting Compact Powder With Hyaluronic Acid",
//       "price": 499,
//       "id": "3"
//     },
//     {
//       "createdAt": "2022-12-14T07:36:57.279Z",
//       "name": "Natalie Fay",
//       "title": "Shoes",
//       "avatar": "https://files.myglamm.com/site-images/800x800/staydefined_3.jpeg",
//       "category": "STAY DEFINED LIQUID EYELINER BROW POWDER",
//       "description": "2 in 1 Waterproof Matte Eyeliner + HD Brow Powder",
//       "price": 1095,
//       "id": "4"
//     },
//     {
//       "createdAt": "2022-12-14T02:34:49.533Z",
//       "name": "Naomi Kuvalis",
//       "title": "Keyboard",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Mykonos-1-1-1.jpg",
//       "category": "COMBO OF 3 WANDERLUST CHROME MATTE NAIL POLISH",
//       "description": "Long-lasting Chrome Matte Nail Polish",
//       "price": 747,
//       "id": "5"
//     },
//     {
//       "createdAt": "2022-12-14T08:29:09.353Z",
//       "name": "Jeremy Waelchi",
//       "title": "Pizza",
//       "avatar": "https://files.myglamm.com/site-images/800x800/funny-gurl-17-1_2.jpeg",
//       "category": "MYGLAMM LIT 2 IN 1 LIQUID MATTE LIPSTICK",
//       "description": "Intense, transfer-proof, long-lasting liquid lipstick duos",
//       "price": 545,
//       "id": "6"
//     },
//     {
//       "createdAt": "2022-12-13T15:19:38.494Z",
//       "name": "Laura Block",
//       "title": "Chair",
//       "avatar": "https://files.myglamm.com/site-images/800x800/RE-1-COMBO-.jpg",
//       "category": "PERFECT DEFINITION LIP & EYE PENCIL DUO",
//       "description": "Intensely pigmented lipliner and eyeliner set",
//       "price": 578890,
//       "id": "7"
//     },
//     {
//       "createdAt": "2022-12-13T21:30:06.194Z",
//       "name": "Sheryl Farrell",
//       "title": "Shoes",
//       "avatar": "https://files.myglamm.com/site-images/800x800/MFS.jpg",
//       "category": "MYGLAMM MATTE FEST – LIP COMBO",
//       "description": "Set Of 2 Liquid Matte Lipsticks",
//       "price": 499790,
//       "id": "8"
//     },
//     {
//       "createdAt": "2022-12-13T15:59:51.770Z",
//       "name": "Carrie Heller",
//       "title": "Sausages",
//       "avatar": "https://files.myglamm.com/site-images/800x800/RSEAD-1-2.jpg",
//       "category": "LIT - PH LIP BALM AND LIT LIQUID MATTE LIPSTICK",
//       "description": "Creamy, Hydrating Formula with a Luminous Effect & Moringa Oil Enriched Matte Lipstick",
//       "price": 740,
//       "id": "9"
//     },
//     {
//       "createdAt": "2022-12-14T06:47:10.037Z",
//       "name": "Van Tromp",
//       "title": "Sausages",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Bleu-(1).jpg",
//       "category": "JET SET EYES KAJAL EYELINER - BLEU",
//       "description": "Long-wear Kohl Pencil",
//       "price": 525750,
//       "id": "10"
//     },
//     {
//       "createdAt": "2022-12-13T21:00:20.090Z",
//       "name": "Mrs. Dan Balistreri",
//       "title": "Fish",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Lststr-1.jpg",
//       "category": "COMBO OF 2 MYGLAMM LIT SATIN MATTE LIPSTICK",
//       "description": "Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff",
//       "price": 990,
//       "id": "11"
//     },
//     {
//       "createdAt": "2022-12-14T06:03:38.328Z",
//       "name": "Veronica Hills",
//       "title": "Hat",
//       "avatar": "https://files.myglamm.com/site-images/800x800/BadGuy-1-4.jpg",
//       "category": "COMBO OF 2 MYGLAMM LIT VELVET MATTE LIPSTICK",
//       "description": "Hydrating, Velvet Matte Liquid Lipcolour",
//       "price": 513790,
//       "id": "12"
//     },
//     {
//       "createdAt": "2022-12-13T13:48:26.678Z",
//       "name": "Leon Jast",
//       "title": "Table",
//       "avatar": "https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_2.jpg",
//       "category": "POPXO MAKEUP - NO DRAMA - MINI LIP KIT",
//       "description": "Mini Lipstick kit with 3 creamy-matte nude lipsticks",
//       "price": 312,
//       "id": "13"
//     },
//     {
//       "createdAt": "2022-12-14T08:48:16.079Z",
//       "name": "Fernando Cummerata",
//       "title": "Cheese",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Spice-(1).jpg",
//       "category": "PERFECT CURVES MATTE LIP CRAYON - SPICE",
//       "description": "Moisturising Matte Lipstick",
//       "price": 420,
//       "id": "14"
//     },
//     {
//       "createdAt": "2022-12-14T04:19:06.560Z",
//       "name": "Nettie Monahan",
//       "title": "Salad",
//       "avatar": "https://files.myglamm.com/site-images/800x800/15-Manish-Malhotra-Nail-Lacquer-Post-1-Blush-Babe_1.jpg",
//       "category": "COMBO OF 3 MANISH MALHOTRA GEL FINISH NAIL LACQUER",
//       "description": "Hi-Shine Gel Finish Nail Enamel",
//       "price": 475,
//       "id": "15"
//     },
//     {
//       "createdAt": "2022-12-14T02:58:43.373Z",
//       "name": "Sherri Kshlerin MD",
//       "title": "Table",
//       "avatar": "https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
//       "category": "MYGLAMM POSE HD FOUNDATION STICK - WARM SAND",
//       "description": "Nourishing, Matte, Skin-blurring Foundation",
//       "price": 419599,
//       "id": "16"
//     },
//     {
//       "createdAt": "2022-12-14T09:16:01.217Z",
//       "name": "Christian Lakin",
//       "title": "Chips",
//       "avatar": "https://files.myglamm.com/site-images/800x800/K_7.Play-Flavoured-Highlighter-ROSE-Slate-01",
//       "category": "MYGLAMM K.PLAY FLAVOURED HIGHLIGHTER - PINK ROSE",
//       "description": "Rose Flavoured Light Reflective Illuminating Powder",
//       "price": 573,
//       "id": "17"
//     },
//     {
//       "createdAt": "2022-12-14T09:00:49.154Z",
//       "name": "Merle Grant",
//       "title": "Bacon",
//       "avatar": "https://files.myglamm.com/site-images/800x800/BRLG-(1).jpg",
//       "category": "MYGLAMM K.PLAY FLAVOURED LIPGLOSS - BERRY BLAST",
//       "description": "Berry Flavoured Vitamin E Enriched High Shine Lipgloss",
//       "price": 545,
//       "id": "18"
//     },
//     {
//       "createdAt": "2022-12-13T16:15:59.899Z",
//       "name": "Juanita Haag",
//       "title": "Computer",
//       "avatar": "https://files.myglamm.com/site-images/800x800/1-33.jpg",
//       "category": "MANISH MALHOTRA LUMINOUS MOISTURISING PRIMER",
//       "description": "Oil-Free, Illuminating Cream Primer With Soft-Focus Effect",
//       "price": 513,
//       "id": "19"
//     },
//     {
//       "createdAt": "2022-12-14T06:23:27.803Z",
//       "name": "Georgia Boehm",
//       "title": "Pizza",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Artboard-1_5.jpg",
//       "category": "MYGLAMM SUPERFOODS COLOR POP LIP BALM - CHERRY - 4.6G",
//       "description": "Smooth, tinted lip balm with natural extracts",
//       "price": 676,
//       "id": "20"
//     },
//     {
//       "createdAt": "2022-12-14T03:56:59.413Z",
//       "name": "Paul Rath",
//       "title": "Fish",
//       "avatar": "https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
//       "category": "MYGLAMM POSE HD HIGHLIGHTER DUO - CHAMPAGNE | ROSE GOLD",
//       "description": "HD Ultra Shimmer Highlighter",
//       "price": 467851,
//       "id": "21"
//     }
//   ]