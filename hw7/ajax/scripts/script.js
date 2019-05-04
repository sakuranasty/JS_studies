function loader(wrap,fileName){
   var reqOb= $.ajax({
        url:'sections/'+fileName,
        type:'GET',
        dataType:'html',
        async:false,
        // succsess: successFn,
        // error: errorFn,
        complete: function(xnr,status){
            // console.log(xnr);
            // console.log(status);
            console.log('request is completed');
        }
    });
    $(wrap).append(reqOb.responseText);
}
    loader('body','header.html');
    loader('body','nav.html');
    loader('body','center.html');
    loader('.center','main.html');
    loader('.center','aside.html');
    loader('body','footer.html');
    $('nav ul li').on('click', function(){
            console.log(this);
            console.log(val);
            var val=$(this).text();
            console.log(val);
            if(val=='Главная'){
                $('.main').load('1.html');
            }else if(val=='Услуги'){
                $('.main').load('2.html');
            }else if(val=='Контакты'){
                $('.main').load('3.html');
            }
        });



// $('.center').load('header.js')
