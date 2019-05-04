// парсер для кинопоиск.ру
//1
document.getElementById('headerFilm').children[0].innerHTML;
//2
document.getElementById('photoBlock').getElementsByTagName('img')[0].getAttribute('src');
//3
document.getElementById('infoTable').getElementsByTagName('table')[0].tBodies[0].rows[0].cells[1].innerText;
//4
document.getElementById('infoTable').getElementsByTagName('table')[0].tBodies[0].getElementsByClassName('en')[0].getElementsByClassName('dollar')[0].getElementsByTagName('div')[0].getElementsByTagName('a')[0].innerText;
var sstr=document.getElementById('infoTable').getElementsByTagName('table')[0].tBodies[0].getElementsByClassName('en')[0].getElementsByClassName('dollar')[0].getElementsByTagName('div')[0].getElementsByTagName('a')[0].innerText;
sstr=sstr.slice(sstr.indexOf('$')+1);
sstr=sstr.replace(/\s+/g, '');
function deFormat(sstr){
	sstr=sstr.slice(sstr.indexOf('$')+1);
	sstr=sstr.replace(/\s+/g, '');
	return sstr;
}
var imgList=document.getElementsByTagName('img');
 for(var i=0;i<imgList.length;i++){
 	if(imgList[i].getAttribute('src')=='https://st.kp.yandex.net/images/movies/awardOscar.png'){
 		console.log('got oscar');
 	}
 }
 