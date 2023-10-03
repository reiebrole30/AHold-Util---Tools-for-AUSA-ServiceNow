const nav = document.createElement('span');
nav.id="span";
document.body.prepend(nav);

const iframe = document.createElement('iframe');
iframe.id="myframe";
iframe.src = 'https://rbsprod.service-now.com/markit?id=search&t=markit_kb&q=source%20password';

//iframe drag
// Get the iframe element.

//Iframe style

iframe.addEventListener("load", ev => {


    const new_style_element = document.createElement("style");
    new_style_element.textContent = `
  
[class="navbar-header"], 

[role="menubar"],

[class="sp-ac-root ng-scope sp-ac-desktop"],
[class="nav nav-pills nav-sm"],
 [ng-class="::main.getContainerClasses(subheader)"]

{
	
display:none;

}
 
`;
    ev.target.contentDocument.head.appendChild(new_style_element);
});
// Insert the iframe into the body of the document.
document.body.prepend(iframe);


// Create a div element.
const div = document.createElement('div');
div.id = 'my-div';
div.style.display = 'none';

// Create a toggle button element.
const button = document.createElement('now-button');
button.id='myButton';
button.title='Fast and Easy KB Finder';
button.textContent="KB Finder";
button.onclick = function() {

iframe.style.display = iframe.style.display  === 'block' ? 'none' : 'block';
button.textContent = button.textContent === 'KB Finder'? '__' : 'KB Finder';
	if (button.textContent === 'KB Finder') {
  
  	}
};

//Insert Refresh Button

// Inject a button with id "refresh" into the DOM.



const buttonRefresh = document.createElement('now-button');
buttonRefresh.id = 'refresh';
buttonRefresh.textContent = 'Kill Hung Sessions';
buttonRefresh.title="Asignment Group taking to slow to load? Click me";




document.body.appendChild(buttonRefresh);









// Get the buttonRefresh element.

const buttonRefreshes = document.querySelector('#refresh');

// Add an event listener to the buttonRefresh element to popup the iframe.
buttonRefreshes.addEventListener('click', () => {
    
      // Create a new iframe element.
      buttonRefresh.style.display="none";
      iframe2 = document.createElement('iframe');
    
      // Set the iframe's attributes.
   // Set the iframe's attributes.

   iframe2.src="https://rbsprod.service-now.com/cancel_my_transactions.do";
   iframe2.id="refreshframe";
iframe2.style.bottom = "580px";
iframe2.style.left= '566px';
iframe2.style.width = '400px';
iframe2.style.height = '50px';
iframe2.style.backgroundColor = 'RGB(var(--now-alert--positive--background-color,var(--now-color_alert--positive-0,201,224,202)))';
iframe2.style.borderColor = 'RGB(var(--now-alert--positive--border-color,var(--now-color_alert--positive-1,119,178,123)))' ;
iframe2.style.zIndex ="1000";
iframe2.style.scrolling="no";
iframe2.style.position="fixed";
iframe2.style.borderRadius = '4px';

    
      // Hide the iframe initially.
      iframe2 .style.display = 'none';
    
      // Append the iframe element to the body of the document.
      document.body.appendChild( iframe2 );
    
      // Display the iframe.
      iframe2.style.display = 'block';
    
      // Start a fade-out timer.
      setTimeout(() => {
        // Fade out the iframe over 10 seconds.
        iframe2.style.transition = 'opacity 10s ease-in-out';
        iframe2.style.opacity = 0;
    
        // Hide the iframe after it has faded out.
        setTimeout(() => {
            iframe2 .style.display = 'none';
            buttonRefresh.style.display="block";
          // Kill the iframe.
          iframe2.remove();
        }, 10000);
      }, 1000);
    });

    




// Append the div and toggle button to the body of the document.
document.body.appendChild(div);
document.body.appendChild(button);




///////////////////////COPY USER INFO





