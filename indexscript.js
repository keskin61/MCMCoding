function validateInput () {

  if (document.myform.vorname.value == "") {
    console.log("vorname leere Eingabe.");
    alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
    document.myform.vorname.focus();
    return false;
  }else{ //Vorname wurde eingegeben.(nicht leer).
        var flag=false;
        for (i = 0; i < document.myform.vorname.value.length; ++i){
            if (document.myform.vorname.value.toLowerCase().charAt(i) < "a" ||
            document.myform.vorname.value.toLowerCase().charAt(i)  > "z"){
            flag=true;
            
            }
        }
        if(flag){
            console.log("vorname enthält ungültige Zeichen.");
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.vorname.focus(); 
            return false;
        }
        
    }

  if (document.myform.name.value == "") {
    console.log("name leere Eingabe.");
    alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
    document.myform.name.focus();
    return false;
  }else{ //Vorname wurde eingegeben.(nicht leer).
        var flag=false;
        for (i = 0; i < document.myform.name.value.length; ++i){
            if (document.myform.name.value.toLowerCase().charAt(i) < "a" ||
            document.myform.name.value.toLowerCase().charAt(i)  > "z"){
            flag=true;
            
            }
        }
        if(flag){
            console.log("name enthält ungültige Zeichen.");
            alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
            document.myform.name.focus(); 
            return false;
        }
        
    }
  /*
  
  
  if (document.Formular.email.value == "") {
    alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
    document.Formular.Mail.focus();
    return false;
  }
  if (document.Formular.email.value.indexOf("@") == -1) {
    alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
    document.Formular.Mail.focus();
    return false;
  }
  if (document.Formular.matrikelnr.value == "") {
    alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
    document.Formular.Alter.focus();
    return false;
  }
  var chkZ = 1;
  for (i = 0; i < document.Formular.Alter.value.length; ++i)
    if (document.Formular.Alter.value.charAt(i) < "0" ||
        document.Formular.Alter.value.charAt(i) > "9")
      chkZ = -1;
  if (chkZ == -1) {
    alert("Altersangabe keine Zahl!");
    document.Formular.Alter.focus();
    return false;
  }
  */
}