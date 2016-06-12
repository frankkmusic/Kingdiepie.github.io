var subButton = document.getElementById('subButton');
var finalGPA = 0;
var finalWGPA = 0;
var totalWGrade = 0;
var totalGrade = 0;
subButton.addEventListener('click', getUserName, false); 
subButton2.addEventListener('click', getPercentNeeded, false); 

var getPoints = function(g){
  if(g==='a')
    return 4;
  if(g==='b')
    return 3;
  if(g==='c')
    return 2;
  if(g==='d')
    return 1;
  return 0;
};

function getUserName() {
var gpan = document.getElementById('gpan').value;
var gpah = document.getElementById('gpah').value;
var gpaap = document.getElementById('gpaap').value;
var gpa1 = document.getElementById('gpa1').value;
var gpa2 = document.getElementById('gpa2').value;
var gpa3 = document.getElementById('gpa3').value;
var gpa4 = document.getElementById('gpa4').value;
var gpa5 = document.getElementById('gpa5').value;
var gpa6 = document.getElementById('gpa6').value;
var gpa7 = document.getElementById('gpa7').value;
var gpa8 = document.getElementById('gpa8').value;
var gpa9 = document.getElementById('gpa9').value;
var gpaResult = document.getElementById('gpaResult');

totalGrade += getPoints(gpa1);
totalGrade += getPoints(gpa3);
totalGrade += getPoints(gpa2);
totalGrade += getPoints(gpa4);
totalGrade += getPoints(gpa5);
totalGrade += getPoints(gpa6);
totalGrade += getPoints(gpa7);
totalGrade += getPoints(gpa8);
totalGrade += getPoints(gpa9);
finalGPA = totalGrade / gpan;
totalWGrade = totalGrade + 0.5*gpah + 1*gpaap;
finalWGPA = totalWGrade / gpan;


if (gpan < 2) {
    gpaResult.textContent = 'You must 5nter two or more grades';
    //alert('Username must contain at least 3 characters');
} else {
    gpaResult.textContent = 'Your unweighted GPA is ' + finalGPA + ' and your weighted GPA is ' + finalWGPA;
    //alert(nameField);
}

}

function getPercentNeeded() {
  var percentneeded;
  var Cgrade = document.getElementById('Cgrade').value;
  var WGrade = document.getElementById('WGrade').value;
  var Fworth = document.getElementById('Fworth').value;
  var percentNeeded = document.getElementById('percentNeeded');

  percentneeded = (100*WGrade-(100-Fworth)*Cgrade)/Fworth; 
  
  percentNeeded.textContent = "You need a " + percentneeded + '% to get a ' + WGrade + '%';  
  
}
