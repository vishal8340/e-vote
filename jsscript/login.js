/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//window.onbeforeunload = function() { return "You work will be lost."; };
window.history.forward();
function noBack() {
    window.history.forward();
}


var userid, password;

function clear_fetch() {

    $("#username").val(" ");
    $("#password").html(" ");
}
function connectUser() {


    userid = $("#username").val();
    password = $("#password").val();

    if (validate() === false) {
        swal("Access Denied!", "Please Enter Userid/Password!", "error");
        return;
    }
    var data = {
        userid: userid,
        password: password
    };
    $.post("LoginControllerServlet", data, processResponse);
   
}

function handleError(xhr) {
    swal("Error in js" + xhr + "error");
}

function processResponse(responseText) {
    console.log(responseText);
    responseText = responseText.trim();
    if (responseText === 'error') {
        swal("Access Denied!", "Please enter userid/password!", "error");
    } else if (responseText.indexOf("jsession") !== -1) {
        swal("success!", "Login Accepted!", "success");
        setTimeout(function () {
            window.location = responseText;
        }, 1000);
    } else {
        swal("Access Denied!", "Please enter userid/password!", "error");
    }

}

function validate() {
    if (userid === "" || password === "")
        return false;
    return true;
}