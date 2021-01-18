function get_name(userId){
  var headers = {
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };
  var options = {
    "headers": headers
  };
  
  var profile = UrlFetchApp.fetch("https://api.line.me/v2/bot/profile/" + userId,options);
  var content = JSON.parse(profile.getContentText());
  var user_disp_name = content.displayName;
  return user_disp_name;
};
