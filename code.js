/**
 * This code can be used as a template for serving multiple HTML
 * pages in a single Apps Script project. Note that the default
 * page is titled "Index" the title for all other pages can be
 * retrieved by using [e.parameter.page].
 */

/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}

/**
 * Get "home page", or a requested page.
 * Expects a 'page' parameter in querystring.
 *
 * @param {event} e Event passed to doGet, with querystring
 * @returns {String/html} Html to be served
 */
function doGet(e) {
  //Logger.log( Utilities.jsonStringify(e) ); // Shows web page details
  if (!e.parameter.page) {
    return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle("K.M.S Kerjava's Module System");
  }
  // else, use page parameter to pick an html file from the script
  
  return HtmlService.createTemplateFromFile(e.parameter.page)
      .evaluate()
      .setTitle(e.parameter.page);
}

/**
 * ****************************************************************************************
 */

function elect_clr(){
   var this_user = Session.getActiveUser().getEmail();
   user_storage_deldata(this_user + "elect");
}


/**
 * 
 */
function elect_load(){
  var this_user = Session.getActiveUser().getEmail();
  var data = user_storage_getdata(this_user + "elect");
  return data;
}

function elct_save(data){
  var this_user = Session.getActiveUser().getEmail();
  Logger.log(data[0].name);
  user_storage_setdata(this_user + "elect",data);
}



function elct_clr(){
   var this_user = Session.getActiveUser().getEmail();
   user_storage_deldata(this_user + "elect");
}


/**
 * ****************************************************************************************
 */

/**
 * 
 */
function band_load(){
  var this_user = Session.getActiveUser().getEmail();
  var data = user_storage_getdata(this_user + "bandwidth");
  return data;
}
/**
 * 
 */
function band_save(data){
  var this_user = Session.getActiveUser().getEmail();
  Logger.log(data[0].name);
  user_storage_setdata(this_user + "bandwidth",data);
}



/**
 * ****************************************************************************************************************************************************************
 */

var global = {};

/**
 * 
 */
function message_makechan(channame){
var this_user = Session.getActiveUser().getEmail();

  var this_user = Session.getActiveUser().getEmail();
  Logger.log(data[0].name);
  user_storage_setdata(this_user + "bandwidth",data);
}
/**
 * 
 */
function message_removechan(channame){


}
/**
 * data 0 : channame
 * data 1 : timestamp
 */
function message_check(data){
  var this_user = Session.getActiveUser().getEmail();
  if(data.length > 1){
  
    
  }else{
  
  
  }
}
/**
 * 
 */
function message_send(data){
 var this_user = Session.getActiveUser().getEmail();
  //Logger.log(data[0].name);
  storage_setdata(this_user + "messager",data);
}

function message_saveuser(data){
  var this_user = Session.getActiveUser().getEmail();
  Logger.log(data[0].name);
  user_storage_setdata("message_userdata",data);
}

function message_savechanel(name,pub){

}
function message_delchanel(name){

}


