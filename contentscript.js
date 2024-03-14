var kbNumber;
var userinfo;
const kbResult = document.createElement("div");
var kbImagery= '';


kbResult.innerHTML = kbImagery + 'Try entering search keywords or use filter to quickly find commonly used Kbs';


const newButton = document.createElement('sn-canvas-toolbar-button');
newButton.id = 'myBacklogs';
newButton.setAttribute('title', 'View My Backlogs');
newButton.setAttribute('icon', 'user-tag-outline');

//Group backlog view
const btnCCNBacklog = document.createElement('sn-canvas-toolbar-button');
btnCCNBacklog.id = 'ccnBacklogs';
btnCCNBacklog.setAttribute('title', 'View Crosscom Backlogs');
btnCCNBacklog.setAttribute('icon', 'board-flexible-outline');

var btnShowRelatedINC = `VIEW STORE: <now-button-bare label="Open Tickets" size="sm" icon-start="tree-workflow-outline" onclick="document.querySelector('#relatedTicket').click()"></now-button-bare>  `;
var btnShowAssignmentGRP = `<now-button-bare label="Assignment Group" size="sm" icon-start="tree-view-long-fill" onclick="document.querySelector('#assignmentGroup').click()"></now-button-bare> `;
var btnShowStoreLinks = `<now-button-bare label="App Links" size="sm" icon-start="map-direction-fill" onclick="document.querySelector('#appPageShow').click()"></now-button-bare> `;
var GlobalLoc = "";
var storeNum = "";
const nav = document.createElement('nav');
nav.id = "span";
document.body.prepend(nav);




const buttonRefresh = document.createElement('now-icon');
buttonRefresh.id = 'refresh';
buttonRefresh.className = "button-container";
buttonRefresh.setAttribute("icon", "circle-stop-fill");
buttonRefresh.setAttribute("size", "lg");
//buttonRefresh.textContent = 'Kill Hung Sessions';
buttonRefresh.title = "Asignment Group taking to slow to load? Click me";




document.body.appendChild(buttonRefresh);




// Get the buttonRefresh element.

const buttonRefreshes = document.querySelector('#refresh');

// Add an event listener to the buttonRefresh element to popup the iframe.
buttonRefreshes.addEventListener('click', () => {
    // Create a new iframe element.
    buttonRefresh.style.display = "none";


    const iframe2 = document.createElement('iframe');


    iframe2.src = "/cancel_my_transactions.do";



    // Set the iframe's attributes.
    // Set the iframe's attributes.


    iframe2.id = "refreshframe";
    iframe2.style.top = "145px";
    iframe2.style.left = '485px';
    iframe2.style.width = '400px';
    iframe2.style.height = '50px';
    iframe2.style.fontStyle = 'var(--now-alert--font-style,var(--now-messaging--font-style,normal))';
    iframe2.style.fontWeight = 'var(--now-alert--font-weight,var(--now-messaging--font-weight,normal))';

    iframe2.style.backgroundColor = 'RGB(var(--now-alert--info--background-color,var(--now-color_alert--info-0,195,221,240)))';
    iframe2.style.borderColor = 'RGB(var(--now-alert--info--border-color,var(--now-color_alert--info-1,104,171,218)))';
    iframe2.style.zIndex = "1000";
    iframe2.style.boxShadow = "0 4px 8px 0 RGBA(56,56,56,var(--now-opacity--less,.25));";
    iframe2.style.scrolling = "no";
    iframe2.style.position = "fixed";
    iframe2.style.borderRadius = '4px';


    // Hide the iframe initially.
    iframe2.style.display = 'none';

    // Append the iframe element to the body of the document.
    document.body.appendChild(iframe2);

    // Display the iframe.
    iframe2.style.display = 'block';

    //bannner



    //end of banner

    // Start a fade-out timer.
    setTimeout(() => {
        // Fade out the iframe over 10 seconds.
        iframe2.style.transition = 'opacity 10s ease-in-out';
        iframe2.style.opacity = 0;

        // Hide the iframe after it has faded out.
        setTimeout(() => {
            iframe2.style.display = 'none';
            buttonRefresh.style.display = "block";
            // Kill the iframe.
            iframe2.remove();
        }, 10000);
    }, 1000);
});




///////////////////////COPY USER INFO




// Inject a button into the DOM.
const buttonView = document.createElement("now-icon");
buttonView.id = "Userinfo";
buttonView.className = "button-container";
buttonView.setAttribute("icon", "user-verify-outline");
buttonView.setAttribute("size", "lg");
buttonView.title = "Retrieve User's Info to Clipboard";
//buttonView.textContent = "Copy User Info";
document.body.appendChild(buttonView);




// Bind the $$ function to the button's click event.
buttonView.addEventListener("click", function() {

    //get the ActiveTab
    const activeCanvas = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
    for (const tag of activeCanvas) {
        if (tag.style.display !== 'none') {

            // Get the element using the $$ function.

            const xmlID = querySelectorShadowDom.querySelectorDeep('sn-record-reference-connected[name="opened_for"]', tag);

            const outerHTML = xmlID.outerHTML;
            var xpath = querySelectorShadowDom.querySelectorAllDeep('.will-truncate', tag)[0];

            let SysID_query="";
       

            try {
            SysID_query = outerHTML.match(/value="([^"]+)"/)[1];
        
           
            xpath.innerHTML = 'Loading...<img src="/images/loading_anim2.gif" alt="Loading..." />             ';



            const url = '/sys_user.do?XML=&sys_target=&sys_id=' + SysID_query;
          
            // Create a new XMLHttpRequest object
            const xhr = new XMLHttpRequest();
            var xpath = querySelectorShadowDom.querySelectorAllDeep('.will-truncate', tag)[0];
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
                    const GlobalID = xmlDoc.querySelector('u_global_id');
                    const EmailU = xmlDoc.querySelector('email').textContent;

                    // Get the text content of the elements
                    const name = nameElement.textContent;
                    const userName = userNameElement.textContent;
                    const title = titleElement.textContent;
                    const g_id = GlobalID.textContent;


                    xpath.innerHTML = '<now-icon icon="circle-check-fill" size="md" style="color: RGB(var(--now-datavis_color--blue-4,49,195,223));"></now-icon>   Successfully copied info of ' + name;
                    const xmlID4 = querySelectorShadowDom.collectAllElementsDeep('iframe', tag)[0];


                    const WorkNotes = querySelectorShadowDom.querySelectorDeep('body', xmlID4.contentDocument );
                    const tinyMCE = querySelectorShadowDom.querySelectorAllDeep('div.tox.tox-tinymce',tag)[0];
                    const shortDesc = querySelectorShadowDom.querySelectorDeep('input[name="short_description"]',tag);
                    const quickTemplate = document.getElementById('TemplateContent').textContent;
                    const quickTemplateDESC = document.getElementById('TemplateShortDESC').textContent; 
                
                    
                    userinfo = String("Caller: " + name + " \n" + "Global ID: " + g_id + " \n" + "Employee ID: " + userName + " \n" + "Title: " + title + " \n" + "Email: " + EmailU + "\n" + "\n" + "\n" + "Problem Description: "+ quickTemplate);
                  
                    WorkNotes.innerHTML =`
Caller: ${name} <br>Global ID: ${g_id}<br>Employee ID: ${userName}<br>Title: ${title}<br>Email: ${EmailU}<br>

${quickTemplate}
`;
console.log(shortDesc.value + ": here");
if (shortDesc.value == null || shortDesc.value == "")  {
  shortDesc.value = quickTemplateDESC;
} else {
 

}
const textWithNewlines = WorkNotes.innerHTML.replace(/<br>/g, '\n');

                    navigator.clipboard.writeText(textWithNewlines);
                    WorkNotes.focus();
                    WorkNotes.selectionEnd = WorkNotes.textContent.length;
                    WorkNotes.scrollIntoView();
                                tinyMCE.style.height="400px";
                                WorkNotes.style.height="400px";

                } else {
                    // Handle the error
                    alert("there's was an error, please see console log for info: " + xhr.statusText)

                }
              
              
            };
          } catch (error) {
            console.error('Unable to extract SysID from outerHTML:', error);
            xmlID.scrollIntoView();
            xmlID.focus();
            xpath.style.color="red";
            xpath.innerHTML="SELECT A USER FIRST:";
            }
        }
    }
    // Print the value

 
   
});




//////////////////////////////////////////////////////////////////////////////////////////

const buttonViewAdd = document.createElement("now-icon");
buttonViewAdd.id = "UserAdd";
buttonViewAdd.className = "button-container";
buttonViewAdd.title = "Retrieve User's Address. Used when creating notes for Scale Dispatch."
buttonViewAdd.setAttribute("icon", "catalog-outline");
buttonViewAdd.setAttribute("size", "lg");
//buttonViewAdd.textContent = "Copy User Add";
document.body.appendChild(buttonViewAdd);

