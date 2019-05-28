// javascript voor opdracht 2 leeftijd

function leefTijd() {
	var dag		= parseInt(document.getElementById("myDag").value);
	var maand	= parseInt(document.getElementById("myMaand").value);
	var jaar 	= parseInt(document.getElementById("myJaar").value);
	
	
	if (isNaN(dag) == true || isNaN(maand) == true || isNaN(jaar) == true) {
		document.getElementById("geboorte").innerHTML = "Er is geen getal ingevoerd";
		return false;
	}

	var myBirthDay = new Date(jaar,maand-1,dag);
	var dayToday   = new Date();

    //var thisDay   = dag.getDate();
	var thisMonth = maand.getMonth()+1;
	var thisYear  = jaar.getYear();
	
	var daysOfTheWeek = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
	
	var myAge = thisYear - jaar;
	
	if (maand < thisMonth) myAge--;
	if (maand == thisMonth) {
		
		if (dag > thisDay) {
			myAge--;
		}
	}
	
	if (myAge < 0) myAge = 0;
	
	document.getElementById("geboorte").style.display = "block";
	document.getElementById("geboorte").innerHTML = "Je bent geboren op een " + daysOfTheWeek[myBirthDay.getDay()]
												  + "<br>Mijn leeftijd is " + myAge;
	}
	
	
