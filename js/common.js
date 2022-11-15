//variable

const username = document.getElementById('userIntro');
const logoutBtn = document.getElementById('logoutBtn');

const BASE_URL = 'https://ecommce-be.herokuapp.com/ecomm/api/v1';


//events

logoutBtn.addEventListener('click',logoutFn);



//function
function logoutFn(){
    localStorage.removeItem('username')
    window.location.href = 'login.html';
}