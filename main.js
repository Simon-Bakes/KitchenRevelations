const menuBtn = document.getElementById('menuIcon');
const navBar = document.getElementById('navBar');
menuBtn.addEventListener('click', sideMenu);

function sideMenu() {
    navBar.style.visibility = navBar.style.visibility === 'visible' ? 'hidden' : 'visible';
}

function showPassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordIcon = document.querySelector('#showPasswordLabel .material-symbols-outlined');

    if(passwordInput.type === 'password')
    {
        passwordInput.type = 'text';
        showPasswordIcon.textContent = 'visibility'; 
    }
    else
    {
        passwordInput.type = 'password';
        showPasswordIcon.textContent = 'visibility_off'; 
    }
}
