import React from "react";
import ReactDOM  from "react-dom/client";
/*
* HMR - Hot Module Reloading is a usefull tool. when you are developing any applicaton.
        *and you want to see the real-time changes your browser or apllication
        *then HMR will be usefull there.
* File Watcher Algorith - c++
* BUNDELING
* Minify
* Dev and production build
* Super Fast build algorithm
* Image optimization
* Caching while development
* Compression
* Compatble with older version of browsers
* HTTPS on dev
* Port Number - which will change if your are building deifferent project with parcel bundler.
                *it will create anothr PORT.
* Consistence hashing algorithm
* Zero Config

* BrowserList - is the which make our app/ websites compatible for older browser.
        
*/
const heading = React.createElement("h1", 
{id:"title"}, 
"Learn Minification, Package Manager and parcel bundler, node_modules and many more")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)