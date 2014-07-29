function sendDistress()
{
	
	var loc = document.forms["distress"]["location"].value;
	var scode = document.forms["distress"]["stateCode"].value;
	var number = document.forms["distress"]["phoneNumber"].value;
	var type = document.forms["distress"]["messageType"].value;
		
	var sc= scode.substring(0,2);	
	var cc = sc.toUpperCase();
		
    var bc = scode.substring(5,6);
	var batch = bc.toUpperCase();
	
    if ( loc=="" || loc==null || scode=="" || scode==null || number=="" || number==null || type=="" || type==null) {
      alert("All fields with * must be filled!" );
	  return false;
    }
	else{
 //Validate state code and state selected
 if(    (loc=="38" && cc=="AB") || (loc=="2" && cc=="AD") || 
		(loc=="3" && cc=="AK") || (loc=="4" && cc=="AN") ||
		(loc=="5" && cc=="BA") || (loc=="6" && cc=="BY") ||
		(loc=="7" && cc=="BN") || (loc=="8" && cc=="BO") ||
		(loc=="9" && cc=="CR") || (loc=="10" && cc=="DT") ||
		(loc=="11" && cc=="EB") || (loc=="12" && cc=="ED") ||
		(loc=="13" && cc=="EK") || (loc=="14" && cc=="EN") ||
		(loc=="15" && cc=="FC") || (loc=="16" && cc=="GM") ||
		(loc=="17" && cc=="IM") || (loc=="18" && cc=="JG") ||
		(loc=="19" && cc=="KD") || (loc=="20" && cc=="KN") ||
		(loc=="21" && cc=="KT") || (loc=="22" && cc=="KB") ||
		(loc=="23" && cc=="KG") || (loc=="24" && cc=="KW") ||
		(loc=="25" && cc=="LA") || (loc=="26" && cc=="NS") ||
		(loc=="27" && cc=="NG") || (loc=="28" && cc=="OG") ||
		(loc=="29" && cc=="OD") || (loc=="30" && cc=="OS") ||
		(loc=="31" && cc=="OY") || (loc=="32" && cc=="PL") ||
		(loc=="33" && cc=="RV") || (loc=="34" && cc=="SO") ||
		(loc=="35" && cc=="TR") || (loc=="36" && cc=="YB") ||
		(loc=="37" && cc=="ZM") 	)
		{
 //Validate Batch of Service
 if(batch=="A" || batch=="B" || batch=="C"  )
 {
 
 //major CODE THAT SENDS DISTRESS
var next = prompt("Are you sure you want to SEND this DISTRESS message? Type YES to proceed");
	if(next=="YES" || next=="Yes"  || next=="yes" )
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
	}
	else{
	alert("Invalid Service Batch\nPlease check and retry");
	return false;
		}//End of invalid batch
	{
	return false;	
	}//end of submit YES confirmation
	}
	else
	{
	var retry = "Your selected STATE and state-CODE NUMBER do not match!\nPlease check and retry";
	alert(retry);
	return false;
	}
	
		}// checks all * fields ends here
}
    
