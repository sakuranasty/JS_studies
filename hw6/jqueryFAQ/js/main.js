// $('document').ready(function(){
// $('.faq-trigger').on('click', function (evnt) {
//     console.log(evnt);
//     console.log(evnt.target);
//     console.log($(evnt.target));
//         $(evnt.target).siblings().toggleClass('hidden')});
// });
$('document').ready(function(){
    $('.faq-trigger').on('click', function () {
        console.log(this);
        console.log(this.target);
        console.log($(this));
            $(this).siblings().toggleClass('hidden')});
    });