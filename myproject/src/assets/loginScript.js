
$(document).ready(function(){ 
    $("form").submit(function(){
      alert("Submitted");
    });
    $("#bot").click(function(){
      alert('ok');

      var SendInfo={
      "mail":document.getElementById("mail").value,
      "password":document.getElementById("password").value
    };
      
      $.ajax({
        
        type: 'POST',
        url: 'https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/validacuenta',
        data: JSON.stringify(SendInfo),
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (data) {
            console.log("Response: " + data['result']);
            if (data['result'] = 'success')
            {
                location.replace("\homeLogeado.html")
                alert('succes');
            }
        }
    }); 
    });
  });

