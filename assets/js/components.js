/*
	Variables de entorno  
	StartWebPerú | @ninkovski
*/
window.addEventListener('DOMContentLoaded', function () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'footer.html', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var footerContainer = document.getElementById('footer-container');
			footerContainer.innerHTML = xhr.responseText;
		}
	};
	xhr.send();
});