// Bind the $$ function to the button's click event.
buttonViewAdd.addEventListener("click", function() {
buttonView.click();
    //get the ActiveTab
    const activeCanvas2 = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
    for (const tag2 of activeCanvas2) {
        if (tag2.style.display !== 'none') {

            // Get the element using the $$ function.

            const xmlID2 = querySelectorShadowDom.querySelectorDeep('sn-record-reference-connected[name="location"]', tag2);
            const outerHTML2 = xmlID2.outerHTML;

            let SysID_query2="";
            var xpath2 = querySelectorShadowDom.querySelectorAllDeep('.will-truncate', tag2)[0];

            try {
           SysID_query2 = outerHTML2.match(/value="([^"]+)"/)[1];
            GlobalLoc = SysID_query2;

           
            xpath2.innerHTML = 'Loading...<img src="/images/loading_anim2.gif" alt="Loading..." />  ';
            const xmlID4 = querySelectorShadowDom.collectAllElementsDeep('iframe', tag2)[0];
            const WorkNotes = querySelectorShadowDom.querySelectorDeep('body', xmlID4.contentDocument );
            const tinyMCE = querySelectorShadowDom.querySelectorAllDeep('div.tox.tox-tinymce',tag2)[0];
            const shortDesc = querySelectorShadowDom.querySelectorDeep('input[name="short_description"]',tag2);
            const url2 = '/cmn_location.do?XML=&sys_target=&sys_id=' + SysID_query2;
            const xhr = new XMLHttpRequest();


            fetch(url2)
                .then(response => response.text())
                .then(html => {
                    // Parse the HTML page.
                    const xmlDoc2 = new DOMParser().parseFromString(html, 'text/html');

                    var Street = xmlDoc2.querySelector('street')?.textContent;
                    var StoreName = xmlDoc2.querySelector('name')?.textContent;
                    var City = xmlDoc2.querySelector('city')?.textContent;
                    var St = xmlDoc2.querySelector('state')?.textContent;
                    var State = St.toUpperCase();
                    var Zip = xmlDoc2.querySelector('zip')?.textContent;
                    var legacyID = `https://ahold-scales.aholdusa.com/InterStore/central/businessunitstoremaint.aspx?OrgUnitNum=` + xmlDoc2.querySelector('u_legacy_id')?.textContent;


                    var verticalsite = xmlDoc2.querySelector('u_vertical')?.textContent;
                    var fuelsite = xmlDoc2.querySelector('u_fuel')?.textContent;
                    var pharmacysite = xmlDoc2.querySelector('u_pharmacy')?.textContent;
                    var phoneStore = xmlDoc2.querySelector('phone')?.textContent;


                    const ScaleInfo = `<br>
Scale Model: <br>
Scale IP Address: <br>
Is this the only scale in this department: <br>
Are any other scales down in the department: <br>
Description: <br><br>
                    
<strong><- Add this Scale Dispatching Template here if Dispatching otherwise, remove the template and this text <- </strong><br>
<br>                 
<a style="color:green">Scale Connectivity Status: </a> <br>
<i>Check Store scale using this InterStore link: </i><a href="${legacyID}">${legacyID}</a>
<br>
Store Phone #: <strong> ${phoneStore} </strong> <br>
Store Street Address: <strong> ${Street} </strong> <br>
City, State: <strong> ${City}, ${State} </strong><br> 
<br>
<a style="color:red">Dispatch Urgency: </a><br> 
- Emergency = Department completely down. <br>
- Non-emergency = Department is not completely down. <br>
 <br>


`;


WorkNotes.innerHTML += ScaleInfo;
if (shortDesc.value !== null && shortDesc.value !== "") {
  shortDesc.value="[Department] [Scale Model] Scale [Scale ID] [Description]";
} else {
  // Do nothing
}


WorkNotes.focus();
                    WorkNotes.selectionEnd = WorkNotes.textContent.length;
                    WorkNotes.scrollIntoView();
                                tinyMCE.style.height="400px";
                                WorkNotes.style.height="400px";

                    var copyText = String(Street + ", " + City + ", " + State + ", " + Zip + "\n \n" + ScaleInfo + "\n" + legacyID);
                   

                    var verticalicon = verticalsite === "true" ? '<b title="The phone system on this store is managed by Vertical"><now-icon icon="phone-fill" size="md" style="color: RGB(var(--now-datavis_color--blue-4,49,195,223));"></b>' : '<b title="The phone system on this store is managed by DXC"><now-icon icon="phone-fill" size="md" style="color: RGB(var(--now-datavis_color--red-4,227,85,132));"></b>'; //vertical site?
                    var pharmacyicon = pharmacysite === "true" ? '<b title="This store has a Pharmacy">🏥</b>' : ''; //site  has a Pharmacy?
                    var fuelicon = fuelsite === "true" ? '<b title="This store has a Fuel site">⛽</b>' : ''; //site  has a fuel?



                   xpath2.innerHTML = btnShowRelatedINC + btnShowAssignmentGRP + verticalicon + pharmacyicon + fuelicon + ' [ 📋Address sent to clipboard: ' + StoreName + "]";

  

                   const textWithNewlines = WorkNotes.textContent
                   .replace(/\<br>/g, '\n')
                   .replace(/<br>/g, '\n')
                   .replace(/\<a.*?>.*?<\/a>/g, '')
                   .replace(/\<strong>.*?<\/strong>/g, '');
                 
                 navigator.clipboard.writeText(textWithNewlines);


                    // Hide the iframe by default
                    relatedTickets.style.display = 'none';

             
                })
                .catch(error => {
                    // Handle the error.
                });
              } catch (error) {
                console.error('Unable to extract Location Code from outerHTML:', error);
                xpath2.scrollIntoView();
                xpath2.focus();
                xpath2.style.color="red";
                xpath2.innerHTML="SELECT A STORE LOCATION FIRST:";
                }
            // Print the value
        }
    }
});

