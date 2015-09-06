/*!CK:1525196742!*//*1439303667,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["f9LZr"]); }

__d("TrendingEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={TAG_IMPRESSION:"tag_impression",TAG_FEED_LOAD:"tag_feed_load",TAG_FEED_LONG_VIEW:"tag_feed_long_view",TAG_HIDE:"tag_hide",TOPIC_HEADER_TAPPED:"topic_header_tapped",HOVERCARD_LOAD:"hovercard_load",HOVERCARD_UNLOAD:"hovercard_unload",HOVERCARD_ARTICLE_CLICK:"hovercard_article_click",HOVERCARD_FEED_CLICK:"hovercard_feed_click",HOVERCARD_CONTEXT_CLICK:"hovercard_context_click",OBJECT_CLICK:"object_click",OBJECT_OUTBOUND_CLICK:"object_outbound_click",OBJECT_LIKE:"object_like",OBJECT_COMMENT:"object_comment",OBJECT_SHARE:"object_share",OBJECT_PAGE_LIKE:"object_page_like",OBJECT_FOLLOW:"object_follow",OBJECT_HIDE:"object_hide",PAGINATE:"paginate",TOPIC_SHARE:"topic_share",CATEGORY_HEADER_CLICKED:"category_header_clicked",HOVERCARD_VIDEO_PLAYED:"hovercard_video_played"};},null,{});
__d("TrendingLocation",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={FBFEED_TOPIC_PIVOT:"ftp",FBFEED_TRENDING_TOPIC_PIVOT:"fttp",IOS_TRENDING_DASHBOARD_IN_BOOKMARK:"ios_trending_dashboard_in_bookmark",IOS_TRENDING_INTERSTITIAL:"ios_trending_interstitial",MSITE_PERMALINK:"mp",MSITE_QP:"mq",MSITE_HASHTAG_REDIRECTION:"mhr",MSITE_CARD_PIVOT:"mcp",MSITE_FEED_TOPIC_PIVOT:"mftp",MSITE_FEED_TRENDING_TOPIC_PIVOT:"mfttp",MSITE_NEWS_DASHBOARD:"mnd",MSITE_NEWS_MODULE:"mnm",MSITE_LIVE_EVENT:"mle",MSITE_PAGE_REDIRECTION:"mpr",MSITE_RELATED_TOPICS:"mrt",MSITE_ADS:"ma",MSITE_SEARCH_SPORT_MATCH_MODULE:"mssmm",WEB_FEED_TOPIC_PIVOT:"wftp",WEB_FEED_TRENDING_TOPIC_PIVOT:"wfttp",OLD_FEED_TOPIC_PIVOT:"oftp",OLD_FEED_TRENDING_TOPIC_PIVOT:"ofttp",WWW_PERMALINK:"wp",WWW_QP:"wq",WWW_HASHTAG_REDIRECTION:"whr",WWW_HIDDEN_RHC_TRENDING:"whrt",WWW_HOME_FEED_RHC_TRENDING:"whfrt",WWW_POST_LIKE_TOPIC_CHAINING:"wpltc",WWW_TOPIC_FEED_RHC_TRENDING:"wtfrt",WWW_POST_SEARCH_RHC_TRENDING:"wpsrt",WWW_PAGE_FEED_RHC_TRENDING:"wpfrt",WWW_BROWSE_RHC_TRENDING:"wbrt",WWW_BROWSE_LATEST_POSTS_TAB:"wblpt",WWW_WORLDCUP_RHC_TRENDING:"wwcrt",WWW_LIVE_EVENT:"wle",WWW_PAGE_REDIRECTION:"wpr",WWW_ADS:"wa",WWW_SEARCH_SPORT_MATCH_MODULE:"wssmm",UNKNOWN:"unknown",IOS_NEWS_FEED:"ios_news_feed",MTOUCH_NEWS_FEED:"mtouch_news_feed",ANDROID_NULL_STATE:"android_null_state",IOS_GRAPH_SEARCH_NULL_STATE:"ios_graph_search_null_state",MSITE_NEWS_NON_GS_NULL_STATE:"mnngns",MSITE_NEWS_NULL_STATE:"mnns",MSITE_LATEST_POSTS_TAB:"mlpt",SEARCH_TRENDING_MODULE:"stm",IOS_TODAY_MAIN:"ios_today_main",IOS_TODAY_SEE_MORE:"ios_today_see_more",IOS_STORY_TOPIC_HEADER:"ios_story_topic_header",TOPIC_SHARE:"share",TOPIC_MOBILE_SHARE:"mobile_share"};},null,{});
__d('PubContentTrendingUnitEllipsis',['DOM','DOMDimensions','concatMap','createArrayFromMixed','getElementText'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n={add:function(q,r,s){s=s||q;h.scry(q,'br').forEach(h.remove);var t=i.getElementDimensions(s).height;if(t<=r)return q;var u,v='...',w=p(q),x=w.length-1,y=l(w[x]);while(x>=0&&t>r){u=Math.max(y.lastIndexOf(' '),y.lastIndexOf('\n'));if(u===-1)u=y.length-v.length-1;if(u<=0){o(w[x],'');x--;y=l(w[x]);}else{y=y.substr(0,u).trimRight()+v;o(w[x],y);}t=i.getElementDimensions(s).height-1;}}};function o(q,r){m=m||(q.textContent!=null?'textContent':'innerText');q[m]=r;}function p(q){if(h.isTextNode(q))return [q];return j(p,k(q.childNodes));}f.exports=n;},null);
__d('PubContentTrendingUnitTruncation',['DOM','PubContentTrendingUnitEllipsis','Style','csx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m={truncate:function(n){var o=h.scry(n,"._5v9v"),p=o[o.length-1];if(p){if(l===undefined){var q=h.find(n,"._uhk");l=j.getFloat(q,'maxHeight');}var r=h.find(n,"._5r--");i.add(p,l,r);}}};f.exports=m;},null);
__d('TrendingRHCLogger',['AsyncSignal','CSS','Event','Parent','Run','BanzaiScuba','TrendingRHCConfig','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q,r,s,t,u,v,w,x=3,y=false;function z(ea,fa,ga,ha){var ia=new m('trending_rhc',null,{sampleRate:n.sample_rate});ia.addNormal('country',t);ia.addNormal('post_search_trending_feeds',n.post_search_trending_feeds);ia.addNormal('event',fa);ia.addNormal('position',ea);ia.addNormal('qe_group',q);var ja=ea<=x?r:w;ia.addNormal('source',ja);ia.addNormVector('categories',ga);ia.addNormal('topic_id',ha);ia.post();}function aa(ea,fa){var ga=ea.getAttribute('data-position');if(!ga)return;var ha=ea.getAttribute('data-categories'),ia=ha?JSON.parse(ha):[],ja=ea.getAttribute('data-topicid');z(ga,fa,ia,ja);}function ba(event){var ea=null,fa=event.getTarget(),ga=k.byClass(event.getTarget(),"_2w2e");if(ga){fa=ga;}else if(!i.hasClass(fa,"_5my2")){ea=k.byClass(fa,"_4_nl");fa=k.byClass(fa,"_5my2");}if(!fa||ea||i.hasClass(event.getTarget(),"_19_3")||i.hasClass(event.getTarget(),"_1k6k"))return;aa(fa,'click');var ha=fa.getAttribute('data-position');if(ha==='seemore'||ha==='trendingheader')y=true;}function ca(){if(!p)return;new h('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(p),source:w,scores:JSON.stringify(u),query_id:v}).send();p=null;}var da={init:function(ea,fa){r=fa.source;q=fa.qe_group;t=fa.country;p=fa.hidden_keys;s=fa.query_id;u=fa.hidden_scores;var ga=j.listen(ea,'click',ba);l.onLeave(function(){ga.remove();});},initSeeMore:function(ea,fa,ga,ha,ia){p=fa;u=ga;v=ha;w=ia;var ja=j.listen(ea,'click',ba);if(y){ca();}else y=false;l.onLeave(function(){ja.remove();});},logHovercardArticleClick:function(ea,fa){z(ea,'hover_article_click',null,fa);},logHovercardFeedClick:function(ea,fa){z(ea,'hover_feed_click',null,fa);},logHovercardShare:function(ea,fa){z(ea,'topic_share',null,fa);},logImpression:function(ea){aa(ea,'imp');},getSource:function(){return r;},getQueryID:function(){return s;},getSeeMoreSource:function(){return w;},getSeeMoreQueryID:function(){return v;}};f.exports=da;},null);
__d("TrendingCategoriesIconUnitCallback",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i={register:function(j){h=j;},callback:function(j,k){h.setCategoryList(j,k);}};f.exports=i;},null);
__d("XPubcontentTrendingCategoriesFetchListController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/categories\/fetch_list\/",{category:{type:"Enum",required:true,enumType:0},source:{type:"String",required:true},topic_ids_seen:{type:"IntVector",required:true}});},null,{});
__d("XPubcontentTrendingCategoriesSaveSelectionController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/categories\/save_selection\/",{category:{type:"Enum",required:true,enumType:0}});},null,{});
__d("XPubcontentTrendingReplaceTrendsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/trending_unit\/",{is_expanded:{type:"Bool",defaultValue:false}});},null,{});
__d('TrendingCategoriesIconUnit',['AsyncRequest','CSS','Event','TrendingCategoriesIconUnitCallback','XPubcontentTrendingCategoriesFetchListController','XPubcontentTrendingCategoriesSaveSelectionController','XPubcontentTrendingReplaceTrendsController','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();function q(r){'use strict';this.$TrendingCategoriesIconUnit1=r.categoryIconMap;this.$TrendingCategoriesIconUnit2=r.categoryListMap;this.$TrendingCategoriesIconUnit3=r.categoryHeaderMap;this.$TrendingCategoriesIconUnit4=r.loadingBar;this.$TrendingCategoriesIconUnit5=r.selectedCategoryId;this.$TrendingCategoriesIconUnit6=r.selectedCategoryId;this.$TrendingCategoriesIconUnit7=r.source;this.$TrendingCategoriesIconUnit8=r.hideSeeMore;this.$TrendingCategoriesIconUnit9=r.enableIconSeeMore;this.$TrendingCategoriesIconUnit10=r.rememberCategorySelection;this.$TrendingCategoriesIconUnit11=r.iconsAtTopDesign;this.$TrendingCategoriesIconUnit12=[];this.$TrendingCategoriesIconUnit13=this.$TrendingCategoriesIconUnit2[this.$TrendingCategoriesIconUnit5].getHeight();k.register(this);for(var s in this.$TrendingCategoriesIconUnit1)this.$TrendingCategoriesIconUnit14(this.$TrendingCategoriesIconUnit1[s]);this.$TrendingCategoriesIconUnit15(r.refreshSeconds,r.isExpanded);}q.prototype.setCategoryList=function(r,s){'use strict';this.$TrendingCategoriesIconUnit2[s]=r;if(s===this.$TrendingCategoriesIconUnit5){if(this.$TrendingCategoriesIconUnit4)i.hide(this.$TrendingCategoriesIconUnit4);this.$TrendingCategoriesIconUnit2[s].showItems();this.$TrendingCategoriesIconUnit13=this.$TrendingCategoriesIconUnit2[s].getHeight();}};q.prototype.$TrendingCategoriesIconUnit14=function(r){'use strict';var s=r.getCategoryId();p(j.listen(r.getRoot(),'click',(function(){var t=s===this.$TrendingCategoriesIconUnit6&&this.$TrendingCategoriesIconUnit9;if(t){if(s===this.$TrendingCategoriesIconUnit5&&!this.$TrendingCategoriesIconUnit8)return;if(this.$TrendingCategoriesIconUnit8)i.removeClass(this.$TrendingCategoriesIconUnit1[s].getRoot(),"_tuc");this.$TrendingCategoriesIconUnit2[s].fetchExtraItems();}if(s===this.$TrendingCategoriesIconUnit5)return;this.$TrendingCategoriesIconUnit16(s);this.$TrendingCategoriesIconUnit1[this.$TrendingCategoriesIconUnit5].unselect();if(this.$TrendingCategoriesIconUnit2[this.$TrendingCategoriesIconUnit5]){this.$TrendingCategoriesIconUnit13=this.$TrendingCategoriesIconUnit2[this.$TrendingCategoriesIconUnit5].getHeight();this.$TrendingCategoriesIconUnit2[this.$TrendingCategoriesIconUnit5].hideItems();}if(!this.$TrendingCategoriesIconUnit11){i.hide(this.$TrendingCategoriesIconUnit3[this.$TrendingCategoriesIconUnit5]);i.show(this.$TrendingCategoriesIconUnit3[s]);}this.$TrendingCategoriesIconUnit1[s].select();this.$TrendingCategoriesIconUnit5=s;if(this.$TrendingCategoriesIconUnit2[s]){if(this.$TrendingCategoriesIconUnit4)i.hide(this.$TrendingCategoriesIconUnit4);this.$TrendingCategoriesIconUnit2[s].showItems();this.$TrendingCategoriesIconUnit13=this.$TrendingCategoriesIconUnit2[s].getHeight();return;}this.$TrendingCategoriesIconUnit4.style.height=this.$TrendingCategoriesIconUnit13;i.show(this.$TrendingCategoriesIconUnit4);if(this.$TrendingCategoriesIconUnit12[s])return;this.$TrendingCategoriesIconUnit12[s]=true;var u=this.$TrendingCategoriesIconUnit2[this.$TrendingCategoriesIconUnit6],v=u.getCategoryItemInfo(),w=l.getURIBuilder().setEnum('category',s).setString('source',this.$TrendingCategoriesIconUnit7).setIntVector('topic_ids_seen',v.visibleTopicIds).getURI();new h().setURI(w).send();}).bind(this)));};q.prototype.$TrendingCategoriesIconUnit15=function(r,s){'use strict';var t=r*1000;setTimeout(function(){var u=n.getURIBuilder().setBool('is_expanded',s).getURI();new h(u).send();},t);};q.prototype.$TrendingCategoriesIconUnit16=function(r){'use strict';if(!this.$TrendingCategoriesIconUnit10)return;var s=m.getURIBuilder().setEnum('category',r).getURI();new h().setURI(s).send();};f.exports=q;},null);
__d("XPubcontentTrendingHideConfirmController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/hide_confirm\/",{hidden_topic_id:{type:"Int",required:true},position:{type:"Int",defaultValue:0},reason:{type:"Int",required:true},source:{type:"String"},trqid:{type:"Int",defaultValue:-1}});},null,{});
__d("XPubcontentTrendingCategoriesInsertItemController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/categories\/hide_options\/",{num_removed_topics:{type:"Int",defaultValue:0},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector",defaultValue:[]},category:{type:"Enum",required:true,enumType:0}});},null,{});
__d('TrendingCategoriesRHCHide',['AsyncRequest','CSS','DOM','DOMQuery','Event','Parent','TrendingRHCLogger','URI','XPubcontentTrendingHideConfirmController','XPubcontentTrendingCategoriesInsertItemController','csx','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=[],v=[],w=false,x=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function y(ba,ca){var da=k.scry(ba,"._5my2"),ea=da.filter(function(ga){var ha=Number(ga.getAttribute('data-position'));return ha>=ca;}),fa=[];ea.forEach(function(ga){var ha=Number(ga.getAttribute('data-position'));ga.setAttribute('data-position',ha-1);var ia=k.scry(ga,"._7ge");ia.forEach(function(ja){var ka=new o(ja.getAttribute('href')).addQueryData('position',ha-1);fa.push({link:ja,uri:ka.toString()});});});fa.forEach(function(ga){var ha=ga.link;ha.setAttribute('href',ga.uri);});}function z(ba,ca,da){var ea=k.find(ba,"^._2snq"),fa=k.find(ba,"^._5my2"),ga=j.create('div',{className:"_4_nj"}),ha=Number(fa.getAttribute('data-position'));y(ea,ha);u[da].showExtraItem();u[da].removeItem(fa);j.insertBefore(fa,ga);x.forEach(function(event){ga.addEventListener(event,function(){i.removeClass(ga,"_4_nj");});});var ia=p.getURIBuilder().setInt('reason',ba.firstChild.value).setInt('hidden_topic_id',ca).setInt('position',ha);if(n.getSource())ia.setString('source',n.getSource());if(n.getQueryID())ia.setInt('trqid',n.getQueryID());var ja=ia.getURI();new h().setURI(ja).setRelativeTo(ba).send();}var aa={addCategoryList:function(ba,ca){u[ca]=ba;},confirmHide:function(ba,ca,da){var ea=false;t(l.listen(ba,'click',function(){setTimeout(function(){if(ea)return;ea=true;z(ba,ca,da,false);},100);}));},onHideReasonClicked:function(ba,ca){var da=k.find(ba,'input[name="trending_hide_reason"]'),ea=parseInt(da.getAttribute('data-topicid'),10);if(v[ea])return;v[ea]=true;setTimeout(function(){z(ba,ea,ca);v[ea]=false;},100);},listenForHide:function(ba,ca,da){t(l.listen(ba,'click',function(){var ea=k.find(ba,"^._5my2"),fa=k.find(ea,"._4_nl"),ga=k.find(ea,"._4_nm");i.hide(ga);i.show(fa);if(!w){if(u[da]==null)return;w=true;var ha=u[da].getCategoryItemInfo(),ia=ha.visibleTopicIds.concat(ha.hiddenTopicIds,ha.removedTopicIds),ja=ha.removedTopicIds.length,ka=q.getURIBuilder().setInt('trending_topic_id',ca).setIntVector('topic_ids',ia).setInt('num_removed_topics',ja).setEnum('category',da).getURI();new h().setURI(ka).setRelativeTo(ba).setHandler(function(){w=false;}).send();}}));},onHideClicked:function(ba,ca){var da=parseInt(ba.getAttribute('data-topicid'),10),ea=k.find(ba,"^._5my2"),fa=k.find(ea,"._4_nl"),ga=k.find(ea,"._4_nm");i.hide(ga);i.show(fa);if(!w){if(u[ca]==null)return;w=true;var ha=u[ca].getCategoryItemInfo(),ia=ha.visibleTopicIds.concat(ha.hiddenTopicIds,ha.removedTopicIds),ja=ha.removedTopicIds.length,ka=q.getURIBuilder().setInt('trending_topic_id',da).setIntVector('topic_ids',ia).setInt('num_removed_topics',ja).setEnum('category',ca).getURI();new h().setURI(ka).setRelativeTo(ba).setHandler(function(){w=false;}).send();}},listenForUndo:function(ba){var ca=k.find(ba,"._4_nn");t(l.listen(ca,'click',function(){var da=k.find(ba,"^._5my2 ._4_nm");i.hide(ba);i.show(da);}));},onHideMenuUndoClicked:function(ba,ca){var da=k.find(ba,"^._4_nl"),ea=k.find(da,"^._5my2 ._4_nm");i.hide(da);i.show(ea);},hideSeeMoreLink:function(ba,ca){var da=u[ca].getCategoryItemInfo();if(da.hiddenTopicIds.length!==0)return;var ea=m.byClass(ba,"_5my7"),fa=k.scry(ea,"a._5my9");if(fa&&fa.length===1&&i.shown(fa[0]))i.addClass(fa[0],"_4_nk");}};f.exports=aa;},null);
__d('TrendingCategoryIcon',['BanzaiLogger','CSS','TrendingEvent','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n){'use strict';this.$TrendingCategoryIcon1=m;this.$TrendingCategoryIcon2=n.iconElement;this.$TrendingCategoryIcon3=n.nub;this.$TrendingCategoryIcon4=n.unselectedClass;this.$TrendingCategoryIcon5=n.selectedClass;this.$TrendingCategoryIcon6=n.categoryId;this.$TrendingCategoryIcon7=n.categoryLoggingOffset;this.$TrendingCategoryIcon8=n.queryId;this.$TrendingCategoryIcon9=n.source;}l.prototype.getRoot=function(){'use strict';return this.$TrendingCategoryIcon1;};l.prototype.getCategoryId=function(){'use strict';return this.$TrendingCategoryIcon6;};l.prototype.select=function(){'use strict';i.addClass(this.$TrendingCategoryIcon1,"_5nns");i.addClass(this.$TrendingCategoryIcon2,this.$TrendingCategoryIcon5);i.removeClass(this.$TrendingCategoryIcon2,this.$TrendingCategoryIcon4);i.show(this.$TrendingCategoryIcon3);this.$TrendingCategoryIcon10();};l.prototype.unselect=function(){'use strict';i.removeClass(this.$TrendingCategoryIcon1,"_5nns");i.addClass(this.$TrendingCategoryIcon2,this.$TrendingCategoryIcon4);i.removeClass(this.$TrendingCategoryIcon2,this.$TrendingCategoryIcon5);i.hide(this.$TrendingCategoryIcon3);};l.prototype.$TrendingCategoryIcon10=function(){'use strict';var m={trending_event:j.CATEGORY_HEADER_CLICKED,trending_location:this.$TrendingCategoryIcon9,trending_positions:[this.$TrendingCategoryIcon7],query_id:parseInt(this.$TrendingCategoryIcon8,10),tagids:[]};h.log('TrendingEventLoggerConfig',m);};f.exports=l;},null);
__d("XPubcontentTrendingCategoriesImpressionLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/categories\/log_impression\/",{topic_ids_by_position:{type:"IntToIntMap",required:true},source:{type:"String",required:true},query_id:{type:"Int",required:true}});},null,{});
__d("XPubcontentTrendingCategoriesSeeMoreController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/trending\/categories\/see_more\/",{topic_ids_seen:{type:"IntVector",defaultValue:[]},num_topics_to_add:{type:"Int",required:true},num_removed_topics:{type:"Int",defaultValue:0},category:{type:"Enum",required:true,enumType:0}});},null,{});
__d('TrendingCategoryList',['AsyncRequest','CSS','DOM','Event','Parent','PubContentTrendingUnitTruncation','TrendingCategoriesRHCHide','TrendingLocation','XPubcontentTrendingCategoriesImpressionLoggingController','XPubcontentTrendingCategoriesSeeMoreController','csx','cx','getStyleProperty','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function w(x,y,z){'use strict';this.$TrendingCategoryList1=x;this.$TrendingCategoryList2=y;this.$TrendingCategoryList3=z.category;this.$TrendingCategoryList4=z.rowsAfterSeeMore;this.$TrendingCategoryList5=z.source;this.$TrendingCategoryList6=z.queryId;this.$TrendingCategoryList7=false;this.$TrendingCategoryList8();n.addCategoryList(this,this.$TrendingCategoryList3);if(z.useDelegateListener)this.$TrendingCategoryList9();this.$TrendingCategoryList10();}w.prototype.showItems=function(){'use strict';i.show(this.$TrendingCategoryList1);var x=this.getCategoryItemInfo();this.$TrendingCategoryList11(x.visibleTopicIds,x.visiblePositions,this.$TrendingCategoryList5);};w.prototype.hideItems=function(){'use strict';i.hide(this.$TrendingCategoryList1);};w.prototype.getHeight=function(){'use strict';return t(this.$TrendingCategoryList1,'height');};w.prototype.getCategoryItemInfo=function(){'use strict';var x=[],y=[],z=[],aa=[],ba=[];j.scry(this.$TrendingCategoryList1,"._5my2").forEach(function(ca){if(i.hasClass(ca,"_5my9"))return;var da=Number(ca.getAttribute('data-topicid')),ea=Number(ca.getAttribute('data-position'));if(i.hasClass(ca,"_338c")){ba.push(da);}else if(i.hasClass(ca,"_5my1")){z.push(da);aa.push(ea);}else{x.push(da);y.push(ea);}});return {visibleTopicIds:x,visiblePositions:y,hiddenTopicIds:z,hiddenPositions:aa,removedTopicIds:ba};};w.prototype.showExtraItem=function(){'use strict';var x=j.scry(this.$TrendingCategoryList1,"._5my1");if(x.length===0)return;var y=Number.MAX_VALUE,z=null;x.forEach(function(aa){var ba=Number(aa.getAttribute('data-position'));if(ba<y){z=aa;y=ba;}});i.removeClass(z,"_5my1");i.addClass(z,"_4_ni");i.show(z);v.forEach(function(event){z.addEventListener(event,function(){m.truncate(z);i.removeClass(z,"_4_ni");});});this.$TrendingCategoryList11([Number(z.getAttribute('data-topicid'))],[Number(z.getAttribute('data-position'))],o.WWW_HIDDEN_RHC_TRENDING);};w.prototype.removeItem=function(x){'use strict';i.addClass(x,"_338c");i.hide(x);};w.prototype.fetchExtraItems=function(){'use strict';if(this.$TrendingCategoryList7)return;this.$TrendingCategoryList7=true;if(this.$TrendingCategoryList2!==null)i.hide(this.$TrendingCategoryList2);var x=this.getCategoryItemInfo(),y=this.$TrendingCategoryList4-x.hiddenTopicIds.length;if(y<=0){this.$TrendingCategoryList12();return;}var z=j.find(this.$TrendingCategoryList1,"._30_w");i.show(z);var aa=x.visibleTopicIds.concat(x.hiddenTopicIds,x.removedTopicIds),ba=q.getURIBuilder().setIntVector('topic_ids_seen',aa).setInt('num_topics_to_add',y).setInt('num_removed_topics',x.removedTopicIds.length).setEnum('category',this.$TrendingCategoryList3).getURI();new h().setURI(ba).setRelativeTo(this.$TrendingCategoryList1).setHandler((function(ca){i.hide(z);this.$TrendingCategoryList12();}).bind(this)).send();};w.prototype.$TrendingCategoryList8=function(){'use strict';j.scry(this.$TrendingCategoryList1,"._5my2").forEach(function(x){if(i.hasClass(x,"_5my9")){return;}else if(i.hasClass(x,"_5my1"))return;m.truncate(x);});};w.prototype.$TrendingCategoryList9=function(){'use strict';u(k.listen(this.$TrendingCategoryList1,'click',(function(event){var x=event.getTarget();if(i.hasClass(x,"_19_3")){var y=j.find(x,"._1k6k");n.onHideClicked(y,this.$TrendingCategoryList3);return;}else if(i.hasClass(x,"_1k6k")){n.onHideClicked(x,this.$TrendingCategoryList3);return;}var z=l.byClass(x,"_2p3m");if(z){n.onHideReasonClicked(z,this.$TrendingCategoryList3);return;}var aa=l.byClass(x,"_4_nn");if(aa){n.onHideMenuUndoClicked(aa,this.$TrendingCategoryList3);return;}}).bind(this)));};w.prototype.$TrendingCategoryList10=function(){'use strict';if(this.$TrendingCategoryList2==null)return;u(k.listen(this.$TrendingCategoryList2,'click',(function(){i.hide(this.$TrendingCategoryList2);this.fetchExtraItems();}).bind(this)));};w.prototype.$TrendingCategoryList12=function(){'use strict';var x=j.scry(this.$TrendingCategoryList1,"._5my1");if(x.length===0)return;var y=Math.min(this.$TrendingCategoryList4,x.length),z=[],aa=[];for(var ba=0;ba<y;ba++){i.show(x[ba]);i.removeClass(x[ba],"_5my1");m.truncate(x[ba]);z.push(Number(x[ba].getAttribute('data-topicid')));aa.push(Number(x[ba].getAttribute('data-position')));}this.$TrendingCategoryList11(z,aa,o.WWW_HIDDEN_RHC_TRENDING);};w.prototype.$TrendingCategoryList11=function(x,y,z){'use strict';if(x.length===0)return;var aa={};for(var ba=0;ba<x.length;ba++)aa[y[ba]]=x[ba];var ca=p.getURIBuilder().setIntToIntMap('topic_ids_by_position',aa).setString('source',z).setInt('query_id',this.$TrendingCategoryList6).getURI();new h(ca).send();};f.exports=w;},null);