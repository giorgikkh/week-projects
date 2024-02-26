function ValidateForm () {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;



    
    if (username === "" ||  emailmail === "" ||  password === "" || password2 ==="") {
        alert("All fields must be filled out");
        return false;
      }


    // Basic username validation
    let usernameRegex = [a-zA-Z0-9]+$ ;

    if (!usernameRegex.test(username)) {
        alert ("invalid username");
        return false
    }

      // Basic email validation
  let emailRegex = /\S+@\S+.\S+/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Password length validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  // Password2  validation
  if (password2 !== password) {
    alert("passwords doesn't match")
    return false
  }

  // If all validations pass, return true to submit the form
  return true;
}
