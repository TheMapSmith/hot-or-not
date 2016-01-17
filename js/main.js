// http://stackoverflow.com/questions/23148292/javascript-function-change-content-onclick
 function changeText(pick) {
    if(pick==1){
        document.getElementById('topFirstName').innerHTML ='Jules';
        document.getElementById('topMiddleName1').innerHTML ='Ludwig';
        document.getElementById('topMiddleName2').innerHTML ='Horatio';
        return false;
    }
    else {
      document.getElementById('botFirstName').innerHTML ='Mike';
      document.getElementById('botMiddleName1').innerHTML ='Jones';
      document.getElementById('botMiddleName2').innerHTML ='Ebenezer';
      return false;
    }
 }
