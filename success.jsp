<%-- 
    Document   : success.jsp
    Created on : 24 Dec, 2019, 8:29:38 PM
    Author     : vishal
--%>

<%
    String userid=(String)session.getAttribute("userid");
    if(userid==null){
        response.sendRedirect("accessdenied.html");
        return;
    }
    out.println("success");

%>