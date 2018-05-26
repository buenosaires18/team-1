
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
		 var aux=localStorage.getItem("user");
     aux=aux.substring(0,aux.length-1);
     aux=aux+",{\"name\":\""+$("#exampleInputNombre").val()+"\""+
     ",\"pais\":\""+$("#exampleInputPais").val()+"\",\"Provincia\":\""+$("#exampleInputProvincia").val()+
     "\", \"año\":\"2018\",\"mail\":\""+$("#exampleInputMail").val()+"\""+
     ",\"trabaja\":\""+$("#exampleInputWorking").val()+"\"}]";
    localStorage.setItem("user",aux);
    $('#exampleModal').modal('toggle');
      location.reload();


	});
  if (localStorage.getItem("user") === null) {
  var user = [{"name":'Jhonathan',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2018","mail":"mail@mail.com","trabaja":"No"},
  {"name":'Martin',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2017","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Lorant',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2016","mail":"mail@mail.com","trabaja":"No"},
  {"name":'Juan',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2018","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Matias',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2017","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Nicolas',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2016","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Alejandro',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2018","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Guido',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2017","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Agustin',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2016","mail":"mail@mail.com","trabaja":"No"},
  {"name":'Matias',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2018","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Matias',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2017","mail":"mail@mail.com","trabaja":"Sí"},
  {"name":'Matias',"pais":"Argentina","Provincia":'Buenos Aires', "año":"2016","mail":"mail@mail.com","trabaja":"Sí"}
  ];
  localStorage.setItem("user",JSON.stringify(user));
}
var aux=JSON.parse(localStorage.getItem("user"));
//fetch object
for (var i = 0; i < aux.length; i++){
  string="<tr id="+i+"><td>"+aux[i].name+"</td><td>"+aux[i].pais+"</td><td>"+aux[i].Provincia+"</td>"+
                   "<td>"+aux[i].mail+"</td>"+
                   "<td>"+aux[i].trabaja+"</td>"+
                   "<td class=\"text-right\">"+
                  "<button onclick=\"elem=document.getElementById("+i+");elem.parentNode.removeChild(elem);\""+
" class=\"btn btn-primary btn-round eliminate\">Eliminar</button>"+
                    "</td></tr>";

  if(aux[i].año=="2018"){
    $('.a2018').append(string);
  }
  if(aux[i].año=="2017"){
    $('.a2017').append(string);
  }
  if(aux[i].año=="2016"){
    $('.a2016').append(string);
  }
}
});