var Query = new function() {



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



//ShowRelatedTicket
const ShowRelatedTicket = document.createElement("now-icon");
ShowRelatedTicket.id = "relatedTicket";
ShowRelatedTicket.className = "button-container";
ShowRelatedTicket.setAttribute("icon", "user-verify-outline");
ShowRelatedTicket.setAttribute("size", "lg");
ShowRelatedTicket.title = "Retrieve User's Info to Clipboard";
ShowRelatedTicket.style.display = "none";
//buttonView.textContent = "Copy User Info";
//Iframecontainer
const relatedTickets = document.createElement('iframe');
document.body.appendChild(ShowRelatedTicket);
relatedTickets.style.display = "none";
relatedTickets.id = "RelatedID";
relatedTickets.className = "popup";

//Assignment group route

//ShowRelatedTicket
const ShowAssignmentGroup = document.createElement("now-icon");
ShowAssignmentGroup.id = "assignmentGroup";
ShowAssignmentGroup.className = "button-container";
ShowAssignmentGroup.setAttribute("icon", "user-verify-outline");
ShowAssignmentGroup.setAttribute("size", "lg");
ShowAssignmentGroup.title = "Retrieve User's Info to Clipboard";
ShowAssignmentGroup.style.display = "none";
//buttonView.textContent = "Copy User Info";
//Iframecontainer
const assignmentGroup = document.createElement('iframe');
document.body.appendChild(ShowAssignmentGroup);
assignmentGroup.style.display = "none";
assignmentGroup.id = "RelatedGroup";
assignmentGroup.className = "popup";




ShowRelatedTicket.onclick = function() {

    if (relatedTickets.style.display === 'none') {
        // Show the iframe
        relatedTickets.src = ``;
        relatedTickets.src = `/incident_list.do?sysparm_query=location%3D` + GlobalLoc + `%5Eincident_stateNOT%20IN6%2C5&sysparm_view=`;
        relatedTickets.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
        relatedTickets.style.display = "block";
        relatedTickets.style.width = "900px";
        relatedTickets.style.height = "600px";
        relatedTickets.style.position = "fixed";
        relatedTickets.style.top = "70px";
        relatedTickets.style.left = "300px";
        relatedTickets.style.zIndex = "99999";
        relatedTickets.style.border = "0px";
        relatedTickets.style.borderRadius = "4px"
        relatedTickets.styleboxShadow = " 0 0 100px rgba(0, 0, 0, 0.5)";


        document.body.appendChild(relatedTickets);
        document.body.appendChild(modalBackdrop);
        modalBackdrop.style.display = 'block';
        relatedTickets.style.display = 'block';
    } else {
        // Hide the iframe
        relatedTickets.style.display = 'none';
        modalBackdrop.style.display = 'none';;
    }



}

//onlick for AssignmentGroup
ShowAssignmentGroup.onclick = function() {

    if (assignmentGroup.style.display === 'none') {
        // Show the iframe
        assignmentGroup.src = ``;
        assignmentGroup.src = `/u_location_assignment_group_route_list.do?sysparm_query=u_location%3D` + GlobalLoc + `&sysparm_view=`;
        assignmentGroup.setAttribute("sandbox", "allow-scripts allow-same-origin");
        assignmentGroup.style.display = "block";
        assignmentGroup.style.width = "900px";
        assignmentGroup.style.height = "650px";
        assignmentGroup.style.position = "fixed";
        assignmentGroup.style.top = "70px";
        assignmentGroup.style.left = "300px";
        assignmentGroup.style.zIndex = "99999";
        assignmentGroup.style.border = "0px";
        assignmentGroup.style.borderRadius = "4px"
        assignmentGroup.styleboxShadow = " 0 0 100px rgba(0, 0, 0, 0.5)";


        document.body.appendChild(assignmentGroup);
        document.body.appendChild(modalBackdrop);
        modalBackdrop.style.display = 'block';
        assignmentGroup.style.display = 'block';
    } else {
        // Hide the iframe
        assignmentGroup.style.display = 'none';
        modalBackdrop.style.display = 'none';
        relatedTickets.src = ``;
    }



}



const modalBackdrop = document.createElement('div');
modalBackdrop.id = "shadowMe";
modalBackdrop.style.position = 'fixed';
modalBackdrop.style.top = 0;
modalBackdrop.style.left = 0;
modalBackdrop.style.width = '100vw';
modalBackdrop.style.height = '100vw';
modalBackdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
modalBackdrop.style.zIndex = "99998";

modalBackdrop.onclick = function() {
    relatedTickets.style.display = 'none';
    assignmentGroup.style.display = 'none';
    modalBackdrop.style.display = 'none';
    newButton.removeAttribute('is-selected');
    newButton.removeAttribute('class')
    btnCCNBacklog.removeAttribute('is-selected');
    btnCCNBacklog.removeAttribute('class')
    fetchCNNBacklogs();
}




document.addEventListener('mouseup', function(event) {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/interaction/-1_uid_')) {
        // Get the element that was clicked
        const clickedElement = event.target;


        // Alert the user that the clicked element has body tags


        setTimeout(() => {

            // Get the current URL

            if (clickedElement.tagName === 'SEISMIC-HOIST') {
                // Check if the current URL contains the string "-1_uid"

                // The current URL contains the string "-1_uid"

                ///HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                // Bind the $$ function to the button's click event.


                //get the ActiveTab
                const activeCanvas2 = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
                for (const tag2 of activeCanvas2) {
                    if (tag2.style.display !== 'none') {

                        // Get the element using the $$ function.

                        const xmlID2 = querySelectorShadowDom.querySelectorDeep('sn-record-reference-connected[name="location"]', tag2);
                        const outerHTML2 = xmlID2.outerHTML;
            
            
                        const SysID_query2 = outerHTML2.match(/value="([^"]+)"/)[1];
                        GlobalLoc = SysID_query2;

                        var xpath = querySelectorShadowDom.querySelectorAllDeep('.will-truncate', tag2)[0];
                        xpath.innerHTML = 'Loading...<img src="/images/loading_anim2.gif" alt="Loading..." />  ';
                        
                        const xpath2 = querySelectorShadowDom.querySelectorAllDeep('.will-truncate', tag2)[0];
                        
   /* xpath2.innerHTML = `Use Template:
                        <now-button-bare label="AUSA GENERAL " size="sm" icon-start="circle-plus-outline" onclick="document.querySelector('#Userinfo').click()"></now-button-bare>
                        <now-button-bare label="AUSA Password Reset " size="sm" icon-start="circle-plus-outline" onclick="document.querySelector('#btnPassWordReset').click()"></now-button-bare>
                       
                       
                        `;
                        */
                        


                        const url2 = '/cmn_location.do?XML=&sys_target=&sys_id=' + SysID_query2;
                        const xhr = new XMLHttpRequest();


                        fetch(url2)
                            .then(response => response.text())
                            .then(html => {
                                // Parse the HTML page.
                                const xmlDoc2 = new DOMParser().parseFromString(html, 'text/html');



                                var verticalsite = xmlDoc2.querySelector('u_vertical')?.textContent;
                                var fuelsite = xmlDoc2.querySelector('u_fuel')?.textContent;
                                var pharmacysite = xmlDoc2.querySelector('u_pharmacy')?.textContent;
                                storeNum = xmlDoc2.querySelector('u_legacy_id')?.textContent;



                                var verticalicon = verticalsite === "true" ? '<b title="The phone system on this store is managed by Vertical"><now-icon icon="phone-fill" size="md" style="color: RGB(var(--now-datavis_color--blue-4,49,195,223));"></b>' : '<b title="The phone system on this store is managed by DXC"><now-icon icon="phone-fill" size="md" style="color: RGB(var(--now-datavis_color--red-4,227,85,132));"></b>'; //vertical site?
                                var pharmacyicon = pharmacysite === "true" ? '<b title="This store has a Pharmacy">🏥</b>' : ''; //site  has a Pharmacy?
                                var fuelicon = fuelsite === "true" ? '<b title="This store has a Fuel site">⛽</b>' : ''; //site  has a fuel?



                                xpath.innerHTML = btnShowRelatedINC + btnShowAssignmentGRP +  btnShowStoreLinks + verticalicon + pharmacyicon + fuelicon ;




                                // Hide the iframe by default
                                relatedTickets.style.display = 'none';


                            })
                            .catch(error => {
                                // Handle the error.
                            });
                        // Print the value
                    }
                }


            } else {
                // The current URL does not contain the string "-1_uid"
            }
        }, 2000)




    } else {

    }

});




//wait for the left bar to exist

setTimeout(() => {

    //find the left bar
    const leftBar = querySelectorShadowDom.querySelectorDeep('div[class="sn-canvas-toolbar-group -top"]');

    // Append the new button to the end of the leftBar element.
    leftBar.appendChild(newButton);
    leftBar.appendChild(btnCCNBacklog);

    newButton.onclick = function() {



        if (assignmentGroup.style.display === 'none') {
            // Show the iframe
            assignmentGroup.src = ``;
            assignmentGroup.src = `/incident_list.do?sysparm_query=assignment_groupSTARTSWITHxc-%5EORassignment_groupSTARTSWITHcc-%5EORassignment_group%3D87f09d0b6f8821003248511bbb3ee4b3%5Eincident_stateNOT%20IN6%2C5%5Eopened_by%3Djavascript%3Ags.getUserID()`;
            assignmentGroup.style.display = "block";
            assignmentGroup.style.width = "900px";
            assignmentGroup.style.height = "650px";
            assignmentGroup.style.position = "fixed";
            assignmentGroup.style.top = "70px";
            assignmentGroup.style.left = "300px";
            assignmentGroup.style.zIndex = "99999";
            assignmentGroup.style.border = "0px";
            assignmentGroup.style.borderRadius = "4px"
            assignmentGroup.styleboxShadow = " 0 0 100px rgba(0, 0, 0, 0.5)";
            assignmentGroup.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");


            document.body.appendChild(assignmentGroup);
            document.body.appendChild(modalBackdrop);
            modalBackdrop.style.display = 'block';
            newButton.setAttribute('is-selected', 'true');
            assignmentGroup.style.display = 'block';
        } else {
            // Hide the iframe
            assignmentGroup.style.display = 'none';
            modalBackdrop.style.display = 'none';

        }

    }

    //click event for CCNbacklogs

    btnCCNBacklog.onclick = function() {



        if (assignmentGroup.style.display === 'none') {
            // Show the iframe
            assignmentGroup.src = ``;
            assignmentGroup.src = `/incident_list.do?sysparm_query=stateNOT%20IN6%2C5%5Eassignment_groupSTARTSWITHxc-%5EORassignment_groupSTARTSWITHcc-%5EORassignment_group%3D87f09d0b6f8821003248511bbb3ee4b3%5Eassignment_group%3D6856ff2b4f669f402c9dfb95f110c709`;
            assignmentGroup.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
            assignmentGroup.style.display = "block";
            assignmentGroup.style.width = "900px";
            assignmentGroup.style.height = "600px";
            assignmentGroup.style.position = "fixed";
            assignmentGroup.style.top = "70px";
            assignmentGroup.style.left = "300px";
            assignmentGroup.style.zIndex = "99999";
            assignmentGroup.style.border = "0px";
            assignmentGroup.style.borderRadius = "4px"
            assignmentGroup.styleboxShadow = " 0 0 100px rgba(0, 0, 0, 0.5)";


            document.body.appendChild(assignmentGroup);
            document.body.appendChild(modalBackdrop);
            modalBackdrop.style.display = 'block';
            btnCCNBacklog.setAttribute('is-selected', 'true');
            assignmentGroup.style.display = 'block';
        } else {
            // Hide the iframe
            assignmentGroup.style.display = 'none';
            modalBackdrop.style.display = 'none';

        }

    }


    var lives = `
<div id="liveStats">
  <p id="ccnBacklog">CCN Backlogs: <span id="ccn-backlogs"></span></p>
</div>
`;
    var LiveStats = document.createElement("div");
    LiveStats.innerHTML = lives
    document.body.appendChild(LiveStats);
    fetchCNNBacklogs();


}, 8000);




function fetchCNNBacklogs() {
    // Create a new XMLHttpRequest object
    var xml = new XMLHttpRequest();

    // Open a GET request to the XML file
    xml.open("GET", "/incident_list.do?XML=&sysparm_query=stateNOT IN6%2C5%5Eassignment_groupSTARTSWITHxc-%5EORassignment_groupSTARTSWITHcc-%5EORassignment_group%3D87f09d0b6f8821003248511bbb3ee4b3%5Eassignment_group%3D6856ff2b4f669f402c9dfb95f110c709&sysparm_view=");

    // Send the request
    xml.send();

    // Set a timeout to log the number of incidents after 5 seconds
    setTimeout(function() {
        // Parse the XML response
        var parser = new DOMParser();
        var doc = parser.parseFromString(xml.responseText, "text/xml");

        // Get the number of incidents in the XML document
        var ticketCount = doc.querySelectorAll('incident').length;


        // Log the number of incidents to the console

        document.body.querySelector("#ccn-backlogs").textContent = ticketCount
    }, 5000);
}


function runEvery30Minutes() {
    fetchCNNBacklogs();
}

// Set an interval to call the function every 30 minutes
setInterval(runEvery30Minutes, 30 * 60 * 1000);




