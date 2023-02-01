(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2911],{88696:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(22122),r=a(19756),d=(a(15007),a(64983)),m=a(99536),o=["components"],l={},i={_frontmatter:l},p=m.Z;function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,d.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"bookmark-methods"},"Bookmark methods"),(0,d.mdx)("p",null,"Allows you to create, edit, or delete bookmarks."),(0,d.mdx)("h2",{id:"getbookmarks"},"GetBookmarks"),(0,d.mdx)("p",null,"Retrieves a list of bookmarks for the authenticated user."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST https://api.omniture.com/admin/1.4/rest/?method=Bookmark.GetBookmarks")),(0,d.mdx)("p",null,"Parameters ",(0,d.mdx)("inlineCode",{parentName:"p"},"folder_limit")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"folder_offset")," are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of folders out of the entire set."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"folder_limit"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"(Optional) Limit the retrieval to the specified number of bookmarks.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"folder_offset"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"(Optional) Start the bookmark retrieval at the specified offset.")))),(0,d.mdx)("p",null,"Returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"bookmark_folder[]"),", a list of bookmark folders and the bookmarks that are contained in each folder."),(0,d.mdx)("h2",{id:"getdashboards"},"GetDashboards"),(0,d.mdx)("p",null,"Retrieves all the dashboards for the authenticated web services user, with bookmarks included."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST https://api.omniture.com/admin/1.4/rest/?method=Bookmark.GetBookmarks")),(0,d.mdx)("p",null,"Parameters ",(0,d.mdx)("inlineCode",{parentName:"p"},"dashboard_limit")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"dashboard_offset")," are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of bookmarks out of the entire set."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dashboard_limit"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"(Optional) Limit the retrieval to the specified number of dashboards.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dashboard_offset"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"(Optional) Start the dashboard retrieval at the specified offset.")))),(0,d.mdx)("p",null,"Returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"dashboard[]"),", the contents of the dashboard."),(0,d.mdx)("h2",{id:"getreportdescription"},"GetReportDescription"),(0,d.mdx)("p",null,"Retrieves the name, associated report type, and report description for the supplied bookmark ID. This report description can then be used to retrieve report data via the Report API. An error is returned for unsupported bookmark types."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"POST https://api.omniture.com/admin/1.4/rest/?method=Bookmark.GetReportDescription")),(0,d.mdx)("p",null,"Use ",(0,d.mdx)("inlineCode",{parentName:"p"},"Bookmark.GetBookmarks")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"Bookmark.GetDashboards")," to retrieve the bookmark ID."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"bookmark_id"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"(Required) The ID of the bookmark for which you want to retrieve the report description.")))),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Response"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Bookmark name.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"type")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Type of report in the saved bookmark. Possible values are overtime, ranked, or trended.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"reportDescription")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Report description to send to the report API.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-admin-bookmark-md-fec2e2b7c34e04af2e36.js.map