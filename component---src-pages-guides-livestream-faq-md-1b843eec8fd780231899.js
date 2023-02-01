(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6574],{71783:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return m}});var i=n(22122),a=n(19756),s=(n(15007),n(64983)),o=n(99536),r=["components"],d={},c={_frontmatter:d},l=o.Z;function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.mdx)(l,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,s.mdx)("h2",{id:"when-initially-connecting-to-a-livestream-endpoint-how-old-is-the-data-that-starts-streaming"},"When initially connecting to a Livestream endpoint, how old is the data that starts streaming?"),(0,s.mdx)("p",null,"Livestream starts streaming data collected at the time of the client's connection. In the case of a client disconnect/reconnect, data is streamed from the point of disconnection. This brief backfill period only occurs if the disconnection is shorter than several minutes."),(0,s.mdx)("h2",{id:"how-do-i-customize-the-reconnection-backfill-logic"},"How do I customize the reconnection backfill logic?"),(0,s.mdx)("p",null,"You can use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"reset")," query string to request old or new data. For example, ",(0,s.mdx)("inlineCode",{parentName:"p"},"?reset=largest")," requests only the newest data from the stream and ignores data missed during reconnection. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"?reset=smallest")," query string starts streaming the oldest data available and attempts to catch up to the present."),(0,s.mdx)("h2",{id:"what-is-the-latency-between-when-a-hit-is-collected-by-adobe-and-when-it-appears-in-livestream"},"What is the latency between when a hit is collected by Adobe and when it appears in Livestream?"),(0,s.mdx)("p",null,"Latency can range between 20 seconds and 5 minutes."),(0,s.mdx)("h2",{id:"can-i-request-uncompressed-livestream-data"},"Can I request uncompressed Livestream data?"),(0,s.mdx)("p",null,"No. Livestream requires clients to support compression by default."),(0,s.mdx)("h2",{id:"what-transfer-encoding-is-used"},"What transfer encoding is used?"),(0,s.mdx)("p",null,"Livestream uses ",(0,s.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chunked_transfer_encoding"},"Chunked transfer encoding"),". There can be more than one record per chunk, and each record is separated by a CRLF. Many http client libraries handle chunked transfer encoding transparently."),(0,s.mdx)("h2",{id:"can-i-create-multiple-connections-to-the-same-stream"},"Can I create multiple connections to the same stream?"),(0,s.mdx)("p",null,"Yes. Use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"maxConnections")," GET string parameter. If multiple connections are created, data is distributed across each connection. Data is grouped by visitor IDs, but is out of order. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"timestamp")," field can be used to sort the hits. A best effort is made to evenly distribute hits. Because data is grouped by visitor ID, a visitor that produces a large volume of data can create differences in volumes for each client. A maximum of 8 connections is allowed."),(0,s.mdx)("p",null,"If multiple instances of the same stream are required, Adobe recommends that you create infrastructure to replicate that data."),(0,s.mdx)("h2",{id:"how-do-i-avoid-receiving-duplicate-records"},"How do I avoid receiving duplicate records?"),(0,s.mdx)("p",null,"The likelihood of receiving duplicate records increases during reconnect or when new clients connect to an existing stream. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"hitIdHigh")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"hitIdLow")," columns can be used to deduplicate hits."),(0,s.mdx)("h2",{id:"what-do-i-do-with-empty-records"},"What do I do with empty records?"),(0,s.mdx)("p",null,"Empty records are sometimes returned in the stream. These can be ignored."),(0,s.mdx)("h2",{id:"where-does-livestream-occur-in-the-data-processing-order"},"Where does Livestream occur in the data processing order?"),(0,s.mdx)("p",null,"Livestream data is only partially processed to mitigate latency. See ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/technotes/processing-order.html"},"Processing order")," in the Analytics technotes guide for full details on processing order."),(0,s.mdx)("p",null,"Livestream includes basic processing, such as ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules.html"},"Processing rules"),", VISTA rules, and geolocation lookups. It does ",(0,s.mdx)("strong",{parentName:"p"},"not")," include persistence, such as eVars persisting data across hits within a visit. It also does not include visit-based or visitor-based data like visits, visit number, unique visitors, or customer loyalty."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-livestream-faq-md-1b843eec8fd780231899.js.map