//test Search Query




function fetchTempWithDelay(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const dataResults = json.records.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });

          let html = "";

          html += dataResults.map((result) => {

              //test

       
              const template = result.template;

              const templateData = template.split('^');
              
              const descriptionData = templateData[0].split('=');
              const description = descriptionData[1];
              
              const workNotesData = templateData[1].split('=');
              const workNotes = workNotesData.length > 1 ? workNotesData[1].replace(/\r\n/g, '<br>') : "";
              
              const shortDescData = templateData[2] ? templateData[2].split('=') : [];
              const shortDesc = shortDescData.length > 1 ? shortDescData[1] : "";
              
       
              
            
//
const testTemplate =  "\r\n" + description + "\r\n" + workNotes;
const ticketTemplate = testTemplate

                     .replace(/\r\n/g, '<br />')
                     .replace(/Caller Name:/, '')
                     .replace(/Caller Position:/, '')
                     .replace(/Position:/, '')
                     .replace(/Caller:/, '')
                     .replace(/Caller Title:/, '');
           /* const processedTemplate = ticketTemplate
                // Remove unwanted parts
                .replace(/Caller Name:/, '')
                .replace(/Caller Position:/, '')
                .replace(/Caller:/, '')
                .replace(/Position:/, '')
                .replace(/^(.*)\n(.*)\n(.*)$/gm, '')
                .replace(/Peoplesoft\//g, '')
                .replace(/\^work_notes=/, '')
                .replace(/\Short_description=/, '<br>')
                .replace(/description=/, '')
                .replace(/\^EQ/, '')
                .replace(/\^/, '')
                .replace(/Application\Service Impacted:/, 'Application Service Impacted: <br />')
                .replace(/Employee ID:/, '')
                // Convert \r\n to <br>
               
            // Check if the result name is "AUSA Department Scales" and modify the HTML accordingly
            */
            if (result.name === 'AUSA Department Scales') {
              return `
                <div class="TempEntry">
<now-button-bare icon-start="tree-workflow-outline" variant="primary"
                  title=""
                  onclick="
                    document.getElementById('TemplateContent').textContent = this.title;
                 
                    document.querySelector('#UserAdd').click();
                  "
                >
                  ${result.name}</now-button-bare>
                </a>
                <br>
                <hr></div>
              `;
            } else if (result.name === 'AIR - Desc: Source Page – Password Reset') {
              const pwd = `
                <br>-Verification: Verified user using last 4 of SSN
                <br>-Actions taken: Reset Password via ISIM tool
                <br>-Result: The user was able to log in/Use isn't able to confirm, will call back if the issue persists
              `;

              return `
                <div class="TempEntry">
<now-button-bare icon-start="tree-workflow-outline" variant="primary"
                  title="${ticketTemplate}<br> ${pwd}" data-placeholder="${shortDesc}"
                  onclick="
                 
                  document.getElementById('TemplateContent').textContent = this.title;
                  if (this.getAttribute('data-placeholder') !== undefined && this.getAttribute('data-placeholder') !== null && this.getAttribute('data-placeholder').trim().length > 0) {
                      document.getElementById('TemplateShortDESC').textContent = this.getAttribute('data-placeholder');
                  }
                  else {document.getElementById('TemplateShortDESC').textContent = '';
                  }
                  document.querySelector('#Userinfo').click();
                  "
                >
                  AIR - Source/Windows Password Reset</now-button-bare>
                </a>
                <br>
                <hr></div>
              `;
            } else {
              return `
                <div class="TempEntry">
<now-button-bare icon-start="tree-workflow-outline" variant="primary"
                  title="${ticketTemplate}" data-placeholder="${shortDesc}"
                  onclick="
               
                  document.getElementById('TemplateContent').textContent = this.title;
                  if (this.getAttribute('data-placeholder') !== undefined && this.getAttribute('data-placeholder') !== null && this.getAttribute('data-placeholder').trim().length > 0) {
                      document.getElementById('TemplateShortDESC').textContent = this.getAttribute('data-placeholder');
                  }
                  else {
                    document.getElementById('TemplateShortDESC').textContent = '';
                  }
                  document.querySelector('#Userinfo').click();
                  "
                >
                  ${result.name}</now-button-bare>
                </a>
                <br> </div>
              `; 
            } 
          });

          html = html.replace(/\,/g, '');
          resolve(html);
        })
        .catch((error) => {
          reject(error);
        });
    }, 200);
  });
}

function fetchWithDelay(url) {
  const todayDate = new Date();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          const dataResults = json.result.containers[1].rows[0].columns[1].widgets[0].widget.data.results.filter(
            (result) => result.type === "kb"
          );

          const html = dataResults
            .map((result) => {
              return `
                <div class="kbEntry">

                  <now-button-bare
                    variant="primary"
                    module="${result.number}"
                    onclick="
                      document.getElementById('kbViewerFrame').src='/kb_view.do?sys_kb_id=${result.sys_id}';
                      document.getElementById('kbViewerDiv').style.display = 'block';
                      this.module = '${result.number}';
                      document.getElementById('kbNumberText').textContent = this.module;
                    "
                  >${result.label}</now-button-bare></a>
                  <br>
                  <b id="kb-number">${result.number} <now-button-bare icon-start="tree-workflow-outline"  size="sm" onclick="
                    kbNumber = this.closest('b').textContent.split(' ')[0];
                    document.getElementById('kbNumberText').textContent = kbNumber;
  
                    document.getElementById('message').style.display = 'block';

                    setTimeout(() => {
                      document.getElementById('message').style.display = 'none';
                    }, 3000);

                    document.getElementById('buttonTest').click();
                  ">Attach to IMS</now-button-bare> <br><c class="kbSnippet" style="align:right">Last updated ${calculateDifferenceInDays(todayDate, new Date(result.published))}</c>
                  </b><br>
                  
                  <b class="kbSnippet">
                    ${result.text}...</b>
                  
                </span>

              <hr>
            </div>`;
            })
            .join("");

          resolve(html);
        })
        .catch(function (error) {
          reject(error);
        });
    }, 200);
  });
}
  function calculateDifferenceInDays(date1, date2) {
    const differenceInMilliseconds = date1.getTime() - date2.getTime();
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    // Add conditional logic to count the difference in days, months, or years.
    if (differenceInDays <= 1) {
      return "a day ago";
    } else if (differenceInDays > 1 && differenceInDays < 60) {
      return `${differenceInDays} days ago`;
    } else if (differenceInDays >= 60 && differenceInDays < 365) {
      const differenceInMonths = Math.floor(differenceInDays / 30);
      return `${differenceInMonths} months ago`;
    } else if (differenceInDays >= 365 && differenceInDays < 730) {
      return "a year ago";
    } else if (differenceInDays >= 730) {
      const differenceInYears = Math.floor(differenceInDays / 365);
      return `${differenceInYears} years ago`;
    } else {
      // This should never be reached.
      return "Unknown time ago";
    }
  }







  

const SearchMarkIT = document.createElement("div");
SearchMarkIT.id = "markitKB";
document.body.appendChild(SearchMarkIT);

//KbHolder

kbResult.id = "kbResult";
const kbHeader = document.createElement("h2");
kbHeader.textContent = "Ahold Util - KB Finder";
kbHeader.id = "kbHeader";

//NEW Quick KBs
const cheatSheetHeader = document.createElement("span");
cheatSheetHeader.innerHTML = `<br> <now-button-bare label="Top - Knowledge Codes" size="md" icon-start="star-fill" onclick="document.querySelector('#cheatSheetButton').click()" style="color:yellow"></now-button-bare>`;
cheatSheetHeader.id = "cheatSheetHeader";


const tempHeader = document.createElement("span");
tempHeader.innerHTML = ` &nbsp; &nbsp; &nbsp;  <now-button-bare label="Templates" size="md"  onclick="document.querySelector('#tempButton').click()" style="color:yellow"></now-button-bare> `;
tempHeader.id = "tempHeader";

const how2sHeader = document.createElement("span");
how2sHeader.innerHTML = `&nbsp; &nbsp; <now-button-bare label="How To's" size="md" onclick="document.querySelector('#how2s').click()" style="color:yellow"></now-button-bare>`;
how2sHeader.id = "how2sHeader";




const brKb = document.createElement("span");
brKb.innerHTML = `<b>


<div id="message" style="display:none"><br> <now-alert status="info" icon="check-fill" header="Success!" content="Incident has been attached to IMS." text-link-props={{label: 'More info', href: '#'}}></now-alert></div></b>`;




const searchText = document.createElement("input");
searchText.setAttribute("type", "text");
searchText.setAttribute("id", "search-text");
searchText.setAttribute("placeholder", "Enter Key Words");

// Create a toggle button element.
const buttonKB = document.createElement('now-icon');
buttonKB.id = 'buttonKB';
buttonKB.className = "button-container";
buttonKB.setAttribute("icon", "catalog-fill");
buttonKB.setAttribute("size", "lg");
buttonKB.setAttribute("tooltipContent", "Fast and Easy KB Finder");
buttonKB.title = 'Fast and Easy KB Finder';
//button.textContent="KB Finder";










//TagSearch Buttons
//Cash office
const searchButton = document.createElement("now-button");
searchButton.setAttribute("id", "search-button");
searchButton.style.display = "none";


