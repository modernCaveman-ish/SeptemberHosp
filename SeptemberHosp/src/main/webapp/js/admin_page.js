// Change the name based on sessionStorage
window.onload = function() {
    if(sessionStorage.length == 0){ document.getElementById('admin_info').innerHTML = "<h1>User not connected...</h1>"; return; }
    displayInfo();
  };

function displayInfo(){
    var username = sessionStorage.getItem("username");
    document.getElementById('admin_info').innerHTML = "<h1>Welcome, " + username + '!!</h1>';
}

// Do a request to print all the members for the page
// Read about async/wait to make it better
function printMembers(){
    // Fetch all users and doctors and then print them.
    // Fetch the users first. Do it in two requests
    
    var users = $.ajax({
        method: 'GET',
        url: 'GetAllUsers',
        dataType: 'json',
        success: function(response) {
            console.log("The request was succesful!!");
            console.log("This is it: " + users.responseText);
            let json = JSON.parse(users.responseText);
            console.log(JSON.stringify(json));
        },
        error: function() {
            console.log("The request was not successful");
        }
    }).done(function() {
        // Print them out onto HTML
        let json_users = JSON.parse(users.responseText);
        document.getElementById('dbUsers').innerHTML += "<h3>Users</h3><br>"
        document.getElementById("dbUsers").innerHTML += JSON.stringify(json_users);
    });
    
    // Now get all the doctors
    
   var doctors = $.ajax({
       method:'Get',
       url: 'GetAllDoctors',
    //    dataType: 'json',
       success: function() {
           console.log("I got the Doctors");
        //    console.log("I got from Doctors this: " + doctors.responseText);
           let json = JSON.parse(doctors.responseText);
           console.log("These are the doctors: " + JSON.stringify(json));
        //    Print it out on HTML
            document.getElementById('dbDoctors').innerHTML += "<h3>Doctors</h3><br>"
            document.getElementById('dbDoctors').innerHTML += JSON.stringify(json);
       },
       error: function() {
           console.log("Failed to get the Doctors");
       }
   });
}

// Prepei na ftiaksw ena function poy na ta kanei print me tetragwnakia kai to koympi diagrafhs kai ta sxetika
