function get_shift(e){
  sheet.getRange("A2").setValue("getshift");
  var text = "わかりました。交代して欲しいシフトを教えてください。";
  text_contents_reply(e, text, shift_temp(e));
}

function set_shift(e, daytime){
  if (daytime == "date"){
    sheet.getRange("D2").setValue(e.postback.params.date);
  }
  if (daytime == "start"){
    sheet.getRange("E2").setValue(e.postback.params.time);
  }
  if (daytime == "end"){
    sheet.getRange("F2").setValue(e.postback.params.time);
  }
  if (daytime == "finish"){
    sheet.getRange("A2").setValue("finish");
    check(e);
  }
}

function shift_temp(e){
  var shift = {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "シフトの選択",
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
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Date",
                      "size": "sm",
                      "flex": 1,
                      "align": "center",
                      "gravity": "center"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "選択",
                      "wrap": true,
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 5,
                      "align": "center",
                      "action": {
                        "type": "datetimepicker",
                        "label": "選択",
                        "data": "shift_date",
                        "mode": "date"
                      },
                      "gravity": "center"
                    }
                  ]
                }
              ],
              "height": "45px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Start Time",
                      "size": "sm",
                      "flex": 1,
                      "align": "center",
                      "gravity": "center"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "選択",
                      "wrap": true,
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 5,
                      "align": "center",
                      "action": {
                        "type": "datetimepicker",
                        "label": "選択",
                        "data": "shift_start",
                        "mode": "time"
                      },
                      "gravity": "center"
                    }
                  ]
                }
              ],
              "height": "45px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "End Time",
                      "size": "sm",
                      "flex": 1,
                      "align": "center",
                      "gravity": "center"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "選択",
                      "wrap": true,
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 5,
                      "align": "center",
                      "action": {
                        "type": "datetimepicker",
                        "label": "選択",
                        "data": "shift_end",
                        "mode": "time"
                      },
                      "gravity": "center"
                    }
                  ]
                }
              ],
              "height": "45px"
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "height": "sm",
          "action": {
            "type": "postback",
            "label": "確定",
            "data": "shift_finish"
          },
          "color": "#66cdaa"
        },
        {
          "type": "spacer",
          "size": "sm"
        }
      ],
      "flex": 0
    }
  }
  return shift;
};
