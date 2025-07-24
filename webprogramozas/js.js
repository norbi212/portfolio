async function getData() {
    try {
        const response = await fetch("pages.json");
        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Hiba: "+error)
    }
};

async function addDataToHTML(){
    const pageList = await getData();

    contentDiv.innerHTML='';

    pageList.forEach(item =>{
        let newPage=document.createElement('div');
        newPage.classList.add('box');
        newPage.id=item.id;
        newPage.innerHTML=`
            <img src="${item.img}" alt="">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <p>${item.desc2}</p>
        `;
    contentDiv.appendChild(newPage);
    })

    let boxes=document.querySelectorAll(".box");
    
    boxes.forEach(box =>{
        box.addEventListener("click", () => {
            pageList.forEach(page => {
                if(page.id==box.id){
                    window.open(page.link, '_blank');
                }
            });
        })
    })
};

let contentDiv=document.querySelector('.content');
addDataToHTML();