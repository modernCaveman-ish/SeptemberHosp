// Do a request to print all the members for the page
function printMembers(){
    $.ajax({
        method: 'GET',
        url: 'GetAllUsers',
        // dataType: 'json',    Silence it for now
        success: function() {
            console.log("The request was succesful!!");
        },
        error: function() {
            console.log("The request was not successful");
        }
    });
}