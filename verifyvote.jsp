<%-- 
    Document   : result
    Created on : 28 Dec, 2019, 4:20:55 PM
    Author     : vishal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>


<%
    String userid = (String) session.getAttribute("userid");

    boolean result = (boolean) request.getAttribute("result");
    System.out.println("result in jsp:" + result);
    if (userid != null && result == true) {
        out.println("success");
    } else {
        out.println("failed");
    }
%>
