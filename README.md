ReactJS: SimpleForm
=================
"SimpleForm" is sample code of a Form, as a React Component, using Axios.

The business use case is to capture leads/emails for marketing, sales, or service use. 
This repo is for Web built using ```create-react-app``` (see [docs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)). It can be used as is 
or combined with a monorepo, like [SimpleLanding](https://github.com/og-pr/public_ticket.530) for Mobile use on iOS & Android.


Installation
============

* Get the repo
* From root directory, do ```yarn```\
**Required** Basic ReactJS knowledge. If repo user needs review, please read [Getting Started with React](https://www.taniarascia.com/getting-started-with-react/)  

Run
===

For web, from the root directory, do

* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --inline --hot --colors```
* Manually open a browser to localhost:8080 to see webapp 
* Inspect browser window = open console to see shared code working on button click


Demo & Animated GIFs
===========
* Work in progress

Notes - Development
===========
* To save on final bundle/file size, [individual SVGs](https://simpleicons.org/) used 
* [Form](https://flaviocopes.com/react-forms/) has single input; repo user can expand as needed
* [Axios](https://github.com/axios/axios) is used to transfer [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) via Post to an internal API\
**Note** The API uses [Google Apps Script](https://developers.google.com/apps-script), a  Cloud Function service
* Data is stored in a [Google Spreadsheet](https://www.google.com/sheets/about/) and processed via this (old) [gist](https://github.com/og-pr/all-gists/blob/master/gist.2e%20%3D%20dataCapture.gas.js)\
**Note** A copy of the gist has been updated for internal use and it is private.

Notes - Miscellaneous 
=====
* The form is a simple Call-to-Action [(CTA)](https://www.impactbnd.com/blog/examples-of-calls-to-action-for-lead-generation)
* The modified [graphic](https://www.freepik.com/free-vector/contact-us-landing-page-flat-style_4934492.htm#page=1&query=contact%20us&position=22) is an SVG, as background (in component)
* Axios can be replaced by [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) ; repo user can reference this [gist](https://github.com/og-pr/all-gists/blob/master/gist.2d%20%3D%20dataCapture.js)

Inspiration
===========
* ReactJS [Lead Form](https://github.com/jacted/lead-form) (missing post and missing data storage)
* Existing [landing page repo](https://github.com/og-pr/public_ticket.530) missing form; decided to build one 
* Needed data flow (from Browser to Google Spreadsheet); this repo \
complements [Managing Firebase Database with Google Sheets](https://medium.com/hackernoon/managining-firebase-database-using-google-sheets-via-google-apps-script-b87e5637b006) (using this [library](https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase/tutorials/read-and-write-data-in-firebase-from-apps-script))
