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

const authErrMsg = getElement('authErrMsg');
const succErrMsg = getElement('succErrMsg');

const loginauthErrMsg = getElement('loginauthErrMsg');
const loginsuccErrMsg = getElement('loginsuccErrMsg');



//event listeners
showSignUpBtn.addEventListener('click',showSignup);
showLoginBtn.addEventListener('click',showLogin);
loginbtn.addEventListener('click',loginFn);
signupbtn.addEventListener('click',signupFn);

const BASE_URL = 'https://ecommce-be.herokuapp.com/ecomm/api/v1';


//functions

function showSignup(){
    signupform.classList.remove('d-none');
    loginform.classList.add('d-none');

}

function showLogin(){
    signupform.classList.add('d-none');
    loginform.classList.remove('d-none');

}

function signupFn(){
    if(signupUserName.value == ""){
        updateAuthErrorMsg('username should not be empty')
    }else if(SignupUserEmail.value == ""){
        updateAuthErrorMsg('Email should not be empty')
    }else if(signupPassword.value == ""){
        updateAuthErrorMsg('Password should not be empty')
    }
    else{
        authErrMsg.innerText = "";
        const data = {
            username: signupUserName.value,
            password: signupPassword.value,
            email: SignupUserEmail.value
        }

        fetch(BASE_URL + '/auth/signup',{
            method:'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(data=>{console.log(data)
            updateSuccErrorMsg(data.message);
        }).catch((error)=>console.log('error',error));
        
    }
}

function redirectToHome(){
    window.location.href ='index.html'
}

function updateSuccErrorMsg(msg){
    
    succErrMsg.innerText = msg;
}

function updateAuthErrorMsg(msg){
    authErrMsg.innerText = msg;
}

function updateLoginSuccErrorMsg(msg){
    loginsuccErrMsg.innerText = msg;
}

function updateLoginAuthErrorMsg(msg){
    loginauthErrMsg.innerText = msg;
}

function loginFn(){
    
    if(loginUserName.value == ""){
        // console.log("working")
        updateLoginAuthErrorMsg('username should not be empty')
    }else if(loginPassword.value == ""){
        updateLoginAuthErrorMsg('Password should not be empty')
    }
    else{
        loginauthErrMsg.innerText = "";
        const data = {
            username: signupUserName.value,
            password: signupPassword.value,
        }

        fetch(BASE_URL + '/auth/signin',{
            method:'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(data=>{console.log(data)

            if(data.accessToken){
                localStorage.setItem('username',data.username)
                localStorage.setItem('userId',data.id)
                localStorage.setItem('token',data.accessToken)
                localStorage.setItem('email',data.email)
                redirectToHome();
            }else{
                updateSuccErrorMsg(data.msg)
            }
        }).catch((error)=>{console.log('error',error)
        })
    }

}





function getElement(id){
    return document.getElementById(id);
}

if(localStorage.getItem('username')){
    window.location.href = 'index.html';
}
