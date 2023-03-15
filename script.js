const sideMeniu=document.querySelector('.sideMeniu');

function displayMeniu(){
    sideMeniu.style.display='block';
}
function hideMeniu(){
    sideMeniu.style.display='none';
}


let scrolling= document.querySelector('.scrolling ul').style.left;
setInterval(function(){
    scrolling=scrolling.slice(0,-1);
    scrolling=Number(scrolling)-0.04;
    if(scrolling < -100) scrolling=0;   
    scrolling=scrolling+"%";
    document.querySelector('.scrolling ul').style.left=scrolling;
}, 10)

function tofb(){
    location.href = 'https://www.facebook.com/media/set/?set=a.103383215362509&type=3';
}

let index =0;
let contactTab=document.querySelector('.contactBox');
function SlideUpMobileContact(){
    if(index == 0)
        {contactTab.style.bottom='10vh'; index=1;}
    else
        {contactTab.style.bottom='0'; index=0;}

    console.log(index);
}

let imgTrigger=document.querySelectorAll('.item1 img');
let nav= document.getElementsByTagName('nav')[0];
let indexImg=0;
console.log(imgTrigger);

for(let i=0; i<imgTrigger.length; i++){
    imgTrigger[i].addEventListener('click',()=>{
        nav.classList.add("display-none");
        imgTrigger[i].parentElement.classList.add('grey');
        // imgTrigger.parentElement.addEventListener('click',()=>{
        //     imgTrigger.parentElement.classList.remove('grey');
        // })
    })

    imgTrigger[i].parentElement.addEventListener('click', ()=>{
        console.log('s-a apasat pe grey');
        indexImg+=1;
        if(indexImg==2){
            imgTrigger[i].parentElement.classList.remove('grey');
            if(window.innerWidth > 600){
                nav.classList.remove("display-none");
            }
            indexImg=0;
        }
    })
}
