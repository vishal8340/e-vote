<%-- 
    Document   : electionresult
    Created on : 28 Dec, 2019, 8:25:00 PM
    Author     : vishal
--%>

<%@page import="java.util.Set"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="evoting.dto.CandidateDetails"%>
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
            LinkedHashMap<CandidateDetails, Integer> resultDetails = (LinkedHashMap<CandidateDetails, Integer>) request.getAttribute("result");

            int totalvotecount = (Integer) request.getAttribute("votecount");

            out.println("<table>"
                    + "<tr><th> CandidateId </th><th> CandidateName </th> <th> Party </th> <th> City </th><th> Symbol </th>"
                    + "<th> Vote-Count</th><th> Vote-Ratio </th></tr>");

            Set s = resultDetails.entrySet();
            Iterator itr = s.iterator();
            int i = 1;
            while (itr.hasNext()) {
                Map.Entry<CandidateDetails, Integer> e = (Map.Entry) itr.next();

                double ratio = (e.getValue() / (double) totalvotecount) * 100;

                out.println("<tr id='tr" + (i++) + "'><td>" + e.getKey().getCandidateId() + "</td><td>" + e.getKey().getCandidateName() + "</td>"
                        + "<td>" + e.getKey().getParty() + "</td><td>" + e.getKey().getCity() + "</td>"
                        + "<td><img src='data:image/jpg;base64," + e.getKey().getSymbol() + "'style='width:300px;height:200px;'/></td><td>" + e.getValue() + "</td><td>" + ratio + "%</td></tr>");
            }
            out.println("</table>");
        %>
    </body>
</html>
