function get_reason(e){
  sheet.getRange("A2").setValue("getreason");
  var text = "シフトの交代依頼ですね。理由を教えてください。";
  text_reply(e, text);
};

function set_reason(e){
  sheet.getRange("B2").setValue(e.source.userId);
  sheet.getRange("C2").setValue(e.message.text);
};