///Fuel Station
const FuelButton = document.createElement("now-button");
FuelButton.setAttribute("id", "fuel-button");
FuelButton.style.display = "none";


///SCO
const scoButton = document.createElement("now-button");
scoButton.setAttribute("id", "sco-button");
scoButton.style.display = "none";


//Temp Show
const tempButton = document.createElement("now-button");
tempButton.setAttribute("id", "tempButton");
tempButton.style.display = "none";
document.body.appendChild(tempButton);


//Temp Show
const cheatSheetButton = document.createElement("now-button");
cheatSheetButton.setAttribute("id", "cheatSheetButton");
cheatSheetButton.style.display = "none";
document.body.appendChild(cheatSheetButton);



///ISP
const cncButton = document.createElement("now-button");
cncButton.setAttribute("id", "cnc-button");
cncButton.style.display = "none";

//RF GUNS
const rfButton = document.createElement("now-button");
rfButton.setAttribute("id", "rf-button");
rfButton.style.display = "none";

//DeliVision
const dvButton = document.createElement("now-button");
dvButton.setAttribute("id", "dv-button");
dvButton.style.display = "none";


//HOME BASE
const hbButton = document.createElement("now-button");
hbButton.setAttribute("id", "hb-button");
hbButton.style.display = "none";

//HOW TOs

const how2s = document.createElement("now-button");
how2s.setAttribute("id", "how2s");
how2s.style.display = "none";

let slideFunction = slideUp;

buttonKB.onclick = function() {
     

    //SearchMarkIT.style.display = SearchMarkIT.style.display === 'block' ? 'none' : 'block';
    buttonKB.setAttribute('icon', buttonKB.getAttribute('icon') === 'catalog-fill' ? 'minimize-outline' : 'catalog-fill');
    
    
    slideFunction(SearchMarkIT, 250);
    slideFunction = slideFunction === slideUp ? slideDown : slideUp;
    searchText.focus();
 
        

   
};




function kbLoader() {
    kbResult.innerHTML = `<br> <br><div id="loader" style="text-align: center;">
    <now-loader label="Loading..."></now-loader></now-icon> 
    </div>`;
}



searchText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        kbLoader();
        const searchQuery = document.body.querySelector("#search-text").value;
        fetchWithDelay(
            `/api/now/sp/page?id=search&q=${searchQuery}`
        ).then((html) => {
        
            kbResult.innerHTML = html;
        });
    }
});



//tags

//TagSearch Function
function TagSearch(query) {
    kbLoader();
  
    fetchWithDelay(`/api/now/sp/page?id=search&q=${query}`)
      .then((html) => {
        kbResult.innerHTML = html;
      });
  }

  function TemplateSearch() {
    kbLoader();
  
    fetchTempWithDelay(`sys_template_list.do/?JSONv2=&sysparm_query=short_descriptionSTARTSWITHAIR%20-%20Desc:%20Source%20Page%20%E2%80%93%20Password%20Reset%5EORgroupsLIKE6856ff2b4f669f402c9dfb95f110c709&sysparm_first_row=1&sysparm_view=`)
      .then((html) => {
        kbResult.innerHTML = html;
       
      });
  }







//Start tags
searchButton.onclick = function(query) {
    TagSearch("Brand cash office operational support");
};


FuelButton.onclick = function() {
    TagSearch("21072 23888 20258 21063 21037 21068 21075 21074 21457 20074 21069");
};


scoButton.onclick = function() {
   TagSearch("20878 20222 20924  KB0020923 20920 KB0020922 20919 20937 20882 20918 20897 20899 20817 20898 21080 20940");
   
};

cncButton.onclick = function() {
    TagSearch("KB0030982 KB0020135 KB0020095 KB0020085 KB0020088");
};

rfButton.onclick = function() { //printer
    TagSearch("KB0020135 KB0021899 KB002013 KB0021217 KB0021366 KB0021187 KB0021901 KB0021906 KB0021941 KB0021951 KB0021911 KB0021965 KB0021894 KB0021216 KB0022165");
};

dvButton.onclick = function() {
    TagSearch("DeliVision");
};

hbButton.onclick = function() {
    TagSearch("21342 21649 21725 23758 21338 22518 26828 21352 22514 23374");
};

how2s.onclick = function() {
  TagSearch("KB0029151 KB0031667 KB0028172 KB0031657 KB0031056 ");
};

tempButton.onclick = function() {
  
    TemplateSearch();
};


cheatSheetButton.onclick = function() {
  
  kbResult.innerHTML = Knowledge_codes;
};
//end of tags




const kbTabList = document.createElement("div");
kbTabList.ID = "kbTabList";
kbTabList.innerHTML = `<div class="kbTab-list">
<now-button-bare label="#Cash Sheet " size="sm"  onclick="document.querySelector('#search-button').click()"></now-button-bare> 
<now-button-bare label="#Fuel Station " size="sm"   onclick="document.querySelector('#fuel-button').click()"></now-button-bare> 
<now-button-bare label="#SCO " size="sm"   onclick="document.querySelector('#sco-button').click()"></now-button-bare> 
<now-button-bare label="#Register" size="sm"   onclick="document.querySelector('#hb-button').click()"></now-button-bare> 
<now-button-bare label="#CNC" size="sm"   onclick="document.querySelector('#cnc-button').click()"></now-button-bare>
<now-button-bare label="#Printers" size="sm"   onclick="document.querySelector('#rf-button').click()"></now-button-bare>  
<now-button-bare label="#DeliVision" size="sm"   onclick="document.querySelector('#dv-button').click()"></now-button-bare>  
<hr>
</div>`;



const buttonAddKB = document.createElement('button');
buttonAddKB.textContent = "Test";
buttonAddKB.id = "buttonTest";
buttonAddKB.style.display="none";

buttonAddKB.onclick = function(kbNumber) {
  
   const activeCanvas2 = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
  for (const tag2 of activeCanvas2) {
      if (tag2.style.display !== 'none') {
          
    // Get the element using the $$ function.

  const xmlID2 = querySelectorShadowDom.querySelectorDeep('input[name="u_knowledge_input"]',tag2);
  xmlID2.value =document.getElementById('kbNumberText').textContent;


xmlID2.focus();

const mouseClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  });
  xmlID2.dispatchEvent(mouseClickEvent);
  
// Create a new keyboard event object for the space key down event.
const spaceKeyDownEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    keyCode: 32, // Space key code.
  });

  // Dispatch the space key down event to the document body.
  document.body.dispatchEvent(spaceKeyDownEvent);

  // Wait 200 milliseconds.
  setTimeout(() => {
    // Insert a space at the current cursor position.
    document.execCommand('insertText', false, ' ');
  }, 200);

  // Wait another 200 milliseconds.
  setTimeout(() => {
    // Create a new keyboard event object for the space key up event.
    const spaceKeyUpEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      keyCode: 32, // Space key code.
    });

    // Dispatch the space key up event to the document body.
    document.body.dispatchEvent(spaceKeyUpEvent);
  }, 400);










      }
    }
}
    //KB Holder
const kbViewerDiv = document.createElement("div");
kbViewerDiv.id = "kbViewerDiv";



//Resize




//close button for Kb Holder


const kbViewerCloseBtn = document.createElement("now-button");
kbViewerCloseBtn.id = "kbViewerCloseBtn";
kbViewerCloseBtn.setAttribute("icon", "close-outline");
kbViewerCloseBtn.setAttribute("variant", "primary");
kbViewerCloseBtn.onclick = function() {
   
    kbViewerDiv.style.display = "none";
    kbViewerFrame.src = "";
}
kbViewerDiv.appendChild(kbViewerCloseBtn);


const kbViewerUseBtn = document.createElement("now-button");
kbViewerUseBtn.id = "kbViewerUseBtn";
kbViewerUseBtn.setAttribute("label", "Use this KB");
kbViewerUseBtn.setAttribute("size", "md");
kbViewerUseBtn.setAttribute("variant", "primary");
kbViewerUseBtn.onclick = function() {
    buttonAddKB.click();
    kbViewerDiv.style.display = "none";
    kbViewerFrame.src = "";
}
kbViewerDiv.appendChild(kbViewerUseBtn);

//end of close button







const kbValue= document.createElement("span");
kbValue.id="kbNumberText";
kbValue.style.display="none";
SearchMarkIT.appendChild(kbValue);

//Function to Add KBNumber to ActiveTab
























//iframe to view KB
const kbViewerFrame = document.createElement("iframe");
kbViewerFrame.id = "kbViewerFrame";

kbViewerFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-downloads allow-popups");
kbViewerDiv.appendChild(kbViewerFrame);


document.body.appendChild(buttonKB);
SearchMarkIT.appendChild(kbHeader);

SearchMarkIT.appendChild(searchText);
SearchMarkIT.appendChild(cheatSheetHeader);
SearchMarkIT.appendChild(tempHeader);
SearchMarkIT.appendChild(how2sHeader);

//Append tags Button
SearchMarkIT.appendChild(searchButton); //Cash Sheet
SearchMarkIT.appendChild(FuelButton);
SearchMarkIT.appendChild(scoButton);

SearchMarkIT.appendChild(cncButton);
SearchMarkIT.appendChild(rfButton);
SearchMarkIT.appendChild(dvButton);
SearchMarkIT.appendChild(hbButton);
SearchMarkIT.appendChild(how2s);

//End of tags Buttons

