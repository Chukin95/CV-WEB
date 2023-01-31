$(function() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data.results[0]);
      $("#nombre" ).text(data.results[0].name.first);
      $("#apellido" ).text(data.results[0].name.last);
      $("#edad").text(data.results[0].dob.age);
      $("#nacionalidad").text(data.results[0].nat);
      $("#pais").text(data.results[0].location.country);
      $("#estado").text(data.results[0].location.state);
      $("#ciudad").text(data.results[0].location.city);
      $("#codigopostal").text(data.results[0].location.postcode);
      $("#direccion").text(data.results[0].location.street.name);
      $("#altura").text(data.results[0].location.street.number);
      $("#imagen").attr("src",data.results[0].picture.large);
    }
  });
  $( "#sobremi" ).click(function() {
    $( "#sobremi-section" ).toggle(true);
    $( "#habilidades-section" ).toggle(false);
    $( "#contacto-section" ).toggle(false);
  });
  $( "#habilidades" ).click(function() {
    $( "#sobremi-section" ).toggle(false);
    $( "#habilidades-section" ).toggle(true);
    $( "#contacto-section" ).toggle(false);
  });
  $( "#contacto" ).click(function() {
    $( "#sobremi-section" ).toggle(false);
    $( "#habilidades-section" ).toggle(false);
    $( "#contacto-section" ).toggle(true);
  });
});
