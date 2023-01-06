let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for (let i =0; i < splittedText.length; i++)
{
    if(splittedText[i] == " ")
    {
        splittedText[i] = "&nbsp;";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let spans = textTag.querySelectorAll('span');
let k=0;
let interval = setInterval(() => {

    let singleSpan = spans[k];
    singleSpan.className = "fadeMove";
    k++;

    if(k === spans.length)
    {
        clearInterval(interval);
    }
    
}, 100);

let border = document.querySelector('.border-line');
let animationWidth = 0;
window.onscroll = () =>{

    if(this.oldScroll > this.scrollY)
    {
        animationWidth -= 1.5;
    }
    else{
        animationWidth += 1.5;
    }

    if(animationWidth >= 100)
    {
        animationWidth=100;
    }
   
    if(animationWidth <= 0)
    {
        animationWidth=0;
    }

    border.style.width = animationWidth + '%';
    console.log(animationWidth)

    this.oldScroll = this.scrollY;

    imageAnimation();

}
const imageAnimation = () =>{

    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    console.log('screenP' + screenPosition)
    console.log('section' + sectionPosition)


    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');
    
    if(sectionPosition < screenPosition)
    {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');    
    }

}

/* TIMELINE ISKOPIRANO OD NET :)*/

var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);



  const switchers = [...document.querySelectorAll('.switcher')]

  switchers.forEach(item => {
      item.addEventListener('click', function() {
          switchers.forEach(item => item.parentElement.classList.remove('is-active'))
          this.parentElement.classList.add('is-active')
      })
  })

let i = 0;
let rightBtn = document.querySelector('#right-btn')
let leftBtn = document.querySelector('#left-btn')

rightBtn.addEventListener('click', () =>{
    let slika1 = document.querySelector("#slika1");
    let slika2 = document.querySelector("#slika2");
    let slika3 = document.querySelector("#slika3");
    i++;
    if(i === 1 ) {
        slika2.style.display = 'block';
        slika1.style.display = 'none';
        slika3.style.display = 'none';
    }
    else if(i === 2 ) {
        slika3.style.display = 'block';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
    }
   if(i === 3) 
        i = 2;

     console.log(i);

});

leftBtn.addEventListener('click', () =>{
    let slika1 = document.querySelector("#slika1");
    let slika2 = document.querySelector("#slika2");
    let slika3 = document.querySelector("#slika3"); 
    if(i === 1 ) {
        slika1.style.display = 'block';
        slika2.style.display = 'none';
        slika3.style.display = 'none';
    }
    else if(i === 2 ) {
        slika2.style.display = 'block';
        slika3.style.display = 'none';
        slika1.style.display = 'none';
    }
    i--;
    if(i === -1){
        i = 0;
    }
    console.log(i);

});
let j = 0;
function left(){
    let slika1 = document.querySelector("#slika12");
    let slika2 = document.querySelector("#slika22");
    let slika3 = document.querySelector("#slika32");
    let slika4 = document.querySelector("#slika42");
    let slika5 = document.querySelector("#slika52");
    let slika6 = document.querySelector("#slika62");

    if(j === 1 ) {
        slika1.style.display = 'block';
        slika2.style.display = 'none';
        slika3.style.display = 'none';
        slika4.style.display = 'none';
        slika5.style.display = 'none';
        slika6.style.display = 'none';


    }
    else if(j === 2 ) {
        slika2.style.display = 'block';
        slika3.style.display = 'none';
        slika1.style.display = 'none';
        slika4.style.display = 'none';
        slika5.style.display = 'none';
        slika6.style.display = 'none';

    }
    else if(j === 3){
        slika4.style.display = 'block';
        slika3.style.display = 'none';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
        slika5.style.display = 'none';
        slika6.style.display = 'none';

    }
    else if(j === 4){
        slika5.style.display = 'block';
        slika4.style.display = 'none';
        slika3.style.display = 'none';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
        slika6.style.display = 'none';

    }
    else if(j===5){
        slika6.style.display = 'block';
        slika5.style.display = 'none';
        slika4.style.display = 'none';
        slika3.style.display = 'none';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
    }
    j--;
    if(j === -1){
        j = 0;
    }

}
function right(){
    
    let slika1 = document.querySelector("#slika12");
    let slika2 = document.querySelector("#slika22");
    let slika3 = document.querySelector("#slika32");
    let slika4 = document.querySelector("#slika42");
    let slika5 = document.querySelector("#slika52");
    let slika6 = document.querySelector("#slika62");

    j++;
    if(j === 1 ) {
        slika2.style.display = 'block';
        slika1.style.display = 'none';
        slika3.style.display = 'none';
        slika4.style.display = 'none';
        slika5.style.display = 'none';
        slika6.style.display = 'none';


    }
    else if(j === 2 ) {
        slika3.style.display = 'block';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
        slika4.style.display = 'none';
        slika5.style.display = 'none';
        slika6.style.display = 'none';


    }
    else if(j===3){
        slika4.style.display = 'block';
        slika3.style.display = 'none';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
        slika5.style.display = 'none';
        slika6.style.display = 'none';

    }
    else if(j === 4){
        slika5.style.display = 'block';
        slika4.style.display = 'none';
        slika3.style.display = 'none';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
        slika6.style.display = 'none';

    }
    else if(j === 5){
        slika6.style.display = 'block';
        slika5.style.display = 'none';
        slika4.style.display = 'none';
        slika3.style.display = 'none';
        slika2.style.display = 'none';
        slika1.style.display = 'none';
    }
   if(j === 5) 
        j = 4;


}

