const testimonials = [
  {
    name: "Terence I.",
    photoURL : "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    text: "I would also like to say thank you to all your staff. If you want real marketing that works and effective implementation - apple's got you covered. Apple is exactly what our business has been lacking. I will let my mum know about this, she could really make use of apple!"
  },
  {
    name: "Hazel T.",
    photoURL: "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "We were treated like royalty. If you want real marketing that works and effective implementation - software's got you covered."
  },
  {
    name: " Raoul U.",
    photoURL: "https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "I made back the purchase price in just 48 hours! No matter where you go, backend is the coolest, most happening thing around! Thanks to backend, we've just launched our 5th website! Best. Product. Ever!"
  }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
  const {name,photoURL,text} = testimonials[idx];

  imgEl.src = photoURL;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx++;

  if(idx === testimonials.length){
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  },2000);
}