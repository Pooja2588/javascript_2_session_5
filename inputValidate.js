function checkInput(e)
{
	var prev=document.getElementById("detail").value;
	
	var charCode = (e.which) ? e.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
		 {
			document.getElementById("detail").style.backgroundColor="Red";
			 
			 setTimeout(function(e){document.getElementById("detail").style.backgroundColor="white";
			 document.getElementById("detail").value=prev;},3000);
			 return false;
		 }

         return true;
	 
}