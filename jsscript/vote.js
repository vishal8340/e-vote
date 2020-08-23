/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function addvote() {
   
    var id = $('input[type=radio][name=flat]:checked').attr('id');
    console.log(id);
    data = {candidateid: id};
    $.post("AddVoteControllerServlet", data, function (responseText) {
       responseText=responseText.trim();
       if(responseText==="success")
       {
           window.location="votingresponse.jsp";
       }
       else{
           window.location="accessdenied.html";
       }
    });
}

