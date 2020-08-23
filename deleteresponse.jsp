<%-- 
    Document   : deleteresponse
    Created on : 31 Dec, 2019, 9:36:04 PM
    Author     : vishal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    String userid = (String) session.getAttribute("userid");
    int result = (Integer) request.getAttribute("result");
    if (userid == null) {
        response.sendRedirect("accessdenied.html");
        return;
    }
    
    if(result==1){
        out.println("success");
        
    }
    else{
        out.println("error");
    }

%>