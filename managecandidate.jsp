<%-- 
    Document   : managecandidate
    Created on : 23 Dec, 2019, 10:20:45 AM
    Author     : vishal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="jsscript/adminoptions.js"></script>
        <script src="jsscript/jquery.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link href="stylesheet/backgroundimage.css" rel="stylesheet">
        <link href="stylesheet/pageheader.css" rel="stylesheet">
        <link href="stylesheet/admin.css" rel="stylesheet">
        <title>Manage candidate</title>
    </head>
    <body>
        <%
            String userid = (String) session.getAttribute("userid");
            if (userid == null) {
                response.sendRedirect("accessdenied.html");
                return;
            }
            StringBuffer displayBlock = new StringBuffer(" ");
            displayBlock.append("<div class='sticky'><div class='candidate'>VOTE FOR CHANGE</div><br>"
                    + "<div class='subcandidate'>Admin Action Page</div><br><br>");
            displayBlock.append("<div class='logout'><a href='login.html'>LOGOUT</a></div></div>");
            displayBlock.append("<div class='container'>");
            displayBlock.append("<div id='dv1' onclick='showaddcandidateform()'>"
                    + "<img src='images/addcandidate.png' height='300px' width='300px'>"
                    + "<br><h3>Add Candidate</h3></div>");
            displayBlock.append("<div id='dv2' onclick='showupdatecandidateform()'>"
                    + "<img src='images/update1.jpg' height='300px' width='300px'>"
                    + "<br><h3>Update Candidate</h3></div>");
            displayBlock.append("<div id='dv3' onclick='showcandidate()'>"
                    + "<img src='images/candidate.jpg' height='300px' width='300px'>"
                    + "<br><h3>Show Candidate</h3></div>");
            displayBlock.append("<div id='dv4' onclick='deletecandidate()'>"
                    + "<img src='images/update3.jpg' height='300px' width='300px'>"
                    + "<br><h3>Delete Candidate</h3></div>");
            displayBlock.append("</div>");
            displayBlock.append("<br><br><div align='center' id='result'></div>");
            
          
            out.println(displayBlock);
        %>
    </body>
</html>
