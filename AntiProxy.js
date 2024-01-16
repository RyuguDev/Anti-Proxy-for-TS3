var _0x4866 = ["Notify Admins when a proxy is detected?", "Not enough permissions message", "You don't have enough permissions to execute this command.", "Admin Unique IDs used to send important notifications", 'array', 'adminUID', "Admin Client UID", 'groupID', "Admin Group ID", "Whitelist of IP addresses (Please report to lugi@xdefcon.com if false detection, this is a quick fix.)", "Client IP address to whitelist", 'enableSwitch', 'undefined', 'debugSwitch', 'punishmentMessage', "Proxy/VPN detected. Error? Contact: luigi@xdefcon.com or admin", 'notifyOnDetection', 'permissionsMessage', 'tempBanDuration', 'adminGroups', 'admins', 'whitelist', 'event', 'engine', 'backend', 'now', 'chat', 'text', 'isSelf', "!antiproxy enable", "Successfully enabled AntiProxy script.", "Enabling script by command.", "The script is already enabled, type '!antiproxy disable' to disable it.", "!antiproxy disable", "Successfully disabled AntiProxy script.", "Disabling script by command.", "The script is already disabled, type '!antiproxy enable' to enable it.", "!antiproxy info", "\n[b]AntiProxy by xDefcon[/b]\n", "[b]Running time[/b]: ", 'toString', "secs\n", "[b]Proxies detected[/b]: ", "[b]Last detection[/b]: ", 'client', "[b]Checked IPs[/b]: ", 'keys', 'length', "!antiproxy purgecache", "Successfully purged the local IP cache.", "!antiproxy checkall", "Checking all clients now connected to the TeamSpeak server.", "All clients checked.", 'clientIPAddress', 'name', 'getIPAddress', 'uniqueID', 'getServerGroups', 'indexOf', 'getClients', 'forEach', "Running proxy check on all clients.", "[PROXY DETECTED] Client: ", " - IP: ", "Waiting API response for Client: ", 'address', "[WHITELIST] Detected IP in whitelist. Skipping check for: ", "[CACHE] The IP is present in local cache and resulted in a clean address.", 'https://api.xdefcon.com/proxy/check/?ip=', 'http', 'statusCode', 'log', "Could not retrieve info for ", " HTTP_ERROR: ", "RESPONSE: ", 'data', 'parse', 'success', 'proxy', 'valueOf', "rate limit", "[ERROR] API requests limit exceeded, please contact (fuhrmarvin96@gmail.com) to remove this limitation.", "[b][AntiProxy][/b] It seems that you have [b]exceeded[/b] the maximum hourly rate of [b]requests to the API[/b]. ", "avoid this problem, please consider contacting the developer & provider of the API via email at: ", "[b][url=mailto:fuhrmarvin96@gmail.com](fuhrmarvin96@gmail.com)[/url][/b] - ", "The script [b]will continue working with the local cache[/b], no issues about it.", "Error in the API response. Is the API offline? Using cached data. URL: ", "[/URL] (", "\n Total client connections: ", 'getTotalConnections', " - First connection at: ", 'getCreationTime', "Punishment message: ", "Sent poke to Client: ", 'kick', "Kicked Client: ", 'ban', 'substring', "Tempbanned Client: ", " seconds.", "Sent chat message to Client: ", 'Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds', "while (true) {}", 'counter', 'constructor', 'debu', 'gger', 'call', 'action', 'stateObject', 'apply', "function *\\( *\\)", "\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))", 'test', 'chain', 'input', '1.0', "With this script trolls and spammers will become the last problem for your TeamSpeak server, you ban them, they use a VPN or a proxy to reconnect and they can not!", "Marvin F. - Nzxter (fuhrmarvin96@gmail.com)", "Activate the script?", 'yes', "Enable debug messages?", "Punishment when a proxy is detected", 'select', 'poke', 'tempban', 'chatmessage', "none (notify admins only)", "Temp ban duration in seconds", 'punishment', "Punishment message (kick, poke, ban)", 'string'];
(function (_0x55e638, _0x4f71ca) {
  var _0x5ac5be = function (_0x3322e7) {
    while (--_0x3322e7) {
      _0x55e638.push(_0x55e638.shift());
    }
  };
  _0x5ac5be(++_0x4f71ca);
})(_0x4866, 0x10e);
var _0x4c80 = function (_0x4dffdb, _0x31ea03) {
  _0x4dffdb = _0x4dffdb - 0x0;
  var _0x4a3604 = _0x4866[_0x4dffdb];
  return _0x4a3604;
};
var _0x3c8a94 = function () {
  var _0x406fba = true;
  return function (_0x1adba7, _0x3fe5f8) {
    var _0x1f1756 = _0x406fba ? function () {
      if (_0x3fe5f8) {
        var _0x375eec = _0x3fe5f8[_0x4c80('0x0')](_0x1adba7, arguments);
        _0x3fe5f8 = null;
        return _0x375eec;
      }
    } : function () {};
    _0x406fba = false;
    return _0x1f1756;
  };
}();
(function () {
  _0x3c8a94(this, function () {
    var _0x5e9329 = new RegExp(_0x4c80('0x1'));
    var _0x365e73 = new RegExp(_0x4c80('0x2'), 'i');
    var _0x26ba8e = _0x50e265('init');
    if (!_0x5e9329[_0x4c80('0x3')](_0x26ba8e + _0x4c80('0x4')) || !_0x365e73[_0x4c80('0x3')](_0x26ba8e + _0x4c80('0x5'))) {
      _0x26ba8e('0');
    } else {
      _0x50e265();
    }
  })();
})();
registerPlugin({
  'name': "AntiProxy - VPN/Proxy Blocker",
  'version': _0x4c80('0x6'),
  'description': _0x4c80('0x7'),
  'author': _0x4c80('0x8'),
  'vars': {
    'enableSwitch': {
      'title': _0x4c80('0x9'),
      'type': 'select',
      'options': ['no', _0x4c80('0xa')]
    },
    'debugSwitch': {
      'title': _0x4c80('0xb'),
      'type': 'select',
      'options': ['no', _0x4c80('0xa')]
    },
    'punishment': {
      'title': _0x4c80('0xc'),
      'type': _0x4c80('0xd'),
      'options': [_0x4c80('0xe'), 'kick', _0x4c80('0xf'), _0x4c80('0x10'), _0x4c80('0x11')]
    },
    'tempBanDuration': {
      'title': _0x4c80('0x12'),
      'type': 'number',
      'conditions': [{
        'field': _0x4c80('0x13'),
        'value': 0x2
      }]
    },
    'punishmentMessage': {
      'title': _0x4c80('0x14'),
      'type': _0x4c80('0x15'),
      'placeholder': "Proxy/VPN detected. Error? Contact: luigi@xdefcon.com or admin"
    },
    'notifyOnDetection': {
      'title': _0x4c80('0x16'),
      'type': _0x4c80('0xd'),
      'options': ['no', _0x4c80('0xa')]
    },
    'permissionsMessage': {
      'title': _0x4c80('0x17'),
      'type': _0x4c80('0x15'),
      'placeholder': _0x4c80('0x18')
    },
    'admins': {
      'title': _0x4c80('0x19'),
      'type': _0x4c80('0x1a'),
      'vars': [{
        'name': _0x4c80('0x1b'),
        'indent': 0x1,
        'title': _0x4c80('0x1c'),
        'type': _0x4c80('0x15')
      }]
    },
    'adminGroups': {
      'title': "Admin Group IDs used to send important notifications",
      'type': _0x4c80('0x1a'),
      'vars': [{
        'name': _0x4c80('0x1d'),
        'indent': 0x1,
        'title': _0x4c80('0x1e'),
        'type': 'number'
      }]
    },
    'whitelist': {
      'title': _0x4c80('0x1f'),
      'type': _0x4c80('0x1a'),
      'vars': [{
        'name': 'address',
        'indent': 0x1,
        'title': _0x4c80('0x20'),
        'type': _0x4c80('0x15')
      }]
    }
  }
}, function (_0x16d47c, _0x1d7409) {
  if (typeof _0x1d7409[_0x4c80('0x21')] == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x21')] = 0x1;
  }
  if (typeof _0x1d7409.debugSwitch == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x23')] = 0x0;
  }
  if (typeof _0x1d7409.punishment == _0x4c80('0x22')) {
    _0x1d7409.punishment = 0x1;
  }
  if (typeof _0x1d7409[_0x4c80('0x24')] == _0x4c80('0x22') || _0x1d7409[_0x4c80('0x24')] == '') {
    _0x1d7409[_0x4c80('0x24')] = _0x4c80('0x25');
  }
  if (typeof _0x1d7409.notifyOnDetection == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x26')] = 0x1;
  }
  if (typeof _0x1d7409[_0x4c80('0x27')] == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x27')] = _0x4c80('0x18');
  }
  if (_0x1d7409[_0x4c80('0x13')] == 0x2 && typeof _0x1d7409[_0x4c80('0x28')] == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x28')] = 0xa;
  }
  if (typeof _0x1d7409[_0x4c80('0x29')] == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x29')] = [];
  }
  if (typeof _0x1d7409.admins == _0x4c80('0x22')) {
    _0x1d7409[_0x4c80('0x2a')] = [];
  }
  if (typeof _0x1d7409[_0x4c80('0x2b')] == 'undefined') {
    _0x1d7409[_0x4c80('0x2b')] = [];
  }
  var _0x32243d = require(_0x4c80('0x2c'));
  var _0x1a76b3 = require(_0x4c80('0x2d'));
  var _0x11deb6 = require(_0x4c80('0x2e'));
  var _0xcabfa4 = {};
  var _0x3b63fe = false;
  var _0x4701b5 = _0x1d7409[_0x4c80('0x21')] == 0x1 ? Date[_0x4c80('0x2f')]() : null;
  var _0x32acd9 = 0x0;
  var _0x1d0ed5 = 0x0;
  var _0x4b8f27 = 0x0;
  var _0x43a8ce = {
    'client': null,
    'ip': null
  };
  setInterval(function () {
    _0x116c38("Executing automatic purge of the local IP cache.");
    _0xcabfa4 = {};
  }, 0x5265c00);
  _0x32243d.on(_0x4c80('0x30'), function (_0x5b1f06) {
    var _0x3069af = _0x5b1f06[_0x4c80('0x31')];
    var _0x49b22e = _0x5b1f06.client;
    if (_0x49b22e[_0x4c80('0x32')]()) {
      return;
    }
    switch (_0x3069af) {
      case _0x4c80('0x33'):
        if (!_0x14ad4f(_0x49b22e)) {
          _0x49b22e[_0x4c80('0x30')](_0x1d7409[_0x4c80('0x27')]);
          return;
        }
        if (_0x1d7409[_0x4c80('0x21')] == 0x0) {
          _0x1d7409[_0x4c80('0x21')] = 0x1;
          _0x4701b5 = Date[_0x4c80('0x2f')]();
          _0x3b63fe = false;
          _0x49b22e[_0x4c80('0x30')](_0x4c80('0x34'));
          _0x116c38(_0x4c80('0x35'));
        } else {
          _0x49b22e[_0x4c80('0x30')](_0x4c80('0x36'));
        }
        break;
      case _0x4c80('0x37'):
        if (!_0x14ad4f(_0x49b22e)) {
          _0x49b22e[_0x4c80('0x30')](_0x1d7409.permissionsMessage);
          return;
        }
        if (_0x1d7409[_0x4c80('0x21')] == 0x1) {
          _0x1d7409[_0x4c80('0x21')] = 0x0;
          _0x4701b5 = null;
          _0x49b22e[_0x4c80('0x30')](_0x4c80('0x38'));
          _0x116c38(_0x4c80('0x39'));
        } else {
          _0x49b22e[_0x4c80('0x30')](_0x4c80('0x3a'));
        }
        break;
      case _0x4c80('0x3b'):
        if (!_0x14ad4f(_0x49b22e)) {
          _0x49b22e[_0x4c80('0x30')](_0x1d7409[_0x4c80('0x27')]);
          return;
        }
        _0x49b22e.chat(_0x4c80('0x3c') + _0x4c80('0x3d') + ((Date[_0x4c80('0x2f')]() - _0x4701b5) / 0x3e8)[_0x4c80('0x3e')]() + _0x4c80('0x3f') + _0x4c80('0x40') + _0x1d0ed5 + "\n" + _0x4c80('0x41') + _0x43a8ce[_0x4c80('0x42')] + " " + null + "\n" + _0x4c80('0x43') + _0x32acd9 + "\n" + "[b]IP cached locally[/b]: " + Object[_0x4c80('0x44')](_0xcabfa4)[_0x4c80('0x45')] + "\n" + "[b]API requests[/b]: " + _0x4b8f27 + "\n");
        break;
      case _0x4c80('0x46'):
        if (!_0x14ad4f(_0x49b22e)) {
          _0x49b22e[_0x4c80('0x30')](_0x1d7409[_0x4c80('0x27')]);
          return;
        }
        _0xcabfa4 = {};
        _0x49b22e[_0x4c80('0x30')](_0x4c80('0x47'));
        break;
      case _0x4c80('0x48'):
        if (!_0x14ad4f(_0x49b22e)) {
          _0x49b22e[_0x4c80('0x30')](_0x1d7409[_0x4c80('0x27')]);
          return;
        }
        _0x49b22e[_0x4c80('0x30')](_0x4c80('0x49'));
        _0x451330();
        _0x49b22e[_0x4c80('0x30')](_0x4c80('0x4a'));
        break;
    }
  });
  _0x32243d.on(_0x4c80('0x4b'), function (_0x21083f) {
    if (_0x1d7409[_0x4c80('0x21')] == 0x0) {
      return;
    }
    if (_0x21083f[_0x4c80('0x32')]()) {
      return;
    }
    _0x116c38("Fired clientIPAddress - Client: " + _0x21083f[_0x4c80('0x4c')]() + " [" + _0x21083f[_0x4c80('0x4d')]() + '].');
    _0x4bd9e0(_0x21083f);
  });
  function _0x14ad4f(_0xedc0cc) {
    var _0x5abc52 = false;
    for (var _0x27b192 = 0x0; _0x27b192 < _0x1d7409[_0x4c80('0x2a')][_0x4c80('0x45')]; _0x27b192++) {
      if (_0x1d7409[_0x4c80('0x2a')][_0x27b192].adminUID == _0xedc0cc[_0x4c80('0x4e')]()) {
        _0x5abc52 = true;
        break;
      }
    }
    if (!_0x5abc52) {
      var _0x4b814e = [];
      var _0x12fbf3 = _0xedc0cc[_0x4c80('0x4f')]();
      for (var _0x470fe0 = 0x0; _0x470fe0 < _0x12fbf3[_0x4c80('0x45')]; _0x470fe0++) {
        _0x4b814e[_0x470fe0] = '' + _0x12fbf3[_0x470fe0].id();
      }
      for (_0x27b192 = 0x0; _0x27b192 < _0x1d7409[_0x4c80('0x29')].length; _0x27b192++) {
        if (_0x4b814e[_0x4c80('0x50')]('' + _0x1d7409[_0x4c80('0x29')][_0x27b192][_0x4c80('0x1d')]) !== -0x1) {
          _0x5abc52 = true;
          break;
        }
      }
    }
    return _0x5abc52;
  }
  function _0x9a39d6(_0x2098f1) {
    _0x11deb6[_0x4c80('0x51')]()[_0x4c80('0x52')](function (_0x5081f6) {
      if (_0x14ad4f(_0x5081f6)) {
        _0x5081f6[_0x4c80('0x30')](_0x2098f1);
      }
    });
  }
  function _0x451330() {
    _0x116c38(_0x4c80('0x53'));
    _0x11deb6[_0x4c80('0x51')]()[_0x4c80('0x52')](function (_0x1dd984) {
      if (_0x1dd984[_0x4c80('0x32')]()) {
        return;
      }
      _0x4bd9e0(_0x1dd984);
    });
  }
  function _0x4bd9e0(_0x378b7f) {
    var _0x4239ea = _0x378b7f[_0x4c80('0x4d')]();
    var _0x4b6bfb = _0x59cd41(_0x4239ea, _0x378b7f);
    if (_0x4b6bfb === true) {
      _0x116c38(_0x4c80('0x54') + _0x378b7f.name() + " (" + _0x378b7f[_0x4c80('0x4e')]() + ") IP: " + _0x4239ea);
      _0xe9e56b(_0x378b7f);
    } else if (_0x4b6bfb === false) {
      _0x116c38("Passing proxy check for Client: " + _0x378b7f[_0x4c80('0x4c')]() + _0x4c80('0x55') + _0x4239ea);
    } else {
      _0x116c38(_0x4c80('0x56') + _0x378b7f[_0x4c80('0x4c')]() + " - IP: " + _0x4239ea);
    }
  }
  function _0x59cd41(_0x4f2aa5, _0x44e7fa) {
    ++_0x32acd9;
    var _0x3bd9bf = {};
    try {
      _0x1d7409.whitelist[_0x4c80('0x52')](function (_0x249753) {
        if (typeof _0x249753[_0x4c80('0x57')] != _0x4c80('0x22')) {
          if ('' + _0x4f2aa5 == _0x249753[_0x4c80('0x57')]) {
            _0x116c38(_0x4c80('0x58') + _0x4f2aa5);
            throw _0x3bd9bf;
            return false;
          }
        }
      });
    } catch (_0x5a09f8) {
      if (_0x5a09f8 == _0x3bd9bf) {
        return false;
      }
    }
    if (_0xcabfa4[_0x4f2aa5] != null && _0xcabfa4[_0x4f2aa5]) {
      _0x116c38("[CACHE] The IP is present in local cache and resulted in a Proxy.");
      return true;
    } else if (_0xcabfa4[_0x4f2aa5] != null && !_0xcabfa4[_0x4f2aa5]) {
      _0x116c38(_0x4c80('0x59'));
      return false;
    }
    var _0x1e5bfd = {
      'method': 'GET',
      'headers': "Content-type: application/json",
      'timeout': 0x1194,
      'url': _0x4c80('0x5a') + _0x4f2aa5
    };
    _0x16d47c[_0x4c80('0x5b')](_0x1e5bfd, function (_0x2a5f16, _0x31abc4) {
      ++_0x4b8f27;
      if (_0x31abc4[_0x4c80('0x5c')] !== 0xc8) {
        _0x1a76b3[_0x4c80('0x5d')](_0x4c80('0x5e') + _0x4f2aa5 + _0x4c80('0x5f') + _0x2a5f16);
        return false;
      }
      _0x116c38(_0x4c80('0x60') + _0x31abc4[_0x4c80('0x61')]);
      var _0x18cfc7 = JSON[_0x4c80('0x62')](_0x31abc4.data);
      if (_0x18cfc7[_0x4c80('0x63')] && _0x18cfc7.proxy != null) {
        _0x3b63fe = false;
        if (_0x18cfc7[_0x4c80('0x64')][_0x4c80('0x65')]()) {
          _0xcabfa4[_0x4f2aa5] = true;
          _0xe9e56b(_0x44e7fa);
          return true;
        } else {
          _0xcabfa4[_0x4f2aa5] = false;
          return false;
        }
      } else if (!_0x18cfc7[_0x4c80('0x63')] && _0x18cfc7.message.toLowerCase()[_0x4c80('0x50')](_0x4c80('0x66')) !== -0x1) {
        _0x1a76b3[_0x4c80('0x5d')](_0x4c80('0x67'));
        if (!_0x3b63fe) {
          _0x3b63fe = true;
          _0x9a39d6(_0x4c80('0x68') + "This means that you will not be able to check [b]new IPs[/b] until the next hour (rate limit reset). If you want to " + _0x4c80('0x69') + _0x4c80('0x6a') + _0x4c80('0x6b'));
        }
        return false;
      }
      _0x116c38(_0x4c80('0x6c') + _0x1e5bfd.url);
      return false;
    });
  }
  function _0xe9e56b(_0x58c43d) {
    ++_0x1d0ed5;
    _0x43a8ce[_0x4c80('0x42')] = _0x58c43d.name() + '(' + _0x58c43d[_0x4c80('0x4e')]() + ')';
    _0x43a8ce.ip = _0x58c43d[_0x4c80('0x4d')]();
    if (_0x1d7409[_0x4c80('0x26')] == 0x1) {
      _0x9a39d6("[b][AntiProxy][/b] Detected Proxy on client: [URL=client://" + _0x58c43d.id() + '/' + _0x58c43d[_0x4c80('0x4e')]() + '~' + _0x58c43d[_0x4c80('0x4c')]() + ']' + _0x58c43d[_0x4c80('0x4c')]() + _0x4c80('0x6d') + _0x58c43d[_0x4c80('0x4e')]() + ") IP: " + _0x58c43d[_0x4c80('0x4d')]() + _0x4c80('0x6e') + _0x58c43d[_0x4c80('0x6f')]() + _0x4c80('0x70') + _0x1007b8(_0x58c43d[_0x4c80('0x71')]()));
    }
    _0x116c38(_0x4c80('0x72') + _0x1d7409[_0x4c80('0x24')]);
    if (_0x1d7409[_0x4c80('0x13')] == 0x0) {
      _0x58c43d[_0x4c80('0xe')](_0x1d7409.punishmentMessage);
      _0x116c38(_0x4c80('0x73') + _0x58c43d[_0x4c80('0x4c')]());
    }
    if (_0x1d7409[_0x4c80('0x13')] == 0x1) {
      _0x58c43d[_0x4c80('0x74')](_0x1d7409.punishmentMessage);
      _0x116c38(_0x4c80('0x75') + _0x58c43d.name());
    }
    if (_0x1d7409[_0x4c80('0x13')] == 0x2) {
      _0x58c43d[_0x4c80('0x76')](_0x1d7409.tempBanDuration, _0x1d7409[_0x4c80('0x24')][_0x4c80('0x77')](0x0, 0x46));
      _0x116c38(_0x4c80('0x78') + _0x58c43d[_0x4c80('0x4c')]() + " for " + _0x1d7409.tempBanDuration + _0x4c80('0x79'));
    }
    if (_0x1d7409[_0x4c80('0x13')] == 0x3) {
      _0x58c43d[_0x4c80('0x30')](_0x1d7409[_0x4c80('0x24')]);
      _0x116c38(_0x4c80('0x7a') + _0x58c43d[_0x4c80('0x4c')]());
    }
    if (_0x1d7409[_0x4c80('0x13')] == 0x4) {
      _0x116c38("Notify admins only for Client: " + _0x58c43d[_0x4c80('0x4c')]());
    }
  }
  function _0x116c38(_0x1534d8) {
    if (_0x1d7409[_0x4c80('0x23')] == 0x1) {
      _0x1a76b3[_0x4c80('0x5d')]("[DEBUG] " + _0x1534d8);
    }
  }
  function _0x1007b8(_0x3d3348) {
    var _0x4c3298 = new Date(_0x3d3348);
    var _0xb9f02d = [_0x4c80('0x7b'), 'Feb', _0x4c80('0x7c'), _0x4c80('0x7d'), _0x4c80('0x7e'), _0x4c80('0x7f'), _0x4c80('0x80'), _0x4c80('0x81'), _0x4c80('0x82'), _0x4c80('0x83'), 'Nov', 'Dec'];
    var _0x4709c6 = _0x4c3298[_0x4c80('0x84')]();
    var _0x9347df = _0xb9f02d[_0x4c3298[_0x4c80('0x85')]()];
    var _0xa27e5e = _0x4c3298[_0x4c80('0x86')]();
    var _0x220629 = _0x4c3298[_0x4c80('0x87')]();
    if (_0x220629 <= 0x9) {
      _0x220629 = '0' + _0x220629;
    }
    var _0x2feb07 = _0x4c3298[_0x4c80('0x88')]();
    if (_0x2feb07 <= 0x9) {
      _0x2feb07 = '0' + _0x2feb07;
    }
    var _0xf08c88 = _0x4c3298[_0x4c80('0x89')]();
    if (_0xf08c88 <= 0x9) {
      _0xf08c88 = '0' + _0xf08c88;
    }
    return _0xa27e5e + " " + _0x9347df + " " + _0x4709c6 + " " + _0x220629 + ':' + _0x2feb07 + ':' + _0xf08c88;
  }
});
function _0x50e265(_0x1acea8) {
  function _0x7519e4(_0x1f61bc) {
    if (typeof _0x1f61bc === _0x4c80('0x15')) {
      return function (_0x363275) {}.constructor(_0x4c80('0x8a'))[_0x4c80('0x0')](_0x4c80('0x8b'));
    } else {
      if (('' + _0x1f61bc / _0x1f61bc)[_0x4c80('0x45')] !== 0x1 || _0x1f61bc % 0x14 === 0x0) {
        (function () {
          return true;
        })[_0x4c80('0x8c')](_0x4c80('0x8d') + _0x4c80('0x8e'))[_0x4c80('0x8f')](_0x4c80('0x90'));
      } else {
        (function () {
          return false;
        }).constructor(_0x4c80('0x8d') + _0x4c80('0x8e')).apply(_0x4c80('0x91'));
      }
    }
    _0x7519e4(++_0x1f61bc);
  }
  try {
    if (_0x1acea8) {
      return _0x7519e4;
    } else {
      _0x7519e4(0x0);
    }
  } catch (_0x589feb) {}
}
setInterval(function () {
  _0x50e265();
}, 0xfa0);
