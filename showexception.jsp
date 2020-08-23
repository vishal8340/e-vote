<%-- 
    Document   : showexception
    Created on : 20 Dec, 2019, 11:11:23 AM
    Author     : vishal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%> 
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Show Exception Page</title>
    </head>
    <body>
        <br>
        <div class="candidate">VOTE FOR CHANGE</div>
        <br>
        <div class="subcandidate">Please Try Again Later</div>
        <%
            Exception ex = (Exception) request.getAttribute("exception");
            
            out.println(ex);
        %>
    </body>
</html>
