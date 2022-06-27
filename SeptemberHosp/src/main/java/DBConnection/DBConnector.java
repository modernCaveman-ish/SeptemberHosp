
package DBConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author stelios
 */
public class DBConnector {
    // dbURL
    private static final String dbDriver = "com.mysql.cj.jdbc.Driver";
    private static final String dbURL = "jdbc:mysql://localhost/HY359";
    // dbCredentials 
    private static final String dbName = "hy359";
    private static final String dbUsername = "root";
    private static final String dbPassword = "";
    
    // initialize connection
    public Connection initializeDatabase() throws ClassNotFoundException, SQLException{
       
        Class.forName(dbDriver);
        Connection con = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
        
        return con;
    }
    
}
