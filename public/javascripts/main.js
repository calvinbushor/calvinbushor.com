
var newWindow = new NewWindow($('a'));
newWindow.setAsNewWindow();

var tumblr = new TumblrRSS($('.blogroll'), 'http://calvinbushor.tumblr.com/', 1);
tumblr.start();