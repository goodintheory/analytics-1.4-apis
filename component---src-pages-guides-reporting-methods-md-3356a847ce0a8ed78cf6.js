"use strict";(self.webpackChunkanalytics_1_4_apis=self.webpackChunkanalytics_1_4_apis||[]).push([[7782],{99533:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return x}});var a,r=t(87462),d=t(63366),m=(t(15007),t(64983)),i=t(91515),l=["components"],o={},p=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:o},u=i.Z;function x(e){var n=e.components,t=(0,d.Z)(e,l);return(0,m.mdx)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"14-reporting-api-methods"},"1.4 Reporting API methods"),(0,m.mdx)("p",null,"Methods that you can call within the 1.4 Reporting API."),(0,m.mdx)("h2",{id:"queue"},"Queue"),(0,m.mdx)("p",null,"Queue a report to run. You can queue up multiple reports to run concurrently."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.Queue"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Queue" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportDescription":{"reportSuiteID": "examplersid"}}\'\n')),(0,m.mdx)("h4",{id:"response"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportID": 1234567890\n}\n')),(0,m.mdx)("p",null,"This method requires a ",(0,m.mdx)("inlineCode",{parentName:"p"},"reportDescription")," JSON object, which contains the desired reporting parameters. See ",(0,m.mdx)("a",{parentName:"p",href:"report-description/index.md"},"reportDescription JSON object reference")," for details."),(0,m.mdx)("p",null,"The response contains a report ID - use this report ID in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Report.Get")," method to retrieve the report."),(0,m.mdx)("h2",{id:"get"},"Get"),(0,m.mdx)("p",null,"Retrieves a report queued using ",(0,m.mdx)("inlineCode",{parentName:"p"},"Report.Queue"),". As a best practice, Do not call this method more than once a second."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.Get"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-1"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Get" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportID": 1234567890}\'\n')),(0,m.mdx)("h4",{id:"response-1"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "report": {\n        "type": "overtime",\n        "elements": [\n            {\n                "id": "datetime",\n                "name": "Date"\n            }\n        ],\n        "reportSuite": {\n            "id": "examplersid",\n            "name": "Example report suite"\n        },\n        "period": "Thu. 19 Jan. YYYY",\n        "metrics": [\n            {\n                "id": "pageviews",\n                "name": "Page Views",\n                "type": "number",\n                "decimals": 0,\n                "latency": 1427,\n                "current": false\n            }\n        ],\n        "data": [\n            {\n                "name": "Thu. 19 Jan. YYYY",\n                "month": 1,\n                "day": 19,\n                "counts": [\n                    "291745"\n                ]\n            }\n        ],\n        "totals": [\n            "291745"\n        ],\n        "version": "1.4.18.10"\n    },\n    "waitSeconds": 0,\n    "runSeconds": 0\n}\n')),(0,m.mdx)("p",null,"This method requires a JSON body, which includes the report ID to retrieve. You can obtain a report ID using ",(0,m.mdx)("inlineCode",{parentName:"p"},"Report.Queue"),"."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Request element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportID"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"Report ID returned by ",(0,m.mdx)("inlineCode",{parentName:"td"},"Report.Queue"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"page"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Desired page number (out of ",(0,m.mdx)("inlineCode",{parentName:"td"},"totalPages"),") for larger ",(0,m.mdx)("a",{parentName:"td",href:"data_warehouse.md"},"Data Warehouse")," requests.")))),(0,m.mdx)("p",null,"Returns a JSON object containing the desired report data. See ",(0,m.mdx)("a",{parentName:"p",href:"report-data.md"},"Report data object reference")," for details."),(0,m.mdx)("p",null,"If the report is not ready, a ",(0,m.mdx)("inlineCode",{parentName:"p"},"HTTP 400")," error is returned."),(0,m.mdx)("h2",{id:"cancel"},"Cancel"),(0,m.mdx)("p",null,"Cancels a previously submitted report request, removing it from the processing queue. You can only cancel reports that are queued or running; if you send a request to cancel a completed report, the API returns an error."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.Cancel"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-2"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Cancel" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportID": 1234567890}\'\n')),(0,m.mdx)("h4",{id:"response-2"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,m.mdx)("p",null,"This method requires a JSON body, which includes the report ID to retrieve. You can obtain a report ID using ",(0,m.mdx)("inlineCode",{parentName:"p"},"Report.Queue"),"."),(0,m.mdx)("p",null,"Returns ",(0,m.mdx)("inlineCode",{parentName:"p"},"true")," is the operation is successful."),(0,m.mdx)("h2",{id:"getelements"},"GetElements"),(0,m.mdx)("p",null,"Retrieves a list of valid ",(0,m.mdx)("a",{parentName:"p",href:"report-description/dimensions.md"},"dimensions")," for the user. Some users might not have access to certain dimensions, so you can use this method to retrieve the dimensions that you can access."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.GetElements"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-3"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.GetElements" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportSuiteID": "examplersid"}\'\n')),(0,m.mdx)("h4",{id:"response-3"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "accountsummary",\n        "name": "Report Suite Totals",\n        "correlation": true,\n        "subrelation": false\n    },\n    {\n        "id": "activity",\n        "name": "Activity",\n        "correlation": false,\n        "subrelation": true\n    },\n    {\n        "id": "browser",\n        "name": "Browser",\n        "correlation": true,\n        "subrelation": true\n    },\n    {\n        "id": "browserheight",\n        "name": "Browser Height",\n        "correlation": true,\n        "subrelation": true\n    }\n]\n')),(0,m.mdx)("p",null,"This request requires a JSON body, which includes the report suite ID to obtain accessible dimensions."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Request element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The report suite ID that you want to list accessible dimensions for.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"existingElements"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Include a list of elements already present in the reportDescription to get compatible metrics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"existingMetrics"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportType"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Include the report type to get compatible metrics. Valid values include ",(0,m.mdx)("inlineCode",{parentName:"td"},"any"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"ranked"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"trended"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"pathing"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"fallout"),", and ",(0,m.mdx)("inlineCode",{parentName:"td"},"realtime"),".")))),(0,m.mdx)("p",null,"Returns a list of dimensions that the user can access. Each dimension contains the following elements:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Response element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"id"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The dimension ID.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"name"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The dimension name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"correlation"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,m.mdx)("td",{parentName:"tr",align:null},"Determines if the dimension supports correlations. Used in previous versions of Adobe Analytics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"subrelation"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,m.mdx)("td",{parentName:"tr",align:null},"Determines if the dimension supports subrelations. Used in previous versions of Adobe Analytics.")))),(0,m.mdx)("h2",{id:"getmetrics"},"GetMetrics"),(0,m.mdx)("p",null,"Retrieves a list of valid ",(0,m.mdx)("a",{parentName:"p",href:"report-description/metrics.md"},"metrics")," for the user. Some users might not have access to certain metrics, so you can use this method to retrieve the dimensions that you can access."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.GetMetrics"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-4"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.GetMetrics" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportSuiteID": "examplersid"}\'\n')),(0,m.mdx)("h4",{id:"response-4"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "activityimpressions",\n        "name": "Activity Impressions",\n        "type": "number",\n        "decimals": 0,\n        "formula": null\n    },\n    {\n        "id": "averagevisitdepth",\n        "name": "Average Visit Depth",\n        "type": "number",\n        "decimals": 0,\n        "formula": null\n    },\n    {\n        "id": "bouncerate",\n        "name": "Bounce Rate",\n        "type": "percent",\n        "decimals": 10,\n        "formula": null\n    }\n]\n')),(0,m.mdx)("p",null,"This request requires a JSON body, which includes the report suite ID to obtain accessible metrics."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Name"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The report suite ID that you want to list accessible metrics for.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"existingElements"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Include a list of elements already present in the reportDescription to get compatible metrics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"existingMetrics"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportType"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"(Optional) Include the report type to get compatible metrics. Valid values include ",(0,m.mdx)("inlineCode",{parentName:"td"},"any"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"ranked"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"trended"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"pathing"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"fallout"),", and ",(0,m.mdx)("inlineCode",{parentName:"td"},"realtime"),".")))),(0,m.mdx)("p",null,"Returns a list of metrics that the user can access. Each metric contains the following elements:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Response element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"id"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The metric ID.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"name"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The metric name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"type"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The metric type. Valid values include ",(0,m.mdx)("inlineCode",{parentName:"td"},"number"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"percent"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"currency"),", and ",(0,m.mdx)("inlineCode",{parentName:"td"},"time"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"decimals"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"The number of decimal places that the metric uses.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"formula"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"null")),(0,m.mdx)("td",{parentName:"tr",align:null},"The formula if the metric is a calculated metric.")))),(0,m.mdx)("h2",{id:"getqueue"},"GetQueue"),(0,m.mdx)("p",null,"Returns a list of reports in a company's report queue."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.GetQueue"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-5"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://api.omniture.com/admin/1.4/rest/?method=Report.GetQueue" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n')),(0,m.mdx)("h4",{id:"response-5"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "reportID": 1234567890,\n        "type": "tr",\n        "queueTime": "YYYY-06-29T16:41:53-0800",\n        "status": "running",\n        "priority": 0,\n        "estimate": 899.8214212508286,\n        "reportSuiteID": "examplersid",\n        "user": "exampleuser"\n    },\n    {\n        "reportID": 1234567891,\n        "type": "tr",\n        "queueTime": "YYYY-06-29T16:42:09-0800",\n        "status": "running",\n        "priority": 0,\n        "estimate": 256.4867531674,\n        "reportSuiteID": "examplersid",\n        "user": "exampleuser2"\n    }\n]\n')),(0,m.mdx)("p",null,"Does not require a JSON body. Returns a list of reports currently running for the company. Company is determined by the credentials used in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"x-api-key")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"Authorization")," headers."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Response element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportID"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"The report ID running.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"type"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The type of report. Valid values include ",(0,m.mdx)("inlineCode",{parentName:"td"},"overtime"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"trended"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"trendedplus"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"ranked"),", or ",(0,m.mdx)("inlineCode",{parentName:"td"},"universal"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"queueTime"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"date")),(0,m.mdx)("td",{parentName:"tr",align:null},"The date/time that the report was queued (Pacific time).")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"status"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The status of the report. Valid values include ",(0,m.mdx)("inlineCode",{parentName:"td"},"waiting")," or ",(0,m.mdx)("inlineCode",{parentName:"td"},"running"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"priority"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"The report priority.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"estimate"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"double")),(0,m.mdx)("td",{parentName:"tr",align:null},"The estimated time remaining (in seconds) before the report is complete.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The report suite ID of the report.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"user"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The user that requested the report.")))),(0,m.mdx)("h2",{id:"run"},"Run"),(0,m.mdx)("p",null,"Run a real-time report immediately without using the queue."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.Run"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-6"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Run" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportDescription":{"reportSuiteID": "examplersid","source": "realtime"}}\'\n')),(0,m.mdx)("h4",{id:"response-6"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "report": {\n        "type": "realtime",\n        "reportSuite": {\n            "id": "examplersid",\n            "name": "Example report suite"\n        },\n        "period": "YYYY-03-30T16:30:04-0800/YYYY-03-30T17:30:04-0800",\n        "elements": [\n            {\n                "id": "datetime",\n                "name": "Date"\n            }\n        ],\n        "metrics": [\n            {\n                "id": "instances",\n                "name": "Instances",\n                "type": "number",\n                "decimals": 0\n            }\n        ],\n        "data": [\n            {\n                "name": "YYYY-01-19T16:30:04-0800",\n                "month": 3,\n                "day": 30,\n                "hour": 16,\n                "minute": 30,\n                "counts": [\n                    "1415718"\n                ]\n            },\n            {\n                "name": "YYYY-01-19T16:35:04-0800",\n                "month": 3,\n                "day": 30,\n                "hour": 16,\n                "minute": 35,\n                "counts": [\n                    "1394239"\n                ]\n            },\n            {\n                "name": "YYYY-01-19T16:40:04-0800",\n                "month": 3,\n                "day": 30,\n                "hour": 16,\n                "minute": 40,\n                "counts": [\n                    "1394988"\n                ]\n            }\n        ],\n        "totals": [\n            "16356302"\n        ],\n        "version": "1.4.18.10",\n        "__run_time_frag": 0.26024293899536133\n    }\n}\n')),(0,m.mdx)("p",null,"This method requires a ",(0,m.mdx)("inlineCode",{parentName:"p"},"reportDescription")," JSON object, which contains the desired reporting parameters. See ",(0,m.mdx)("a",{parentName:"p",href:"report-description/index.md"},"reportDescription JSON object reference")," for details. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"source")," element must be set to ",(0,m.mdx)("inlineCode",{parentName:"p"},"realtime")," for this API call to work."),(0,m.mdx)("p",null,"Returns a JSON object containing the desired report data. See ",(0,m.mdx)("a",{parentName:"p",href:"report-data.md"},"Report data object reference")," for details."),(0,m.mdx)("h2",{id:"validate"},"Validate"),(0,m.mdx)("p",null,"Determines if a ",(0,m.mdx)("inlineCode",{parentName:"p"},"reportDescription")," object is valid without running the report. If the report is not valid, an error is returned detailing the problem."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)("inlineCode",{parentName:"strong"},"POST https://api.omniture.com/admin/1.4/rest/?method=Report.Validate"))),(0,m.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"request-7"},"Request"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Validate" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportDescription":{"reportSuiteID": "examplersid"}}\'\n')),(0,m.mdx)("h4",{id:"response-7"},"Response"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "valid": true\n}\n')),(0,m.mdx)("p",null,"This method requires a ",(0,m.mdx)("inlineCode",{parentName:"p"},"reportDescription")," JSON object, which contains the desired reporting parameters. See ",(0,m.mdx)("a",{parentName:"p",href:"report-description/index.md"},"reportDescription JSON object reference")," for details."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"If the ",(0,m.mdx)("inlineCode",{parentName:"li"},"reportDescription")," JSON object is valid, the response contains ",(0,m.mdx)("inlineCode",{parentName:"li"},'"valid": true'),"."),(0,m.mdx)("li",{parentName:"ul"},"If the ",(0,m.mdx)("inlineCode",{parentName:"li"},"reportDescription")," JSON object is invalid, the API returns an error outlining the issue. See ",(0,m.mdx)("a",{parentName:"li",href:"troubleshooting.md"},"Troubleshooting")," for details.")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-methods-md-3356a847ce0a8ed78cf6.js.map