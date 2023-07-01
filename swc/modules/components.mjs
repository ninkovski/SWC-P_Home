/*
	Variables de entorno  
	StartWebPerú | @ninkovski
*/
import { footerContent } from '../params/footer.js';

window.addEventListener('DOMContentLoaded', function () {
	var footerContainer = document.getElementById('footer-container');
	footerContainer.innerHTML = footerContent;
});