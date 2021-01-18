
function text_reply(e, text){
  var postData = {
    "replyToken": e.replyToken,
    "messages": [{
      "type": "text",
      "text": text
      }]
    };
  var url = "https://api.line.me/v2/bot/message/reply";
  fetch_data(postData,url);
};

function text_push(e, id, text){
  var postData = {
    "to": id,
    "messages": [{
      "type": "text",
      "text": text
      }]
    };
  var url = "https://api.line.me/v2/bot/message/push";
  fetch_data(postData,url);
};

function text_contents_reply(e, text, contents){
  var postData = {
    "replyToken": e.replyToken,
      "messages": [
      {
        "type": "text",
        "text": text
      },
      {
      "type" : "flex",
      "altText" : "シフト",
      "contents": contents
      }]
    };
  var url = "https://api.line.me/v2/bot/message/reply";
  fetch_data(postData,url);
};

function contents_reply(e, contents){
  var postData = {
    "replyToken": e.replyToken,
      "messages": [
      {
      "type" : "flex",
      "altText" : "シフト",
      "contents": contents
      }
    ]
  };
  var url = "https://api.line.me/v2/bot/message/reply";
  fetch_data(postData,url);
};

function contents_push(e, contents){    
  var postData = {
    "to": group_id,
    "messages": [
      {
      "type" : "flex",
      "altText" : "シフト交代依頼",
      "contents": contents
      }
    ]
  };
  
  var url = "https://api.line.me/v2/bot/message/push";
  fetch_data(postData,url);
};

function fetch_data(postData,url) {
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  var response = UrlFetchApp.fetch(url, options);
};
