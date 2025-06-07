const urlParts = window.location.pathname.split('/');
const id = urlParts[urlParts.length - 1];
document.getElementById("id").innerText=id;