<%-- 
    Document   : updateuserdetails
    Created on : 15 Jan, 2020, 1:31:00 PM
    Author     : vishal
--%>

<%@page import="java.util.Iterator"%>
<%@page import="evoting.dto.UserDetails"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%

    String userid = (String) session.getAttribute("userid");
    if (userid == null) {
        session.invalidate();
        response.sendRedirect("accessdenied.html");
        return;
    }
    StringBuffer displayBlock = new StringBuffer();
    UserDetails userdetails = (UserDetails) request.getAttribute("result");
    // out.println("<div>USER LIST </div>");
    out.println(userdetails.getUserid() + "," + userdetails.getUsername() + "," + userdetails.getAddress() + "," + userdetails.getCity() + "," + userdetails.getEmail() + "," + userdetails.getMobile());
%>
