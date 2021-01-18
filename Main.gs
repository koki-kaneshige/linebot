var CHANNEL_ACCESS_TOKEN = "hCOh9IsAqJ8rhbuiVNSHAvRlU1M0w0U7SpYEa4gHExt9BKY36r7QH9YOlPGKjJ+56zjn1sPGyf2MAJipTHpn27toIFhZDqvEkc6T6oHPpGY4i/COvycchPn4w75RHvTdmO7hu1BvO4Uw/gHf/sjT5wdB04t89/1O/w1cDnyilFU=";
var spreadsheet = SpreadsheetApp.openById("1AtQ-5l4FYwYc5mlQfUNSOgkfxdsU0f0Y9pUv6G2ui3w");
var sheet = spreadsheet.getSheetByName("main");
var keySheet = spreadsheet.getSheetByName("key");

//var group_id = "Cc65617c1081947e549910b48f9f39183";  //ワンカルビホール
var group_id = "Ceb96f55dd34928437c533661a8f0011c";  //テストグループ
//var koki_id = "Uddf00f2f13e35b8d3d6a1a4ce4bb66fe";

var mode = sheet.getRange("A2").getValues();

function doGet(e) {
  var param = e.parameter;
  sheet.getRange("A3").setValue(param);
  const file = HtmlService.createTemplateFromFile("check").evaluate();
  return file;
}

function doPost(e) {
  var contents = e.postData.contents;
  var obj = JSON.parse(contents);
  var events = obj["events"];
  
  //sheet.getRange("J2").setValue(events[0].source.groupId);
  
  for (var i = 0; i < events.length; i++) {
    if (events[i].type == "postback") {
      post_back(events[i]);
    } else if ((events[i].type == "message") && (events[i].message.type == "text") && (events[i].source.groupId != group_id)) {
      message_back(events[i]);
    } else if (events[i].type == "join"){
      sheet.getRange("A5").setValue(events[i].source.groupId);
    }
  }
};

function message_back(e){
  var input_text = e.message.text;

  if (input_text == "終了"){
    remake(e);
  }else if (input_text == "交代"){
    get_reason(e);
  }else{
    if (mode == "getreason"){
      set_reason(e);
      get_shift(e);
    }else{
      remake(e);
    }
  }
};

function post_back(e){  
  var data = e.postback.data;
  var dataHead = data.split("_")[0];
  var dataTail = data.split("_")[1];
  var dataKey = data.split("_")[2];
  
 
  if ((dataHead == "shift")&&(mode == "getshift")){
    set_shift(e, dataTail);
  }else if ((dataHead == "check")&&(mode == "finish")) {
    if (dataTail == "ok") {
      pushToGroup(e);
    }else if (dataTail == "no") {
      remake(e);
    }
  }else if (dataHead == "result") {
    set_result(e, dataTail, dataKey);
  }
};

function remake(e){
  sheet.getRange("A2:G2").clearContent();
  var text = "初めからやり直して下さい。";
  text_reply(e, text);
}
