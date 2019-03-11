(function ($) {
    "use strict";

$('.grid').imagesLoaded( function() {
	
    // filter items on button click
    $('.nav-bar').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });	
    
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });
    
    
    
    });
    
$('.product-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
    
    function popupOpenClose(popup) {
	
      /* Add div inside popup for layout if one doesn't exist */
      if ($(".wrapper").length == 0){
        $(popup).wrapInner("<div class='wrapper'></div>");
      }
      
      /* Open popup */
      $(popup).show();
    
      /* Close popup if user clicks on background */
      $(popup).click(function(e) {
        if ( e.target == this ) {
          if ($(popup).is(':visible')) {
            $(popup).hide();
          }
        }
      });
    
      /* Close popup and remove errors if user clicks on cancel or close buttons */
      $(popup).find("button[name=close]").on("click", function() {
        if ($(".formElementError").is(':visible')) {
          $(".formElementError").remove();
        }
        $(popup).hide();
      });
    };
    
    
$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});

	//Methods
	$('.textblock').hide();
	$(".btn-one").click(function () {
	   $(".textblock").hide();
	   $("#btn-one").show()
   });
  });

  // $(document).ready(function(){
  //   $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
  //           var form_data = $(this).serialize(); //собераем все данные из формы
  //           $.ajax({
  //           url: "/send.php", //путь до php фаила отправителя
  //           type: "POST", //Метод отправки
  //           data: form_data,
  //           success: function() {
  //                  //код в этом блоке выполняется при успешной отправке сообщения
  //                  alert("Ваше сообщение отпрвлено!");
  //                 }});
  //         });
  //       });

        

  $(document).ready(function(){
     $("#phone").mask("+7(999) 999-99-99");
  });
                


$('#product_main #product_block').each(function() {
    $(this).find('.thumb li a').click(function() {
      $(this).closest('#product_block').removeClass().addClass($(this).data('filter'))
      console.log(this);
  
  });
});



})(jQuery);  