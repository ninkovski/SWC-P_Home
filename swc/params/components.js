/*
    Variables de Footer  
    StartWebPerú | @ninkovski
*/

export const redes = {
    twitter: '<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>',
    facebook: '<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>',
    instagram: '<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>',
    mail: '<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>',
};

export const assets = {
    class: '<ul class="icons">',
    space: '<li> </li>',
    close: '</ul>',
}
export const redesGroup = `
    ${redes.twitter}
    ${redes.facebook}
    ${redes.instagram}
    ${redes.mail} `;

export const copyright =
    '<ul class="copyright">' +
    '<li>&copy; Derechos reservados 2023 </li>' +
    '<li>@StarWebConsulting - Perú</li>' +
    '</ul>';

export const footerContent = `
    ${assets.class}
    ${redesGroup}
    ${assets.close}
    ${copyright}
`;
export const headerContent = `
    ${assets.class}
    ${redesGroup}
    ${assets.space}
    ${assets.close}
`;