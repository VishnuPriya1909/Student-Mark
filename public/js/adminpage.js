function bubbles()
{
    var count=200;
    var section=document.querySelector("section");
    var i=0;
    while (i<count)
    {
        var bubble=document.createElement('i');
        var x=Math.floor(Math.random()*window.innerWidth);
        var y=Math.floor(Math.random()*window.innerHeight);
        var size=Math.random()*10;
        bubble.style.left=x+'px';
        bubble.style.top=y+'px';
        bubble.style.width=1+size+'px';
        bubble.style.height=1+size+'px';
        bubble.style.animationDuration=5+size+'s';
        bubble.style.animationDelay=size+'s';
        section.appendChild(bubble);
        i++;
    }
}
bubbles();
var myVar;
function myFunction()
{
    myVar=setTimeout(showPage,80);
}
function showPage()
{
    document.querySelector(".loader").style.display="none";
    document.getElementById("myDiv").style.display="block";
}
var modal=document.getElementById("myModal");
var span=document.getElementsByClassName("close")[0];
var btn=document.getElementById("myBtn");
btn.onclick=function()
{
    modal.style.display="block";
}
span.onclick=function()
{
    modal.style.display="none";
}
window.onclick=function(event)
{
    if(event.target==modal)
    {
        modal.style.display="none";
    }
}

const slidePage=document.querySelector(".slidepage");
const firtNextBtn=document.querySelector(".nextBtn");
const prevBtnSec=document.querySelector(".prev-1");
const nextBtnSec=document.querySelector(".next-1");
const prevBtnThird=document.querySelector(".prev-2");
const nextBtnThird=document.querySelector(".next-2");
const prevBtnFourth=document.querySelector(".prev-3");
const submitBtn=document.querySelector(".submit");
const progressCheck=document.querySelectorAll(".step .check");
const progressText=document.querySelectorAll(".step p");

const bullet=document.querySelectorAll(".step .bullet");
let max=4;
let current=1;
firtNextBtn.addEventListener("click",function()
{
    const Admin_Name=document.getElementById("admin_Name").value;
    const Admin_Id=document.getElementById("admin_id").value;
    // if(Admin_Name.length>=5 && Admin_Id!=' ')
    // {
     slidePage.style.marginLeft="-25%";
     bullet[current-1].classList.add("active");
     progressCheck[current-1].classList.add("active");
     progressText[current-1].classList.add("active");
      current+=1
    //  }
});
nextBtnSec.addEventListener("click",function()
{
    slidePage.style.marginLeft="-50%";
    bullet[current-1].classList.add("active");
    
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
   
    current+=1;
});
nextBtnThird.addEventListener("click",function()
{
    slidePage.style.marginLeft="-75%";
    bullet[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    current+=1;
});
submitBtn.addEventListener("click",function()
{

    bullet[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");

    current+=1;
    setTimeout (function()
    {
       alert("Thanks");
       location.reload();
    },800)

});

prevBtnSec.addEventListener("click",function()
{
    slidePage.style.marginLeft="0%";
    bullet[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    current-=1;
});
prevBtnThird.addEventListener("click",function()
{
    slidePage.style.marginLeft="-25%";
    bullet[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    current-=1;
});
prevBtnFourth.addEventListener("click",function()
{
    slidePage.style.marginLeft="-50%";
    bullet[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    
    current-=1;
});

