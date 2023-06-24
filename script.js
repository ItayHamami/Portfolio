
AOS.init();


const navElement = document.querySelector(".navbar");
window.addEventListener('scroll', () =>{
    if(window.scrollY>=56){
        navElement.classList.add("navbar-scrolled");
        navElement.classList.remove("navbar-light")
        navElement.classList.add("navbar-dark");
    }else if(window.scrollY<56){
        navElement.classList.remove("navbar-scrolled");
        navElement.classList.remove("navbar-dark")
        navElement.classList.add("navbar-light");
    }
})



    function sendval(event) {
        event.preventDefault();
        let formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            text: document.getElementById("textarea").value
            };
        if (formData.firstName.length < 2) {
        alert("First name too short!");
        } else if (formData.lastName.length < 2) {
        alert("Last name is too short!");
       // } else if (formData.email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Please enter valid email!");
        } else if(formData.text.length <2){
            alert("Please Enter text!")
        }
    
        else{
        localStorage.setItem("formData" , JSON.stringify(formData));
        window.location.href= "postform.html";
        }
    }


