function Clicked() {
    alert('You have subscribed successfully');
}
let id = document.getElementById('myButton');
id.addEventListener('click',Clicked);

let Para = document.querySelector('.PARAGRAPH');
let views = document.querySelectorAll('.view');

views.forEach(view => {
    let para = view.nextElementSibling;
    view.addEventListener('click', function() {
        if (para.style.visibility === 'visible') {
            para.style.visibility = 'hidden';
        } else {
            para.style.visibility = 'visible';
        }
    });
});

let dot = document.querySelector(".Lines");
let mobile = document.querySelector(".mobile");
mobile.style.display = 'none';
function Toogle(){
  if(mobile.style.display == 'block'){
    mobile.style.display = 'none'
  }
  else if(mobile.style.display == 'none'){
    mobile.style.display = 'block'
  }
}
dot.addEventListener('click',Toogle);


