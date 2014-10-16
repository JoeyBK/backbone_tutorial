// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

// Layer info for /Users/jazoulai/Desktop/BananaPeel/images/wireframes/mockup_iphone_6.framer/imported/mockup_iphone_6/layers.json.js
window.__imported__ = window.__imported__ || {};
window.__imported__["mockup_iphone_6/layers.json.js"] = [
  {
    "maskFrame" : null,
    "id" : "092F800A-E587-47F9-AA19-D6264CDEE665",
    "visible" : true,
    "children" : [
      {
        "maskFrame" : null,
        "id" : "549EF406-5C94-4B5A-8062-6FE9D552E476",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/headline_1-549EF406-5C94-4B5A-8062-6FE9D552E476.png",
          "frame" : {
            "y" : 904,
            "x" : 196,
            "width" : 359,
            "height" : 69
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 904,
          "x" : 196,
          "width" : 359,
          "height" : 69
        },
        "name" : "headline_1"
      },
      {
        "maskFrame" : null,
        "id" : "2FEB01FF-4A1F-4DDD-959E-E766989639DB",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/headline_bg_1-2FEB01FF-4A1F-4DDD-959E-E766989639DB.png",
          "frame" : {
            "y" : 896,
            "x" : 73,
            "width" : 605,
            "height" : 90
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 896,
          "x" : 73,
          "width" : 605,
          "height" : 90
        },
        "name" : "headline_bg_1"
      },
      {
        "maskFrame" : null,
        "id" : "C3115CED-D3A7-47D8-9D85-7A979730333A",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/image_1-C3115CED-D3A7-47D8-9D85-7A979730333A.png",
          "frame" : {
            "y" : 646,
            "x" : 73,
            "width" : 605,
            "height" : 340
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 646,
          "x" : 73,
          "width" : 605,
          "height" : 340
        },
        "name" : "image_1"
      },
      {
        "maskFrame" : null,
        "id" : "FCF6BE73-9414-4944-8AC0-20B2F3DD0285",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/background_1-FCF6BE73-9414-4944-8AC0-20B2F3DD0285.png",
          "frame" : {
            "y" : 603,
            "x" : 0,
            "width" : 750,
            "height" : 425
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 603,
          "x" : 0,
          "width" : 750,
          "height" : 425
        },
        "name" : "background_1"
      },
      {
        "maskFrame" : null,
        "id" : "9CF59097-3A4B-410E-A5BF-D978A7B94D8A",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/headline_2-9CF59097-3A4B-410E-A5BF-D978A7B94D8A.png",
          "frame" : {
            "y" : 1216,
            "x" : -64,
            "width" : 878,
            "height" : 284
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 1216,
          "x" : -64,
          "width" : 878,
          "height" : 284
        },
        "name" : "headline_2"
      },
      {
        "maskFrame" : null,
        "id" : "5466C476-0966-4412-82A9-DA5F60A3A996",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/headline_bg_2-5466C476-0966-4412-82A9-DA5F60A3A996.png",
          "frame" : {
            "y" : 1216,
            "x" : -27,
            "width" : 805,
            "height" : 290
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 1216,
          "x" : -27,
          "width" : 805,
          "height" : 290
        },
        "name" : "headline_bg_2"
      },
      {
        "maskFrame" : null,
        "id" : "16A12ED9-851F-4204-A066-A4216F0530F5",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/image_2-16A12ED9-851F-4204-A066-A4216F0530F5.png",
          "frame" : {
            "y" : 1066,
            "x" : 73,
            "width" : 605,
            "height" : 52
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 1066,
          "x" : 73,
          "width" : 605,
          "height" : 52
        },
        "name" : "image_2"
      },
      {
        "maskFrame" : null,
        "id" : "C9B46253-D71F-4854-A958-1A1FD6CBFA9C",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/background_2-C9B46253-D71F-4854-A958-1A1FD6CBFA9C.png",
          "frame" : {
            "y" : 1023,
            "x" : 0,
            "width" : 750,
            "height" : 95
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 1023,
          "x" : 0,
          "width" : 750,
          "height" : 95
        },
        "name" : "background_2"
      },
      {
        "maskFrame" : null,
        "id" : "A16CEE0C-DD05-43F7-93B3-ED303DDFF203",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/nav_bar-A16CEE0C-DD05-43F7-93B3-ED303DDFF203.png",
          "frame" : {
            "y" : 515,
            "x" : 0,
            "width" : 750,
            "height" : 88
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 515,
          "x" : 0,
          "width" : 750,
          "height" : 88
        },
        "name" : "nav_bar"
      },
      {
        "maskFrame" : null,
        "id" : "941A7BB4-A26D-46F2-A54D-2215ECE2CBD9",
        "visible" : false,
        "children" : [

        ],
        "image" : {
          "path" : "images\/map-941A7BB4-A26D-46F2-A54D-2215ECE2CBD9.png",
          "frame" : {
            "y" : 0,
            "x" : 0,
            "width" : 750,
            "height" : 1118
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 0,
          "x" : 0,
          "width" : 750,
          "height" : 1118
        },
        "name" : "map"
      }
    ],
    "image" : {
      "path" : "images\/Portrait__6-092F800A-E587-47F9-AA19-D6264CDEE665.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 750,
        "height" : 1118
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 750,
      "height" : 1118
    },
    "name" : "Portrait__6"
  }
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-6-silver"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();