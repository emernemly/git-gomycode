const tr =document.getElementById("inputHeight");
const td =document.getElementById("inputWidth");
const envoyer=document.getElementById('emer');
const tabel=document.getElementById("pixelCanvas");
const color=document.getElementById("colorPicker")
const theNumber=document.getElementById("number")
const theBotton=document.getElementById("botton")
const thePrumier=document.getElementById("prumier")
//program jadwal w l color hhh
function nemly(evt){for (let i = 1; i <= tr.Value ;i++){const staff=tabel.insertRow(0);
	for(let r=1;r<=td.Value;r++){staff.insertCell(0);}}}
		envoyer.addEventListener("click",function(evt){tabel.innerHTML=""; evt.preventDefault();nemly();})
tabel.addEventListener("click",function(evt){
	if (evt.target.nodeName==="TD") 
		{evt.target.style.backgroundColor=color.value;}})
//program el premier number hhh
function premierNumber(evt){for(
	let x=2 ; x<theNumber.value;x++){
	if(theNumber.value%x===0){thePrumier.innerHTML="is not a prumier is divesible by "x;return false;}
	else{thePrumier.innerHTML="is premier number";return true;
}
	}}
	theBotton.addEventListener("click",function(evt){
		thePrumier.innerHTML="";premierNumber();
	});