// Inject a button into the DOM.
const buttonView = document.createElement("now-button");
buttonView.id="Userinfo";
buttonView.title="Retrieve User's Info to Clipboard";
buttonView.textContent = "Copy User Info";
document.body.appendChild(buttonView);





// Bind the $$ function to the button's click event.
buttonView.addEventListener("click", function() {
  
    //get the ActiveTab
    const activeCanvas = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
    for (const tag of activeCanvas) {
        if (tag.style.display !== 'none') {
            
      // Get the element using the $$ function.

    const xmlID = querySelectorShadowDom.querySelectorDeep('sn-record-reference-connected[name="opened_for"]',tag);

    const outerHTML = xmlID.outerHTML;


const SysID_query = outerHTML.match(/value="([^"]+)"/)[1];
console.log(SysID_query);
const url = 'https://rbsprod.service-now.com/sys_user.do?XML=&sys_target=&sys_id='+ SysID_query;

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Open a GET request to the URL
xhr.open('GET', url);

// Set the response type to XML
xhr.responseType = 'xml/text';

// Send the request
xhr.send();

// Listen for the response
xhr.onload = function() {
  if (xhr.status === 200) {
    // Parse the XML response
    const xmlDoc = xhr.responseXML;

    // Get the name, user_name, and title elements
    const nameElement = xmlDoc.querySelector('sys_user>name');
    const userNameElement = xmlDoc.querySelector('sys_user>user_name');
    const titleElement = xmlDoc.querySelector('sys_user>title');

    // Get the text content of the elements
    const name = nameElement.textContent;
    const userName = userNameElement.textContent;
    const title = titleElement.textContent;

//create Iframe
iframe2 = document.createElement('iframe');
    
      // Set the iframe's attributes.
   // Set the iframe's attributes.

   iframe2.srcdoc = `
   <!DOCTYPE html>
   <html>
   <head>
   <style>
   .frame {
    border: none;
    color: RGB(var(--now-color_text--primary,var(--now-color--neutral-18,22,27,28)));
    font-family: var(--now-font-family, "Lato", sans-serif);
    font-size: var(--now-global-font-size--md, 14px);
    height: 100%;
    line-height: 1.25;
   </style>
   <title>Employee Profile</title>
   </head>
   <body class="frame">
   <span class="outputmsg_text">
   <p><i>Successfully sent to your clipboard: </i></p>
   <p>Name: ${name}</p>
   <p>Username: ${userName}</p>
   <p>Title: ${title}</p>
   </span> 
   </body>
   </html>
   `;
   iframe2.id="refreshframe";
iframe2.style.top = "100px";
iframe2.style.left= '566px';
iframe2.style.width = '500px';
iframe2.style.height = '150px';
iframe2.style.backgroundColor = 'RGB(var(--now-alert--positive--background-color,var(--now-color_alert--positive-0,201,224,202)))';
iframe2.style.borderColor = 'RGB(var(--now-alert--positive--border-color,var(--now-color_alert--positive-1,119,178,123)))' ;
iframe2.style.zIndex ="1000";
iframe2.style.scrolling="no";
iframe2.style.position="fixed";
iframe2.style.borderRadius = '4px';

    
      // Hide the iframe initially.
      iframe2 .style.display = 'none';
    
      // Append the iframe element to the body of the document.
      document.body.appendChild( iframe2 );
    
      // Display the iframe.
      iframe2.style.display = 'block';
    
      // Start a fade-out timer.
      setTimeout(() => {
        // Fade out the iframe over 10 seconds.
        iframe2.style.transition = 'opacity 10s ease-in-out';
        iframe2.style.opacity = 0;
    
        // Hide the iframe after it has faded out.
        setTimeout(() => {
            iframe2 .style.display = 'none';
          
          // Kill the iframe.
          iframe2 .remove();
        }, 10000);
      }, 500);
//end of iframe
 
var userinfo = String("Name: " +name + " \n" + "Username: "+ userName + " \n" + "Title: " + title +"\n" +"Problem Description: ");

navigator.clipboard.writeText(userinfo);
console.log(userinfo);





  } else {
    // Handle the error
    alert("there's was an error, please see console log for info: " +xhr.statusText)
    console.log('Error fetching XML:', xhr.statusText);
  }
};
        }
    }
// Print the value

});


    

