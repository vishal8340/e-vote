<%-- 
    Document   : showuserresult
    Created on : 3 Jan, 2020, 7:48:39 PM
    Author     : vishal
--%>

<%@page import="java.util.Iterator"%>
<%@page import="evoting.dto.UserDetails"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="jsscript/adminoptions.js"></script>
        <script src="jsscript/jquery.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link href="stylesheet/backgroundimage.css" rel="stylesheet">
        <link href="stylesheet/pageheader.css" rel="stylesheet">
        <link href="stylesheet/result.css" rel="stylesheet">

    </head>
    <body>  
        <%

            String userid = (String) session.getAttribute("userid");
            if (userid == null) {
                session.invalidate();
                response.sendRedirect("accessdenied.html");
                return;
            }
            ArrayList<UserDetails> userList = (ArrayList<UserDetails>) request.getAttribute("result");
           // out.println("<div>USER LIST </div>");
            out.println("<br><br><br><br><table>"
                    + "<tr><th> UserId </th><th> UserName </th> <th> Address </th> <th> City </th><th> Email </th>"
                    + "<th> Mobile No.</th></tr>");
            for (UserDetails users : userList) {

                out.println("<tr><td>" + users.getUserid() + "</td><td>" + users.getUsername() + "</td>"
                        + "<td>" + users.getAddress() + "</td><td>" + users.getCity() + "</td>"
                        + "<td>" + users.getEmail() + "</td><td>" + users.getMobile() + "</td></tr>");
            }
            out.println("</table>");
        %>
    </body>
</html>