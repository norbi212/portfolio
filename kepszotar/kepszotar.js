let show={
    "alma":0,"asztal":0,"auto":0,"bicikli":0,"eper":0,"hegy":0,"kanál":0,"könyv":0,"foci":0,"ablak":0,"suli":0
}
let elements=document.querySelectorAll('.item')
elements.forEach(element => {
    element.querySelector('.eng').style.display="none"
    element.querySelector('.deu').style.display="none"
    element.addEventListener("mouseover", () =>{
       element.querySelector('.hun').style.transform="translateY(135px)"})
    element.addEventListener("mouseleave", () =>{
        element.querySelector('.hun').style.transform="translateY(200px)"})
    element.addEventListener("click", () => {
        if(show[element.id]==0){
            element.querySelector('.eng').style.display="block"
            element.querySelector('.deu').style.display="none"
            show[element.id]=1
            return
        }
        if(show[element.id]==1){
            element.querySelector('.eng').style.display="none"
            element.querySelector('.deu').style.display="block"
            show[element.id]=2
            return
        }
        if(show[element.id]==2){
            element.querySelector('.eng').style.display="none"
            element.querySelector('.deu').style.display="none"
            show[element.id]=0
        }
        })
});