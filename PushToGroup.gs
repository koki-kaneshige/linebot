
function pushToGroup(e){
  sheet.getRange("A2").clearContent();
  
  var datetime = sheet.getRange("G2").getValue();
  var insertRow = getLastRow(keySheet, "A")+1;
  var setKey = getRamdomInt();
  keySheet.getRange("A" + insertRow).setValue(setKey);
  keySheet.getRange("B" + insertRow).setValue(e.source.userId);
  keySheet.getRange("C" + insertRow).setValue(datetime);
  
  var contents = getPushCont(e, setKey, datetime);

  contents_push(e, contents);
  var text = "グループで交代を依頼しました。"; 
  text_reply(e, text);
  count();
  
  makeSheet(setKey);
  sheet.getRange("B2:G2").clearContent();
}

function count(){
  var count = sheet.getRange("I2").getValue();
  count = count + 1;
  sheet.getRange("I2").setValue(count);
};

function getPushCont(e, setKey, datetime){
  var name = get_name(e.source.userId);
  var reason = sheet.getRange("C2").getValue();
  var count = sheet.getRange("I2").getValue();
  
  var pc = {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "シフトの交代依頼",
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
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "名前:",
                      "color": "#808080"
                    }
                  ],
                  "width": "40px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": name,
                      "wrap": true
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
                      "type": "text",
                      "text": "日時:",
                      "color": "#808080"
                    }
                  ],
                  "width": "40px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": datetime,
                      "wrap": true,
                      "color": "#cd5c5c"
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
                      "type": "text",
                      "text": "理由:",
                      "color": "#808080"
                    }
                  ],
                  "width": "40px"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": reason,
                      "wrap": true
                    }
                  ]
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "回数: " + count + "/20",
                  "color": "#808080",
                  "align": "end"
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
                    "label": "OK",
                    "displayText": name + "さん代われます!",
                    "data": "result_ok_" + setKey
                  },
                  "color": "#ffffff"
                }
              ],
              "backgroundColor": "#3cb371",
              "cornerRadius": "20px",
              "margin": "md"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "postback",
                    "label": "NO",
                    "data": "result_no_" + setKey
                  },
                  "color": "#ffffff"
                }
              ],
              "backgroundColor": "#66cdaa",
              "cornerRadius": "20px",
              "margin": "md"
            }
          ],
          "margin": "sm"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "確認する",
                "uri": "https://liff.line.me/1653968577-qbmZLkj2?key=" + setKey
              },
              "color": "#3cb371",
              "gravity": "bottom"
            }
          ],
          "cornerRadius": "20px",
          "margin": "lg"
        }
      ]
    }
  }
  return pc;
}
