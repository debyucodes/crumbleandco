// Namespace object
const app = {};

// Init app
app.init = () => {
  app.faq();
  // app.scroll();
}

// FAQ 
app.faq = () => {
  $('.question').click(function(){
    $(this).find('p').slideToggle(300);
    $('.icon', this).toggleClass("fas fa-minus fas fa-plus");
  })
}

// $(".form")[0].reset();

// app.scroll = () => {
//   $(document).on("scroll", function(){
//     if
//       ($(document).scrollTop() > 50){
//       // $("header").addClass("shrink");
//       $('.branding').hide();
//     }
//     else
//     {
//       $('.branding').show();
//     }
//   });
// }


// doc ready
$(document).ready(function(){
  app.init();
})