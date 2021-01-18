function monthly(){
  sheet.getRange("I2").setValue(1);
};

function weekly(){
  var date = new Date();
  date = (Utilities.formatDate(date, 'Asia/Tokyo', 'MM/dd'));
  //var archivedate = new Date();
  Logger.log(date);
  var lastRow = getLastRow(keySheet, "A");
  
  for (var i=2; i<=lastRow; i++){
    var archivedate = new Date(keySheet.setActiveCell("C" + i).getValue());
    //archivedate = keySheet.setActiveCell("C" + i).getValue();
    archivedate = Utilities.formatDate(archivedate, 'Asia/Tokyo', 'MM/dd');
    Logger.log(archivedate);
    // 日付の大小を比較（比較結果の差異を「時間」に換算）
    var jadgeRange = (date - archivedate);
    Logger.log(jadgeRange);
    /*if(archivedate　< date){
      keySheet.deleteRows(i);
      i--;
    }*/
  }
};

function archive(){
  var lastrow = getLastRow(keySheet, "C");
  var nowDate = new Date();
  var date = new Date(nowDate.getYear(), nowDate.getMonth(), nowDate.getDate());
  var fdate = Utilities.formatDate(new Date(date), "JST", "YY-MM-dd");
  
  for(var i = 2; i <= lastrow; i++){
    var xdate = new Date(keySheet.setActiveCell("C" + i).getValue());
    var fxdate = Utilities.formatDate(new Date(xdate), "JST", "YY-MM-dd");
    if(fdate > fxdate){
      keySheet.deleteRows(i);
      i--;
    }else if(keySheet.setActiveCell("C" + i).isBlank() == true){
      keySheet.deleteRows(i);
      i--;
    };
  };
};
