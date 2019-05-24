(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{T9oU:function(s,t,a){"use strict";a.r(t);var n=a("TONr"),r=a.n(n);for(var e in n)"default"!==e&&function(s){a.d(t,s,function(){return n[s]})}(e);var l=a("wBjC"),i=a("JFUb"),v=Object(i.a)(r.a,l.a,l.b,!1,null,null,null);t.default=v.exports},TONr:function(s,t,a){var n,r,e;r=[t],void 0===(e="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{id:"This is a billboard",description:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{},billboard:{}}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.position=t.Cartesian3.fromDegrees(90,40,1e4)}}},s.exports=t.default})?n.apply(t,r):n)||(s.exports=e)},b1lE:function(s,t,a){s.exports=a("T9oU")},wBjC:function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("BillboardGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("add a BillboardGraphics to viewer with entity")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{position:s.position,description:s.description,id:s.id,billboard:s.billboard},on:{"update:billboard":function(t){s.billboard=t}}},[a("billboard-graphics",{attrs:{image:s.image,scale:.1}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("billboard-graphics")]),this._v(" Add an entity containing a billboard object to the viewer as a subcomponent of "),t("code",{pre:!0},[this._v("entity")]),this._v(". Describes a two dimensional icon located at the position of the containing Entity. As shown in the example below.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"id"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":billboard.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"billboard"')]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("billboard-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":image")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"image"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":scale")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("billboard-graphics")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'This is a billboard'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {}\n        }\n      },\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        ready (cesiumInstance) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position = Cesium.Cartesian3.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("90")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(")\n        }\n      }\n    }\n  ")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Reference official document "),t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/BillboardGraphics.html"}},[this._v("BillboardGraphics")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])])])])}]}}]);