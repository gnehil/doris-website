(window.webpackJsonp=window.webpackJsonp||[]).push([[1287],{1914:function(t,e,a){"use strict";a.r(e);var s=a(15),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"data-import-things-and-atomicity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-import-things-and-atomicity"}},[t._v("#")]),t._v(" Data import things and atomicity")]),t._v(" "),a("p",[t._v("All import operations in Doris have atomicity guarantees, that is, the data in an import job either all succeed or all fail. It will not happen that only part of the data is imported successfully.")]),t._v(" "),a("p",[t._v("In "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.html"}},[t._v("BROKER LOAD")]),t._v(" we can also implement atomic import of multiple tables .")],1),t._v(" "),a("p",[t._v("For the "),a("RouterLink",{attrs:{to:"/docs/advanced/materialized-view.html"}},[t._v("materialized view")]),t._v(" attached to the table, atomicity and consistency with the base table are also guaranteed.")],1),t._v(" "),a("h2",{attrs:{id:"label-mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label-mechanism"}},[t._v("#")]),t._v(" Label mechanism")]),t._v(" "),a("p",[t._v("Doris's import job can set a Label. This Label is usually a user-defined string with certain business logic attributes.")]),t._v(" "),a("p",[t._v("The main function of Label is to uniquely identify an import task, and to ensure that the same Label will only be successfully imported once.")]),t._v(" "),a("p",[t._v("The Label mechanism can ensure that the imported data is not lost or heavy. If the upstream data source can guarantee the At-Least-Once semantics, with the Doris Label mechanism, the Exactly-Once semantics can be guaranteed.")]),t._v(" "),a("p",[t._v("Label is unique under a database. The retention period for labels is 3 days by default. That is, after 3 days, the completed Label will be automatically cleaned up, and then the Label can be reused.")]),t._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[t._v("#")]),t._v(" Best Practices")]),t._v(" "),a("p",[t._v("Labels are usually formatted as "),a("code",[t._v("business logic + time")]),t._v(". Such as "),a("code",[t._v("my_business1_20220330_125000")]),t._v(".")]),t._v(" "),a("p",[t._v("This Label is usually used to represent: a batch of data generated by the business "),a("code",[t._v("my_business1")]),t._v(" at "),a("code",[t._v("2022-03-30 12:50:00")]),t._v(". Through this Label setting, the business can query the import task status through the Label to clearly know whether the batch data has been imported successfully at this point in time. If unsuccessful, you can continue to retry the import using this Label")])])}),[],!1,null,null,null);e.default=i.exports}}]);