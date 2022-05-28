let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}


function checkForm(form)
    {
      var ph = document.getElementById("phone").value ; 
       
      if(ph.length != 11) {  
          alert("Error: phone number must be 11 number") ;
          return false;  
      }  
    
      if(form.pwd.value != "" ) {
        if(form.pwd.value.length != 8) {
          alert("Error: Password must be 8 characters!");
          form.pwd.focus();
          return false;
        }
        re = /^[A-Z]/;
        if(!re.test(form.pwd.value)) {
          alert("Error: password must start with uppercase letter!");
          form.pwd.focus();
          return false;
        }
        
        re = /[0-9]/;
        if(!re.test(form.pwd.value)) {
          alert("Error: password must contain at least one number!");
          form.pwd.focus();
          return false;
        }
        re = /[a-z]/;
        if(!re.test(form.pwd.value)) {
          alert("Error: password must contain at least one lowercase letter!");
          form.pwd.focus();
          return false;
        }
        
        re = /[\s]/;
        if(re.test(form.pwd.value)) {
          alert("Error: No white spaces allowed in password");
          form.pwd.focus();
          return false;
        }
        re = /[^A-Za-z0-9]/ ;
        if (!re.test(form.pwd.value)) {
          alert("Error: password must contains a special character");
          form.pwd.focus();
          return false ;
        }
      } 
  
      alert("You entered a valid password: " + form.pwd.value);
      return true;
    }


