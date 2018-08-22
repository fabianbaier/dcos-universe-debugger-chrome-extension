# dcos-universe-debugger-chrome-extension
This is a useful Chrome extension to debug faulty universe packages in Mesosphere DC/OS

## Usage

Check out this [video](https://cl.ly/e0d8d7046da0) to see how to install and use this Chrome extension for Mesosphere DC/OS

* Clone this repo `git clone https://github.com/fabianbaier/dcos-universe-debugger-chrome-extension.git`
* In Chrome go to [chrome://extensions](chrome://extensions)
* Switch Developer Mode `on`
* Load this repo under `Load unpacked`
* If correctly loaded on the top right you should see a green icon
* Go to your DC/OS Cluster UI to the tab where your package installation failed
* On Mac press [OPTION]+[COMMAND]+I to switch to Chrome's Developer Tools
* You should see `DC/OS Universe Debugger` as one of the tabs, click it.
* Now if you submit again a service the extension will catch it an analyzes on which part of the rendered json the error occurs
* Right click in the `DC/OS Universe Debugger` tab to switch to the internal `console` to see even more helpful output
