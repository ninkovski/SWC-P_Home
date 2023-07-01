/*
    Variables de Footer  
    StartWebPerú | @ninkovski
*/

export const redes = {
    class: '<ul class="icons">',
    twitter: '<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>',
    facebook: '<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>',
    instagram: '<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>',
    mail: '<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>',
    close: '</ul>',
};

export const copyright =
    '<ul class="copyright">' +
    '<li>&copy; Derechos reservados 2023 </li>' +
    '<li>@StarWebConsulting - Perú</li>' +
    '</ul>';

export const footerContent = `
    ${redes.class}
    ${redes.twitter}
    ${redes.facebook}
    ${redes.instagram}
    ${redes.mail}
    ${redes.close}
    ${copyright}
`;
