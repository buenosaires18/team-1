
$(document).ready(function(){
	/*$('#year2018').click(function(){
		if($('#2018').css('display') == 'none')
     $('#2018').slideDown(250);
		else $('#2018').slideUp(250);
	});
  $('#year2017').click(function(){
    if($('#2017').css('display') == 'none')
     $('#2017').slideDown(250);
    else $('#2017').slideUp(250);
  });
  $('#year2016').click(function(){
		if($('#2016').css('display') == 'none')
     $('#2016').slideDown(250);
		else $('#2016').slideUp(250);
	});*/
	$('.btn btn-primary btn-round').click(function() {
		alert('asdsd');
	})
  $('#save-student').click(function(){
			$('.row').last().after(
														"<div class=\"row\" id="+ $("#exampleInputNombre").val() +">" +
															"<div class=\"col-md-12\">"  +
																"<div class=\"card\">" +
																	"<div class=\"card-header\">" +
																		"<h4 class=\"card-title\">" + $("#exampleInputNombre").val() + "<button class=\"btn-aux\" id=\"" +  $("#exampleInputNombre").val() + "\" style=\"float: Right\">" + "Borrar"  + "</button>" + "</h4>" +
																	"</div>" +
																"</div>" +
															"</div>"  +
														"</div>"
                            );

    $('#exampleModal').modal('toggle');
	});

	$('.btn-aux').click(function(){
		$(this).parent().parent().toggle();
	})

  $('.eliminate').click(function(){
		$(this).parent().parent().toggle();
	});
})
