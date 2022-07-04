/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import DBConnection.DBConnector;

/**
 *
 * @author stelios
 */
public class GetAllDoctors extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet GetAllDoctors</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet GetAllDoctors at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        DBConnector dbConnector = new DBConnector();
        try {
            dbConnector.initializeDatabase();

            response.setContentType("json");
            PrintWriter out = response.getWriter();
            Connection con = dbConnector.initializeDatabase();
            Statement stmt = con.createStatement();
            // The query
            String get_doctors_query = "SELECT doctors.username, doctors.firstname, doctors.lastname FROM `doctors`";
            ResultSet rs = stmt.executeQuery(get_doctors_query);
            
            // My JSON tools
            JSONArray json_arr = new JSONArray();
            ResultSetMetaData rsmd = rs.getMetaData();
            // Fill it
            String col_name;
            int col_num = rsmd.getColumnCount();

            while( rs.next() ){
                JSONObject json_obj = new JSONObject();
                for( int i=1; i<=col_num; i++ ){
                    col_name = rsmd.getColumnName(i);
                    json_obj.put(col_name, rs.getString(col_name));
                }
                json_arr.put(json_obj);
            }

            out.println(json_arr.toString());

            // Terminate the servlet
            con.close();
            stmt.close();
            rs.close();

        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
