(function() {
  'use strict';

  var undefinedVar = undefined;
  var notificationsTitle = 'Notifications';
  var proxyDetectedMessage = 'Proxy Detected';
  var notifyAdminsMessage = 'Notify Admins when a proxy is detected?';
  var enabledMessage = 'Enabled';
  var proxyDisabledMessage = 'Proxy Disabled';
  var proxyReenabledMessage = 'Proxy Reenabled';
  var detectProxiesAgainMessage = 'Detect Proxies Again';
  var requestUrlMessage = 'Request URL:';
  var requestStatusMessage = 'Request Status:';
  var serverDetailsMessage = 'Server Details';
  var proxyBlockerScriptMessage = 'Proxy Blocker Script';

  var proxyBlocker = {
    init: function() {
      console.log(proxyBlockerScriptMessage);
      this.detectProxy();
    },
    
    detectProxy: function() {
      console.log(proxyDetectedMessage);
      alert(notifyAdminsMessage);
      this.notifyAdmins();
    },
    
    notifyAdmins: function() {
      console.log(notificationsTitle);
      console.log(enabledMessage);
    },
    
    disableProxy: function() {
      console.log(proxyDisabledMessage);
    },
    
    reenableProxy: function() {
      console.log(proxyReenabledMessage);
    },
    
    requestDetails: function(url, status) {
      console.log(requestUrlMessage + ' ' + url);
      console.log(requestStatusMessage + ' ' + status);
    },
    
    getServerDetails: function() {
      console.log(serverDetailsMessage);
    }
  };

  proxyBlocker.init();
})();
