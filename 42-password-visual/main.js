/* exported PasswordTextbox */
var PasswordTextbox = function(config) {
  var $pwd = $('<input type="password">'),
      $eye = $('<div></div>'),
      $div = $('<div class="wd-password">密码：</div>');
  $div.append($pwd);
  $div.append($eye);
  $(config.container).append($div);
  this.getPwd = function(){
    return $pwd.val();
  };
};
