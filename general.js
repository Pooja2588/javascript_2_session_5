function changeBtn(obj)
{
	var check=obj.style.backgroundColor;
	
	if(check=="blue")
	{
		obj.style.backgroundColor="red";
		obj.innerHTML="Unlike";
	}
	else
	{
		obj.style.backgroundColor="blue";
		obj.innerHTML="Like";
	}
}