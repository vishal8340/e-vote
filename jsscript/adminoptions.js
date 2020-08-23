/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function viewcandidate() {
    console.log("castvote");
    var data = {
        data: "viewcandidate"
    };
    $.post("VoteCastControllerServlet", data, function (responseText) {
        console.log(responseText);
        $("#result").html(" ");
        $("#result").html(responseText);

    });
}

function castvote() {
    console.log("castvote");
    var data = {
        data: "castvote"
    };
    $.post("VoteCastControllerServlet", data, function (responseText) {
        console.log(responseText);
        $("#result").html(" ");
        $("#result").html(responseText);

    });
}

function updateprofile() {
    $("#result").html("");
    removecandidateForm();
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "userform");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding-left", "12px");
    newdiv.setAttribute("border", "solid 2px red");

    newdiv.innerHTML = "<h3>Update Profile</h3>";
    newdiv.innerHTML = newdiv.innerHTML + "<table>\n\
            <tr><th>User ID:</th><td><input type='text' id='uid'></td></tr>\n\
            <tr><th>Name:</th><td><input type='text' id='vname'></td></tr>\n\
            <tr><th>Address:</th><td><input type='text' id='address'></td></tr>\n\
            <tr><th>City:</th><td><input type='text' id='city'></td></tr>\n\
            <tr><th>Email :</th><td><input type='text' id='email'></td></tr>\n\
            <tr><th>Mobile no.:</th><td><input type='text' id='phone'></td></tr>\n\
            <tr></tr>\n\
            <br><tr><th><input type='button' value='Update User' onclick='updateUser()' id='updateusr'></th></tr>\n\
            <table>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><span id='addresp'></span>";
    var addPrd = $("#result");
    addPrd.append(newdiv);
    removecandidateForm();
    var data = {
        data: "updateprofile"
    };

    $.post("UpdateUserControllerServlet", data, function (responseText) {
        clearText();
        responseText = responseText.trim();
        console.log(responseText);
        var i = responseText.lastIndexOf(",");
        var j = responseText.indexOf(",");

        $("#uid").val(responseText.substring(0, j));

        var str = responseText.substring(j + 1, i);

        var k = str.indexOf(",");
        $("#vname").val(str.substring(0, k));

        var str1 = str.substring(k + 1, i);

        var l = str1.indexOf(",");

        $("#address").val(str1.substring(0, l));

        var str2 = str1.substring(l + 1, i);

        var m = str2.indexOf(",");

        $("#city").val(str2.substring(0, m));


        $("#email").val(str2.substring(m + 1, i));

        $("#phone").val(responseText.substring(i + 1, ));


        $("#uid").prop("disabled", true);

    });

}

function updateUser() {
    var data = {
        uid: $('#uid').val(),
        vname: $("#vname").val(),
        address: $("#address").val(),
        city: $("#city").val(),
        email : $("#email").val(),
        phone : $("#phone").val()
    };

    $.post("UpdateUserControllerServlet", data, function (responseText) {
        console.log(responseText);
        responseText=responseText.trim();
        if(responseText==="success"){
            swal("Update Candidate!","Successfully", "success");
            setTimeout(function () {
                window.location = "voteroptions.jsp";
            }, 1500);
        }
        else{
            swal("Updatation status...!", "Failed!", "error");
        }
        
    });
    
    removecandidateForm();
}


function seevote() {
    console.log("seevote");
    var data = {
        data: "seevote"
    };
    $.post("VoteCastControllerServlet", data, function (responseText) {
        $("#result").html(" ");
        $("#result").html(responseText);

    });

}

function redirectadministratorpage() {
    swal("Admin!", "Redirecting to Admin Page!", "success");
    setTimeout(function () {
        window.location = "adminactions.jsp";
    }, 1500);
}

function redirectvotingpage() {

    swal("Admin !", "Redirecting to voting Page..", "success");
    setTimeout(function () {
        window.location = "AdminVotingControllerServlet";
    }, 1500);
}

