
/*##########################################################################################################################

Name:getdata

arg:num, number of pages you want back from the top of the site

use: fetches data from script var or a drive sheet

returns: array of arrays of data [[data,data,data],[data,data,data],[data,data,data]] (i think it is [(col A[(row 0) 0.0,(row 1)0.1,0.2],col B[1.0,1.1,1.2])

dependcies: sheets api

*##########################################################################################################################*/

function user_storage_getkeys(){

  //gets current script properties/ persistent variables

  var scriptvar = PropertiesService.getScriptProperties();

  //gets the list of keys in those vars

  var keys = scriptvar.getKeys();

  //retruns those values

  return keys; 

}

 

  /*##########################################################################################################################

  Name:getdata

  arg:id:

  use: fetches data from script var or a drive sheet

  returns: data (a string)

  dependcies: PropertiesService

  *##########################################################################################################################*/

 function user_storage_getdata(id){

    //gets current script properties/ persistent variables

    var scriptvar = PropertiesService.getScriptProperties();

    //gets the lsit of keys in those vars

    var keys = scriptvar.getKeys();

    var keyfound = false;

    //checks to see if keys still exist

    for(var i = 0; i < keys.length;i++){

      if(keys[i]== id){

        keyfound = true;

      }

    }

    return JSON.parse(scriptvar.getProperty(id));
  }

 

  /*##########################################################################################################################

  Name:setdata

  arg:id: , data:

  use: sets data in the data store(note data is serlized)

  returns:void

  dependcies: PropertiesService

  *##########################################################################################################################*/

 function user_storage_setdata(id,data){

    //gets current script properties/ persistent variables

    var scriptvar = PropertiesService.getScriptProperties();

    //gets the lsit of keys in those vars

    var keys = scriptvar.getKeys();

    var keyfound = false;

    //checks to see if keys still exist

    for(var i = 0; i < keys.length;i++){

      if(keys[i]== id){

        keyfound = true;

      }

    }

    scriptvar.setProperty(id,JSON.stringify(data));

  }

  /*##########################################################################################################################

  Name:deldata

  arg:id: , data:

  use: del data in the data store

  returns:void

  dependcies: PropertiesService

  *##########################################################################################################################*/

 function user_storage_deldata(id){

    //gets current script properties/ persistent variables

    var scriptvar = PropertiesService.getScriptProperties();

    //gets the lsit of keys in those vars

    var keys = scriptvar.getKeys();

    var keyfound = false;

    //checks to see if keys still exist

    for(var i = 0; i < keys.length;i++){

      if(keys[i]== id){

        keyfound = true;

      }

    }
   if(keyfound){
     scriptvar.deleteProperty(id)
   }

  }
