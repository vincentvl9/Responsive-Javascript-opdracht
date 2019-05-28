	//javascript voor opdracht 1  
	
	console.log("test");
	  function calculate() { //exercise 01
	 
	    var mijnNummer1 = parseInt(document.getElementById("mijnNummer1").value);
	    var mijnNummer2 = parseInt(document.getElementById("mijnNummer2").value);
		var operators   = document.getElementsByName("reken");
		
		var selectedOperator = "plus";
	    var myAnswer = -1;
	   
	    if (isNaN(mijnNummer1) == true || isNaN(mijnNummer2) == true) {
	      document.getElementById("result").innerHTML = "Er is geen geldig nummer ingevoerd";
		  document.getElementById("result").style.display = "block";
		  return false; //foutmelding
	    }
	  
	  for (index = 0; index < operators.length; index++) {
	  
	    if (operators[index].checked) {
		  selectedOperator = operators[index].value;
		  break;
		}
	   }
	   
	   switch (selectedOperator) {
	     case "plus":
		   myAnswer= mijnNummer1 + mijnNummer2;
		   break;
		   
		 case "minus":
		   myAnswer= mijnNummer1 - mijnNummer2;
		   break;
		   
		 case "multiply":
		   myAnswer= mijnNummer1 * mijnNummer2;
		   break;
		 
		 case "devide":
		   myAnswer= mijnNummer1 / mijnNummer2;
		   break;
	   }
	   
	   document.getElementById("result").style.display = "block";
	   document.getElementById("result").innerHTML	   = mijnNummer1 + " " + selectedOperator + " " + mijnNummer2 + " = " + myAnswer.toFixed(2);
	   
	 }
	 