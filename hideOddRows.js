function hideOddRows()
{
	 var objtble = document.getElementById('tble');
	 var x = document.getElementsByTagName("tr");
	 for(var i=0;i<objtble.rows.length;i++)
	 {
		 if(i==1||i%2!=0)
		 {
			 x[i].style.display="none";
		 }
		
			 
	 }
	 
}