
function userFormDetails(){
    console.log("here");

    
    document.getElementById("thankyoudiv").innerHTML+= `<h1 class="mainH">Hello , ${JSON.parse(localStorage.getItem("formData")).firstName} ${JSON.parse(localStorage.getItem("formData")).lastName}</h1 id="header"> </br> We have recieved your message and will answer as fast as possible! <br> response will be sent to: ${JSON.parse(localStorage.getItem("formData")).email} <br>
    
    the message we have recieved is: <br>
    <p>"${JSON.parse(localStorage.getItem("formData")).text} "</p>
    <br>
    <a class="socLinks" href="index.html">
Click Here To return :)
</a>`

    }

    userFormDetails();
