var date= new Date(2011,5,1,23);
/*var date= new Date();*/
window.onload=function() {
	if(date.getMonth()<2||date.getMonth()==11){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/winter.css';
		document.head.appendChild(link);
	}
	if(date.getMonth()<5&&date.getMonth()>=2){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/spring.css';
		document.head.appendChild(link);
	}
	if(date.getMonth()<8&&date.getMonth()>=5){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/summer.css';
		document.head.appendChild(link);
	}
	if(date.getMonth()<11&&date.getMonth()>=8){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/autumn.css';
		document.head.appendChild(link);
	}
	if(date.getHours()<6||date.getHours()>=23){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/night.css';
		document.head.appendChild(link);
		document.body.getElementsByClassName('counter')[0].style.color="white";
	}
	if(date.getHours()<12&&date.getHours()>=6){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/day.css';
		document.head.appendChild(link);
	}
	if(date.getHours()<18&&date.getHours()>=12){
		var link=document.createElement('link');
		link.rel='stylesheet';
		link.href='styles/evening.css';
		document.head.appendChild(link);
	}

}