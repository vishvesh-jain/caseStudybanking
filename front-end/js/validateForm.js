function validateUpdateForm()
{
	

	  var usr_name= document.forms["update"]["usr_name"].value;
	  var address = document.forms["update"]["address"].value;
	  var age = document.forms["update"]["age"].value;


		if(usr_name == "")
		{
			alert("new name field empty !");
			return false;
		}  	
		if(address == "")
		{
			alert("address field empty !");
			return false;
		}  		
		
		if(age == "")
		{
			alert("age field empty !");
			return false;
		}  		
		
}

function validateDeleteForm()
{



	var SSN_Id =document.forms["delete"]["SSN_Id"].value;
	var Customer_Id =document.forms["delete"]["Customer_Id"].value;
	var CustomerName =document.forms["delete"]["Customer_Name"].value;
	var Age=document.forms["delete"]["Age"].value;
	var Address =document.forms["delete"]["Address"].value;


	if(SSN_Id == "")
	{
		alert("SSN_Id field is empty");
		return false;
	}

	if(Customer_Id == "")
	{
		alert("Customer ID field is empty");
		return false;
	}
	
	if(CustomerName == "")
	{
		alert("Customer Name field is empty");
		return false;
	}

	if(Age == "")
	{
		alert("Age field is empty");
		return false;
	}

	if(Address == "")
	{
		alert("Address ID field is empty");
		return false;
	}

}