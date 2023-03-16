"use strict";(self.webpackChunkanalytics_1_4_apis=self.webpackChunkanalytics_1_4_apis||[]).push([[4956],{86890:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(87462),r=n(63366),m=(n(15007),n(64983)),d=n(91515),i=["components"],l={},o={_frontmatter:l},s=d.Z;function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,m.mdx)(s,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"metrics-reference"},"Metrics reference"),(0,m.mdx)("p",null,"A ",(0,m.mdx)("strong",{parentName:"p"},"metric")," is a structure that specifies the type of event data captured in the report. See ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/overview.html"},"Metrics overview")," in the Adobe Analytics components user guide for details."),(0,m.mdx)("h2",{id:"calculated-metrics"},"Calculated metrics"),(0,m.mdx)("p",null,"Calculated metrics are returned along with the other reporting API metrics. The IDs of these metrics are in the form ",(0,m.mdx)("inlineCode",{parentName:"p"},"f:<number>"),", where ",(0,m.mdx)("inlineCode",{parentName:"p"},"<number>")," is an integer. The metric type, decimal precision, and formula (where applicable) are included for all metrics."),(0,m.mdx)("h2",{id:"overtime-only-metrics"},"Overtime-only metrics"),(0,m.mdx)("p",null,"Some metrics are only valid in overtime reports. Use ",(0,m.mdx)("inlineCode",{parentName:"p"},"Report.GetMetrics")," with the ",(0,m.mdx)("inlineCode",{parentName:"p"},"dateGranularity")," property to programmatically get a list of these metrics."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"averagetimespentonsite")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"averagevisitdepth")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersdaily")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersloyal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersmonthly")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersnew")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersquarterly")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersreturn")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersweekly")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"customersyearly")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"mobileviews")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"mobilevisitorsdaily")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"mobilevisits")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"returnvisits")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"returnvisitsdaily"))),(0,m.mdx)("p",null,"If you try to run an overtime report on an unsupported metric, a ",(0,m.mdx)("inlineCode",{parentName:"p"},"metric_unsupported_in_overtime")," error occurs."),(0,m.mdx)("h2",{id:"permissions"},"Permissions"),(0,m.mdx)("p",null,"Specific users may not have access to certain metrics. The metrics returned by ",(0,m.mdx)("inlineCode",{parentName:"p"},"Report.GetMetrics")," reflect those restrictions. Requesting a metric that one doesn't have permission to access will result in a ",(0,m.mdx)("inlineCode",{parentName:"p"},"metric_inaccessible")," error."),(0,m.mdx)("h2",{id:"metric-object-reference"},"Metric object reference"),(0,m.mdx)("p",null,"A structure that defines a metric that appears in a report."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Element"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"id"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The metric ID. This must match the metric ID specified in the report description.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"name"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The metric name.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"type"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The metric type. Valid values include ",(0,m.mdx)("inlineCode",{parentName:"td"},"number")," and ",(0,m.mdx)("inlineCode",{parentName:"td"},"currency"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"decimals"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"The number of decimal places in the metric values.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"formula"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:null},"The formula if the metric is a calculated metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"latency"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"int")),(0,m.mdx)("td",{parentName:"tr",align:null},"Number of seconds the metric data is latent.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"current"))),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,m.mdx)("td",{parentName:"tr",align:null},"If ",(0,m.mdx)("inlineCode",{parentName:"td"},"true"),", contains the most recent data available as a result of the ",(0,m.mdx)("inlineCode",{parentName:"td"},"currentData")," flag set to ",(0,m.mdx)("inlineCode",{parentName:"td"},"true")," in ",(0,m.mdx)("inlineCode",{parentName:"td"},"reportDescription"),".")))),(0,m.mdx)("h2",{id:"metric-id-reference"},"Metric ID reference"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Metric"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"carts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalCarts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeCarts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalCarts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationCarts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationCarts"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/carts.html"},"Carts")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"cartAdditions")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalCartAdditions")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeCartAdditions")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalCartAdditions")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationCartAdditions")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationCartAdditions"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-additions.html"},"Cart additions")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"cartRemovals")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalCartRemovals")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeCartRemovals")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalCartRemovals")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationCartRemovals")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationCartRemovals"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-removals.html"},"Cart removals")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"cartViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalCartViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeCartViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalCartViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationCartViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationCartViews"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-views.html"},"Cart views")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"checkouts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalCheckout")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeCheckout")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalCheckouts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationCheckouts")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationCheckouts"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/checkouts.html"},"Checkouts")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"instances"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/instances.html"},"Instances")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"orders")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalOrders")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeOrders")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalOrders")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationOrders")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationOrders"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/orders.html"},"Orders")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"units")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalUnits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeUnits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalUnits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationUnits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationUnits"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/units.html"},"Units")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"revenue")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalRevenue")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeRevenue")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeTotalRevenue")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"participationRevenue")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"lifetimeParticipationRevenue"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/revenue.html"},"Revenue")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersNew")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersReturn")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersLoyal")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersDaily")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersWeekly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersMonthly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersQuarterly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"customersYearly"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Customer metrics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"bounces"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/bounces.html"},"Bounces")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"bounceRate"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/bounce-rate.html"},"Bounce rate")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalTimeSpent"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/total-seconds-spent.html"},"Total seconds spent")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"pathviews"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Path views metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"event1")),"-",(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"event1000"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"The respective ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/custom-events.html"},"Custom event"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videotime")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videostart")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videocomplete")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videosegmentviews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videoadstart")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videoadcomplete"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Video metrics (commerce).")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"pageViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalPageViews"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/page-views.html"},"Page views")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"returnvisits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"returnvisitsdaily"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/visits.html"},"Visits")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"averageTimeSpentOnSite")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"averageTimeSpentOnPage"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/average-time-on-site.html"},"Average time on site")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"averagePageDepth")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"averageVisitDepth"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/average-page-depth.html"},"Average page depth")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitors")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsNew")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsHourly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisitorsHourly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsDaily")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisitorsDaily")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsWeekly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisitorsWeekly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsMonthly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisitorsMonthly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsQuarterly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisitorsQuarterly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"visitorsYearly")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"totalVisitorsYearly"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html"},"Unique Visitors")," metrics.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videoViews")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videoVisits")),(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"videoVisitorsDaily"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,m.mdx)("td",{parentName:"tr",align:null},"Video metrics (traffic).")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"entries"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/entries.html"},"Entries")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"exits"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/exits.html"},"Exits")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"reloads"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/reloads.html"},"Reloads")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"singleAccess"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/single-access.html"},"Single access")," metric.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"bots"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Traffic"),(0,m.mdx)("td",{parentName:"tr",align:null},"Bot traffic metric.")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-report-description-metrics-md-42403265e7d55ca5e625.js.map