document.getElementById('error').style.display = 'none'
document.getElementById('submit-buttton').addEventListener('click', function() {
    //get the email from the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    

    //get password from the password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value ;

    document.getElementById('error').style.display = 'none'

    if (email == "admin@gmail.com" && password == "123456") {
      window.location.href = "../banking.html";
    }else {
       document.getElementById('error').style.display = 'block'
    }
  
   
})