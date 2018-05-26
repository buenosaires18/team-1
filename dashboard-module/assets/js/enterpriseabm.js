
$(document).ready(function(){
  $('#save-enterprise').click(function(){
		  $('#enterprise-id').append("<tr>\n" +
                              " <td>\n" +
                                  $("#exampleInputNombre").val() +
                                "</td>\n" +
                                "<td>\n" +
                                  $("#exampleInputPais").val() +
                                "</td>\n" +
                                "<td>\n"+
                                  $("#exampleInputCentro").val() +
                                "</td>\n" +
                                "<td>\n"+
                                  $("#exampleInputContacto").val() +
                                "</td>\n" +
                                "<td>\n"+
                                  0 +
                                "</td>\n" +
                                "<td class=\"text-right\">\n" +
                                  "<button class=\"btn btn-primary btn-round eliminate-enterprise\" onclick=\"myLittleFunc(this)\">Eliminar</button>\n"+
                                "</td>\n" +
                              "</tr>\n"
                            );
    $('#exampleModal').modal('toggle');

	});

  $('.eliminate-enterprise').click(function(){
		$(this).parent().parent().toggle();
	});
})
