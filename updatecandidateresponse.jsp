<%-- 
    Document   : deletecandidateresponse
    Created on : 2 Jan, 2020, 11:13:36 AM
    Author     : vishal
--%>

<%@page import="evoting.dto.CandidateDetails"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.ArrayList"%>

<%

    String userid = (String) session.getAttribute("userid");

    if (userid == null) {
        session.invalidate();
        response.sendRedirect("accessdenied.html");
        return;

    }

    String result = (String) request.getAttribute("result");
    StringBuffer displayBlock = new StringBuffer();

    if (result.equals("candidateList")) {

        ArrayList<String> candidateId = (ArrayList) request.getAttribute("candidateId");
        for (String c : candidateId) {
            displayBlock.append("<option value='" + c + "'>" + c + "</options>");
        }
        out.println(displayBlock);
    } else if (result.equals("details")) {
        CandidateDetails candidate = (CandidateDetails) request.getAttribute("candidate");
        StringBuffer displayBlock1 = new StringBuffer();
        displayBlock1.append("<img src='data:image/jpg;base64,"+candidate.getSymbol()+"' style='width:300px;height:200px;'/>");
        
        out.println(candidate.getUserid() + "," + candidate.getCandidateName() + "," + candidate.getCity() + "," + candidate.getParty()+ "," +displayBlock1);
        
    }

%>
