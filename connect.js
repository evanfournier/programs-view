var username = document.getElementById('username');
var password = document.getElementById('mdp');
var username_register = document.getElementById('username_register');
var password_register = document.getElementById('mdp_register');
var password_register_confirm = document.getElementById('mdp_confirm_register');
var button = document.getElementById('connect');
var button2 = document.getElementById('mod_connect');
var button3 = document.getElementById('mod_login');
var button4 = document.getElementById('login');
var connexion = document.getElementById('connexion');
var register = document.getElementById('register');
var accounts = new Map();
var i = 1;
var t = 0;


button.addEventListener("click", function (e){
    e.preventDefault()
    if (username.value.length < 8){span1.style.display = "block"}else{span1.style.display = "none"}
    if (username.value.length > 20){span3.style.display = "block"}else{span3.style.display = "none"}
    if (password.value.length < 8){span2.style.display = "block"}else{span2.style.display = "none"}
    if (password.value.length > 20){span4.style.display = "block"}else{span4.style.display = "none"}
    for (var [key, value] of accounts){
        if (username.value == key && password.value == value){
            window.location.href="C:/Users/Evan/Documents/html/connexion2/page2.html";
        }
    }
});



button4.addEventListener("click", function(e){
    e.preventDefault()
    if (username_register.value.length < 8){span5.style.display = "block"}else{span5.style.display = "none"}
    if (username_register.value.length > 20){span6.style.display = "block"}else{span6.style.display = 'none'}
    if (password_register.value.length < 8){span7.style.display = "block"}else{span7.style.display = "none"}
    if (password_register.value.length > 20){span8.style.display = "block"}else{span8.style.display = "none"}
    if (password_register.value != password_register_confirm.value){span9.style.display = "block"}else{span9.style.display = "none"}
    if (username_register.value.length < 8 || username_register.value.length > 20 || password_register.value.length < 8 || password_register.value.length > 20 || password_register.value != password_register_confirm.value){
        i = 1
    }else{
        i = 0
    }
    if (i == 0){
        accounts.set(username_register.value, password_register.value)  
    }
});

button2.addEventListener("click", function (e){
    e.preventDefault()
    button2.style.color = "#c2085ce6";
    button3.style.color = "#c2430893";
    connexion.style.display = "block";
    register.style.display = "none";
});

button3.addEventListener("click", function (e){
    e.preventDefault()
    button3.style.color = "#c2085ce6";
    button2.style.color = "#c2430893";
    connexion.style.display = "none";
    register.style.display = "block";
});

