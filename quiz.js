function check()
{
	var i = 0;
	var q1 = document.quiz.Frage1.value;
	var q2 = document.quiz.Frage2.value;
	var q3 = document.quiz.Frage3.value;
	var q4 = document.quiz.Frage4.value;
	var q5 = document.quiz.Frage5.value;
	var result = document.getElementById('result');
	var quiz = document.getElementById("quiz");
	if (q1=="LOL") 
	{
		i++;
	}
	if (q2=="LOL2") 
	{
		i++;
	}
	if (q3=="LOL3")
	{
		i++;
	}
	if (q4=="LOL4")
	{
		i++;
	}
	if (q5=="LOL5") 
	{
		i++;
	}
	quiz.style.display="none";
	result.textContent=`${i}`;

	if(i<=1)
	{
		result.textContent=`Dein Ergebnis ist: ${i} Punkte. Es ist nicht so gut.`;
	}
	else if (i==2||i==3) 
	{
		result.textContent=`Dein Ergebnis ist: ${i} Punkte. Es ist in Ordnung.`
	}
	else
	{
		result.textContent=`Dein Ergebnis ist: ${i} Punkte. Es ist sehr gut.`
	}

}