let lastPos=0
let nav=document.getElementById("nav")
window.addEventListener('scroll',()=>{
    let position=(document.body.getBoundingClientRect().top)*-1;
    if(position<lastPos) nav.style.top="0px"
    if(position>lastPos){
        if(position<400) nav.style.top="0px"
        if(position>400) nav.style.top="-45px"
    }
    lastPos=position
})


window.addEventListener('scroll', ()=>{
    var postition=(document.body.getBoundingClientRect().top)*-1

    if(postition>(window.innerHeight*0.8)){
        document.querySelector('.arrow').classList.add("show")
    }
    if(postition<(window.innerHeight*0.8)){
        document.querySelector('.arrow').classList.remove("show")
    }

    let popupL=document.querySelectorAll('.popup_L');
    let popupR=document.querySelectorAll('.popup_R');
    let popupD=document.querySelectorAll('.popup_D');

    for (var i = 0; i < popupL.length; i++) {
            
        var height=window.innerHeight;
        var popupTop = popupL[i].getBoundingClientRect().top;

        if(popupTop<height-300){
            popupL[i].classList.add('active')
        }
        else{
            popupL[i].classList.remove('active')
        }
    };
    for (var i = 0; i < popupR.length; i++) {
            
        var height=window.innerHeight;
        var popupTop = popupR[i].getBoundingClientRect().top;

        if(popupTop<height-300){
            popupR[i].classList.add('active')
        }
        else{
            popupR[i].classList.remove('active')
        }
    };
    for (var i = 0; i < popupD.length; i++) {
            
        var height=window.innerHeight;
        var popupTop = popupD[i].getBoundingClientRect().top;

        if(popupTop<height-150){
            popupD[i].classList.add('active')
        }
        else{
            popupD[i].classList.remove('active')
        }
    };

    getTopElementColor()
})
document.querySelector('.arrow').addEventListener('click', ()=>{
    window.scrollTo(0,0)
})

function getTopElementColor() {
    const elements = document.elementsFromPoint(window.innerWidth / 2, 25);
    elements.forEach(element => {
        if (element.classList.contains('Gray')) document.getElementById('nav').style.color="white"
        if (element.classList.contains('White')) document.getElementById('nav').style.color="black"
    })
}

const texts = [
    "<b>1956. október 23</b><br>Diákok és értelmiségiek tüntetése kezdődött Budapesten, amely a kommunista rendszer ellen és a szovjet csapatok kivonása mellett foglalt állást.",
    "<b>Követelések</b><br>A tüntetők politikai reformokat, több szabadságjogot és a szovjet megszállás megszüntetését követelték. A Nagy Imre vezetésével kialakuló új politikai irányvonal iránti elvárások is megfogalmazódtak.",
    "<b>Október 24</b><br>Tömegek növekedésével a forradalom egyre inkább erőszakosabbá vált, amikor a rendőrség és a szovjet csapatok reagáltak a megmozdulásokra. A fővárosban harcok kezdődtek.",
    "<b>Október 25</b><br>Nagy Imre, a reformkommunista politikus, miniszterelnök lett, és bejelentette, hogy Magyarország kilép a Varsói Szerződésből és semleges állapotot hirdet.",
    "<b>November 4</b><br>A szovjet csapatok nagyszabású támadást indítottak Budapest ellen, és a forradalom leverésére irányult. A harcok hevesek voltak, de végül a szovjet erők győztek.",
    "<b>Következmények</b><br>A forradalom leverése után több ezer embert letartóztattak, kivégeztek vagy elmenekültek az országból. A szovjet megszállás folytatódott, és a kommunista rendszer a következő évtizedekben is megmaradt."
];
const circles = document.querySelectorAll('.point_in')
const p = document.querySelector('.timelineP');
let pIndex = 0;
function change() {
    p.innerHTML = texts[pIndex];
    for (let i = 0; i < circles.length; i++) {
        if (i==pIndex)circles[i].style.backgroundColor="#1F1F1F";
        else circles[i].style.backgroundColor='white'
    }
    pIndex = (pIndex + 1) % texts.length;
}
function start() {
    change(); 
    setInterval(change, 25 * 1000 / 6); 
}
window.onload = start;

document.querySelector('.link1').addEventListener("click", ()=>{
    window.scrollTo(0,document.querySelector('.radio').offsetTop)
})
document.querySelector('.link2').addEventListener("click", ()=>{
    window.scrollTo(0,document.querySelector('.timelineH2').offsetTop)
})