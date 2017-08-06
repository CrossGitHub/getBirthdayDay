function bornDay(date) {
  var week=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return week[date.getDay()];
}

function birthFlower(date) {
  var flowers=["Carnation", "Iris", "Daffodil", "Daisy", "Lily_of_the_Valley", "Rose",
   "Larkspur", "Gladiolus", "Aster", "Calendula", "Chrysanthemum", "Paperwhite_Narcissus"];
  return flowers[date.getMonth()];
}

function zodiac(date) {
  var day=date.getDay();
  var month=date.getMonth();
  var zodiac = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
  var last_day = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20];
  return (day > last_day[month]) ? zodiac[month+1] : zodiac[month];
}

function element(zodiac) {
  switch (zodiac) {
    case 'Capricorn':
    case 'Virgo':
    case 'Taurus': return 'Earth'; break;
    case 'Aries':
    case 'Leo':
    case 'Sagittarius': return 'Fire'; break;
    case 'Pisces':
    case 'Scorpio':
    case 'Cancer': return 'Water'; break;
    case 'Gemini':
    case 'Libra':
    case 'Aquarius': return 'Air'; break;
  }
}

function yesIwant() {
var userYear=prompt("Insert the year you was born:", "1970");
if (userYear.replace(/\d/g, '').length){ 
  alert ('Incorrect input. Insert number like 2000');
  var userYear=prompt("Insert the year you was born:", "1970");
}
var userMonth=prompt("Insert the month you was born:", "01")-1;
if ((typeof userMonth)!="number"||isNaN(userMonth)||userMonth>11){ 
  alert ('Incorrect input. Insert number from 1 to 12. For instance if it January, insert 1 or 01');
  var userMonth=prompt("Insert the month you was born:", "01")-1;
}
var userDate=prompt("And finally insert the date", "01");
if (userDate.replace(/\d/g, '').length||userDate>31){ 
  alert ('Incorrect input. Insert number from 1 to 31. For instance if it is 1st of February insert 1 or 01');
  var userDate=prompt("And finally insert the date", "01");
}
var userBirthday=new Date(userYear, userMonth, userDate);
// first section
var topword=document.getElementsByClassName("topword");
topword[0].innerHTML="Results:";
// creating slider
var num=0;
function next() {
  num++;
  if (num>=imagesarr.length) {
    num=0;
  }
  img.src=imagesarr[num];
}
function prev() {
  num--;
  if (num<0){
    num=imagesarr.length-1;
  }
  img.src=imagesarr[num];
}
var imagesarr=[];
imagesarr[0]="images/week_days/"+bornDay(userBirthday)+".jpg";
imagesarr[1]="images/zodiaс_signs/"+zodiac(userBirthday)+".jpg";
imagesarr[2]="images/elements/"+element(zodiac(userBirthday))+".jpg";
imagesarr[3]="images/flowers/"+birthFlower(userBirthday)+".jpg";
var fp2=document.getElementById("fp2");
fp2.innerHTML="";
var sliderdiv=document.createElement("div");
fp2.appendChild(sliderdiv);
sliderdiv.id="sliderdiv";
var arrowleft=document.createElement("img");
var arrowright=document.createElement("img");
var img=document.createElement("img");
arrowleft.src="images/arrowleft.png";
arrowright.src="images/arrowright.png";
arrowleft.onclick=prev;
arrowright.onclick=next;
arrowleft.id="arrowleft";
arrowright.id="arrowright";
arrowleft.alt="arrowleft";
arrowright.alt="arrowright";
img.id="slidershowimage"
img.src=imagesarr[num];
img.alt="image with results";
sliderdiv.appendChild(arrowleft);
sliderdiv.appendChild(img);
sliderdiv.appendChild(arrowright);
// last section
document.getElementById("button").innerHTML="Do it again!";
}