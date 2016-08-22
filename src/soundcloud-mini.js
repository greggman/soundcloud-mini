
import { sendJSON } from '../3rdparty/io';
import { objectToSearchString } from '../3rdparty/misc';

var SC = new function() {
  var _clientId;
  this.initialize = function(options) {
    _clientId = options.client_id;
  };
  this.get = function(url, options, callback) {

    options = JSON.parse(JSON.stringify(options));
    var provideResult = function(fn) {
      options.client_id = _clientId;
      options.format = "json";
      options["_status_code_map[302]"] = 200;
      var scUrl = "https://api.soundcloud.com" + url + objectToSearchString(options);

      var handleResult = function(err, obj) {
        if (!err) {
          if (obj.status && obj.status.substr(0, 3) === "302" && obj.location) {
            sendJSON(obj.location, {}, handleResult, { method: "GET"});
            return;
          }
        }
        fn(obj, err);
      };

      sendJSON(scUrl, {}, handleResult, {
        method: "GET",
      });
    };

    if (callback) {
      provideResult(callback);
    } else {
      return {
        then: function(fn) {
          provideResult(fn);
          return {
            catch: function() {
            },
          };
        },
      };
    }
  };
};

export default SC;


