/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ajaxReq, username, password, cpassword, address, userid, adhar, email, mobile;




function addUser() {

    username = $("#username").val();
    password = $("#password").val();
    cpassword = $("#cpassword").val();
    city = $("#city").val();
    address = $("#address").val();
    adhar = $("#adhar").val();
    email = $("#email").val();
    mobile = $("#mobile").val();

    if (validateUser())
    {
        if (password !== cpassword) {
            swal("Error!", "password does not match!", "error");
            return;
        } else {
            if (checkEmail(email) === false)
                return;
            else
            {

                var data = {
                    username: username,
                    password: password,
                    city: city,
                    address: address,
                    userid: adhar,
                    email: email,
                    mobile: mobile
                };

                $.post("RegistrationControllerServlet", data, processResponse);
            }
        }
    }
}

function processResponse(responseText) {

    responseText = responseText.trim();
    if (responseText === "success") {
        swal("success!", "Registration Successful!You can now Login", "success");
        setTimeout(redirectUser, 3000);
    } else if (responseText === "uap") {
        swal("Error!", "Sorry!the userid is already present!", "error");
    } else {
        swal("Error", "Registration Failed ! try again", "error");
    }
}

function validateUser() {

    if (username === "" || password === "" || cpassword === "" || city === "" || address === "" || adhar === "" || email === "" || mobile === "")
    {
        swal("Error!", "All Fields Are mandatory!", "error");
        return false;
    } else {
        return true;
    }
}

function checkEmail(email) {

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        swal("Error!", "Please Enter Valid Email!", "error");
        return false;
    }
    return true;
}

function redirectUser() {

    window.location = "login.html";
}

