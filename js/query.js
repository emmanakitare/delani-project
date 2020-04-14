$(document).ready(function(){
    $('#icon3').click(function(){
        $('#icon3').toggle();
        $('#para3').toggle();
    });
    $("#icons").click(function(){
        $("#icons").toggle();
        $("#paragraph").toggle();
    });
    $("#icon2").click(function(){
        $("#icon2").toggle();
        $("#para2").toggle();
    });
    $('#para3').click(function(){
        $('#icon3').toggle();
        $('#para3').toggle();
    });
    $("#paragraph").click(function(){
        $("#icons").toggle();
        $("#paragraph").toggle();
    });
    $("#para2").click(function(){
        $("#icon2").toggle();
        $("#para2").toggle();
    });
});


$(document).ready(function(){
    $("#img").hover(function(){

    })
    function(){

    }
});


var name, email, message;
function getInput() {
    name = document.getElementById("user").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
  
if (name==="") {
    alert ("Enter your name");
    return false;
} else if (email==="") {
    alert ("Enter your email");
    return false;
} else {
    alert (name + "we have recieved your message. Thank you for reaching out to us"); 
}
}