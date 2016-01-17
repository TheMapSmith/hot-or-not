

  var person;
  //http://stackoverflow.com/questions/15455289/changing-variable-by-html-button
  function pickPerson(choice) {
    person = choice;
  }
// http://stackoverflow.com/questions/23148292/javascript-function-change-content-onclick
 function changeText(pick) {
   if (!person) {
     alert("Who are you?")
   }
   else {

   // randomly pick 6 new items from the list
   // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
   var topFirstName = nameList[Math.floor(Math.random()*nameList.length)];
   var topMiddleName1 = nameList[Math.floor(Math.random()*nameList.length)];
   var topMiddleName2 = nameList[Math.floor(Math.random()*nameList.length)];

   var botFirstName = nameList[Math.floor(Math.random()*nameList.length)];
   var botMiddleName1 = nameList[Math.floor(Math.random()*nameList.length)];
   var botMiddleName2 = nameList[Math.floor(Math.random()*nameList.length)];

    if(pick==1){
      // add points to the list items


    }
    else {
      // add points to the list items


    }

    // display new items
      document.getElementById('topFirstName').innerHTML = topFirstName;
    //  document.getElementById('topMiddleName1').innerHTML = topMiddleName1;
    //  document.getElementById('topMiddleName2').innerHTML = topMiddleName2;

      document.getElementById('botFirstName').innerHTML = botFirstName;
    //  document.getElementById('botMiddleName1').innerHTML = botMiddleName1;
    //  document.getElementById('botMiddleName2').innerHTML = botMiddleName2;
  } // end name if
 }

var nameList = [
"Phoenix","DeNiro","Beauregard","Astro","Farnsworth","Ebenezer","Cyrus","Johannes",
"Artemis","Herman","Sandy","Dante","Apollo","Nelly","Rosecrans","Yuri","Yosemite",
"Linford","Aeolian","Romeo","Edwin","Jefferson","Germane","Hector","Achilles",
"Lionel","Linus","Waldon","Bjorn","Soren","Remy","Cecil","Talon","Locke","Fletcher",
"Otnel","Naismith","Abner","Erasmus","Raphe","Percival","Marmaduke","Archibald",
"Rockwell","Bannon","Cullen","Kellen","Valentino","Santiago","Niles","Burl","Ludwig",
"Emlyn","Baker","Atlas","Bright"
];
