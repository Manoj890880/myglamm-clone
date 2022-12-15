var i = 0;
    function move() {
    if (i == 0) {
    i = 1;
    var elem = document.getElementById("visitor");
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
        let fetch_request = await fetch("http://localhost:3000/collection_data")

        let fetched_data = await fetch_request.json()

        let fetched_data_array = fetched_data.map((item) => {
            return `
            
            <div>
            <img src=${item.avatar} alt="">
            <br>
            <br>
            <h3 class="w3-large title">${item.category}</h3>
            
            <h3 class="w3-large description">${item.description}</h3>
            <br>

            <h1 class="w3-large price">₹ ${item.price}</h1>
            </div>
            `
        })
        // console.log(fetched_data_array)
        
        let mainContainer=document.querySelector(".makeup-items-page")

        mainContainer.innerHTML=""

        mainContainer.innerHTML=fetched_data_array.join("")
    } catch (error) {
        console.log(error)
    }
}

fetchAlldata()

let hareCare_btn=document.querySelector(".ChangeCart button")

hareCare_btn.addEventListener("click",()=>{
    move()
    


    async function fetchAlldata() {

        try {
            let fetch_request = await fetch("http://localhost:3000/collection_data")
    
            let fetched_data = await fetch_request.json()
    
            let fetched_data_array = fetched_data.map((item) => {
                return `
                
                <div>
                <img src=${item.avatar} alt="">
                <br>
                <br>
                <h3 class="w3-large title">${item.category}</h3>
                
                <h3 class="w3-large description">${item.description}</h3>
                <br>
    
                <h1 class="w3-large price">₹ ${item.price}</h1>
                </div>
                `
            })
            console.log(fetched_data_array)
            
            let mainContainer=document.querySelector(".makeup-items-page")
    
            mainContainer.innerHTML=""
    
            mainContainer.innerHTML=fetched_data_array.join("")
        } catch (error) {
            console.log(error)
        }
    }
    
    fetchAlldata()
})