//////////////////////////////////////////////////////////////////////////////////////////

const buttonViewAdd = document.createElement("now-button");
buttonViewAdd.id="UserAdd";
buttonViewAdd.title="Retrieve User's Address. Used when creating notes for Scale Dispatch."
buttonViewAdd.textContent = "Copy User Add";
document.body.appendChild(buttonViewAdd);

// Bind the $$ function to the button's click event.
buttonViewAdd.addEventListener("click", function() {
  
    //get the ActiveTab
    const activeCanvas2 = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
    for (const tag2 of activeCanvas2) {
        if (tag2.style.display !== 'none') {
            
      // Get the element using the $$ function.

    const xmlID2 = querySelectorShadowDom.querySelectorDeep('sn-record-reference-connected[name="location"]',tag2);
    const outerHTML2 = xmlID2.outerHTML;


const SysID_query2 = outerHTML2.match(/value="([^"]+)"/)[1];
console.log(SysID_query2);
const url2 = 'https://rbsprod.service-now.com/cmn_location.do?XML=&sys_target=&sys_id='+ SysID_query2;

fetch(url2)
  .then(response => response.text())
  .then(html => {
    // Parse the HTML page.
    const xmlDoc2 = new DOMParser().parseFromString(html, 'text/html');

    var Street = xmlDoc2.querySelector('street')?.textContent;
    var City = xmlDoc2.querySelector('city')?.textContent;
    var St = xmlDoc2.querySelector('state')?.textContent;
    var State= St.toUpperCase();
    var Zip = xmlDoc2.querySelector('zip')?.textContent;
    console.log(Street +", "+ City +", "+ State +", "+ Zip);
    
    var copyText= String (Street +" ,"+ City +", "+ State +" ,"+ Zip);
    console.log(copyText);
      navigator.clipboard.writeText(copyText);
      alert("Successfully Copied: "+ copyText);
    
    })
    .catch(error => {
      // Handle the error.
    });
// Print the value
        }}
});

var Query = new function(){


 
  }


    // Get the selector from the user.
      //SHADOWWWW PIERCE