SearchMarkIT.appendChild(brKb);
SearchMarkIT.appendChild(kbTabList);
SearchMarkIT.appendChild(kbResult);
document.body.appendChild(kbViewerDiv);
document.body.appendChild(buttonAddKB);





const kbBtnMin = document.createElement("now-button");
kbBtnMin.id="kbBtnMin";
kbBtnMin.setAttribute("icon","minimize-fill");
kbBtnMin.setAttribute("variant","primary");
kbBtnMin.setAttribute("size","md");
SearchMarkIT.appendChild(kbBtnMin);

kbBtnMin.onclick = function () {
    buttonKB.click();
}




function slideUp(element, duration) {
  // Get the element's height.
  const height = element.offsetHeight;

  // Change the element's display to block to make it visible.
  element.style.display = 'block';

  // Set the element's bottom to 0 so that it starts at the bottom of the page.
  element.style.bottom = '0px';

  // Set the element's height to 0.
  element.style.height = '0px';

  // Set the element's overflow to hidden.
  element.style.overflow = 'hidden';

  // Set the element's transition property.
  element.style.transitionTimingFunction ='ease-in';
  element.style.transitionProperty = 'bottom, height';

  // Set the element's transition duration.
  element.style.transitionDuration = duration + 'ms';

  // Animate the element's bottom and height.
  setTimeout(() => {
    element.style.bottom = '5px';
    element.style.height = '600px';
  }, 0);
}

function slideDown(element, duration) {
  // Get the element's height.
  const height = element.offsetHeight;

  // Set the element's bottom to -550px so that it hides the element before it is animated.
  element.style.bottom = '-560px';

  // Set the element's height to 550px.


  // Set the element's overflow to hidden.
  element.style.overflow = 'hidden';

  // Set the element's transition property.
  element.style.transitionTimingFunction ='ease-out';
  element.style.transitionProperty = 'bottom, height';

  // Set the element's transition duration.
  element.style.transitionDuration = duration + 'ms';

  // Animate the element's bottom and height.
  setTimeout(() => {
    element.style.bottom = '-2px';
    element.style.height = '0px';
  }, 0);

  // Hide the element after the animation is complete.
  setTimeout(() => {
    element.style.display = 'none';
  }, 200);
}



//FOOTER with Templates
const footerDiv = document.createElement("div");
footerDiv.className ="footer";
document.body.appendChild(footerDiv);


//FOOTER with Templates
const footerDiv2 = document.createElement("div");
footerDiv2.id ="span";
document.body.appendChild(footerDiv2);


//ToggleButton
const footerDivToggleBtn = document.createElement("button");
footerDivToggleBtn.id="footerDivToggleBtn";
footerDivToggleBtn.style.display="none";


footerDivToggleBtn.onclick = function() {
    if (footerDiv.style.width === "70px") {
        footerDiv.style.width = "100%";
        const tempToggle = document.getElementById("ToggleFooter");
        tempToggle.setAttribute("icon-start","collapse-outline");
      } else {
        footerDiv.style.width = "70px";
        const tempToggle = document.getElementById("ToggleFooter");
        tempToggle.setAttribute("icon-start","expand-outline");
      }
    }

    footerDiv.appendChild(footerDivToggleBtn);




//list
// Create a new HTML element to display the list
const footerList = document.createElement("div");
footerList.className="footer-list";

/* footerList.innerHTML=`
 <a id="footerKBText">
<a class="footer-text" onclick ="document.getElementById('btnSourcePassword').click()"> Source Password Reset</a>
<a class="footer-text" onclick="document.getElementById('btnWINPassword').click()"> Windows Password Reset</a>
<a class="footer-text" onclick="document.getElementById('btnACEPassword').click()"> ACE Password Reset</a>
<a class="footer-text" onclick="document.getElementById('btnStoreClose').click()"> Store Close</a>
<a class="footer-text" onclick="document.getElementById('btnRFReplacement').click()"> RF Gun Replacement</a></a>
`;



*/

  setTimeout(() => {
fetchQuickTempWithDelay('sys_template_list.do/?JSONv2=&sysparm_query=short_descriptionSTARTSWITHAIR%20-%20Desc:%20Source%20Page%20%E2%80%93%20Password%20Reset%5EORgroupsLIKE6856ff2b4f669f402c9dfb95f110c709&sysparm_first_row=1&sysparm_view=');
    

  }, 2000);

footerDiv.appendChild(footerList);
//Click Handlers:
const btnSourcePassword = document.createElement("button");
btnSourcePassword.id ="btnSourcePassword";
btnSourcePassword.style.display="none";
btnSourcePassword.onclick = function () {
AppendTemplate("KB0027449","Source login issue / [SourceID] /  password reset"); 
}
document.body.appendChild(btnSourcePassword);



const btnStoreClose = document.createElement("button");
btnStoreClose.id ="btnStoreClose";
btnStoreClose.style.display="none";
btnStoreClose.onclick = function () {
AppendTemplate("KB0021209","The store closing report did not go through last night for store: [storeID]");
  
}
document.body.appendChild(btnStoreClose);



const btnACEPassword = document.createElement("button");
btnACEPassword.id ="btnACEPassword";
btnACEPassword.style.display="none";
btnACEPassword.onclick = function () {
AppendTemplate("KB0020813","POS ACE login issue / [OperatorID] /  password reset");
  
}
document.body.appendChild(btnACEPassword);


const btnWINPassword = document.createElement("button");
btnWINPassword.id ="btnWINPassword";
btnWINPassword.style.display="none";
btnWINPassword.onclick = function () {
AppendTemplate("KB0020956","Windows login issue / [NetWorkID] /  password reset");
  
}
document.body.appendChild(btnWINPassword);



const btnRFReplacement = document.createElement("button");
btnRFReplacement.id ="btnRFReplacement";
btnRFReplacement.style.display="none";
btnRFReplacement.onclick = function () {
AppendTemplate("KB0020799","Handheld - RF Gun - Store Needs Replacement Gun - Model No: []");
  
}
document.body.appendChild(btnRFReplacement);



//Function for Templates

function AppendTemplate(kbTemplate,ShortDescText) {
    const activeCanvas2 = querySelectorShadowDom.querySelectorAllDeep('sn-canvas-screen');
    for (const tag2 of activeCanvas2) {
        if (tag2.style.display !== 'none') {
            
      // Get the element using the $$ function.
  
    const xmlID2 = querySelectorShadowDom.querySelectorDeep('input[name="u_knowledge_input"]',tag2);
    const shortDesc = querySelectorShadowDom.querySelectorDeep('input[name="short_description"]',tag2);
    xmlID2.value = kbTemplate;
    shortDesc.value=ShortDescText;
   
  
  xmlID2.focus();
  
  const mouseClickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    xmlID2.dispatchEvent(mouseClickEvent);
    
  // Create a new keyboard event object for the space key down event.
  const spaceKeyDownEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      keyCode: 32, // Space key code.
    });
  
    // Dispatch the space key down event to the document body.
    document.body.dispatchEvent(spaceKeyDownEvent);
  
    // Wait 200 milliseconds.
    setTimeout(() => {
      // Insert a space at the current cursor position.
      document.execCommand('insertText', false, ' ');
    }, 200);
  
    // Wait another 200 milliseconds.
    setTimeout(() => {
      // Create a new keyboard event object for the space key up event.
      const spaceKeyUpEvent = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        keyCode: 32, // Space key code.
      });
  
      // Dispatch the space key up event to the document body.
      document.body.dispatchEvent(spaceKeyUpEvent);
    }, 400);
  
  
  
  
  
  
  
  
  
  
        }
      }
  }




  
   // Print the value
  
  


const appPage = document.createElement("div");
appPage.id="appPage";
document.body.appendChild(appPage);

const appPageCloseBtn = document.createElement("now-button");
appPageCloseBtn.id= "appPageCloseBtn";
appPageCloseBtn.setAttribute("icon", "close-outline");
appPageCloseBtn.setAttribute("variant", "primary");
appPageCloseBtn.setAttribute("size", "md");
appPageCloseBtn.onclick = function() {
    appPage.removeChild(appPageTable);
    appPage.style.display = "none";
   
    
  
}
appPage.appendChild(appPageCloseBtn);


const appPageShow =  document.createElement("button");
appPageShow.id="appPageShow";
appPageShow.style.display="none";
appPageShow.onclick = function () {
    createTable();
    
    replacePlaceholders(appPage, storeNum);
    replacePlaceholders(appPageTable, storeNum);
    appPage.style.display="block";
    
} 
document.body.appendChild(appPageShow);

const appPageH2 = document.createElement("h2");
appPageH2.id = "appPageH2";
appPageH2.setAttribute("placeholder", "{{placeholder}}");
appPageH2.textContent="Store {{placeholder}} Application links"
appPage.appendChild(appPageH2);

const appPageHr = document.createElement("hr");
appPageHr.id = "appPageHr";
appPage.appendChild(appPageHr);





