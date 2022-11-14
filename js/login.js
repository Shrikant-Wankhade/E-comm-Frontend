//variables

const showLoginBtn = getElement('showLoginBtn');
const showSignUpBtn = getElement('showSignUpBtn');
const loginform = getElement('loginform');
const signupform = getElement('signupform');

const signupbtn = getElement('signupbtn');
const loginbtn = getElement('loginbtn');

const signupUserName = getElement('signupUserName');
const loginUserName = getElement('loginUserName');


const loginPassword = getElement('loginPassword');
const signupPassword = getElement('signupPassword');

const SignupUserEmail = getElement('SignupUserEmail');




//event listeners
showSignUpBtn.addEventListener('click',showSignup);
showLoginBtn.addEventListener('click',showLogin);
loginbtn.addEventListener('click',loginFn);
signupbtn.addEventListener('click',signupFn);




//functions

function showSignup(){
    signupform.classList.remove('d-none');
    loginform.classList.add('d-none');

}

function showLogin(){
    signupform.classList.add('d-none');
    loginform.classList.remove('d-none');

}







function getElement(id){
    return document.getElementById(id);
}
