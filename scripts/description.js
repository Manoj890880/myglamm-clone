$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// let parentContainer=document.querySelector(".read-more-container")

// parentContainer.addEventListener("click",event=>{
//   let current=event.target

//   let isReadBtn=current.className.includes("read-more-btn")

//   if(isReadBtn) return

//   let currentText=event.target.parentNode.querySelector(".read-more-text")

//   currentText.classList.toggle(".read-more-text--show")
// })

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// myFunction()

function myfun() {
  let changeDiv = document.querySelector(".change")
  changeDiv.innerHTML = ""
  changeDiv.innerHTML = `
  <br>
  <ul>
  <li>
      Compact powder infused with Hyaluronic Acid that can hold 1000X its weight in water – to retain skin’s moisture 
  </li>
  
  <li>
      Has Vitamin E that acts as an antioxidant and protects skin from damage
  </li>
  
  <li>
      Buildable coverage with a smooth, matte finish  
  </li>
  </ul>
  `
}

function myfun1() {
  let changeDiv = document.querySelector(".change")
  changeDiv.innerHTML = ""
  changeDiv.innerHTML = `
  <br>
  <p>
  Talc, Mica, Dimethicone, Silica, Benzyl Alcohol, Caprylyl Glycol, Dehydroacetic Acid, Hexylene Glycol, Nylon-12, Phenoxyethanol, Sodium Hyaluronate, Tocopheryl Acetate, Aqua, [+/-] CI 77891, CI 77491, CI 77492, CI 77499
  </p>
  `
}

function myfun2() {
  let changeDiv = document.querySelector(".change")
  changeDiv.innerHTML = ""
  changeDiv.innerHTML = `
  <br>
  <p>

  <strong> Q: Can I use this compact powder on my dry skin? </strong>  <br>

A: Yes, this compact powder is suitable for all skin types and contains Hyaluronic Acid that will hydrate your dry skin. <br>

<strong> Q: Is this free of parabens and mineral oil?  </strong>  <br>

A: Yes, it is free of many harmful ingredients including paraben and mineral oil. <br>

<strong> Q: What kind of coverage does it provide? </strong>  <br>

A: This compact powder gives medium coverage to hide imperfections. 

<strong>Q: Will it make my makeup look cakey? </strong>  <br>

A: No, this compact powder is super-hydrating as it is infused with Hyaluronic Acid that hydrates skin for a non-cakey finish. <br>

<strong>Q: Is this cruelty-free and vegan? </strong>  <br>

A: Yes, MyGlamm Super Serum Compact is cruelty-free and vegan.
  </p>
  `
}