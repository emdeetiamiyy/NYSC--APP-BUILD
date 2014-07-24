function sendDistress()
{

    
    var xmlHttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {

 //  alert(xmlhttp.responseText);
      if(xmlhttp.responseText == 1)
    {
          vala = document.getElementById('app'); // = 'message sent';
        // vala.display = 'none'; 
    alert('Your message has been delivered sucessfully');
	var content = document.getElementById('form');
    content.innerHTML = "Your message has been delivered and you will be contacted as soon as possible."; 
    }

      else if(xmlhttp.responseText == 2)
    {
          vala = document.getElementById('app'); // = 'message sent';
        // vala.display = 'none'; 
    alert('Your message was not sent');
  var content = document.getElementById('form');
    content.innerHTML = "Your message was not delivered, please get the new Version of the App to connect with NYSC."; 
    }

      else
          {
         alert('Your message was not delivered ');
         // return "not exist";
          }
      
    }
  }
  //alert('working');
var  stateCode = document.getElementById('stateCode').value;
 //alert(stateCode);
var phoneNumber = document.getElementById('phoneNumber').value;
var comment = document.getElementById('comment').value;
var location = document.getElementById('location').value;
var messageType = document.getElementById('messageType').value;

xmlhttp.open("GET","http://www.admin.nyscmobile.org/login/getDistress.php?stateCode="+stateCode+"&phoneNumber="+phoneNumber+"&message="+comment
    +"&messageType="+messageType, true);
//alert(stateCode);
//alert('okk');
xmlhttp.send();

}
    
