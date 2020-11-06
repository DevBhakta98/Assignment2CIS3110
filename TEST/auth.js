function lag()
 {
        var u = document.getElementById("username").value;

          if (u.length < 1)
            {
              window.alert("Field is blank");
                return false;
            }
            
        var p = document.getElementById("password").value; 
          if (p.length < 1)
            {
              window.alert("Field is blank");
                return false;
            }
      
      var UNVal = document.getElementById("username").value;   
      var PWDVal = document.getElementById("password").value;   
          console.log("User: "+UNVal+" Password: "+PWDVal);
          console.log(document.cookie);

{
  if(document.cookie)
  {
     window.location.href = "button3.html";
     window.alert("Welcome Back!");
               return false;
  }
  
}
  }
  