function manageuser() {
    swal("Admin!", "Redirecting to User Management", "success");
    setTimeout(function () {
        window.location = "manageuser.jsp";
    }, 1500);
}

function managecandidate() {
    swal("Admin!", "Redirecting to Candidate Management", "success");
    setTimeout(function () {
        window.location = "managecandidate.jsp";
    }, 1500);
}


function showuser() {
    removecandidateForm();
    var data = {
        data: "showuser"
    };

//    clearText();
    $.post("ShowUserControllerServlet", data, function (responseText) {
        swal("success", "User List!", "success");
        $("#result").html(" ");
        $("#result").html(responseText);
    });

}


function deleteuser() {
    $("#result").html("");
    removecandidateForm();

    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidatedetails");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding", "12px");
    newdiv.setAttribute("border", "solid 2px red");
    newdiv.innerHTML = "<h3>Delete User </h3>";
    newdiv.innerHTML = newdiv.innerHTML + "<div style='color:white;font-weight:bold'>User\n\
    Id:</div><div><select id='uid'></select></div>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><span id='addresp'></span>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><input type='button' class='nm-button' onclick='deleteUserDetails()' value='Delete User'>";
    var addPrd = $("#result");
    addPrd.append(newdiv);
    var data = {
        data: "uid"
    };

    $.post("DeleteUserControllerServlet", data, function (responseText) {
        console.log(responseText);
        $("#uid").append(responseText);
    });

    $("#uid").on('change', function () {
        var uid = $(this).children("option:selected").val();
        data = {
            data: uid
        };

        $.post("DeleteUserControllerServlet", data, function (responseText) {
            clearText();
            // console.log(responseText);
            $("#addresp").append(responseText);
        });
    });
}


function deleteUserDetails() {
    var data = {
        uid: $("#uid").val()
    };
    console.log($("#uid").val());

    $.post("DeleteUserControllerServlet", data, function (responseText) {
        //clearText();
        console.log(responseText);
        if (responseText.trim() === "success") {
            swal("User Deleted...!", responseText, "success");
        } else {
            swal("Deletion status..!", responseText, "error");

        }
    });
    $("#result").html("");
    deleteuser();

}

function showaddcandidateform() {
    $("#result").html("");
    removecandidateForm();
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidateform");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding", "12px");
    newdiv.setAttribute("border", "solid 2px red");
    newdiv.innerHTML = "<h3>Add New Candidate</h3>";
    newdiv.innerHTML = newdiv.innerHTML + "<form method='POST' enctype='multipart/form-data' id='fileUploadForm'>\n\
        <table>\n\
            <tr><th>Candidate ID:</th><td><input type='text' id='cid'></td></tr>\n\
            <tr><th>User ID:</th><td><input type='text' id='uid' onkeypress='return getdetails(event)'></td><td><img src='images/enter1.png' height='30px' width='50px'><b><span style='height:30px' 'width:50px'>Press Enter!!</span></b> </td></tr>\n\
            <tr><th>Candidate Name:</th><td><input type='text' id='cname'></td></tr>\n\
            <tr><th>City:</th><td><select id='city'></td></tr><tr><th>Party:</th><td><input type='text' id='party'></td></tr>\n\
            <tr><td colspan='2'><input type='file' name='files' value='Select Image'></td></tr>\n\
            <tr><th><input type='button' value='Add Candidate' onclick='addcandidate()' id='addcnd'></th></tr>\n\
            <tr><th><input type='reset' value='clear' onclick='cleartext()' ></th></tr>\n\
        </table></form>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><span id='addresp'></span>";
    var addcand = $("#result");
    addcand.append(newdiv);
    data = {
        id: "getid"
    };
    $.post("AddCandidateControllerServlet", data, function (responseText) {
        $("#cid").val(responseText);
        $("#cid").prop("disabled", true);
    });
}