//from NPM package query-selector-shadow-dom to be able to select elememnt within components
var querySelectorShadowDom = function(e) {
    "use strict";
    function r(e, u, s, a) {
        void 0 === a && (a = null), e = function(e) {
            function t() {
                r && (0 < u.length && /^[~+>]$/.test(u[u.length - 1]) && u.push(" "), u.push(r))
            }
            var n, r, l, o, u = [],
                s = [0],
                a = 0,
                h = /(?:[^\\]|(?:^|[^\\])(?:\\\\)+)$/,
                i = /^\s+$/,
                c = [/\s+|\/\*|["'>~+[(]/g, /\s+|\/\*|["'[\]()]/g, /\s+|\/\*|["'[\]()]/g, null, /\*\//g];
            for (e = e.trim();;) {
                if (r = "", (l = c[s[s.length - 1]])
                    .lastIndex = a, !(n = l.exec(e))) {
                    r = e.substr(a), t();
                    break
                }
                if ((o = a) < (a = l.lastIndex) - n[0].length && (r = e.substring(o, a - n[0].length)), s[s.length - 1] < 3) {
                    if (t(), "[" === n[0]) s.push(1);
                    else if ("(" === n[0]) s.push(2);
                    else if (/^["']$/.test(n[0])) s.push(3), c[3] = new RegExp(n[0], "g");
                    else if ("/*" === n[0]) s.push(4);
                    else if (/^[\])]$/.test(n[0]) && 0 < s.length) s.pop();
                    else if (/^(?:\s+|[~+>])$/.test(n[0]) && (0 < u.length && !i.test(u[u.length - 1]) && 0 === s[s.length - 1] && u.push(" "), 1 === s[s.length - 1] && 5 === u.length && "=" === u[2].charAt(u[2].length - 1) && (u[4] = " " + u[4]), i.test(n[0]))) continue;
                    u.push(n[0])
                } else u[u.length - 1] += r, h.test(u[u.length - 1]) && (4 === s[s.length - 1] && (u.length < 2 || i.test(u[u.length - 2]) ? u.pop() : u[u.length - 1] = " ", n[0] = ""), s.pop()), u[u.length - 1] += n[0]
            }
            return u.join("")
                .trim()
        }(e);
        var t = s.querySelector(e);
        return document.head.createShadowRoot || document.head.attachShadow ? !u && t ? t : h(e, ",")
            .reduce(function(e, t) {
                if (!u && e) return e;
                var g, d, p, n = h(t.replace(/^\s+/g, "")
                        .replace(/\s*([>+~]+)\s*/g, "$1"), " ")
                    .filter(function(e) {
                        return !!e
                    })
                    .map(function(e) {
                        return h(e, ">")
                    }),
                    r = n.length - 1,
                    l = i(n[r][n[r].length - 1], s, a),
                    o = (g = n, d = r, p = s, function(e) {
                        for (var t, n = d, r = e, l = !1; r && (t = r)
                            .nodeType !== Node.DOCUMENT_FRAGMENT_NODE && t.nodeType !== Node.DOCUMENT_NODE;) {
                            var o = !0;
                            if (1 === g[n].length) o = r.matches(g[n]);
                            else
                                for (var u = [].concat(g[n])
                                        .reverse(), s = r, a = u, h = Array.isArray(a), i = 0, a = h ? a : a[Symbol.iterator]();;) {
                                    var c;
                                    if (h) {
                                        if (i >= a.length) break;
                                        c = a[i++]
                                    } else {
                                        if ((i = a.next())
                                            .done) break;
                                        c = i.value
                                    }
                                    var f = c;
                                    if (!s || !s.matches(f)) {
                                        o = !1;
                                        break
                                    }
                                    s = v(s, p)
                                }
                            if (o && 0 === n) {
                                l = !0;
                                break
                            }
                            o && n--, r = v(r, p)
                        }
                        return l
                    });
                return u ? e = e.concat(l.filter(o)) : (e = l.find(o)) || null
            }, u ? [] : null) : u ? s.querySelectorAll(e) : t
    }
    function h(e, n) {
        return e.match(/\\?.|^$/g)
            .reduce(function(e, t) {
                return '"' !== t || e.sQuote ? "'" !== t || e.quote ? e.quote || e.sQuote || t !== n ? e.a[e.a.length - 1] += t : e.a.push("") : (e.sQuote ^= 1, e.a[e.a.length - 1] += t) : (e.quote ^= 1, e.a[e.a.length - 1] += t), e
            }, {
                a: [""]
            })
            .a
    }
    function v(e, t) {
        var n = e.parentNode;
        return n && n.host && 11 === n.nodeType ? n.host : n === t ? null : n
    }
    function i(t, e, n) {
        void 0 === t && (t = null), void 0 === n && (n = null);
        var l = [];
        if (n) l = n;
        else {
            var r = function e(t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    l.push(r), r.shadowRoot && e(r.shadowRoot.querySelectorAll("*"))
                }
            };
            e.shadowRoot && r(e.shadowRoot.querySelectorAll("*")), r(e.querySelectorAll("*"))
        }
        return t ? l.filter(function(e) {
            return e.matches(t)
        }) : l
    }
    return e.querySelectorAllDeep = function(e, t, n) {
        return void 0 === t && (t = document), void 0 === n && (n = null), r(e, !0, t, n)
    }, e.querySelectorDeep = function(e, t, n) {
        return void 0 === t && (t = document), void 0 === n && (n = null), r(e, !1, t, n)
    }, e.collectAllElementsDeep = i, e
}({});

