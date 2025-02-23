var div=document.getElementById('drpd');
var display=0;
function  hideShow()
{
  if(display==1){
    div.style.display='block';
    display=0;
  }
  else{
    div.style.display='none';
    display=1;
  }
}
let w=document.body.clientWidth
window.addEventListener("resize", function(event){
  w=document.body.clientWidth
  if(w>600){
    div.style.display='none';
    display=1;
  }
})