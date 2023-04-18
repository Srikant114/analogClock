let degree=6;
let hr=document.getElementById('hr');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

setInterval(()=>{
    let date=new Date();
    let h=date.getHours()*30;
    let m=date.getMinutes()*degree;
    let s=date.getSeconds()*degree;

    // console.log(date);
    // console.log(h);
    // console.log(m);
    // console.log(s);

    hr.style.transform=`rotateZ(${h+(m/12)}deg)`;
    min.style.transform=`rotateZ(${m}deg)`;
    sec.style.transform=`rotateZ(${s}deg)`;
});