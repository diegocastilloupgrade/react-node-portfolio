(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1004:function(e,t,o){"use strict";o.r(t);var n=o(40),r=o(7),f=(o(15),o(8),o(23),o(27),{name:"CategoriesPage",layout:"content",mixins:[o(81).a],data:function(){return{categoriesPreviews:[],empty:[{title:!1,random_previews:[{},{},{},{},{},{},{},{}]},{title:!1,random_previews:[{},{},{},{},{},{},{},{}]},{title:!1,random_previews:[{},{},{},{},{},{},{},{}]},{title:!1,random_previews:[{},{},{},{},{},{},{},{}]},{title:!1,random_previews:[{},{},{},{},{},{},{},{}]}],locale:this.$i18n.localeProperties.iso,perPage:8,total:0}},computed:{title:function(){return this.$t("OUCH_V2.ALL_CATEGORIES")}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("setInitSearch",void 0),e.$store.dispatch("setSearch",void 0),"en-US"!==(o=e.$i18n.localeProperties.iso)&&e.$store.commit("HREFLANG_DELETE"),e.updateSEO(),e.fetchCategories(o),e.fetchCategoriesPreviews(o);case 7:case"end":return t.stop()}}),t)})))()},methods:{fetch:function(){this.nextPage("categoriesPreviews",{locale:this.locale,random_previews_count:9})},fetchCategories:function(e){var t=this;this.$store.dispatch("setCurrentCategories",null),this.$store.state.categories.length||this.$categoriesRepository.index({locale:e}).then((function(e){t.$store.dispatch("setCategories",e.categories)}))},fetchCategoriesPreviews:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,f,d,data,c,l,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$categoriesPreviewsRepository.index({page:1,per_page:8,random_previews_count:9,locale:e});case 2:return r=o.sent,f=r.categories,d=r.total,o.next=7,t.$illustrationsRepository.index({sort_by:"new",page:1,per_page:9,locale:e});case 7:data=o.sent,c=Date.now(),l=data.illustrations.filter((function(e){return Math.floor((c-e.createdAt)/864e5)<31})),h={children:[],pretty_id:"new_illustrations",title:t.$i18n.t("OUCH.SUBJECTS.NEW_ILLUSTRATIONS"),illustrations_count:l.length,random_previews:l||[]},t.categoriesPreviews=[h].concat(Object(n.a)(f)),t.total=d+1;case 13:case"end":return o.stop()}}),o)})))()},updateSEO:function(){this.$store.dispatch("updateSEO",{title:this.$i18n.t("OUCH_V2.SEO.CATEGORIES_PAGE.TITLE"),description:this.$i18n.t("OUCH_V2.SEO.CATEGORIES_PAGE.DESCRIPTION"),image:"".concat("https://maxst.icons8.com","/vue-static/ouch/seo/opengraph.png")})}}}),d=(o(923),o(0)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"categories-page container"},[o("ouch-seo-header",{attrs:{title:e.title,showTagsBar:!1}}),o("div",{staticClass:"index-page"},[o("div",{staticClass:"content container"},[o("aside",[o("ouch-category-list")],1),o("main",[0===e.categoriesPreviews.length?o("ouch-category-previews-list",{attrs:{categoriesPreviews:e.empty,empty:""}}):o("ouch-category-previews-list",{attrs:{categoriesPreviews:e.categoriesPreviews}}),e.page*e.perPage<this.total?o("ouch-pagination",{attrs:{entity:"categoriesPreviews",page:e.page,perPage:e.perPage,loading:e.nextPageLoading,total:e.total},on:{nextPage:e.fetch}}):e._e()],1)])])],1)}),[],!1,null,"451f99fe",null);t.default=component.exports},888:function(e,t,o){var content=o(924);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(6).default)("034039e3",content,!0,{sourceMap:!1})},923:function(e,t,o){"use strict";o(888)},924:function(e,t,o){var n=o(5)(!1);n.push([e.i,'.img-loading[data-v-451f99fe]{background:#e8e8e8;height:100%;width:100%;-webkit-animation:fade-show 1.5s ease-in-out infinite;animation:fade-show 1.5s ease-in-out infinite}h1[data-v-451f99fe],h2[data-v-451f99fe],h3[data-v-451f99fe],h4[data-v-451f99fe],h5[data-v-451f99fe]{margin:0;padding:0;font-family:"Inter","Helvetica Neue","Segoe UI","Fira Sans",Roboto,Oxygen,Ubuntu,"Droid Sans","Arial",sans-serif!important}h1[data-v-451f99fe],h2[data-v-451f99fe]{font-weight:700}h1[data-v-451f99fe]{font-size:40px;line-height:48px;margin-bottom:16px}@media(max-width:450px){h1[data-v-451f99fe]{font-size:32px;line-height:40px}}h2[data-v-451f99fe]{font-size:24px;line-height:32px}h3[data-v-451f99fe]{font-size:17px;line-height:22px}h4[data-v-451f99fe]{font-weight:400;font-size:16px;line-height:24px}a[data-v-451f99fe]{text-decoration:none;font-size:14px;line-height:20px}a[data-v-451f99fe],a[data-v-451f99fe]:visited{color:inherit}.big[data-v-451f99fe]{font-size:24px;line-height:32px}.medium[data-v-451f99fe]{font-size:16px}.medium[data-v-451f99fe],.small[data-v-451f99fe]{line-height:24px}.small[data-v-451f99fe]{font-size:14px}p[data-v-451f99fe]{font-size:16px;line-height:24px}.light[data-v-451f99fe]{font-weight:300}.normal[data-v-451f99fe]{font-weight:400}.semi-bold[data-v-451f99fe]{font-weight:600}.bold[data-v-451f99fe]{font-weight:700}.extra-bold[data-v-451f99fe]{font-weight:800}.black[data-v-451f99fe]{font-weight:900}.link[data-v-451f99fe]{border-bottom:1px solid rgba(26,26,26,.26);transition:all .2s ease-out;cursor:pointer;color:#1a1a1a}.link.white-border[data-v-451f99fe]{border-bottom-color:hsla(0,0%,100%,.25)}.link.white-border[data-v-451f99fe]:hover{border-bottom-color:hsla(0,0%,100%,.4)}.link.white-border[data-v-451f99fe]:active,.link.white-border[data-v-451f99fe] :focus{border-bottom-color:hsla(0,0%,100%,.5)}.link[data-v-451f99fe]:hover{border-bottom:1px solid rgba(26,26,26,.6)}.link[data-v-451f99fe]:active,.link[data-v-451f99fe]:focus{border-bottom-color:#1a1a1a}.categories-page[data-v-451f99fe]{padding-top:32px}.categories-page[data-v-451f99fe]  h1{margin-bottom:0}.categories-page .index-page[data-v-451f99fe]{padding-top:32px}@media(max-width:768px){.categories-page .index-page[data-v-451f99fe]{padding-top:29px}}@media(max-width:480px){.categories-page .index-page[data-v-451f99fe]{padding-top:24px}}.categories-page .index-page[data-v-451f99fe]  .mobile .dropdown .active-item{justify-content:center}.categories-page .index-page .mobile-description[data-v-451f99fe]{display:none;margin-top:56px}@media(max-width:400px){.categories-page .index-page .mobile-description[data-v-451f99fe]{display:flex;flex-direction:column;align-items:center}}.categories-page .index-page .mobile-description img[data-v-451f99fe]{max-width:280px;margin-bottom:24px}.categories-page[data-v-451f99fe]  .content{margin-top:0;padding:0}',""]),e.exports=n}}]);
//# sourceMappingURL=categories.5e3d7d60239dfe577e3c.js.map