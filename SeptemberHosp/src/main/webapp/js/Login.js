


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
    
//    $.ajax({
//        type: "POST",
//        url: "Login",
//        data: credentials,
//        success: function() {
//            console.log("Success!!");
//            //Handle the response
//            alert(this.responseText);
//            
//        },
//        error: function(){
//            console.log("Fail..");
//            //Handle the response
//            alert(this.responseText);
//        }
//    })
//    
    
    var req = $.ajax({
        type: "POST",
        url: "Login",
        data: credentials,
        success: function() {
            console.log("Success");
        },
        error: function() {
            console.log("Error");
        }
    }).done(function() {
        alert(req.responseText);
    })
    
}