function myFunction() {
  var url = "https://liff.line.me/1653968577-qbmZLkj2"; // ここへ開きたいURLを入力してください。
  var script = "<script>window.open('" + url + "', '_blank').focus()</script>";
  var html = HtmlService.createHtmlOutput(script);
  SpreadsheetApp.getUi().showModalDialog(html, 'Open ' + url);
}
