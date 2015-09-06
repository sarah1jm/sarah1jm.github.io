/*!CK:956256860!*//*1439179140,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["L9zhh"]); }

__d('ChatSidebarSheet.react',['ChannelConnection','ChatBehavior','ChatSidebarSheetChatOffline.react','ChatSidebarSheetChatReconnectMsg.react','ChatSidebarSheetChatShutdownMsg.react','ChatVisibility','CSS','JSLogger','PresencePrivacy','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler','emptyFunction','fbt','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();'use strict';var w=o.create('sidebar_sheet'),x=r.PropTypes,y=r.createClass({displayName:'ChatSidebarSheet',mixins:[q],propTypes:{onUpdate:x.func,root:x.object.isRequired},getInitialState:function(){return {channelStatus:null,channelData:null,isConnected:!h.disconnected(),isOnline:m.isOnline(),notifiesUserMessages:i.notifiesUserMessages()};},getDefaultProps:function(){return {onUpdate:t};},_subscriptions:s,_showWarningTimeout:null,componentDidMount:function(){this._subscriptions=new s();this._subscriptions.addSubscriptions(h.subscribe([h.CONNECTED,h.SHUTDOWN,h.RECONNECTING],this._handleConnectionChange),h.subscribe([h.MUTE_WARNING,h.UNMUTE_WARNING],this._calculateState),p.subscribe('privacy-user-presence-changed',this._calculateState),i.subscribe(i.ON_CHANGED,this._calculateState));},componentWillUpdate:function(){if(this._showWarningTimeout){clearTimeout(this._showWarningTimeout);this._showWarningTimeout=null;}n.removeClass(this.props.root,'offline');n.removeClass(this.props.root,'error');n.removeClass(this.props.root,'notice');},componentDidUpdate:function(){if(this.props.onUpdate)this.props.onUpdate();},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){if(!this.state.isOnline){n.addClass(this.props.root,'offline');return this._renderOffline();}else if(!this.state.isConnected){n.addClass(this.props.root,'error');return this._renderChannelDisconnect();}else if(!this.state.notifiesUserMessages){n.addClass(this.props.root,'notice');return this._renderNotice();}return null;},_handleConnectionChange:function(z,aa){this.setState({channelStatus:z,channelData:aa});this._calculateState();},_calculateState:function(){this.setState({isConnected:!h.disconnected(),isOnline:m.isOnline(),notifiesUserMessages:i.notifiesUserMessages()});},_renderChannelDisconnect:function(){if(this.state.channelStatus===h.SHUTDOWN){return (r.createElement(l,{hint:this.state.channelData}));}else if(this.state.channelStatus===h.RECONNECTING){var z=this.state.channelData;if(z>1000)this._showWarningTimeout=v(this._handleConnectionChange.bind(this,h.RECONNECTING,z-1000),1000);return (r.createElement(k,{msecs:z,onManuallyConnectClick:function(){return h.reconnect();}}));}return null;},_renderOffline:function(){return (r.createElement(j,{onGoOnlineClick:function(z){w.log('sidebar_go_online');m.goOnline();}}));},_renderNotice:function(){return (r.createElement('div',null,u._("Alerts are off while you use another client to chat.")));}});f.exports=y;},null);