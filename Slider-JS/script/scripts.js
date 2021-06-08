const left_arrow = document.getElementsByClassName("arrow-left")[0];
const right_arrow = document.getElementsByClassName("arrow-right")[0];
const subnav = document.querySelectorAll(".subnav");
const grid_text = document.getElementsByClassName("project-span");
const vectors = document.querySelectorAll(".vector");
let photo = document.getElementById("slider")
let num_of_photo = 1;
const entities = [
    {
      city: 'Rostov-on-Don LCD admiral',
      repair_time: '3.5 months',
      area:'81 m2',
      cost: 'Upon request',
       
    },
    {
      city: 'Sochi Thieves',
      repair_time: '4 months',
      area:'105 m2',
      cost: 'Upon request',
       
    },
    {
      city: 'Rostov-on-Don Patriotic',
      repair_time: '3 months',
      area:'93 m2',
      cost: 'Upon request',
      
    }
  ]

left_arrow.addEventListener("click", function() {
    if (num_of_photo == 1) {
        num_of_photo = 3
    } else {
        num_of_photo = num_of_photo - 1
    }
    setPhoto()
});

right_arrow.addEventListener("click", function() {
    if (num_of_photo == 3) {
        num_of_photo = 1
    } else {
        num_of_photo = num_of_photo + 1
    }
    setPhoto()
});

subnav.forEach((item, index) => {
        item.addEventListener("click", function(e) {
        e.preventDefault()
        num_of_photo = index +1;
        setPhoto()
    });
    
});

vectors.forEach((item, index) => {
    item.addEventListener("click", function() {
        num_of_photo = index + 1;
        setPhoto()
    })
})

function setPhoto() {
    var a = document.getElementsByClassName("vector");
    for (v of a) {
        v.src = "images/tochkaG.svg" 
    }
    for (v of subnav) {
        v.style.fontSize = "14px";
        v.style.lineHeight = "19px";
        v.style.color = "rgba(255, 255, 255, 0.3)";
        v.style.borderBottom = "none"
    }
    subnav[num_of_photo-1].style.color = "#E3B873";
    subnav[num_of_photo-1].style.lineHeight = "32px";
    subnav[num_of_photo-1].style.borderTop = "0";
    subnav[num_of_photo-1].style.borderBottom = "1px solid #E3B873";
    subnav[num_of_photo-1].style.paddingBottom = "7px"
    a[num_of_photo-1].src = "images/tochkaW.svg"
    grid_text[0].innerHTML = entities[num_of_photo-1].city
    grid_text[1].innerHTML = entities[num_of_photo-1].area
    grid_text[2].innerHTML = entities[num_of_photo-1].repair_time
    grid_text[3].innerHTML = entities[num_of_photo-1].cost
    photo.src = `images/slider${num_of_photo}.jpg`
}