
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var i;
var gender;
var weekday;


function formAnalysis(){
  event.preventDefault();
  var yearInput = parseInt ( document.getElementById('year').value);
  var monthInput =  document.getElementById('month').value;
  var dayInput = parseInt (document.getElementById('date').value);
  var inputDate = new Date(yearInput+" "+monthInput+" "+dayInput);
   weekday = inputDate.getDay();
  gender = document.getElementsByName('gender').value;
  console.log(weekday);

  function assignDay(){

    if (weekday === 0){
      dayOfWeek = "Sunday"
    }
    else if (weekday=== 1){
      dayOfWeek = "Monday"
    }
    else if (weekday === 2){
      dayOfWeek = "Tuesday"
    }
    else if (weekday=== 3){
      dayOfWeek = "Wednesday"
    }
    else if (weekday === 4){
      dayOfWeek = "Thursday"
    }
    else if (weekday === 5){
      dayOfWeek = "Friday"
    }
    else if (weekday=== 6){
      dayOfWeek = "Saturday"
    }

  }
  assignDay();
  confirmGender();
  validateMonth();
  validateDay();

    document.getElementById("printDay").innerHTML = dayOfWeek;
    i = weekday;
    if (gender === "male"){
      console.log(maleNames[i]);

      document.getElementById("printName").innerHTML = maleNames[i];
    }
    else if(gender === "female"){
        document.getElementById("printName").innerHTML = femaleNames[i];
  }

      function validateMonth () {
      if (monthInput < 1 || monthInput > 12) {
        alert("Please input a valid month, between 1 and 12");

      }

    }

    function validateDay () {
    if (dayInput < 1 || dayInput > 31) {
      alert("Please input a valid day, between 1 and 31");

    }

    }

}

function confirmGender(){
   var sex = document.getElementsByName('gender');

   if(sex[0].checked == true){
      gender = "male";


  }else if(sex[1].checked == true ){
      gender = "female";
  }


}
