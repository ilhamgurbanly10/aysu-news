
function closeNavbarNav(toggler, buttons, logo) {
    logo.classList.remove('d-none');
    buttons.forEach(btn => btn.onclick = function() { toggler.click(); });
}

export function wrapLogo(toggler, logo) {
    toggler.addEventListener('click', function() {
        logo.classList.toggle('d-none');
    })
}

export default closeNavbarNav;