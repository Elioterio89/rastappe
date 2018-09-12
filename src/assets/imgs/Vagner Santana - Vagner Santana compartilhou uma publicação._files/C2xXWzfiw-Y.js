if (self.CavalryLogger) { CavalryLogger.start_js(["WugY\/"]); }

__d("MessengerGamesQuicksilverPlayerContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"gameID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"gameID",type:"ID!"}],c={kind:"InlineFragment",type:"Application",selections:[{kind:"LinkedField",alias:"gameInfo",name:"instant_game_info",storageKey:null,args:null,concreteType:"GamesInstantPlayStyleInfo",plural:!1,selections:[{kind:"ScalarField",alias:"orientation",name:"game_orientation",args:null,storageKey:null}]}]};return{kind:"Request",operationKind:"query",name:"MessengerGamesQuicksilverPlayerContainerQuery",id:"1727228563959327",text:null,metadata:{},fragment:{kind:"Fragment",name:"MessengerGamesQuicksilverPlayerContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[c]}]},operation:{kind:"Operation",name:"MessengerGamesQuicksilverPlayerContainerQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},c]}]}}}();e.exports=a}),null);
__d("MessengerGamesRenderGameFailedDialog.react",["fbt","MessengerDialog.react","MessengerDialogBodyReact.bs","MessengerDialogHeader.react","MessengerDialogs.bs","MessengerDialogTitle.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerDialogBodyReact.bs").jsComponent;function a(){return b("React").createElement(b("MessengerDialog.react"),{onToggle:function(a){a||b("MessengerDialogs.bs").removeDialog()}},b("React").createElement(b("MessengerDialogHeader.react"),null,b("React").createElement(b("MessengerDialogTitle.react"),null,g._("A\u00e7\u00e3o malsucedida"))),b("React").createElement(h,null,g._("Feche o jogo antes de iniciar um novo jogo.")))}e.exports=a}),null);
__d("MessengerMobileWindow.react",["cx","MessengerPhotoViewCloseLink.react","React","SpotlightViewer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.background,d=a.fontSize,e=a.onHide,f=a.open,g=a.children,h=a.onClose,i=a.sidebar;a=babelHelpers.objectWithoutProperties(a,["background","fontSize","onHide","open","children","onClose","sidebar"]);return b("React").createElement(b("SpotlightViewer"),{onHide:e,open:f,rootClassName:"_7yx"+(c==="light"?" _1lwq":"")},b("React").createElement("div",{className:"_3xsg"},b("React").createElement("div",babelHelpers["extends"]({className:"_7yy"},a),b("React").createElement("div",{className:"_7yz"}),b("React").createElement("div",{className:(this.props.orientation==="landscape"?"_pxe":"")+(this.props.orientation==="landscape"&&i?" _466h":"")+(this.props.orientation==="portrait"?" _pxf":"")+(this.props.orientation==="portrait"&&i?" _466r":"")+" _7y-"+(d==="auto"?" _5q__":"")},b("React").createElement("div",{className:"_5uag"},g)),b("React").createElement(b("MessengerPhotoViewCloseLink.react"),{onClick:h,customTooltip:null})),i))};function a(){h.apply(this,arguments)}a.defaultProps={background:"light",fontSize:"auto",orientation:"portrait"};a.propTypes={background:c.string.isRequired,fontSize:c.string.isRequired,onClose:c.func.isRequired,onHide:c.func.isRequired,open:c.bool.isRequired};e.exports=a}),null);
__d("MessengerGamesQuicksilverPlayerContainer.react",["Arbiter","BootloadOnRender.react","GamesInstantPlaySupportedOrientation","GamesQuicksilverAnalyticsInfo","GamesQuicksilverFunnelLogger","GamesQuicksilverPlayer.react","InstantGamesGateKeepers","JSResource","LazyComponent.react","MercuryConfig","MessengerDialogs.bs","MessengerGamesRenderGameFailedDialog.react","MessengerMobileWindow.react","QuicksilverSources","React","RelayFBEnvironment","RelayModern","MessengerGamesQuicksilverPlayerContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("GamesQuicksilverFunnelLogger").getDefaultFunnelName;a=b("React").PropTypes;var j=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var k=b("MercuryConfig").ShowInGameChat;c=babelHelpers.inherits(l,b("React").PureComponent);g=c&&c.prototype;function l(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={contextSourceID:this.props.initialContextSourceID,contextType:this.props.initialContextType,entryPointData:this.props.initialEntryPointData,gameID:this.props.initialGameID,open:!0,previousGameID:null,source:this.props.initialSource,isGamesQuicksilverPlayerContainerRendered:!1},this.$4=function(){this.setState({open:!1})}.bind(this),this.$5=function(){if(this.$2){this.$2=!1;return}l.$3=null;this.props.onHide()}.bind(this),this.$6=function(a){this.$2=!0,this.setState({contextSourceID:a.contextSourceID,contextType:a.contextType,entryPointData:a.entryPointData,gameID:a.newGameID,previousGameID:a.previousGameID,source:b("QuicksilverSources").GAME_SWITCH})}.bind(this),this.$7=function(a){this.$2=!0,this.setState({contextSourceID:this.props.initialContextSourceID,contextType:this.props.initialContextType,entryPointData:this.props.initialEntryPointData,gameID:a,previousGameID:null,source:this.props.initialSource})}.bind(this),c}l.prototype.componentDidMount=function(){this.$1=b("Arbiter").subscribeOnce(["instant_games_quit"],this.$4),l.$3===null&&(l.$3=this),this.setState({isGamesQuicksilverPlayerContainerRendered:this===l.$3})};l.prototype.componentWillUnmount=function(){if(this.$1===null)return;b("Arbiter").unsubscribe(this.$1)};l.prototype.render=function(){__p&&__p();if(b("InstantGamesGateKeepers").messenger_dot_com_instant_games_disabled)return null;if(!this.state.isGamesQuicksilverPlayerContainerRendered&&l.$3!==null&&k){b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(b("MessengerGamesRenderGameFailedDialog.react"),null)});return null}var a=this.props,c=a.sourceID,d=a.invitationID;a=this.state;var e=a.contextSourceID,f=a.contextType,g=a.entryPointData,m=a.gameID,n=a.previousGameID,o=a.source;return b("React").createElement(j,{environment:b("RelayFBEnvironment"),query:h||(h=function(){return b("MessengerGamesQuicksilverPlayerContainerQuery.graphql")}),render:function(a){a.error;a=a.props;if(a){a=(a=a)!=null?(a=a.node)!=null?(a=a.gameInfo)!=null?a.orientation:a:a:a;a=a&&Object.prototype.hasOwnProperty.call(b("GamesInstantPlaySupportedOrientation"),a)?b("GamesInstantPlaySupportedOrientation")[a]:b("GamesInstantPlaySupportedOrientation").PORTRAIT;var h=b("React").createElement(b("BootloadOnRender.react"),{component:b("React").createElement(b("LazyComponent.react"),{gameID:m,onChangeGame:this.$7,threadID:this.props.threadID}),loader:b("JSResource")("MessengerGameSideBar.react").__setRef("MessengerGamesQuicksilverPlayerContainer.react"),placeholder:b("React").createElement("div",null)});return b("React").createElement(b("MessengerMobileWindow.react"),{background:"dark",fontSize:"fixed",onHide:this.$5,onClose:this.$5,open:this.state.open,orientation:a,sidebar:h},b("React").createElement(b("GamesQuicksilverPlayer.react"),{analyticsInfo:new(b("GamesQuicksilverAnalyticsInfo"))(i(),o,c||"",0,d),appId:m,autoplay:!0,blockMobileScroll:!1,contextSourceID:e,contextType:f,enabled:this.props.enabled?this.props.enabled:!0,entryPointData:g,onMessengerGameSwitch:this.$6,previousGameID:n,shouldShowAfterShare:this.props.shouldShowAfterShare?this.props.shouldShowAfterShare:!1,gamesTabInboxUnitLoggingData:this.props.gamesTabInboxUnitLoggingData}))}return b("React").createElement("div",null)}.bind(this),variables:{gameID:this.state.gameID}})};l.$3=null;l.propTypes={initialContextSourceID:a.string,initialContextType:a.string.isRequired,initialEntryPointData:a.string,initialGameID:a.string.isRequired,onHide:a.func.isRequired,initialSource:a.string.isRequired,sourceID:a.string,invitationID:a.string};e.exports=l}),null);
__d("GamesPresenceIcon.react",["ix","cx","Image.react","InstantGameContextType","MercuryIDs","MessengerDialogs.bs","MessengerGamesQuicksilverPlayerContainer.react","QuicksilverSources","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={playerOpen:!1},this.$1=function(){if(this.state.playerOpen)return;var a=this.props.gameID;if(!a)return;b("MessengerDialogs.bs").showDialog(function(){return this.$2(a)}.bind(this));this.setState({playerOpen:!0})}.bind(this),this.$3=function(){b("MessengerDialogs.bs").removeAllDialogs(),this.setState({playerOpen:!1})}.bind(this),c}a.prototype.$2=function(a){var c=this.props.userID?b("InstantGameContextType").THREAD:b("InstantGameContextType").SOLO,d=this.props.userID;return b("React").createElement(b("MessengerGamesQuicksilverPlayerContainer.react"),{initialContextSourceID:d,initialContextType:c,initialGameID:a,initialSource:b("QuicksilverSources").WWW_CHAT_SIDEBAR_PRESENCE,key:a,onHide:this.$3,sourceID:this.props.userID,threadID:this.props.userID?b("MercuryIDs").getThreadIDFromUserID(this.props.userID):null})};a.prototype.render=function(){return b("React").createElement("div",{className:"_46b2"},b("React").createElement(b("Image.react"),{className:"_46b3",onClick:this.$1,src:g("579343")}))};e.exports=a}),null);
__d("GamesPresenceIconContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"userID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"userID",type:"ID!"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"InlineFragment",type:"User",selections:[{kind:"LinkedField",alias:"activeInstantGame",name:"active_instant_game",storageKey:null,args:null,concreteType:"Application",plural:!1,selections:[c]}]};return{kind:"Request",operationKind:"query",name:"GamesPresenceIconContainerQuery",id:"1737971296282322",text:null,metadata:{},fragment:{kind:"Fragment",name:"GamesPresenceIconContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[d]}]},operation:{kind:"Operation",name:"GamesPresenceIconContainerQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},c,d]}]}}}();e.exports=a}),null);
__d("GamesPresenceIconContainer.react",["GamesPresenceIcon.react","React","RelayFBEnvironment","RelayModern","GamesPresenceIconContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(i,{environment:b("RelayFBEnvironment"),query:h||(h=function(){return b("GamesPresenceIconContainerQuery.graphql")}),render:function(a){a.error;a=a.props;if(a){a=(a=a)!=null?(a=a.node)!=null?(a=a.activeInstantGame)!=null?a.id:a:a:a;return b("React").createElement(b("GamesPresenceIcon.react"),{gameID:a,userID:this.props.userID})}return b("React").createElement(b("GamesPresenceIcon.react"),null)}.bind(this),variables:{userID:this.props.userID}})};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("ChatSidebarItemUserPlayingGameInfoContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"userID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"userID",type:"ID!"}],c={kind:"LinkedField",alias:"gameInfo",name:"instant_game_info",storageKey:null,args:null,concreteType:"GamesInstantPlayStyleInfo",plural:!1,selections:[{kind:"ScalarField",alias:"iconURI",name:"icon_uri",args:null,storageKey:null},{kind:"ScalarField",alias:"gameName",name:"game_name",args:null,storageKey:null},{kind:"ScalarField",alias:"gameID",name:"instant_game_id",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",operationKind:"query",name:"ChatSidebarItemUserPlayingGameInfoContainerQuery",id:"1798665183548958",text:null,metadata:{},fragment:{kind:"Fragment",name:"ChatSidebarItemUserPlayingGameInfoContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"User",selections:[{kind:"LinkedField",alias:"activeInstantGame",name:"active_instant_game",storageKey:null,args:null,concreteType:"Application",plural:!1,selections:[c]}]}]}]},operation:{kind:"Operation",name:"ChatSidebarItemUserPlayingGameInfoContainerQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d,{kind:"InlineFragment",type:"User",selections:[{kind:"LinkedField",alias:"activeInstantGame",name:"active_instant_game",storageKey:null,args:null,concreteType:"Application",plural:!1,selections:[c,d]}]}]}]}}}();e.exports=a}),null);
__d("MessengerLogo.react",["React"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.color;a=a.size;return b("React").createElement("div",{style:{width:a,height:a}},b("React").createElement("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},b("React").createElement("g",{transform:"scale(0.02)",fill:"none"},b("React").createElement("path",{fill:c,fillRule:"evenodd",d:"M399.494079,0.00274415094 C178.859771,0.00274415094 0.000304955527,167.227237 0.000304955527,373.508113 C0.000304955527,490.856138 57.8859466,595.562774 148.414028,664.036455 L148.414028,806.983343 L284.747446,731.373854 C321.092046,741.545506 359.609962,747.013481 399.494079,747.013481 C620.128386,747.013481 798.987853,579.788988 798.987853,373.508113 C798.987853,167.227237 620.128386,0.00274415094 399.494079,0.00274415094 M441.568386,500.879189L338.245388 393.558495 139.264956 503.581669 357.419975 272.117619 460.742973 379.437297 659.722389 269.414122z"}))))};e.exports=a}),null);
__d("ChatSidebarItemUserPlayingGameInfo.react",["cx","fbt","Image.react","InstantGameContextType","MercuryIDs","MessengerDialogs.bs","MessengerGamesQuicksilverPlayerContainer.react","QuicksilverSources","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={playerOpen:!1},this.$3=function(){b("MessengerDialogs.bs").removeAllDialogs(),this.setState({playerOpen:!1})}.bind(this),c}a.prototype.render=function(){var a=this.props.gameID,c=this.props.gameName,d=this.props.iconURI;return!a||!c||!d?b("React").createElement("div",{className:"_2wi1"},b("React").createElement("div",{className:"_2wi2"},this.props.originalElement)):b("React").createElement("div",{className:"_2wi1"},b("React").createElement("div",{className:"_2wi2"},this.props.originalElement),b("React").createElement("div",{className:"_2wi4",onClick:function(){this.$1(a)}.bind(this),role:"link",tabIndex:"0"},b("React").createElement(b("Image.react"),{src:d,className:"_2wi5"}),b("React").createElement("div",{className:"_2wi6"},h._("Jogando")," ",c)))};a.prototype.$1=function(a){if(this.state.playerOpen)return;b("MessengerDialogs.bs").showDialog(function(){return this.$2(a)}.bind(this));this.setState({playerOpen:!0})};a.prototype.$2=function(a){var c=this.props.threadFBID?b("InstantGameContextType").THREAD:b("InstantGameContextType").SOLO,d=this.props.threadFBID;return b("React").createElement(b("MessengerGamesQuicksilverPlayerContainer.react"),{initialContextSourceID:d,initialContextType:c,initialGameID:a,key:a,onHide:this.$3,initialSource:b("QuicksilverSources").WWW_CHAT_SIDEBAR_PRESENCE,sourceID:this.props.threadFBID,threadID:b("MercuryIDs").getThreadIDFromUserID(this.props.threadFBID)})};e.exports=a}),null);
__d("ChatSidebarItemUserPlayingGameInfoContainer.react",["ChatSidebarItemUserPlayingGameInfo.react","React","RelayFBEnvironment","RelayModern","ChatSidebarItemUserPlayingGameInfoContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.userID,d=a.originalElement;return b("React").createElement(i,{environment:b("RelayFBEnvironment"),query:h||(h=function(){return b("ChatSidebarItemUserPlayingGameInfoContainerQuery.graphql")}),render:function(a){__p&&__p();a.error;a=a.props;if(a){var c,e;e=(e=a)!=null?(e=e.node)!=null?(e=e.activeInstantGame)!=null?(e=e.gameInfo)!=null?e.iconURI:e:e:e:e;c=(c=a)!=null?(c=c.node)!=null?(c=c.activeInstantGame)!=null?(c=c.gameInfo)!=null?c.gameName:c:c:c:c;a=(a=a)!=null?(a=a.node)!=null?(a=a.activeInstantGame)!=null?(a=a.gameInfo)!=null?a.gameID:a:a:a:a;return b("React").createElement(b("ChatSidebarItemUserPlayingGameInfo.react"),{gameName:c,iconURI:e,gameID:a,originalElement:d,threadFBID:this.props.userID})}return d}.bind(this),variables:{userID:c}})};function a(){g.apply(this,arguments)}e.exports=a}),null);