
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let credentials = create_cred(username, password);
    
    ajax_login(credentials);
    
    
}

// Create credentials JSON
function create_cred(username, pass){
    let json_text = '{"username":"' + username +
                    '", "password": "' + pass + '" }';
            
    let json_obj = JSON.parse(json_text);
    
    return json_obj;
}


// Do a post request
//function ajax_login(credentials){
//    var xhttp = new XMLHttpRequest();
//    
//    //Test if it works
//    if( this.readyState == 4 ){
//        alert("It's ok");
//    }
//    
//    console.log(credentials);
//    
//    xhttp.open("POST", "Login");
//    xhttp.setRequestHeader("Content-Type", "application/json");
//    xhttp.send(credentials);
//}

function ajax_login(credentials){
    
    // new and improved with status codes
    var req = $.ajax({
        type: "POST",
        url: "Login",
        data: credentials,
        success: function() {
            console.log("ajax_login request successful.");
        },
        error: function() {
            if( req.status === 401 ){
                alert("Credentials Invalid..");
            } else{
                console.log("ajax_login request failed.");
            }
        }
    }).done(function() {
        // answers from servlet if credentials are correct or not
        if( req.status === 200 ){
            // Handle the JSON
            let json_ans = JSON.parse(req.responseText);
            alert("Welcome, " + json_ans.username + "!!");

            // Redirect to another Page
            // THIS IS PERMANENT, REPLACE IT WITH THE USER PAGE
            location.href = 'admin_page.html';

            // Maybe i should store the whole JSON answer
            sessionStorage.setItem("username", json_ans.username);

        } else if( req.status === 401 ){
            alert("Invalid Credentials.");
        } else{
            console.out("Error on AJAX Request.");
        }
    })

}


document.onload = function() {
    alert("We are live");
};

// function that creates the register form
function build_register_form(){
    var body = document.getElementsByTagName("body");
    
    body.innerHTML = "";
}