function getdetails(e) {
    if (e.keyCode === 13) {
        data = {
            uid: $("#uid").val()

        };
        console.log(data);
        $.post("AddCandidateControllerServlet", data, function (responseText) {
            responseText = responseText.trim();
            var i = responseText.lastIndexOf(",");
            $("#city").empty();
            $("#city").append(responseText.substring(0, i));
            var uname = responseText.substring(i + 1, responseText.length);
            if (uname === "wrong") {
                swal("Wrong Adhar!", "Adhar No not found in DB", "error");
            } else {
                $("#cname").val(uname);
                $("#cname").prop("disabled", true);
            }
        });
    }
}



function addcandidate() {

    var form = $('#fileUploadForm')[0];
    var data = new FormData(form);
    var cid = $('#cid').val();
    var cname = $("cname").val();
    var city = $("#city").val();
    var party = $("#party").val();
    var uid = $("#uid").val();

    data.append("cid", cid);
    data.append("uid", uid);
    data.append("cname", cname);
    data.append("party", party);
    data.append("city", city);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "AddNewCandidateControllerServlet",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
            str = data;
            swal("Candidate Added..!", str, "success");
            setTimeout(function () {
                showaddcandidateform();
            }, 1500);
        },
        error: function (e) {
            swal("Candidate Adding Status!", e, "error");
        }
    });
}

function clearText() {
    $("#addresp").html("");
}

function showupdatecandidateform() {
    $("#result").html("");
    removecandidateForm();
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidateform");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding-left", "12px");
    newdiv.setAttribute("border", "solid 2px red");

    newdiv.innerHTML = "<h3>Update Candidate</h3>";
    newdiv.innerHTML = newdiv.innerHTML + "<div style='color:white; font-weight:bold'>Candidate Id:</div><div><select id='cid'></select></div>";
    newdiv.innerHTML = newdiv.innerHTML + "<form method='POST' enctype='multipart/form-data' id='fileUploadForm'>\n\
        <table>\n\
            <tr><th>User ID:</th><td><input type='text' id='uid'></td></tr>\n\
            <tr><th>Candidate Name:</th><td><input type='text' id='cname'></td></tr>\n\
            <tr><th>City:</th><td><input type='text' id='city'></td></tr>\n\
            <tr><th>Party:</th><td><input type='text' id='party'></td></tr>\n\
            <tr><td colspan='2'><input type='file' name='files' value='Select Image'></td></tr>\n\
            <tr><th><input type='button' value='Update Candidate' onclick='updatecandidate()' id='updatecnd'></th></tr>\n\
            <table></form>";
    // newdiv.innerHTML = newdiv.innerHTML + "<br><span><img src='data:image/jpg;base64,id='addresp'' style='width:300px;height:200px;'/></span>";
    var addPrd = $("#result");
    addPrd.append(newdiv);
    data = {
        data: "cid"
    };

    $.post("UpdateCandidateControllerServlet", data, function (responseText) {
        $("#cid").append(responseText);
    });

    $("#cid").on('change', function () {
//        removecandidateForm();
        var cid = $(this).children("option:selected").val();
        data = {
            data: cid
        };

        $.post("UpdateCandidateControllerServlet", data, function (responseText) {
            clearText();
            responseText = responseText.trim();
            console.log(responseText);
            var i = responseText.lastIndexOf(",");
            var j = responseText.indexOf(",");

            $("#uid").val(responseText.substring(0, j));

            var str = responseText.substring(j + 1, i);

            var k = str.indexOf(",");
            $("#cname").val(str.substring(0, k));

            var str1 = str.substring(k + 1, i);

            var l = str1.indexOf(",");

            $("#city").val(str1.substring(0, l));

            var str2 = str1.substring(l + 1, i);

            var m = str2.indexOf(",");
            $("#party").val(str2.substring(0, m));
            $("#uid").prop("disabled", true);
            $("#cname").prop("disabled", true);

            //$("#addresp").val(responseText.substring(i+1,responseText.length()));

        });
    });

}

