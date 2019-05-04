window.onload=function(){
    function loader(wrap,fileName){
       var req=$.ajax({
         url:fileName,
         type: 'GET',
         dataType: 'text'
       });
       $(wrap).append(req.responseText);

    };
    loader('body','header.js');

};