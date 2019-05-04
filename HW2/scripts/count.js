var gas=0;
var water=1;
var electr=2;

var gaspr=1.5;
var elpr=3.4;
var watpr=2;
var prev;
var curr;
var choise;
let countButton=document.getElementById('result');
countButton.addEventListener('click', function(){
	prev=parseInt(document.getElementById('prev').value);
	curr=parseInt(document.getElementById('curr').value);
	let inp=document.getElementsByName('choise');
		for(let i=0;i<inp.length;i++){
			if(inp[i].checked) choise= parseInt(inp[i].value);
		}
		if(isNaN(choise)){alert('Выберите вариант расчета!')}
	if(!checkIfcorrect(prev,curr)){
		document.getElementById('prev').value='';
		document.getElementById('curr').value='';
		return 0;
	}
	document.getElementById('sum').innerText=runCalculator(prev,curr,choise);
});
function checkIfcorrect(prev,curr){
		var check=(prev>curr)||(prev<0)||(curr<0)||(prev==NaN)||(curr==NaN);
		if(check){
			alert('введите корректное значение');
			return 0;
		}else{
	return 1;}
 }
 function countCost(price,prev,curr){
	return price*(curr-prev);
}
function runCalculator(prev,curr,choise=0){
switch(choise){
	case 0:
	return countCost(gaspr,prev,curr);
	case 1:
	return countCost(watpr,prev,curr);
	case 2:
	return countCost(watpr,prev,curr);	
}};