function createTable() {

// Create the table element
const appPageTable = document.createElement('table');
appPageTable.id="appPageTable";
appPageTable.classList.add('tg');

// Create the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headerCell1 = document.createElement('th');
headerCell1.classList.add('tg-7btt');
headerCell1.textContent = 'Application';
const headerCell2 = document.createElement('th');
headerCell2.classList.add('tg-7btt');
headerCell2.textContent = 'URL';
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
thead.appendChild(headerRow);

// Create the table body
const tbody = document.createElement('tbody');

// Create the table rows
const rows = [
  ['Interstore', 'https://ahold-scales.aholdusa.com/InterStore/central/businessunitstoremaint.aspx?OrgUnitNum={{placeholder}}'],
  ['Clean Sweep', 'http://gcnet.aholdusa.com/storeSweepWebService/gunreport.asmx/GetStoreSetup?iStoreNum={{placeholder}}'],
  ['Deli server', 'http://a{{placeholder}}dv1.us.royalahold.net:10000/custom/'],
  ['Deli Admin', 'http://a{{placeholder}}dv1.us.royalahold.net/DeliVision/operations/links.jsp'],
  ['Overhead Dislay', 'http://a{{placeholder}}dv1.us.royalahold.net/DeliVision/overhead/overhead.action'],
  ['VISP Printer Reroute', 'http://a001{{placeholder}}.us.royalahold.net:631/'],
  ['Device Manager', 'http://a{{placeholder}}dv1.us.royalahold.net/DeliVision/admin/device/deviceManager.jsp'],
  ['Glory', 'http://a0{{placeholder}}brk1'],
  ['HHPO (HandHeld Perish. Order)', 'http://a001{{placeholder}}.us.royalahold.net/HHPSO/'],
];

rows.forEach(([application, url]) => {
    const row = document.createElement('tr');
    const applicationCell = document.createElement('td');
    applicationCell.classList.add('tg-0pky');
    applicationCell.textContent = application;
    applicationCell.setAttribute("placeholder", "{{placeholder}}");
    const urlCell = document.createElement('a');
    urlCell.classList.add('tg-y02l');

 
    urlCell.setAttribute("placeholder", "{{placeholder}}");
    

    urlCell.textContent = url;
    urlCell.href = url;
    row.appendChild(applicationCell);
    row.appendChild(urlCell);
    tbody.appendChild(row);
    appPage.appendChild(appPageTable);
  
  });

// Append the table header and body to the table
appPageTable.appendChild(thead);
appPageTable.appendChild(tbody);
}
// Append the table to the document














function replacePlaceholders(html, storeNum) {
    // Get all elements in the HTML document with the `placeholder` attribute.
    const placeholderElements = document.querySelectorAll("[placeholder]");
  
    // For each placeholder element, replace the `{{placeholder}}` text with the given store number.
    placeholderElements.forEach((element) => {
      // If the element is an `a` element, replace the `{{placeholder}}` in the `href` attribute as well.
      if (element.tagName === "A") {
        element.href = element.href.replace("{{placeholder}}", storeNum);
      }
  
      // Replace the `{{placeholder}}` text in the element's text content.
      element.textContent = element.textContent.replace("{{placeholder}}", storeNum);
    });
  }

  const TemplateContent = document.createElement("span");
  TemplateContent.id="TemplateContent";
  TemplateContent.style.display="none";
  document.body.appendChild(TemplateContent);

  const TemplateShortDESC = document.createElement("span");
  TemplateShortDESC.id="TemplateShortDESC";
  TemplateShortDESC.style.display="none";
  document.body.appendChild(TemplateShortDESC);






  


  function fetchQuickTempWithDelay(url) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            const dataResults = json.records.sort(function(a, b) {
              return a.name.localeCompare(b.name);
            });
  
            let html = `
              <now-button-bare icon-start="collapse-outline" id="ToggleFooter" onclick ="document.getElementById('footerDivToggleBtn').click()" size="md" title="More options"></now-button-bare>
              <a style="font-weight: 700; color: RGB(var(--now-color_text--primary, var(--now-color--neutral-18, 22, 27, 28))); font-size: var(--now-global-font-size--md, 14px); margin-top: 10px; margin-bottom: 10px;">
                <select id="template-dropdown" onchange="document.getElementById('buttonToggleDropDownFooter').click()">
                  <option value="templates" selected>Templates</option>
                  <option value="quick-kb">Quick KB</option>
                </select>
              </a>
            `;
  
            const firstFourResults = dataResults.slice(0, 5);
            const showMoreButton = dataResults.length > 5 ? `<strong><a class="footer-text temp" size="sm" variant="primary" onclick="document.getElementById('buttonKB').click(); document.querySelector('#tempButton').click()">Show More</a></strong>` : '';
               

            html += firstFourResults.map((result) => {

 //test

       
 const template = result.template;

 const templateData = template.split('^');
 
 const descriptionData = templateData[0].split('=');
 const description = descriptionData[1];
 
 const workNotesData = templateData[1].split('=');
 const workNotes = workNotesData.length > 1 ? workNotesData[1].replace(/\r\n/g, '<br>') : "";
 
 const shortDescData = templateData[2] ? templateData[2].split('=') : [];
 const shortDesc = shortDescData.length > 1 ? shortDescData[1] : "";
 

 

//
const testTemplate =  "\r\n" + description + "\r\n" + workNotes;
const ticketTemplate = testTemplate

        .replace(/\r\n/g, '<br />')
        .replace(/Caller Name:/, '')
        .replace(/Caller Position:/, '')
        .replace(/Position:/, '')
        .replace(/Caller:/, '')
        .replace(/Caller Title:/, '');            


              const processedTemplate = result.u_readable_template
                // Remove unwanted parts
                .replace(/Caller Name:/, '')
                .replace(/Caller Position:/, '')
                .replace(/Caller:/, '')
                .replace(/Position:/, '')
                .replace(/^(.*)\n(.*)\n(.*)$/gm, '')
                .replace(/Peoplesoft\//g, '')
                .replace(/\^work_notes=/, '')
                .replace(/\Short_description=/, '<br>')
                .replace(/description=/, '')
                .replace(/\^EQ/, '')
                .replace(/\^/, '')
                .replace(/Application\Service Impacted:/, 'Application Service Impacted: <br />')
                .replace(/Employee ID:/, '')
                // Convert \r\n to <br>
                .replace(/\r\n/g, '<br />');
  
              // Check if the result name is "AUSA Department Scales" and modify the HTML accordingly
              if (result.name === "AUSA Department Scales") {
                return `
                    <a class="footer-text temp"
                      title=""
                      onclick="
                      document.getElementById('TemplateContent').textContent = this.title;
                        document.querySelector('#UserAdd').click();
                      "
                    >${result.name}</a>
                `;
              } 
              
              else if (result.name === "AIR - Desc: Source Page – Password Reset") {
                const pwd =`<br>-Verification: Verified user using last 4 of SSN <br> -Actions taken: Reset Password via ISIM tool <br> -Result: The user was able to log in/Use isn't able to confirm, will call back if the issue persists`;

                return `
                    <a class="footer-text temp"
                      title="${ticketTemplate}<br> ${pwd}" data-placeholder="${shortDesc}"
                      onclick="
                   
                      document.getElementById('TemplateContent').textContent = this.title;
                      if (this.getAttribute('data-placeholder') !== undefined && this.getAttribute('data-placeholder') !== null && this.getAttribute('data-placeholder').trim().length > 0) {
                          document.getElementById('TemplateShortDESC').textContent = this.getAttribute('data-placeholder');
                      }
                      else {document.getElementById('TemplateShortDESC').textContent = '';
                      }
                      document.querySelector('#Userinfo').click();
                      "
                    >AIR - Source/Windows Password Reset</a>
                `;
              }
              else {
                
                return `
                    <a class="footer-text temp"
                      title="${ticketTemplate}"data-placeholder="${shortDesc}"
                      onclick="
                     
                      document.getElementById('TemplateContent').textContent = this.title;
                      if (this.getAttribute('data-placeholder') !== undefined && this.getAttribute('data-placeholder') !== null && this.getAttribute('data-placeholder').trim().length > 0) {
                          document.getElementById('TemplateShortDESC').textContent = this.getAttribute('data-placeholder');
                      }
                      else {document.getElementById('TemplateShortDESC').textContent = '';
                      }
                      document.querySelector('#Userinfo').click();
                      "
                    >${result.name}</a>
                `;
              }
            }).join('');
  
            const footerKB = `
              <a class="footer-text kb" onclick ="document.getElementById('btnSourcePassword').click()"> Source Password Reset</a>
              <a class="footer-text kb" onclick="document.getElementById('btnWINPassword').click()"> Windows Password Reset</a>
              <a class="footer-text kb" onclick="document.getElementById('btnACEPassword').click()"> ACE Password Reset</a>
              <a class="footer-text kb" onclick="document.getElementById('btnStoreClose').click()"> Store Close</a>
              <a class="footer-text kb" onclick="document.getElementById('btnRFReplacement').click()"> RF Gun Replacement</a>
              <strong><a class="footer-text kb"class="kb" size="sm" variant="primary" onclick="document.getElementById('buttonKB').click()">Show More</a></strong>
            `;
  
            html += showMoreButton + footerKB;
  
            resolve(html);
            footerList.innerHTML = html;
          })
          .catch((error) => reject(error));
      }, 200);
    });
  }
  
  
    
  const buttonToggleDropDownFooter = document.createElement("button");
  buttonToggleDropDownFooter.id="buttonToggleDropDownFooter";
  buttonToggleDropDownFooter.onclick = function () {
    setTimeout(function () {
      const selectedOption = document.getElementById('template-dropdown').value;
  
      const tempElements = document.getElementsByClassName('temp');
      const kbElements = document.getElementsByClassName('kb');
  
      if (selectedOption === 'quick-kb') {
        for (const element of tempElements) {
          element.style.display = 'none';
        }
  
        for (const element of kbElements) {
          element.style.display = 'inline';
        }
      } else if (selectedOption === 'templates') {
        for (const element of kbElements) {
          element.style.display = 'none';
        }
  
        for (const element of tempElements) {
          element.style.display = 'inline';
        }
      }
    }, 10); // 10 milliseconds timeout
  };
  buttonToggleDropDownFooter.style.display="none";
  document.body.appendChild(buttonToggleDropDownFooter);






  //SHORTCUTS
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 113) { // F2 key code
        const dropdown = document.getElementById('template-dropdown');
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        const otherOption = dropdown.options[dropdown.selectedIndex === 0 ? 1 : 0];

        selectedOption.selected = false;
        otherOption.selected = true;
        dropdown.dispatchEvent(new Event('change')); // Trigger the change event
    }
});


