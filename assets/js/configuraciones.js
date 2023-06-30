/*
	Variables de entorno  
	StartWebPerú | @ninkovski
*/
const emailParams = {
	SecureToken: "60a104f3-47a1-4f81-82f4-abc5a77e14ba",
	From: "sofia-informacion@startwebperu.com"
};

const emailWelcome = {
	Subject: "Start Web Perú te saluda!."
};
const emailBodyWelcome = `
<!DOCTYPE html> 
<head>
	<meta charset="UTF-8">
	<title>Plantilla de Correo</title>
</head>
<body>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" style="border-collapse: collapse;">
		<tr>
			<td>
				<img src="https://ejemplo.com/logo.png" alt="Logo" style="display: block; margin: 20px auto; width: 200px;">
			</td>
		</tr>
		<tr>
			<td>
				<p style="font-size: 18px; margin-bottom: 20px;">¡Hola!</p>
				<p style="font-size: 16px;">Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
				<p style="font-size: 16px;">Detalles del mensaje:</p>
				<ul style="font-size: 16px; margin: 10px 0 20px 20px; padding-left: 0;">
					<li><strong>Nombre:</strong> [Nombre del remitente]</li>
					<li><strong>Correo electrónico:</strong> [Correo del remitente]</li>
					<li><strong>Mensaje:</strong> [Contenido del mensaje]</li>
				</ul>
				<p style="font-size: 16px;">Si tienes alguna otra pregunta, no dudes en contactarnos.</p>
				<p style="font-size: 16px;">¡Gracias de nuevo!</p>
			</td>
		</tr>
		<tr>
			<td>
				<hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
				<p style="font-size: 14px; color: #999; text-align: center;">Este es un mensaje automático, por favor no respondas a este correo.</p>
			</td>
		</tr>
	</table>
</body>
`;

const validMessage = {
	ImputMailInvalid: "Por favor, ingresa un correo electrónico válido.",
	ImputPhoneInvalid: "Por favor, ingresa un número de celular válido."
};