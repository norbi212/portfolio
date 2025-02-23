vertanuk=[
    {id:"aulich", nev:"Aulich Lajos", kep:"img/aulich.jpg", idezet:"Szolgáltam, szolgáltam, mindig csak szolgáltam. És halálommal is szolgálni fogok. Forrón szeretett magyar népem és hazám, tudom, megértik ezt a szolgálatot."},
    {id:"damjanich", nev:"Damjanich János", kep:"img/damjanich.jpg", idezet:"Legyőztük a halált, mert bármikor készek voltunk elviselni azt."},
    {id:"knezich", nev:"Knézich Károly", kep:"img/knézich.jpg", idezet:"Milyen különös, hogy Haynau bíró is keresztény és én is az vagyok. Csak az ördög keverhette így össze a kártyákat."},
    {id:"lahner", nev:"Lahner György", kep:"img/lahner.jpg", idezet:"Krisztus keresztje és a bitófa oly` rokon! És az isteni áldozat mellett oly` törpe az én áldozatom!"},
    {id:"leiningen", nev:"Leiningen-Westerburg Károly gróf", kep:"img/leiningen.jpg", idezet:"A világ feleszmél majd, ha látja a hóhérok munkáját."},
    {id:"nagy", nev:"Nagy-Sándor József", kep:"img/nagysandor.jpg", idezet:"De rettenetes volna most az elmúlásra gondolni, ha semmit sem tettem volna az életemben! Alázatosan borulok Istenem elé, hogy hőssé, igaz emberré, jó katonává tett."},
    {id:"poltenberg", nev:"Pöltenberg Ernő", kep:"img/poltenberg.jpg", idezet:"Minket az ellenség dühös bosszúja juttatott ide."},
    {id:"torok", nev:"Török Ignác", kep:"img/torok.jpg", idezet:"Nemsokára Isten legmagasabb ítélőszéke elé állok. Életem parányi súly csupán, de tudom, hogy mindig csak Őt szolgáltam."},
    {id:"vecsey", nev:"Vécsey Károly gróf", kep:"img/vecsey.jpg", idezet:"Isten adta a szívet, lelket nekem, amely népem és hazám szolgálatáért lángolt."},
    {id:"dessewffy", nev:"Dessewffy Arisztid", kep:"img/dessewffy.jpg", idezet:"Tegnap hősök kellettek, ma mártírok... így parancsolja ezt hazám szolgálata."},
    {id:"kiss", nev:"Kiss Ernő", kep:"img/kiss.jpg", idezet:"Istenem, az újkor ifjúsága egész ember lesz-e? Árpádok dicső szentjei virrasszatok a magyar ifjúság felett, hogy Krisztusé legyen a szívük és a hazáé az életük."},
    {id:"lazar", nev:"Lázár Vilmos", kep:"img/lazar.jpg", idezet:"Ki tehet arról, hogy ilyen a magyar sorsa? Krisztus keresztje tövében érett apostollá az apostolok lelke, és bitófák tövében kell forradalmárrá érni a magyar lelkeknek."},
    {id:"schweidel", nev:"Schweidel József", kep:"img/schweidel.jpg", idezet:"A mai világ a sátán világa, ahol a becsületért bitó, az árulásért hatalom jár. Csak egy igazi forradalom, a világ új forradalmi embersége söpörheti el ezt az átkozott, meghasonlott világot."},
]
window.addEventListener('scroll', ()=>{
    let felugrok=document.querySelectorAll('.felugro');

    for (var i = 0; i < felugrok.length; i++) {
            
        var magassag=window.innerHeight;
        var felugrotop = felugrok[i].getBoundingClientRect().top;
        var felugrop=100;
        var pozició=(document.body.getBoundingClientRect().top)*-1

        if(felugrotop<magassag-felugrop){
            felugrok[i].classList.add('active')
        }
        else{
            felugrok[i].classList.remove('active')
        }
    };
    
    if(pozició>(magassag*0.6)){
        document.querySelector('.icon_up').classList.add("show")
    }
    if(pozició<(magassag*0.6)){
        document.querySelector('.icon_up').classList.remove("show")
    }
})

document.querySelector('.icon_up').addEventListener('click', ()=>{
    window.scrollTo(0,window.innerHeight)
})
let nevek=document.querySelectorAll('.id_nevek')
let ido=0;
nevek.forEach(element => {
    element.addEventListener("click",()=>{
        document.getElementById('utolsoP').style.transform="translateX(-300%)";

        if(element.classList.contains('activ')){
            element.classList.remove("activ")
            document.getElementById('utolsoP').style.transform="translateX(-300%)"
        }
        else{
            nevek.forEach(element2 => {
                element2.classList.remove('activ')
            });
            element.classList.add("activ")      
            setTimeout(()=>{
                for (let index = 0; index < vertanuk.length; index++) {
                    if(vertanuk[index].id==element.id){
                     document.getElementById('utolsoP').innerText=vertanuk[index].idezet
                    }         
                }
                document.getElementById('utolsoP').style.transform="translateX(0)"
            }, ido)
        } 
        ido=700;
    })
})


const tortenetek = [
    "<b>1848. március 15.</b><br> Forradalom kezdete Magyarországon, a szabadság és függetlenség melletti követelések megfogalmazása.",
    "<b>1849. április 14.</b><br> A Tavaszi Hadjárat során a magyar honvédség győzelmet arat a világosi csata előtt, amely megerősíti a függetlenségi törekvéseket.",
    "<b>1849. augusztus 13.</b><br> A magyar sereg vereséget szenved a világosi fegyverletétel során, ami a magyar forradalom végéhez vezet.",
    "<b>1849. október 6.</b><br> A magyar vezetők, köztük 13 aradi tábornok, letartóztatása, akik a forradalom során kiemelkedő szerepet játszottak.",
    "<b>1849. október 6.</b><br> A tábornokok kivégzése Aradon, ami a magyar szabadságharc egyik legtragikusabb eseménye.",
    "<b>1850. január 1.</b><br> A magyar forradalom és szabadságharc elbukása után a magyar nép gyászolja az aradi vértanúkat."
];
const p = document.querySelector('.tortent');
let pIndex = 0;
function valtozik() {
    p.innerHTML = tortenetek[pIndex];
    pIndex = (pIndex + 1) % tortenetek.length;
}
function start() {
    valtozik(); 
    setInterval(valtozik, 25 * 1000 / 6); 
}
window.onload = start;

document.querySelector('.kezd').addEventListener('click',()=>{
    window.scrollTo(0,window.innerHeight)
})