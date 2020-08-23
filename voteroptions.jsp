<%-- 
    Document   : voteroptions
    Created on : 15 Jan, 2020, 11:19:23 AM
    Author     : vishal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="jsscript/adminoptions.js"></script>
        <script src="jsscript/jquery.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link href="stylesheet/backgroundimage.css" rel="stylesheet">
        <link href="stylesheet/pageheader.css" rel="stylesheet">
        <link href="stylesheet/admin.css" rel="stylesheet">
        <link href="stylesheet/result.css" rel="stylesheet">
        <title>Voter Action Page</title>
    </head>
    <body>
        <%
            String userid = (String) session.getAttribute("userid");
            if (userid == null) {
                response.sendRedirect("accessdenied.html");
                return;
            }

            out.println("<div class='sticky'><div class='candidate'>VOTE FOR CHANGE</div><br>"
                    + "<div class='subcandidate'>Voter Actions Page</div><br><br>"
                    + "<div class='logout'><a href='login.html'>LOGOUT</a></div></div>" + "<div class='container'>"
                    + "<div id='dv1' onclick='viewcandidate()'><img src='images/votingimage.jpg' height='300px' width='300px'><br><h3>View Candidate</h3></div>"
                    + "<div id='dv2' onclick='castvote()'><img src='images/votelogo.png' height='300px' width='300px'><br><h3>Cast Vote</h3></div>"
                    + "<div id='dv3' onclick='seevote()'><img src='images/show.png' height='300px' width='300px'><br><h3>See Vote</h3></div>"
                    + "<div id='dv3' onclick='updateprofile()'><img src='images/update3.jpg' height='300px' width='300px'><br><h3>Update Profile</h3></div>"
                    + "<br><br><div align='center' id='result'></div>"
                    + "</div>");
        %>           
    </body>
</html>
