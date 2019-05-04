const movies = [
   {id: 1, title: 'Темный рыцарь', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_111543.jpg', year: 2008, franchise: 'DC', budget: 185000000, boxOfficeUSA: 534858444, boxOfficeRussia: 8589100, boxOfficeWorld: 469700000, IMDb: 9.00, oscar: true},
   {id: 2, title: 'Человек-паук 2', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_2898.jpg', year: 2004, franchise: 'Marvel', budget: 250000000, boxOfficeUSA: 373585825, boxOfficeRussia: 9325000, boxOfficeWorld: 410180516, IMDb: 7.30, oscar: true},
   {id: 3, title: 'Железный человек', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_61237.jpg', year: 2008, franchise: 'Marvel', budget: 215000000, boxOfficeUSA: 318412101, boxOfficeRussia: 9491200, boxOfficeWorld: 266762121, IMDb: 7.90, oscar: false},
   {id: 4, title: 'Супермен', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_7145.jpg', year: 1978, franchise: 'DC', budget: 55000000, boxOfficeUSA: 134218018, boxOfficeRussia: 0, boxOfficeWorld: 166000000, IMDb: 7.30, oscar: true},
   {id: 5, title: 'Стражи Галактики', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_689066.jpg', year: 2014, franchise: 'Marvel', budget: 170000000, boxOfficeUSA: 333176600, boxOfficeRussia: 37881775, boxOfficeWorld: 137300000, IMDb: 8.10, oscar: false},
   {id: 6, title: 'Темный рыцарь: Возрождение легенды', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_437410.jpg', year: 2012, franchise: 'DC', budget: 250000000, boxOfficeUSA: 448139099, boxOfficeRussia: 17143190, boxOfficeWorld: 636300000, IMDb: 8.40, oscar: false},
   {id: 7, title: 'Логан', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_807682.jpg', year: 2017, franchise: 'Marvel', budget: 97000000, boxOfficeUSA: 226277068, boxOfficeRussia: 17278718, boxOfficeWorld: 392744368, IMDb: 8.10, oscar: false},
   {id: 8, title: 'Мстители: Война бесконечности', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg', year: 2018, franchise: 'Marvel', budget: 321000000, boxOfficeUSA: 678815482, boxOfficeRussia: 34793936, boxOfficeWorld: 1369895896, IMDb: 8.50, oscar: false},
   {id: 9, title: 'Мстители', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_263531.jpg', year: 2012, franchise: 'Marvel', budget: 220000000, boxOfficeUSA: 623357910, boxOfficeRussia: 43412056, boxOfficeWorld: 896200000, IMDb: 8.10, oscar: false},
   {id: 10, title: 'Тор: Рагнарёк ', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_822709.jpg', year: 2017, franchise: 'Marvel', budget: 180000000, boxOfficeUSA: 315058289, boxOfficeRussia: 24856442, boxOfficeWorld: 538918837, IMDb: 7.90, oscar: false},
];

function Movie(id, title='no name', cover='standartpic.jpg', year=0, franchise='no name',
 budget=0, boxOfficeUSA=0, boxOfficeRussia=0, boxOfficeWorld=0, IMDb=0, oscar=false)
{
   this.id=id;
   this.title=title;
   this.cover=cover;
   this.year=year;
   this.franchise=franchise;
   this.budget=budget;
   this.boxOfficeUSA=boxOfficeUSA;
   this.boxOfficeRussia=boxOfficeRussia;
   this.boxOfficeWorld=boxOfficeWorld;
   this.IMDb=IMDb;
   this.oscar=oscar;
}
Movie.prototype.totalBoxOffice=function(){
   return this.boxOfficeUSA+this.boxOfficeRussia+this.boxOfficeWorld;
}
Movie.prototype.nYearsAgo=function(){
   var currYear=new Date;

   return differens=currYear.getFullYear()-this.year;
}
Movie.prototype.getConjugation=function(){
   var dif=this.nYearsAgo();
   var res=dif%10;
   if((res==1)&&(dif!=11)){
      return 'год';
   }
   if((res>=2)&&(res<=4)&&(!(dif>=12)&&(dif<=14))){
      return 'года';
   }
   return 'лет';
}
/*Movie.prototype.render=function() {
   return '<div class="movie">'+
         '<div class="tit">'+
            '<h2 class="title">'+this.title+'</h2>'+
            '<div class="IMDb">'+this.IMDb+'</div>'+
         '</div>'+
         '<div class="cont">'+
            '<div class="img"><img src="'+this.cover+'" alt=""></div>'+
         '<div class="stat">'+
            '<div class="franc">'+this.franchise+'</div>'+
            '<div class="year">'+this.year+' (выпущен '+this.nYearsAgo()+this.getConjugation()+' назад)'+'</div>'+
            '<div class="budget">'+this.budget+'</div>'+
            '<div class="boxOffice">Сборы в США'+this.boxOfficeUSA+', сборы в России'+this.boxOfficeRussia+', сборы в мире '+this.boxOfficeWorld+'</div>'+
            '<div class="boxOfficeTotal">Сборы всего: '+this.totalBoxOffice()+'</div>'+
         '</div>'+'<div class="oscar"><img src="img/oscar.jpg" alt=""></div>'+
         '</div>'+
         '</div>'+
      '</div>'
}*/
var div= document.getElementById('movieset');
div.innerHTML='fsfsdfsdf';

var movieSet=[];
for(let element of movies){
   movieSet.push(new Movie(element.id,element.title, element.cover, element.year, element.franchise, element.budget, element.boxOfficeUSA, element.boxOfficeRussia, element.boxOfficeWorld, element.IMDb, element.oscar));
}

for(let movie of movieSet){
   div.innerHTML+=movie.render();//в интернете написано что такой вариант не применяется т.к. содержимое не прибавляется,а перезапичывается,я не понимаю как тогда еще можно вывести кроме appendchild
}

/*console.log(movieSet[0]);
console.log(movieSet[0].render());
console.log(document.getElementsByClassName('movieset').innerHTML);*/
/*document.getElementsByClassName('movieset').write(movieSet[0].render());
*/
/*function getFormat(number){
   var num=number/1000;
   var res=number%1000;
   var result=parseInt(num)+"'"+res;
   while(num>=1000){
      getFormat(num);
   }
return result;
}
console.log(getFormat(42342342));*/
Movie.prototype.render = function() {
   var title = document.createElement('h2');
   title.classList.add('title');
   var IMDb =  document.createElement('div');
   IMDb.classList.add('IMDb');
   var arrow=document.createElement('div');
   arrow.classList.add('arrow');
   var imgContainer=document.createElement('div');
   imgContainer.classList.add('img');
   var img=document.createElement('img');
   img.setAttribute('src',this.cover);
   img.setAttribute('alt');
   imgContainer.appendChild(img);
   var franch=document.createElement('div');
   franch.classList.add('franc');
   var year=document.createElement('div');
   year.classList.add('year');
   var budget=document.createElement('div');
   budget.classList.add('budget');
   var boxOfficeUSA=document.createElement('div');
   boxOfficeUSA.classList.add('boxOfficeUSA');
   var boxOfficeRussia=document.createElement('div');
   boxOfficeRussia.classList.add('boxOfficeRussia');
   var boxOfficeWorld=document.createElement('div');
   boxOfficeWorld.classList.add('boxOfficeWorld');
   var oscar=document.createElement('div');
   oscar.classList.add('oscar');
   title.appendChild(document.createTextNode(this.title));
   IMDb.appendChild(document.createTextNode(this.IMDb));
   franch.appendChild(document.createTextNode(this.franchise));
   budget.appendChild(document.createTextNode(this.budget));
   boxOfficeUSA.appendChild(document.createTextNode(this.boxOfficeUSA));
   boxOfficeRussia.appendChild(document.createTextNode(this.boxOfficeRussia));
   boxOfficeWorld.appendChild(document.createTextNode(this.boxOfficeWorld));
   oscar.appendChild(document.createTextNode(this.oscar));


  var movieset=document.getElementById('movieset');
  var movie=document.createElement('div');
  movie.classList.add('movie');
  var tit=document.createElement('div');
  tit.classList.add('tit');
  tit.appendChild(title);
  tit.appendChild(IMDb);
  tit.appendChild(arrow);
  var cont=document.createElement('div');
  cont.classList.add('cont');
  cont.appendChild(imgContainer);
  var stat=document.createElement


  movieset.appendChild(movie);
}