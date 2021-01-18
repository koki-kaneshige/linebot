
function set_result(e, data, dataKey){
  var userSheet = spreadsheet.getSheetByName(dataKey + "_user");
  
  var lastRow = getLastRow(userSheet, "A");
  
  var gestId = e.source.userId;
  var gestName = get_name(gestId);
  var result = data;
  
  for(var i=1; i<=lastRow; i++){
    var point = userSheet.setActiveCell("A" + i).getValue();
    if(point == gestId){
      userSheet.deleteRows(i);
      i--;
    }
  }
  
  var insertRow = getLastRow(userSheet, "A")+1;
  userSheet.getRange("A" + insertRow).setValue(gestId);
  userSheet.getRange("B" + insertRow).setValue(gestName);
  userSheet.getRange("C" + insertRow).setValue(result);
  
}
