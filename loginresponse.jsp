<%-- 
    Document   : loginresponse
    Created on : 21 Dec, 2019, 7:13:46 PM
    Author     : vishal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String userid = (String) request.getAttribute("userid");
    String result = (String) request.getAttribute("usertype");
   // System.out.println("result in resopnse:"+result);
   // System.out.println("userid in resopnse:"+userid);

    if (result != null && userid != null) {

        HttpSession sess = request.getSession();
        //sess object is already available in jsp it is optional to get sess object
        sess.setAttribute("userid", userid);

        if (result.equalsIgnoreCase("Admin")) {
            String url = "AdminControllerServlet;jsession=" + session.getId();
            //encodeURL("AdminControllerServlet"); // 2 way to redirect without passsing session id;
            out.println(url);
        } else {
            String url = "VotingControllerServlet;jsession=" + session.getId();
            //String url= response.encodeURL("VotingControllerServlet");//  2 way to redirect without passsing session id; 
            out.println(url);
        }
    } else {
        out.println("error");
    }
%>