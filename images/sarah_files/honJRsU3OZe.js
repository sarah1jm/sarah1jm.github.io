/*!CK:1885381451!*//*1440989693,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+Obry"]); }

__d("MessagingRealtimeConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={VIEWER_FBID:"realtime_viewer_fbid"};},null,{});
__d("SyncRequestStatusEnum",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]};},null,{});
__d('EgoAdsObjectSet',['DOM','csx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(){'use strict';this._allEgoUnits=[];this._egoUnits=[];}j.prototype.init=function(l){'use strict';this._allEgoUnits=l;this._egoUnits=[];this._allEgoUnits.forEach(function(m){var n=k(m);if(!n||!n.holdout)this._egoUnits.push(m);},this);};j.prototype.getCount=function(){'use strict';return this._egoUnits.length;};j.prototype.forEach=function(l,m){'use strict';this._egoUnits.forEach(l,m);};j.prototype.getUnit=function(l){'use strict';return this._egoUnits[l];};j.prototype.getHoldoutAdIDsForSpace=function(l,m){'use strict';if(!l||!m)return [];var n=[];for(var o=0;l>0&&o<this._allEgoUnits.length;o++){var p=this._allEgoUnits[o],q=m(p),r=k(p);if(l>=q&&r&&r.holdout)n.push(r.adid);l-=q;}return n;};j.prototype.getHoldoutAdIDsForNumAds=function(l){'use strict';l=Math.min(l,this._allEgoUnits.length);var m=[];for(var n=0;n<l;n++){var o=this._allEgoUnits[n],p=k(o);if(p&&p.holdout)m.push(p.adid);}return m;};function k(l){var m=h.scry(l,"div._4u8")[0],n=m&&m.getAttribute('data-ad');return n&&JSON.parse(n)||undefined;}f.exports=j;},null);
__d('rayInterceptsBox',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=Object.keys(k);l.forEach(function(n){!(m.indexOf(n)!==-1)?h(0):undefined;!(typeof k[n]==='number')?h(0):undefined;});}var j={check:function(k,l){i(k,['minX','maxX','minY','maxY']);i(l,['x','y','dx','dy']);!(k.maxX>k.minX&&k.maxY>k.minY)?h(0):undefined;if(l.dx===0&&l.dy===0)return false;if(l.x>=k.minX&&l.x<=k.maxX&&l.y>=k.minY&&l.y<=k.maxY)return true;var m=(k.minX-l.x)/l.dx,n=(k.maxX-l.x)/l.dx,o=(k.minY-l.y)/l.dy,p=(k.maxY-l.y)/l.dy,q=Math.max(Math.min(m,n),Math.min(o,p)),r=Math.min(Math.max(m,n),Math.max(o,p));if(q<0)return false;if(q>r)return false;return true;}};f.exports=j;},null);
__d('AdsMouseStateStore',['Arbiter','DOM','Event','Vector','$','invariant','keyMirror','rayInterceptsBox','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();'use strict';var q=30,r=500,s=n({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null}),t,u,v,w,x;function y(){t=s.STATIONARY;u=0;v=0;w=Date.now();x='pagelet_ego_pane';}y();function z(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(ba){var ca=Math.random()*1000;return {x:ca,y:ca};}}var aa=Object.assign(new h(),{getState:function(){return t;},updateRhcID:function(ba){!l(ba)?m(0):undefined;x=ba;},getRhcID:function(){return x;},onPageTransition:function(event){y();},onMouseMove:function(event){this.calculateState(z(event));},__updateMousePos:function(ba){u=ba.x;v=ba.y;},isRhcPresent:function(){if(!i.scry(document.body,'#'+x).length)return false;var ba=this.getRhcDimensions();return ba.y>0&&ba.x>0;},getRhc:function(){return l(x);},getRhcPosition:function(){return k.getElementPosition(this.getRhc());},getRhcScreenPos:function(){var ba=k.getScrollPosition(),ca=this.getRhcPosition();return {x:ca.x-ba.x,y:ca.y-ba.y};},getRhcDimensions:function(){return k.getElementDimensions(this.getRhc());},getRhcBoundingBox:function(){var ba=this.getRhcDimensions(),ca=this.getRhcScreenPos();return {minX:ca.x,maxX:ca.x+ba.x,minY:ca.y,maxY:ca.y+ba.y};},isPosContainedInRhc:function(ba){var ca=this.getRhcBoundingBox();return (ba.x>=ca.minX&&ba.x<=ca.maxX&&ba.y>=ca.minY&&ba.y<=ca.maxY);},hasMovedMinDistance:function(ba){var ca=ba.x-u,da=ba.y-v;return ca*ca+da*da>=q*q;},tooSoon:function(){return Date.now()-w<r;},_updateTime:function(){w=Date.now();},calculateState:function(ba){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(ba)){this.transitionToState(s.HOVER);this.__updateMousePos(ba);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(ba)){this.transitionToState(s.STATIONARY);return;}var ca=this.isMovingTowardsRhc(ba)?s.INTENT:s.NO_INTENT;this.transitionToState(ca);this.__updateMousePos(ba);this.scheduleCheckup();},isMovingTowardsRhc:function(ba){var ca={x:u,y:v};if(this.isPosContainedInRhc(ca))return true;var da=this.getRhcBoundingBox(),ea={x:u,y:v,dx:ba.x-u,dy:ba.y-v};return o.check(da,ea);},scheduleCheckup:function(){var ba={x:u,y:v};setTimeout((function(){this.calculateState(ba);}).bind(this),r*1.5);},transitionToState:function(ba){if(ba===t)return;t=ba;aa.inform('change');}});j.listen(document,'mousemove',p(aa.onMouseMove.bind(aa),r));h.subscribe('page_transition',aa.onPageTransition);aa.STATES=s;aa.MIN_MOVE_DISTANCE=q;aa.THROTTLE_TIME=r;f.exports=aa;},null);
__d('BusinessURI.brands',['BizSiteIdentifier.brands','BusinessConf','URI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,j);l=k&&k.prototype;function m(o,p){'use strict';l.constructor.call(this,o);if(h.isBizSite()){var q=p||h.getBusinessID();if(q)this.addQueryData(i.BIZ_ID_PARAM_NAME,q);if(!this.$BusinessURI1(this.getSubdomain()))this.setSubdomain(i.DOMAIN);}return this;}m.prototype.$BusinessURI1=function(o){'use strict';return o==='developers';};var n=function(o,p){return new m(o,p);};f.exports=n;},null);
__d('AvailableListConstants',['fbt'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={ON_AVAILABILITY_CHANGED:'buddylist/availability-changed',ON_UPDATE_ERROR:'buddylist/update-error',ON_UPDATED:'buddylist/updated',ON_CHAT_NOTIFICATION_CHANGED:'chat-notification-changed',OFFLINE:0,IDLE:1,ACTIVE:2,MOBILE:3,WEB_STATUS:'webStatus',FB_APP_STATUS:'fbAppStatus',MESSENGER_STATUS:'messengerStatus',OTHER_STATUS:'otherStatus',STATUS_ACTIVE:'active',STATUS_IDLE:'idle',STATUS_OFFLINE:'offline',ACTIVE_ON_WEB:h._("Web"),ACTIVE_ON_MOBILE:h._("Mobile")};b.AvailableListConstants=f.exports=i;},null);
__d('ChatConfig',['ChatConfigInitialData'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={},j={get:function(k,l){return k in i?i[k]:l;},set:function(k){if(arguments.length>1){var l={};l[k]=arguments[1];k=l;}Object.assign(i,k);},getDebugInfo:function(){return i;}};j.set(h);f.exports=j;},null);
__d('PresenceUtil',['CurrentUser','randomInt'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=i(0,4294967295)+1;function k(){return j;}function l(){return h.isLoggedInNow();}f.exports={getSessionID:k,hasUserCookie:l};},null);
__d('PresencePrivacy',['Arbiter','AsyncRequest','ChannelConstants','CurrentUser','PresencePrivacyInitialData','JSLogger','PresenceUtil'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o='/ajax/chat/privacy/settings.php',p='/ajax/chat/privacy/online_policy.php',q='/ajax/chat/privacy/visibility.php',r='friend_visibility',s='visibility',t='online_policy',u=babelHelpers._extends({},l.privacyData),v=l.visibility,w=babelHelpers._extends({},l.privacyData),x=v,y=l.onlinePolicy,z=y,aa=[],ba=false;function ca(){return m.create('blackbird');}var da=Object.assign(new h(),{WHITELISTED:1,BLACKLISTED:-1,UNLISTED:0,ONLINE:1,OFFLINE:0,ONLINE_TO_WHITELIST:0,ONLINE_TO_BLACKLIST:1});function ea(qa){var ra;for(ra in qa){var sa=qa[ra];if(ra==k.getID()){ca().error('set_viewer_visibility');throw new Error("Invalid to set current user's visibility");}switch(sa){case da.WHITELISTED:case da.BLACKLISTED:case da.UNLISTED:break;default:ca().error('set_invalid_friend_visibility',{id:ra,value:sa});throw new Error("Invalid state: "+sa);}}for(ra in qa)u[ra]=qa[ra];da.inform('privacy-changed');}function fa(qa,ra){var sa={};sa[qa]=ra;ea(sa);}function ga(qa){switch(qa){case da.ONLINE:case da.OFFLINE:break;default:ca().error('set_invalid_visibility',{value:qa});throw new Error("Invalid visibility: "+qa);}v=qa;da.inform('privacy-changed');da.inform('privacy-user-presence-changed');h.inform('chat/visibility-changed',{sender:this});}function ha(qa){switch(qa){case da.ONLINE_TO_WHITELIST:case da.ONLINE_TO_BLACKLIST:break;default:throw new Error("Invalid default online policy: "+qa);}y=qa;da.inform('privacy-user-presence-changed');da.inform('privacy-changed');}function ia(qa,ra){ba=true;qa.send();}function ja(qa,ra){aa.push({request:qa,data:ra});if(!ba){var sa=aa.shift();ia(sa.request,sa.data);}}function ka(qa,ra){var sa=qa.type;if(sa===r){var ta=ra.payload.user_availabilities;if(!Array.isArray(ta)){da.inform('privacy-availability-changed',{user_availabilities:ta});for(var ua in qa.settings)w[ua]=qa.settings[ua];}}else{if(sa===s){x=qa.visibility;}else if(sa===t)z=qa.online_policy;da.inform('privacy-user-presence-response');}ca().log('set_update_response',{data:qa,response:ra});}function la(qa,ra){if(v!==x)ga(x);if(y!==z)ha(z);Object.assign(u,w);da.inform('privacy-changed');aa=[];ca().log('set_error_response',{data:qa,response:ra});}function ma(qa){ba=false;if(aa.length>0){var ra=aa.shift();ia(ra.request,ra.data);}}function na(qa,ra){if(n!=null){var sa=qa.getData();sa.window_id=n.getSessionID();qa.setData(sa);}qa.setHandler(ka.bind(this,ra)).setErrorHandler(la.bind(this,ra)).setTransportErrorHandler(la.bind(this,ra)).setFinallyHandler(ma.bind(this)).setAllowCrossPageTransition(true);return qa;}function oa(qa,ra,sa){return na(new i(qa).setData(ra),sa);}function pa(qa,ra){var sa=ra.obj;if(sa.viewer_id!=k.getID()){ca().error('invalid_viewer_for_channel_message',{type:qa,data:ra});throw new Error("Viewer got from the channel is not the real viewer");}if(sa.window_id===n.getSessionID())return;var ta=sa.data;if(sa.event=='access_control_entry'){ta.target_ids.forEach(function(va){fa(va,ta.setting);w[va]=ta.setting;});}else{if(sa.event=='visibility_update'){var ua=!!ta.visibility?da.ONLINE:da.OFFLINE;ga(ua);x=ua;}else if(sa.event=='online_policy_update'){ha(ta.online_policy);z=ta.online_policy;}da.inform('privacy-user-presence-response');}ca().log('channel_message_received',{data:ra.obj});}Object.assign(da,{WHITELISTED:1,BLACKLISTED:-1,UNLISTED:0,ONLINE:1,OFFLINE:0,ONLINE_TO_WHITELIST:0,ONLINE_TO_BLACKLIST:1,init:function(qa,ra,sa){},setVisibility:function(qa){x=v;ga(qa);var ra={visibility:qa},sa={type:s,visibility:qa},ta=oa(q,ra,sa);ja(ta,sa);ca().log('set_visibility',{data:ra});return qa;},getVisibility:function(){return v;},setOnlinePolicy:function(qa){z=y;ha(qa);var ra={online_policy:qa},sa={type:t,online_policy:qa},ta=oa(p,ra,sa);ja(ta,sa);ca().log('set_online_policy',{data:ra});return qa;},getOnlinePolicy:function(){return y;},getFriendVisibility:function(qa){return u[qa]||da.UNLISTED;},isUserOffline:function(){return this.getVisibility()===da.OFFLINE;},allows:function(qa){if(this.isUserOffline())return false;var ra=this.getOnlinePolicy();return ra===da.ONLINE_TO_WHITELIST?u[qa]==da.WHITELISTED:u[qa]!=da.BLACKLISTED;},setFriendsVisibility:function(qa,ra){if(qa.length>0){var sa={};for(var ta=0;ta<qa.length;ta++){var ua=qa[ta];w[ua]=u[ua];sa[ua]=ra;}ea(sa);var va=ra;if(va==da.UNLISTED)va=w[qa[0]];var wa={users:qa,setting:ra,setting_type:va},xa={type:r,settings:sa},ya=oa(o,wa,xa);ja(ya,xa);ca().log('set_friend_visibility',{data:wa});}return ra;},setFriendVisibilityMap:function(qa,ra){for(var sa in qa)w[sa]=u[sa];ea(qa);var ta={type:r,settings:qa};ja(na(ra,ta),ta);ca().log('set_friend_visibility_from_map',{data:qa});},allow:function(qa){if(this.allows(qa)){ca().error('allow_already_allowed');throw new Error("allow() should only be called for users that "+"are not already allowed");}if(this.getVisibility()===da.OFFLINE){ca().error('allow_called_while_offline');throw new Error("allow() should only be called when the user is already online");}var ra=this.getOnlinePolicy()===da.ONLINE_TO_WHITELIST?da.WHITELISTED:da.UNLISTED;return this.setFriendsVisibility([qa],ra);},disallow:function(qa){if(!this.allows(qa)){ca().error('disallow_already_disallowed');throw new Error("disallow() should only be called for users that "+"are not already disallowed");}if(this.getVisibility()===da.OFFLINE){ca().error('disallow_called_while_offline');throw new Error("disallow() should only be called when the user is already online");}var ra=this.getOnlinePolicy()===da.ONLINE_TO_BLACKLIST?da.BLACKLISTED:da.UNLISTED;return this.setFriendsVisibility([qa],ra);},getBlacklist:function(){var qa=[];for(var ra in u)if(u[ra]===da.BLACKLISTED)qa.push(ra);return qa;},getWhitelist:function(){var qa=[];for(var ra in u)if(u[ra]===da.WHITELISTED)qa.push(ra);return qa;},getMapForTest:function(){return u;},setMapForTest:function(qa){u=qa;}});da.inform('privacy-changed');da.inform('privacy-user-presence-changed',h.BEHAVIOR_STATE);ca().log('initialized',{visibility:v,policy:y});h.subscribe(m.DUMP_EVENT,function(qa,ra){ra.presence_privacy={initial:l.privacyData,current:u};});h.subscribe(j.getArbiterType('privacy_changed'),pa.bind(this));h.subscribe(j.ON_CONFIG,(function(qa,ra){var sa=ra.getConfig('visibility',null);if(sa!==null&&typeof sa!=='undefined'){var ta=sa?da.ONLINE:da.OFFLINE;ga(ta);ca().log('config_visibility',{vis:ta});}}).bind(this));b.PresencePrivacy=f.exports=da;},3);
__d('ChatVisibility',['Arbiter','JSLogger','PresencePrivacy'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={isOnline:function(){return j.getVisibility()===j.ONLINE;},hasBlackbirdEnabled:function(){return this.isVisibleToMostFriends()||this.isVisibleToSomeFriends();},isVisibleToMostFriends:function(){return j.getOnlinePolicy()===j.ONLINE_TO_BLACKLIST&&j.getBlacklist().length>0;},isVisibleToSomeFriends:function(){return j.getOnlinePolicy()===j.ONLINE_TO_WHITELIST&&j.getWhitelist().length>0;},goOnline:function(l){if(j.getVisibility()===j.OFFLINE){i.create('blackbird').log('chat_go_online');j.setVisibility(j.ONLINE);h.inform('chat-visibility/go-online');}l&&l();},goOffline:function(l){if(j.getVisibility()===j.ONLINE){i.create('blackbird').log('chat_go_offline');j.setVisibility(j.OFFLINE);h.inform('chat-visibility/go-offline');}l&&l();},toggleVisibility:function(){if(k.isOnline()){k.goOffline();}else k.goOnline();}};f.exports=k;},null);
__d('LastMobileActiveTimes',['ServerTime','fbt'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={};function k(o){if(!o||o<0)return '';var p=h.get()/1000-o,q=Math.floor(p/60),r=Math.floor(q/60),s=Math.floor(r/24);if(q<=1){return i._("{count}m",[i.param('count',1)]);}else if(q<60){return i._("{count}m",[i.param('count',q)]);}else if(r<24){return i._("{count}h",[i.param('count',r)]);}else if(s<3){return i._("{count}d",[i.param('count',s)]);}else return '';}function l(o,p){if(!(o in j)||j[o]<p)j[o]=p;}function m(o){if(o in j){return j[o];}else return 0;}var n={update:function(o){for(var p in o)l(p,o[p]);},getShortDisplay:function(o){return k(m(o));},get:function(o){return m(o);},getDebugData:function(){return j;}};f.exports=n;},null);
__d('PresenceStatus',['ArbiterMixin','AvailableListConstants','BanzaiODS','ChatVisibility','CurrentUser','LastMobileActiveTimes','LogHistory','PresencePrivacy','ServerTime','createObjectFrom','debounceAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();j.setEntitySample('presence',.0001);var s=n.getInstance('presence_status'),t={},u={},v={},w={},x={},y={},z={},aa=Object.assign({},h),ba=r(function(){return aa.inform('change');},0);Object.assign(aa,{resetPresenceData:function(){u={};v={};z={};y={};x={};},reset:function(){aa.resetPresenceData();w={};},get:function(ca){if(ca==l.getID())return k.isOnline()?i.ACTIVE:i.OFFLINE;var da=i.OFFLINE;if(ca in u)da=u[ca];if(da===i.OFFLINE||da===i.IDLE)if(w[ca])da=i.MOBILE;if(!o.allows(ca))da=i.OFFLINE;return da;},getCapabilities:function(ca){var da=aa.get(ca);if(da==i.OFFLINE)return 0;var ea=v[ca];return ea?ea:0;},getDetailedActivePresence:function(ca){var da=z[ca];if(!da)return i.ACTIVE_ON_WEB;var ea=this._getDetailedActivePresenceFromObject(da);if(ea)return ea;if(!t[ca]){s.error('inconsistent_presence',{id:ca,presence:aa.getDebugInfo(ca)});j.bumpEntityKey('presence','inconsistent_presence');t[ca]=true;}return null;},_getDetailedActivePresenceFromObject:function(ca){var da=ca[i.WEB_STATUS],ea=ca[i.FB_APP_STATUS],fa=ca[i.MESSENGER_STATUS],ga=ca[i.OTHER_STATUS];if(ea===i.STATUS_ACTIVE||fa===i.STATUS_ACTIVE){return i.ACTIVE_ON_MOBILE;}else if(da===i.STATUS_ACTIVE||ga===i.STATUS_ACTIVE)return i.ACTIVE_ON_WEB;},isMessengerUser:function(ca){var da=z[ca];if(da)if(da[i.MESSENGER_STATUS]==i.STATUS_ACTIVE)return true;return w[ca];},hasDetailedPresenceData:function(ca){return z[ca]!=null;},getGroup:function(ca){return ca.some(function(da){if(da==l.getID())return false;return aa.get(da)===i.ACTIVE;})?i.ACTIVE:i.OFFLINE;},set:function(ca,da,ea,fa,ga,ha){if(ca==l.getID())return false;switch(da){case i.OFFLINE:case i.IDLE:case i.ACTIVE:case i.MOBILE:break;default:return false;}var ia=aa.get(ca),ja=ia!=da;if(ja&&ia==i.ACTIVE||da==i.ACTIVE){var ka={};ka[ca]=p.get()/1000;m.update(ka);}var la=false;if(!ja&&ga)la=aa.getCapabilities(ca)!=ga;if(ea){x[ca]=p.get();y[ca]=fa;}u[ca]=da;if(ga)v[ca]=ga;if(ha)z[ca]=ha;var ma=ja||la;if(ma)ba();return ma;},setMobileFriends:function(ca){w=q(ca);},getOnlineIDs:function(){var ca,da=[];for(ca in u)if(aa.get(ca)===i.ACTIVE)da.push(ca);return da;},getAvailableIDs:function(){var ca=aa.getOnlineIDs(),da;for(da in w){if(u[da])continue;ca.push(da);}return ca;},getOnlineCount:function(){return aa.getOnlineIDs().length;},getPresenceStats:function(){var ca=0,da=0,ea=0,fa=0,ga=0;for(var ha in u){ca+=1;switch(aa.get(ha)){case i.OFFLINE:da+=1;break;case i.IDLE:ea+=1;break;case i.ACTIVE:fa+=1;break;case i.MOBILE:ga+=1;break;default:break;}}return {total:ca,offline:da,idle:ea,active:fa,mobile:ga};},getDebugInfo:function(ca){return {id:ca,presence:u[ca],detailedPresence:z[ca],overlaySource:y[ca],overlayTime:x[ca],mobile:w[ca]};},getAllDebugInfo:function(){return {presence:u,detailedPresence:z,overlaySource:y,overlayTime:x,mobile:w};}});f.exports=aa;},null);
__d('escapeRegex',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return i.replace(/([.?*+\^$\[\]\\(){}|\-])/g,'\\$1');}f.exports=h;},null);
__d('FBRTCSupport',['ChannelConstants','RTCConfig','UserAgent'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={isSendWebrtcSupported:function(){return i.SendNewVCGK;},isReceiveWebrtcSupported:function(){return i.ReceiveNewVCGK;},isVideoInteropSupported:function(){return i.VideoInteropGK;},isVideoCallBlockingSupported:function(){return i.VideoCallBlockingGK;},isWebrtcSupported:function(){return (j.isBrowser('Chrome >= 28')||j.isBrowser('Firefox >= 25')||j.isBrowser('Opera >= 20'));},isOSSupported:function(){return !j.isPlatform('Android')&&!j.isPlatform('iOS');},getCapabilities:function(){var l=0;if(this.isReceiveWebrtcSupported())l=h.CAPABILITY_VOIP_INTEROP;return l;}};f.exports=k;},null);
__d("ScriptPathState",["Arbiter"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j,k,l,m=100,n={setIsUIPageletRequest:function(o){k=o;},setUserURISampleRate:function(o){l=o;},reset:function(){i=null;j=false;k=false;},_shouldUpdateScriptPath:function(){return j&&!k;},_shouldSendURI:function(){return Math.random()<l;},getParams:function(){var o={};if(n._shouldUpdateScriptPath()){if(n._shouldSendURI()&&i!==null)o.user_uri=i.substring(0,m);}else o.no_script_path=1;return o;}};h.subscribe("pre_page_transition",function(o,p){j=true;i=p.to.getUnqualifiedURI().toString();});f.exports=b.ScriptPathState=n;},null);
__d('AjaxPipeRequest',['Arbiter','AsyncRequest','BigPipe','CSS','DOM','Env','PageEvents','PageletSet','ScriptPathState','URI','ge','goOrReplace','performance','performanceAbsoluteNow'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w=0;function x(aa,ba){var ca=r(aa);if(!ca)return;if(!ba)ca.style.minHeight='100px';var da=o.getPageletIDs();for(var ea=0;ea<da.length;ea++){var fa=da[ea];if(l.contains(ca,fa))o.removePagelet(fa);}l.empty(ca);h.inform('pagelet/destroy',{id:null,root:ca});}function y(aa,ba){var ca=r(aa);if(ca&&!ba)ca.style.minHeight='100px';}function z(aa,ba){'use strict';this._uri=aa;this._query_data=ba;this._request=new i();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new h();this._requestID=w++;}z.prototype.setCanvasId=function(aa){'use strict';this._canvas_id=aa;return this;};z.prototype.setURI=function(aa){'use strict';this._uri=aa;return this;};z.prototype.setData=function(aa){'use strict';this._query_data=aa;return this;};z.prototype.getData=function(aa){'use strict';return this._query_data;};z.prototype.setAllowCrossPageTransition=function(aa){'use strict';this._allow_cross_page_transition=aa;return this;};z.prototype.setAppend=function(aa){'use strict';this._append=aa;return this;};z.prototype.send=function(){'use strict';this._arbiter.inform(n.AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:u()},h.BEHAVIOR_PERSISTENT);var aa={ajaxpipe:1,ajaxpipe_token:m.ajaxpipe_token};Object.assign(aa,p.getParams());p.reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(Object.assign(aa,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=v;}else v=this._request;if(this._isQuickling){var ba=t.webkitClearResourceTimings||t.clearResourceTimings||null;if(ba)ba.call(t);}this._request.send();return this;};z.prototype._preBootloadFirstResponse=function(aa){'use strict';return false;};z.prototype._fireDomContentCallback=function(){'use strict';this._arbiter.inform(n.AJAXPIPE_DOMREADY,true,h.BEHAVIOR_STATE);};z.prototype._fireOnloadCallback=function(){'use strict';this._arbiter.inform(n.AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:u()},h.BEHAVIOR_STATE);};z.prototype._isRelevant=function(aa){'use strict';return this._request==v||this._automatic&&this._relevantRequest==v||this._jsNonBlock||v&&v._allowIrrelevantRequests;};z.prototype._preBootloadHandler=function(aa){'use strict';var ba=aa.getPayload();if(!ba||ba.redirect||!this._isRelevant(aa))return false;var ca=false;if(aa.is_first){!this._append&&!this._displayCallback&&x(this._canvas_id,this._constHeight);ca=this._preBootloadFirstResponse(aa);this.pipe=new j({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:n.AJAXPIPE_DOMREADY,onloadEvt:n.AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return ca;};z.prototype._redirect=function(aa){'use strict';if(aa.redirect){if(aa.force||!this.isPageActive(aa.redirect)){var ba=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());s(window.location,new q(aa.redirect).removeQueryData(ba),true);}else{var ca=b.PageTransitions;ca.go(aa.redirect,true);}return true;}else return false;};z.prototype.isPageActive=function(aa){'use strict';return true;};z.prototype.getSanitizedParameters=function(){'use strict';return [];};z.prototype._versionCheck=function(aa){'use strict';return true;};z.prototype._onInitialResponse=function(aa){'use strict';var ba=aa.getPayload();if(!this._isRelevant(aa))return false;if(!ba)return true;if(this._redirect(ba)||!this._versionCheck(ba))return false;return true;};z.prototype._processFirstResponse=function(aa){'use strict';var ba=aa.getPayload();if(r(this._canvas_id)&&ba.canvas_class!=null)k.setClass(this._canvas_id,ba.canvas_class);};z.prototype.setFirstResponseCallback=function(aa){'use strict';this._firstResponseCallback=aa;return this;};z.prototype.setFirstResponseHandler=function(aa){'use strict';this._processFirstResponse=aa;return this;};z.prototype._onResponse=function(aa){'use strict';var ba=aa.payload;if(!this._isRelevant(aa))return i.suppressOnloadToken;if(aa.is_first){this._processFirstResponse(aa);this._firstResponseCallback&&this._firstResponseCallback();ba.provides=ba.provides||[];ba.provides.push('uipage_onload');if(this._append)ba.append=this._canvas_id;}if(ba){if('content' in ba.content&&this._canvas_id!==null&&this._canvas_id!='content'){ba.content[this._canvas_id]=ba.content.content;delete ba.content.content;}if(ba.secondFlushResources){this.pipe.setSecondFlushResources(ba.secondFlushResources);}else this.pipe.onPageletArrive(ba);}if(aa.is_last)y(this._canvas_id,this._constHeight);return i.suppressOnloadToken;};z.prototype.setNectarModuleDataSafe=function(aa){'use strict';this._request.setNectarModuleDataSafe(aa);return this;};z.prototype.setFinallyHandler=function(aa){'use strict';this._request.setFinallyHandler(aa);return this;};z.prototype.setErrorHandler=function(aa){'use strict';this._request.setErrorHandler(aa);return this;};z.prototype.setTransportErrorHandler=function(aa){'use strict';this._request.setTransportErrorHandler(aa);return this;};z.prototype.abort=function(){'use strict';this._request.abort();if(v==this._request)v=null;this._request=null;return this;};z.prototype.setJSNonBlock=function(aa){'use strict';this._jsNonBlock=aa;return this;};z.prototype.setAutomatic=function(aa){'use strict';this._automatic=aa;return this;};z.prototype.setDisplayCallback=function(aa){'use strict';this._displayCallback=aa;return this;};z.prototype.setConstHeight=function(aa){'use strict';this._constHeight=aa;return this;};z.prototype.setAllowIrrelevantRequests=function(aa){'use strict';this._allowIrrelevantRequests=aa;return this;};z.prototype.getAsyncRequest=function(){'use strict';return this._request;};z.getCurrentRequest=function(){'use strict';return v;};z.setCurrentRequest=function(aa){'use strict';v=aa;};f.exports=z;},null);
__d("CSSClassTransition",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(){}Object.assign(i,{go:function(j,k,l,m){var n;for(var o=0;o<h.length;o++)if(h[o](j,k,l,m)===true)n=true;if(!n)j.className=k;},registerHandler:function(j){h.push(j);return {remove:function(){var k=h.indexOf(j);if(k>=0)h.splice(k,1);}};}});f.exports=i;},null);
__d('DocumentTitle',['Arbiter'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=document.title,j=null,k=1500,l=[],m=0,n=null,o=false;function p(){if(l.length>0){if(!o){q(l[m].title);m=++m%l.length;}else r();}else{clearInterval(n);n=null;r();}}function q(t){document.title=t;o=true;}function r(){s.set(j||i,true);o=false;}var s={get:function(){return i;},set:function(t,u){document.title=t;if(!u){i=t;j=null;h.inform('update_title',t);}else j=t;},blink:function(t){var u={title:t};l.push(u);if(n===null)n=setInterval(p,k);return {stop:function(){var v=l.indexOf(u);if(v>=0){l.splice(v,1);if(m>v){m--;}else if(m==v&&m==l.length)m=0;}}};}};f.exports=s;},null);
__d('Poller',['ArbiterMixin','AsyncRequest','CurrentUser','emptyFunction','mixin','setTimeoutAcrossTransitions','setTimeout'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p;o=babelHelpers.inherits(q,l(h));p=o&&o.prototype;function q(t){'use strict';p.constructor.call(this);this._config=babelHelpers._extends({clearOnQuicklingEvents:true,setupRequest:k,interval:null,maxRequests:Infinity,dontStart:false},t);this._handle=null;if(!this._config.dontStart)this.start();}q.prototype.start=function(){'use strict';if(this._polling)return this;this._requests=0;this.request();return this;};q.prototype.stop=function(){'use strict';this._cancelRequest();return this;};q.prototype.mute=function(){'use strict';this._muted=true;return this;};q.prototype.resume=function(){'use strict';if(this._muted){this._muted=false;if(this._handle===null&&this._polling)return this.request();}return this;};q.prototype.skip=function(){'use strict';this._skip=true;return this;};q.prototype.reset=function(){'use strict';return this.stop().start();};q.prototype.request=function(){'use strict';this._cancelRequest();this._polling=true;if(!s())return this._done();if(this._muted)return this;if(++this._requests>this._config.maxRequests)return this._done();var t=new i();t.setIsBackgroundRequest(true);var u=false;t.setInitialHandler(function(){return !u;});this._cancelRequest=(function(){u=true;this._cleanup();}).bind(this);t.setFinallyHandler(r.bind(this));t.setInitialHandler=k;t.setFinallyHandler=k;this._config.setupRequest(t,this);if(this._skip){this._skip=false;m(r.bind(this),0);}else t.send();return this;};q.prototype.isPolling=function(){'use strict';return this._polling;};q.prototype.isMuted=function(){'use strict';return this._muted;};q.prototype.setInterval=function(t){'use strict';if(t){this._config.interval=t;this.start();}};q.prototype.getInterval=function(){'use strict';return this._config.interval;};q.prototype._cleanup=function(){'use strict';if(this._handle!==null)clearTimeout(this._handle);this._handle=null;this._cancelRequest=k;this._polling=false;};q.prototype._done=function(){'use strict';this._cleanup();this.inform('done',{sender:this});return this;};q.MIN_INTERVAL=2000;Object.assign(q.prototype,{_config:null,_requests:0,_muted:false,_polling:false,_skip:false,_cancelRequest:k});function r(){if(!this._polling)return;if(this._requests<this._config.maxRequests){var t=this._config.interval;t=typeof t==='function'?t(this._requests):t;t=t>q.MIN_INTERVAL?t:q.MIN_INTERVAL;if(this._config.clearOnQuicklingEvents){this._handle=n(this.request.bind(this),t);}else this._handle=m(this.request.bind(this),t);}else this._done();}function s(){return j.isLoggedInNow();}f.exports=q;},null);
__d('reportData',['Banzai','SessionName'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={retry:true};function k(l,m){m=m||{};var n={ft:m.ft||{},gt:m.gt||{}},o='-',p=[],q='r',r=[Date.now(),0,o,l,o,o,q,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,n,0,0,0,0].concat(p),s=[i.getName(),Date.now(),'act'];h.post('eagle_eye_event',Array.prototype.concat(s,r),j);}f.exports=k;},null);
__d("UIPageletContentCache",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={cache:{},getContent:function(i){if(i in this.cache)return this.cache[i];return null;},setContent:function(i,j){this.cache[i]=j;}};f.exports=h;},null);
__d('UIPagelet',['ActorURI','AjaxPipeRequest','AsyncRequest','DOM','HTML','ScriptPathState','UIPageletContentCache','URI','emptyFunction','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();function r(s,t,u){'use strict';var v=s&&k.isElementNode(s)?s.id:s;this._id=v||null;this._element=q(s||k.create('div'));this._src=t||null;this._context_data=u||{};this._data={};this._handler=p;this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}r.prototype.getElement=function(){'use strict';return this._element;};r.prototype.setHandler=function(s){'use strict';this._handler=s;return this;};r.prototype.go=function(s,t){'use strict';if(arguments.length>=2||typeof s=='string'){this._src=s;this._data=t||{};}else if(arguments.length==1)this._data=s;this.refresh();return this;};r.prototype.setAllowCrossPageTransition=function(s){'use strict';this._allow_cross_page_transition=s;return this;};r.prototype.setBundleOption=function(s){'use strict';this._is_bundle=s;return this;};r.prototype.setErrorHandler=function(s){'use strict';this._errorHandler=s;return this;};r.prototype.setTransportErrorHandler=function(s){'use strict';this.transportErrorHandler=s;return this;};r.prototype.refresh=function(){'use strict';if(this._use_ajaxpipe){m.setIsUIPageletRequest(true);this._request=new i();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}else{if(this._cache_content){var s=n.getContent(this._content_cache_key);if(s!==null){this.handleContent(s);return this;}}var t=(function(x){this._request=null;var y=l(x.getPayload());this.handleContent(y);if(this._cache_content)n.setContent(this._content_cache_key,y);}).bind(this),u=this._displayCallback,v=this._finallyHandler;this._request=new j().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(x){if(u){u(t.bind(null,x));}else t(x);v&&v();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var w=babelHelpers._extends({},this._context_data,this._data);if(this._actorID)w[h.PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(w)}).send();return this;};r.prototype.handleContent=function(s){'use strict';if(this._append){k.appendContent(this._element,s);}else k.setContent(this._element,s);this._handler();};r.prototype.cancel=function(){'use strict';if(this._request)this._request.abort();};r.prototype.setUseAjaxPipe=function(s){'use strict';this._use_ajaxpipe=!!s;return this;};r.prototype.setUsePostRequest=function(s){'use strict';this._use_post_request=!!s;return this;};r.prototype.setAppend=function(s){'use strict';this._append=!!s;return this;};r.prototype.setJSNonBlock=function(s){'use strict';this._jsNonblock=!!s;return this;};r.prototype.setAutomatic=function(s){'use strict';this._automatic=!!s;return this;};r.prototype.setDisplayCallback=function(s){'use strict';this._displayCallback=s;return this;};r.prototype.setConstHeight=function(s){'use strict';this._constHeight=!!s;return this;};r.prototype.setFinallyHandler=function(s){'use strict';this._finallyHandler=s;return this;};r.prototype.setAllowIrrelevantRequests=function(s){'use strict';this._allowIrrelevantRequests=s;return this;};r.prototype.setActorID=function(s){'use strict';this._actorID=s;return this;};r.prototype.setCacheContent=function(s){'use strict';this._cache_content=s;return this;};r.prototype.setContentCacheKey=function(s){'use strict';this._content_cache_key=s;return this;};r.appendToInline=function(s,t){'use strict';var u=q(s),v=q(t);if(u&&v){while(v.firstChild)k.appendContent(u,v.firstChild);k.remove(v);}};r.loadFromEndpoint=function(s,t,u,v){'use strict';v=v||{};var w='/ajax/pagelet/generic.php/'+s;if(v.intern)w='/intern'+w;var x=new o(w.replace(/\/+/g,'/'));if(v.subdomain)x.setSubdomain(v.subdomain);var y=false,z='';if(v.contentCacheKey){y=true;z=s+','+String(v.contentCacheKey);}var aa=new r(t,x,u).setUseAjaxPipe(v.usePipe).setBundleOption(v.bundle!==false).setAppend(v.append).setJSNonBlock(v.jsNonblock).setAutomatic(v.automatic).setDisplayCallback(v.displayCallback).setConstHeight(v.constHeight).setAllowCrossPageTransition(v.crossPage).setFinallyHandler(v.finallyHandler||p).setErrorHandler(v.errorHandler).setTransportErrorHandler(v.transportErrorHandler).setAllowIrrelevantRequests(v.allowIrrelevantRequests).setActorID(v.actorID).setCacheContent(y).setContentCacheKey(z).setUsePostRequest(v.usePostRequest);v.handler&&aa.setHandler(v.handler);aa.go();return aa;};r.loadFromEndpointBatched=function(s,t,u){'use strict';var v=s.slice(0,u),w=s.slice(u);if(w.length>0){var x=v[v.length-1],y=p;if(x.options&&x.options.finallyHandler)y=x.options.finallyHandler;x.options=babelHelpers._extends({},x.options,{finallyHandler:function(){y();window.setTimeout(function(){r.loadFromEndpointBatched(w,t,u);},1);}});}v.forEach(function(z){r.loadFromEndpoint(z.controller,z.target_element,z.data,babelHelpers._extends({},z.options,t,{bundle:true}));});};f.exports=r;},null);
__d('XUIBadge',['CSS','DOM','cx','invariant'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(n){return parseInt(n,10)===n;}function m(n){'use strict';this.target=n.target;this.count=n.count;this.maxcount=n.maxcount;}m.prototype.getCount=function(){'use strict';return this.count;};m.prototype.setCount=function(n){'use strict';!l(n)?k(0):undefined;!(n>=0)?k(0):undefined;this.count=n;h.conditionClass(this.target,'hidden_elem',this.count===0);if(n>this.maxcount){i.setContent(this.target,this.maxcount+'+');h.addClass(this.target,"_5ugi");}else{i.setContent(this.target,n);h.removeClass(this.target,"_5ugi");}};m.prototype.setLegacyContent=function(n){'use strict';if(typeof n==='string'){h.conditionClass(this.target,'hidden_elem',n==0);i.setContent(this.target,n);h.removeClass(this.target,"_5ugi");}else this.setCount(n);};m.prototype.increment=function(){'use strict';this.setCount(this.getCount()+1);};f.exports=m;},null);