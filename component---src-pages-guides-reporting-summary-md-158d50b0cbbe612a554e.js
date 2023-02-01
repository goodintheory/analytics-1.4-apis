(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4305],{37753:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return c}});var r,o=t(22122),a=t(19756),s=(t(15007),t(64983)),i=t(99536),p=["components"],m={},d=(r="CodeBlock",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),u={_frontmatter:m},l=i.Z;function c(e){var n=e.components,t=(0,a.Z)(e,p);return(0,s.mdx)(l,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"summary-reports"},"Summary Reports"),(0,s.mdx)("p",null,"Summary reports provide high-level metrics for several report suites in a single report."),(0,s.mdx)("p",null,"Summary reports do not contain the ",(0,s.mdx)("inlineCode",{parentName:"p"},'"reportSuiteID"')," parameter; instead, the report suite is specified as the ",(0,s.mdx)("inlineCode",{parentName:"p"},'"reportsuite"')," report element, and the ",(0,s.mdx)("inlineCode",{parentName:"p"},'"selected"')," parameter contains a list of report suite IDs. The ",(0,s.mdx)("inlineCode",{parentName:"p"},'"metrics"')," parameter contains the metrics you want to report for the specified report suites."),(0,s.mdx)(d,{slots:"heading, code",repeat:"2",languages:"JSON,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"reportqueue-request"},"Report.Queue Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription":{\n        "date":"YYYY",\n        "metrics":[\n            {"id":"pageviews"},\n            {"id":"revenue"}\n        ],\n        "elements":[\n            {\n                "id":"reportsuite",\n                "selected":[\n                    "examplersid1",\n                    "examplersid2"\n                ]\n            }\n\n        ]\n    }\n}\n')),(0,s.mdx)("h4",{id:"reportget-response"},"Report.Get Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "report": {\n        "type": "summary",\n        "elements": [\n            {\n                "id": "reportsuite",\n                "name": "Report Suite"\n            }\n        ],\n        "reportSuite": {\n            "id": "examplersid1",\n            "name": "Example report suite 1"\n        },\n        "period": "YYYY",\n        "metrics": [\n            {\n                "id": "pageviews",\n                "name": "Page Views",\n                "type": "number",\n                "decimals": 0,\n                "latency": 1108,\n                "current": false\n            },\n            {\n                "id": "revenue",\n                "name": "Revenue",\n                "type": "currency",\n                "decimals": 2,\n                "latency": 1108,\n                "current": false\n            }\n        ],\n        "data": [\n            {\n                "name": "examplersid1",\n                "url": "",\n                "counts": [\n                    "6061086",\n                    "0.00"\n                ]\n            },\n            {\n                "name": "examplersid2",\n                "url": "",\n                "counts": [\n                    "60427506",\n                    "95282296.18"\n                ]\n            }\n        ],\n        "totals": null,\n        "version": "1.4.18.10"\n    },\n    "waitSeconds": 0,\n    "runSeconds": 0\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-summary-md-158d50b0cbbe612a554e.js.map