//Daphne KB Codes

const Knowledge_codes =`

<style type="text/css">
  .tg {
    border-collapse: collapse !important;
    border-spacing: 0 !important;
    width: 100% !important;
  }

  .tg th, .tg td {
    border: 1px solid #ddd !important;
    padding: 12px !important;
    text-align: left !important;
    font-size: 14px !important;
    font-style: var(--now-form-field--font-style, normal) !important;
    font-weight: var(--now-form-field--font-weight, normal) !important;
    line-height: 1 !important;
    font-family: var(--now-form-field--font-family, var(--now-font-family, "Source Sans Pro", Arial, sans-serif)) !important;
  }

  .tg th {
    background-color: RGB(var(--now-text-link--primary--color, var(--now-color--link-2, 1, 119, 142))) !important;
    color: white !important;
  }

  .tg td {
    background-color: #f5f5f5 !important;
  }

  .tg tr:hover {
    background-color: RGBA(var(--now-color--primary-0, 221, 237, 233), 0.5) !important;
  }

  .tg td:hover {
    background-color: RGBA(var(--now-color--primary-0, 221, 237, 233), 0.5) !important;
  }

  .tg .floating-title {
    font-weight: bold !important;
  }

  /* Add more styles for specific classes if needed */
</style>



<table class="tg" id="knowledgeTable">
  <thead>
    <tr>
      <th class="tg-7zrl .floating-title"><span style="font-weight:bold">Knowledge Code</span></th>
      <th class="tg-0thz"><span style="font-weight:bold">Title</span></th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td class="tg-ufsz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button>  <span style="background-color: ">KB0023412</span></td>
    <td class="tg-ufsz"><span style="background-color: ">Source Microsoft error msgs</span></td>
  </tr>
  <tr>
    <td class="tg-ufsz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0021853</span></td>
    <td class="tg-ufsz"><span style="background-color: ">Control D pwd reset</span></td>
  </tr>
  <tr>
    <td class="tg-ufsz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0020959</span></td>
    <td class="tg-ufsz"><span style="background-color: ">VISP pwd unlock</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0020813</span></td>
    <td class="tg-xj7a"><span style="background-color: ">POS 8-digit pwd</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0020377</span></td>
    <td class="tg-xj7a"><span style="background-color: ">Veribalance</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0026809</span></td>
    <td class="tg-xj7a"><span style="background-color: ">MFA</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0030390</span></td>
    <td class="tg-xj7a"><span style="background-color: ">Compass Stop And Shop and GF</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0030130</span></td>
    <td class="tg-xj7a"><span style="background-color: ">Compass Giant Martins</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0027693</span></td>
    <td class="tg-xj7a"><span style="background-color: ">Plan-o-gram</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">28231</span></td>
    <td class="tg-xj7a"><span style="background-color: ">Email Access</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20803</span></td>
    <td class="tg-xj7a"><span style="background-color: ">RF gun - Physical damaged</span></td>
  </tr>
  <tr>
    <td class="tg-xj7a"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">23301</span></td>
    <td class="tg-xj7a"><span style="background-color: ">CX Tracker/NPS Dashboard</span></td>
  </tr>
  <tr>
    <td class="tg-7zrl .floating-title"></td>
    <td class="tg-u7t1"><span style="font-weight:bold;color:#F00;background-color: ">CNC</span></td>
  </tr>
  <tr>
    <td class="tg-okxi"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20131</span></td>
    <td class="tg-okxi"><span style="background-color: ">Orders not dropping</span></td>
  </tr>
  <tr>
    <td class="tg-okxi"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">28793</span></td>
    <td class="tg-okxi"><span style="background-color: ">Zebra handheld</span></td>
  </tr>
  <tr>
    <td class="tg-7zrl"></td>
    <td class="tg-6shv"><span style="font-weight:bold;color:#F00;background-color: ">Fuel</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21072</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Pump printer</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">23888</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Tank cover / lid</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20258</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Intercom</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21063</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Eft card reader</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21037</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Fuel Controller&nbsp;&nbsp;offline</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21068</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Grade buttons</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21075</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Pumps down – less than ½</span></td>
  </tr>
  <tr>
    <td class="tg-sju7"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="font-weight:bold;color:#181A1D;background-color: ">21074</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Pumps down all</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21457</span></td>
    <td class="tg-x2c0"><span style="background-color: ">X on pump icon</span></td>
  </tr>
  <tr>
    <td class="tg-sju7"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="font-weight:bold;color:#181A1D;background-color: ">20074</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Tank monitor</span></td>
  </tr>
  <tr>
    <td class="tg-x2c0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21069</span></td>
    <td class="tg-x2c0"><span style="background-color: ">Hose/nozzle</span></td>
  </tr>
  <tr>
    <td class="tg-7zrl"></td>
    <td class="tg-7lrx"><span style="font-weight:bold;color:#F00;background-color: ">PC</span></td>
  </tr>
  <tr>
    <td class="tg-4ok0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">22066</span></td>
    <td class="tg-4ok0"><span style="background-color: ">Running slow</span></td>
  </tr>
  <tr>
    <td class="tg-4ok0"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">22135</span></td>
    <td class="tg-4ok0"><span style="background-color: ">Unpingable</span></td>
  </tr>
  <tr>
    <td class="tg-7zrl"></td>
    <td class="tg-e6l0"><span style="font-weight:bold;color:#F00;background-color: ">Register</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21342</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Boot issue</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21649</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Eft down</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21725</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Frozen</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">23758</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Hand scanner - Wired</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21338</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Hand scanner – wireless</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">22518</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Monitor – customer</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">26828</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Pinpad keypad cover</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21352</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Pinpad broken pen</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">22514</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Scanner/scale</span></td>
  </tr>
  <tr>
    <td class="tg-j2xz"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">23374</span></td>
    <td class="tg-j2xz"><span style="background-color: ">Ups</span></td>
  </tr>
  <tr>
    <td class="tg-7zrl"></td>
    <td class="tg-x8hd"><span style="font-weight:bold;color:#F00;background-color: ">SCO</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20878</span></td>
    <td class="tg-usea"><span style="background-color: ">Coupon box is full</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20222</span></td>
    <td class="tg-usea"><span style="background-color: ">Monitor display</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20924</span></td>
    <td class="tg-usea"><span style="background-color: ">Printer quality</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0020923</span></td>
    <td class="tg-usea"><span style="background-color: ">Printer damaged</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20920</span></td>
    <td class="tg-usea"><span style="background-color: ">Printer jam/feed</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">KB0020922</span></td>
    <td class="tg-usea"><span style="background-color: ">Printer not printing</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20919</span></td>
    <td class="tg-usea"><span style="background-color: ">Printer errors</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20937</span></td>
    <td class="tg-usea"><span style="background-color: ">Scanner/scale – weigh</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20882</span></td>
    <td class="tg-usea"><span style="background-color: ">Front sensor</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20918</span></td>
    <td class="tg-usea"><span style="background-color: ">Pinpad – broken pen</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20897</span></td>
    <td class="tg-usea"><span style="background-color: ">Damaged</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20899</span></td>
    <td class="tg-usea"><span style="background-color: ">Lock</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20817</span></td>
    <td class="tg-usea"><span style="background-color: ">Bag scale errors</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20898</span></td>
    <td class="tg-usea"><span style="background-color: ">Boot</span></td>
  </tr>
  <tr>
    <td class="tg-usea"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">21080</span></td>
    <td class="tg-usea"><span style="background-color: ">Quick look up</span></td>
  </tr>
  <tr>
    <td class="tg-7zrl"> </td>
    <td class="tg-r1nn"><span style="font-weight:bold;color:#F00;background-color: ">UPS</span></td>
  </tr>
  <tr>
    <td class="tg-kjxm"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">23374</span></td>
    <td class="tg-kjxm"><span style="background-color: ">Register</span></td>
  </tr>
  <tr>
    <td class="tg-kjxm"><button onclick="
          kbNumber ='*' + this.nextElementSibling.textContent;
          document.getElementById('kbNumberText').textContent = kbNumber;
          document.getElementById('message').style.display = 'block';
          setTimeout(() => {
            document.getElementById('message').style.display = 'none';
          }, 3000);
          document.getElementById('buttonTest').click();
        ">+</button> <span style="background-color: ">20940</span></td>
    <td class="tg-kjxm"><span style="background-color: ">SCO</span></td>
  </tr>
  </tbody>
</table>

`;