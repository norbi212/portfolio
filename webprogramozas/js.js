let boxes=document.querySelectorAll(".box");
let contentDiv=document.querySelector('.content');
boxes.forEach(box =>{
    box.addEventListener("click", () => {
        pages.forEach(page => {
            if(page.id==box.id){
                window.open(page.link, '_blank');
            }
        });
    })
})
addDataToHTML = () => {
    contentDiv.innerHTML='';
    productList.forEach(item =>{
        let newProd=document.createElement('div');
        newProd.classList.add('box');
        newProd.id=item.id;
        newProd.innerHTML=`
            <img src="${item.img}" alt="">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        `;
    contentDiv.appendChild(newProd);
    })
}
const getData = () =>{
    fetch('pages.json')
    .then(response => response.json())
    .then(data => {
        productList = data;
        console.log(productList);
        addDataToHTML();
    })
}
getData();