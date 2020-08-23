<%-- 
    Document   : userdeleteresponse
    Created on : 3 Jan, 2020, 9:27:24 PM
    Author     : vishal
--%>

<%@page import="evoting.dto.UserDetails"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    String userid = (String) session.getAttribute("userid");
    StringBuffer displayBlock = new StringBuffer();
    if (userid == null) {
        session.invalidate();
        response.sendRedirect("accessdenied.html");
        return;

    }

    String result = (String) request.getAttribute("result");

    if (result.equals("userId")) {
        ArrayList<String> userIdList = (ArrayList<String>) request.getAttribute("userId");
        for (String c : userIdList) {
            displayBlock.append("<option value='" + c + "'>" + c + "</options>");
        }
        out.println(displayBlock);
    }
    else if (result.equals("userDetails")) {
        UserDetails userDetails = (UserDetails) request.getAttribute("userDetails");

        displayBlock.append("'<table>"
                + "<tr><th>User ID :</th><td>" + userDetails.getUserid()+ "</td></tr>"
                + "<tr><th>UserName :</th><td>" + userDetails.getUsername() + "</td></tr>"
                + "<tr><th>Address :</th><td>" + userDetails.getAddress() + "</td></tr>"
                + "<tr><th>City :</th><td>" + userDetails.getCity() + "</td></tr>"
                + "<tr><th>Email :</th><td>" + userDetails.getEmail() + "</td></tr>"
                +"<tr><th>Mobile-No. :</th><td>" + userDetails.getMobile() + "</td></tr>"
                +"</table>'");

        out.println(displayBlock);
    }
    else{
        boolean deleteresponse = (boolean)request.getAttribute("deleteresponse");
        if(deleteresponse){
            out.println("success");
            
        }
        else{
            out.println("error");
        }
    }


%>