function updatecandidate() {

    var form = $('#fileUploadForm')[0];
    var data = new FormData(form);
    var cid = $('#cid').val();
    var cname = $("#cname").val();
    var city = $("#city").val();
    var party = $("#party").val();
    var uid = $("#uid").val();

    console.log("cid:" + cid);
    console.log("cname:" + cname);
    console.log("city:" + city);
    console.log("party:" + party);
    console.log("uid:" + uid);

    data.append("cid", cid);
    data.append("uid", uid);
    data.append("cname", cname);
    data.append("party", party);
    data.append("city", city);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "UpdateNewCandidateControllerServlet",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
            str = data + ".........";
            swal("Update Candidate!", str, "success");
            setTimeout(function () {
                showaddcandidateform();
            }, 1500);
        },
        error: function (e) {
            swal("Updatation status...!", e, "error");
        }
    });
    removecandidateForm();
}


function showcandidate() {
    $("#result").html("");
    removecandidateForm();
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidateform");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding-left", "12px");
    newdiv.setAttribute("border", "solid 2px red");

    newdiv.innerHTML = "<h3>Show Candidate</h3>";
    newdiv.innerHTML = newdiv.innerHTML + "<div style='color:white; font-weight:bold'>Candidate Id:</div><div><select id='cid'></select></div>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><span id='addresp'></span>";

    var addPrd = $("#result");
    addPrd.append(newdiv);
    data = {
        data: "cid"
    };

    $.post("ShowCandidateControllerServlet", data, function (responseText) {
        $("#cid").append(responseText);
    });

    $("#cid").on('change', function () {
//        removecandidateForm();
        var cid = $(this).children("option:selected").val();
        data = {
            data: cid
        };

        $.post("ShowCandidateControllerServlet", data, function (responseText) {
            clearText();
            console.log(responseText);
            $("#addresp").append(responseText);
        });
    });

}

function removecandidateForm() {
    var contdiv = document.getElementById("result");
    var formdiv = document.getElementById("candidateform");

    if (formdiv !== null) {
        $("#candidateform").fadeOut("3500");
        contdiv.removeChild(formdiv);
    }
}


function deletecandidate() {
    $("#result").html("");
    removecandidateForm();

    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "candidatedetails");
    newdiv.setAttribute("float", "left");
    newdiv.setAttribute("padding", "12px");
    newdiv.setAttribute("border", "solid 2px red");
    newdiv.innerHTML = "<h3>Delete Candidate</h3>";
    newdiv.innerHTML = newdiv.innerHTML + "<div style='color:white;font-weight:bold'>Candidate\n\
    Id:</div><div><select id='cid'></select></div>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><span id='addresp'></span>";
    newdiv.innerHTML = newdiv.innerHTML + "<br><input type='button' onclick='deleteCand()' value='Delete Candidate'>";
    var addPrd = $("#result");
    addPrd.append(newdiv);
    var data = {
        data: "cid"
    };

    $.post("ShowCandidateControllerServlet", data, function (responseText) {
        // console.log(responseText);
        $("#cid").append(responseText);
    });

    $("#cid").on('change', function () {
        var cid = $(this).children("option:selected").val();
        data = {
            data: cid
        };

        $.post("ShowCandidateControllerServlet", data, function (responseText) {
            clearText();
            // console.log(responseText);
            $("#addresp").append(responseText);

        });
    });

}


function deleteCand() {

    //console.log("cid in deleteCand:" + $("#cid").val());

    //int i=prompt("Are you sure want to delete:");
    var data = {cid: $("#cid").val()};
    $.post("DeleteCandidateControllerServlet", data, function (responseText) {
        clearText();
        //console.log(responseText);
        if (responseText.trim() === "success") {
            swal("Candidate Deleted!", responseText, "success");
        } else {
            swal("error", responseText, "error");
        }
    });
    $("#result").html("");
    //removecandidateForm();
    deletecandidate();
}

function electionresult() {
    removecandidateForm();
    var data = {
        data: "result"
    };

//    clearText();
    $.post("ElectionResultControllerServlet", data, function (responseText) {
        swal("success", "Voting Result", "success");
        $("#result").html(" ");
        $("#result").html(responseText);
    });


}