function check(e){
  var checkText = "このシフトで間違いないですか？";

  var date = Utilities.formatDate(new Date(sheet.getRange('D2').getValues()), "JST", "MM/dd(EEE)");
  var intime = Utilities.formatDate(new Date(sheet.getRange("E2").getValues()),"JST","HH:mm");
  var outtime = Utilities.formatDate(new Date(sheet.getRange("F2").getValues()),"JST","HH:mm");

  var text = [date, intime  + '~' + outtime,].join("");
  sheet.getRange("G2").setValue(text);

  var checkData = getCheckData(text);
  text_contents_reply(e, checkText, checkData);
}

function getCheckData(text){
    var cd = {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "シフトの確認",
            "size": "sm",
            "align": "center",
            "decoration": "none",
            "color": "#ffffff"
          }
        ],
        "backgroundColor": "#3cb371"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": text,
                    "size": "sm",
                    "flex": 1,
                    "align": "center"
                  }
                ]
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "postback",
                      "label": "送信",
                      "data": "check_ok"
                    },
                    "color": "#ffffff"
                  }
                ],
                "borderColor": "#3cb371",
                "margin": "md",
                "backgroundColor": "#3cb371",
                "cornerRadius": "20px"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "postback",
                      "label": "やり直し",
                      "data": "check_no"
                    },
                    "color": "#ffffff"
                  }
                ],
                "margin": "md",
                "backgroundColor": "#66cdaa",
                "cornerRadius": "20px"
              }
            ],
            "borderColor": "#3cb371",
            "margin": "lg",
            "spacing": "none"
          }
        ]
      }
    };
    return cd;
};
