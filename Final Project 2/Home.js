
$(document).ready(function(){

$(".btn-login").click( function(){

var userName = $(".usr-login-txt").val();

var password = $(".pass-login-txt").val();

if(userName.toLowerCase() == "testuser" && password == "123")

{

$(".login-section").hide();

$(".account-Info").show();

}

});

$(".btn-create-account").click( function(){

$(".errMsg-username").text("");

$(".errMsg-password").text("");

var mail = $(".email-txt").val();

ValidateEmail(mail);

var repMail = $(".rep-email-txt").val();

ValidateEmail(repMail);

var userName = $(".usr-txt").val();

var password = $(".pass-txt").val();

if(userName.toLowerCase() == "testuser")

{

$(".errMsg-username").text("User Name already taken.");

}

if(password.length < 6)

{

$(".errMsg-password").text("Password must be greater than six character");

}

});

$(".email-txt").keyup(function(){

var mail = $(this).val();

ValidateEmail(mail, ".errMsg-email");

});

$(".rep-email-txt").keyup(function(){

var mail = $(this).val();

ValidateEmail(mail, ".errMsg-rep-email");

});

});

function ValidateEmail(mail, selector)

{

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))

{

$(selector).text("");

return true;

}

$(selector).text("Please enter valid email");

return false;

}

