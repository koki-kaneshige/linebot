function makeSheet(key){ 
  spreadsheet.insertSheet(key + "_user");
}

/*function getSheet(name){
  var ssId = 'スプレッドシートのURLで"d/"と"/edit"に挟まれているID';
  var ss = SpreadsheetApp.openById(ssId);
  var sheet = ss.getSheetByName(name);
  return sheet;
}*/

function getData(sheet) {
  var values = sheet.getDataRange().getValues();//スプレッドシートのシート名
  return values;
}