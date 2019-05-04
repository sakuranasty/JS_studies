// $('document').ready(function(){
// $('.faq-trigger').on('click', function (evnt) {
//     console.log(evnt);
//     console.log(evnt.target);
//     console.log($(evnt.target));
//         $(evnt.target).siblings().toggleClass('hidden')});
// });
var effects=[
    $.bez([.25,.1,.25,1]),$.bez([0,0,1,1]),$.bez([ .42,0,1,1]),$.bez([0,0,.58,1]),$.bez([.42,0,.58,1])];
$('document').ready(function(){
    $('.faq-trigger').on('click', function () {
            $(this).siblings().slideToggle('normal','swing');
        
        });
    $('.faq-content').each(function(ind,elem){
        $(elem).hover(function(){
        $(this).animate({ marginLeft: 100 }, 1000, effects[ind]);
    },function(){
        $(this).animate({ marginLeft: 0 }, 1000, effects[ind]);
    });

    })});