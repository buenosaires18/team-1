
$(document).ready(function(){
	$('#year2018').click(function(){
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
	});
  $('#save-student').click(function(){
		  $('.2018table').append("<tr>\n" +
                              " <td>\n" +
                                  $("#exampleInputNombre").val() +
                                "</td>\n" +
                                "<td>\n" +
                                  $("#exampleInputPais").val() +
                                "</td>\n" +
                                "<td>\n"+
                                  $("#exampleInputProvincia").val() +
                                "</td>\n" +
                                "<td class=\"text-right\">\n" +
                                  "<button class=\"btn btn-primary btn-round\" onclick=\"myLittleFunc(this)\">Eliminar</button>\n"+
                                "</td>\n" +
                              "</tr>\n"
                            );
    $('#exampleModal').modal('toggle');

	});

  $('.eliminate').click(function(){
		$(this).parent().parent().toggle();
	});
})
