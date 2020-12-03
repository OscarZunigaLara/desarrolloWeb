
$(document).ready(function(){ 
    $("form").submit(function(){
      alert("Submitted");
    });
    $("#bot").click(function(){
      alert('ok');

      var SendInfo={
      "username":document.getElementById("mail").value,
      "password":document.getElementById("password").value,
      "nombre":document.getElementById("nombre").value,
      "trato":document.getElementById("genero").value,
      "apPaterno":document.getElementById("appPaterno").value,
      "apMaterno":document.getElementById("appMaterno").value,
      "telefono":document.getElementById("telefono").value};
      
      $.ajax({
        
        type: 'POST',
        url: 'https://boy1h73ij7.execute-api.us-east-1.amazonaws.com/default/creaCuentaA01654827',
        data: JSON.stringify(SendInfo),
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (data) {
            console.log("result: " + data['result']);
            if (data['result'] = 'success')
            {
                location.replace("\homeLogeado.html")
                alert('succes');
            }
            else{
                alert('failed');
                location.replace("\login.html")

            }
        }
        
    }); 
    });
  });

