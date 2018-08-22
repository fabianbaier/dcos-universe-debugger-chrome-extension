
chrome.devtools.panels.create("DC/OS Universe Debugger", "/icon.png", "/panel.html",
  function(extensionPanel) {
    var runOnce = false;
    extensionPanel.onShown.addListener(function(panelWindow) {
        if (runOnce) return;
        runOnce = true;
        // Do something, eg appending the text "Hello!" to the devtools panel
        chrome.devtools.network.onRequestFinished.addListener(function(req) {
            // Displayed sample TCP connection time here
        if (req.response.status == 400) {
            //console.log("Detected Bad Request for further investigation...", req)
            req.getContent(function(content){
                
                //var obj = JSON.parse(content);
                var obj = JSON.parse(content);

                //console.log("Response: ", obj)
                //panelWindow.document.body.appendChild(document.createTextNode(parsing_input));
                var parsed_parsingInput = obj.data.parsingInput
                var error = test(parsed_parsingInput, JSON.stringify(parsed_parsingInput))
                print(panelWindow, "Detected Error")
                output(panelWindow, error)
                print(panelWindow, "Rendered JSON")
                output(panelWindow, parsed_parsingInput)
            });
            }
        });
        //panelWindow.document.body.appendChild(document.createTextNode('Welcome!'));
    });
});

function print(panelWindow, inp) {
    panelWindow.document.body.appendChild(panelWindow.document.createElement('p')).innerHTML = inp;
}

function output(panelWindow, inp) {
    panelWindow.document.body.appendChild(panelWindow.document.createElement('pre')).innerHTML = inp;
}

function test(json, original) {
    try {
      jsonlint.parse(json);
      console.log("JSON is okay");
    }
    catch (e) {
        var lines = json.split(/[\n]+/g);
        for(var i = 0; i < lines.length; i++) {
            console.log("Line ", i+2, ": ", lines[i]);
            }
        console.log('Raw Response:', original);
        return e;
    }
  }
