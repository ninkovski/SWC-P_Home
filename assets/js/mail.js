/*
	Componente nuevo 
	StartWebPerú | @ninkovski
	Componente nuevo para envio de correos con https://smtpjs.com/
	<script src="https://smtpjs.com/v3/smtp.js"></script>
	#d1add1c1-8dc6-4812-af84-ed10be7bf1db 
*/
document.getElementById("send-button").addEventListener("click", function() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "startwebperu@gmail.com",
    Password : "301C3E484509BF5387F01F39486320E531CE",
    To : 'ninkovski03@gmail.com',
    From : "startwebperu@gmail.com",
    Subject : "Primer Email de Prueba",
    Body : "Tenemos que implementar un cuerpo"
  }).then(function(message) {
    alert("Correo enviado con éxito");
  }).catch(function(error) {
    console.error("Error al enviar el correo:", error);
    alert("Error al enviar el correo. Por favor, inténtalo nuevamente.");
  });
});

