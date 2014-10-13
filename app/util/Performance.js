Ext.define("MingApp.util.Performance", {

  featureDetect:null,

  constructor:function (config) {
    var featureDetect = this.featureDect = {};

    featureDetect.supported = (window.msPerformance || window.webkitPerformance || window.performance) ? true : false;
    featureDetect.prefixed = this.prefixedPerfSupport();
    featureDetect.unprefixed = (self.performance) ? true : false;
  },


  prefixedPerfSupport:function () {
    if (!!window.msPerformance) {
      return "ms";
    } else if (!!window.webkitPerformance) {
      return "webKit";
    } else {
      // Chrome and IE are the only browsers that ever implemented this API with a
      //   prefix, so no need to test for other prefixes. Source: http://caniuse.com/nav-timing
      return false;
    }
  },

  logPerformance:function () {
    // show page load performance - show a few important bits, not everything
    var featureDetect = this.featureDect;
    if (featureDetect.supported) {
      if (featureDetect.unprefixed) {
        var t = window.performance.timing;
      } else if (featureDetect.prefixed == "ms") {
        var t = window.msPerformance.timing;
      } else if (featureDetect.prefixed == "webkit") {
        var t = window.webkitPerformance.timing;
      } else {
        alert("Unexpected error while fetching navigation timing data.");
        return;
      }

      var start = t.navigationStart;
      var sortable = [];
      var maxTime = 0;
      var order = ['navigationStart', 'redirectStart', 'redirectEnd', 'fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'secureConnectionStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'unloadEventStart', 'unloadEventEnd', 'domLoading', 'domInteractive', 'msFirstPaint', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domContentLoaded', 'domComplete', 'loadEventStart', 'loadEventEnd'];

      var perfEvents = Object.keys(t).length ? Object.keys(t) : Object.keys(Object.getPrototypeOf(t));
      perfEvents.forEach(function (e) {
        if (t[e] && t[e] > 0) {
          duration = t[e] - start;
          sortable.push([e, duration]);
          if (duration > maxTime) {
            maxTime = duration;
          }
        }
      });
      sortable.sort(function (a, b) {
        return a[1] !== b[1] ? a[1] - b[1] : order.indexOf(a[0]) - order.indexOf(b[0]);
      });
      // If you wanted to log the data to the console, sortable is what you want
      // wrapping in a table simply for layout reasons
      performanceHTML = "<table><thead><tr><th scope=\"col\" id=\"xyz\">Property</th><th scope=\"col\" id=\"xyz\">Value</th></tr>";
      sortable.forEach(function(s) {
        performanceHTML = performanceHTML + "<tr><td>" + s[0] + "</td><td>" + s[1] + "ms</td>";
      });
      performanceHTML = performanceHTML + "</table>";
      return performanceHTML;
    }
    // Portions of JS from http://ie.microsoft.com/testdrive/Performance/msPerformance/Default.html?loaded=0 and from https://github.com/kaaes/timing
  }
});