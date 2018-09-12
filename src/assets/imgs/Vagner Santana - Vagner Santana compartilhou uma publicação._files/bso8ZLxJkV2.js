if (self.CavalryLogger) { CavalryLogger.start_js(["xfpLQ"]); }

__d("ScrollColumn.react",["cx","invariant","Arbiter","Event","React","ReactDOM","SubscriptionsHandler","Vector","ViewportBounds","joinClasses","throttle","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;var i="ScrollColumn/adjust";c=b("React").createClass({displayName:"ScrollColumn",_subscriptionsHandler:null,propTypes:{left:a.string,topOffset:a.number,zIndex:a.number},getDefaultProps:function(){return{left:"",topOffset:0,zIndex:0}},_scroll:0,_scrollDelta:0,getInitialState:function(){return{fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0}},render:function(){var a="auto",c=this.state.fixedLeft,d="auto";this.state.fixed==="bottom"?a=this.state.fixedBottom:this.state.fixed==="top"?d=this.state.fixedTop:(c="auto",d=this.state.top);var e=b("joinClasses")(this.props.className,"_5ss7");return b("React").createElement("div",{className:e,ref:"container"},b("React").createElement("div",{className:"_5ss8"+(this.state.fixed?" fixed_always":""),ref:"column",style:{bottom:a,left:c,top:d,zIndex:this.props.zIndex}},this.props.children))},componentDidMount:function(){this._subscriptionsHandler=new(b("SubscriptionsHandler"))(),this._subscriptionsHandler.addSubscriptions(b("tidyEvent")(b("Arbiter").subscribe(i,function(){this._adjust()}.bind(this))),b("tidyEvent")(b("Event").listen(window,"resize",b("throttle")(this._adjust))),b("tidyEvent")(b("Event").listen(window,"scroll",this._onScroll)),b("tidyEvent")(b("ViewportBounds").subscribe("change",this._adjust))),this._adjust()},componentDidUpdate:function(a,c){c.fixed!==this.state.fixed&&b("Arbiter").inform("reflow")},componentWillUnmount:function(){this._subscriptionsHandler&&this._subscriptionsHandler.release()},_onScroll:function(event){var a=b("Vector").getScrollPosition().y;this._scrollDelta=a-this._scroll;this._scroll=a;this._adjust()},_adjust:function(){__p&&__p();if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return}if(this._scrollDelta>0&&this._isBottomOfColumnVisible()){this._setFixedToBottom();return}if(this._scrollDelta<0&&this._isTopOfColumnVisible()){this._setFixedToTop();return}var a=this._getTopPositionForRef("column"),b=this._getTopPositionForRef("container");a=a-b;this._setNotFixed(a)},_getTopPositionForRef:function(a){a=this.refs[a];a||h(0,undefined);a=b("Vector").getElementPosition(b("ReactDOM").findDOMNode(a),"viewport").y;this._scroll<0&&(a+=this._scroll);return a},_getTopBoundWithOffset:function(){return b("ViewportBounds").getTop()+this.props.topOffset},_isContainerBelowViewportTop:function(){var a=this._getTopPositionForRef("container");return a>=this._getTopBoundWithOffset()},_isColumnLargerThanViewport:function(){var a=b("Vector").getViewportDimensions().y-b("ViewportBounds").getBottom()-this._getTopBoundWithOffset();return b("ReactDOM").findDOMNode(this.refs.column).offsetHeight>a},_isBottomOfColumnVisible:function(){var a=this._getTopPositionForRef("column"),c=b("Vector").getElementDimensions(b("ReactDOM").findDOMNode(this.refs.column),"viewport").y;a=a+c;return a<=b("Vector").getViewportDimensions().y-b("ViewportBounds").getBottom()},_isTopOfColumnVisible:function(){var a=this._getTopPositionForRef("column");return a>=this._getTopBoundWithOffset()},_getFixedLeft:function(){return b("Vector").getElementPosition(b("ReactDOM").findDOMNode(this.refs.container),"viewport").x},_setFixedToBottom:function(){this.setState({fixed:"bottom",fixedBottom:b("ViewportBounds").getBottom(),fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left})},_setFixedToTop:function(){this.setState({fixed:"top",fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left,fixedTop:this._getTopBoundWithOffset()})},_setNotFixed:function(a){this.setState({fixed:!1,top:a})},_updateContainerHeight:function(){b("ReactDOM").findDOMNode(this.refs.container).style.height=b("ReactDOM").findDOMNode(this.refs.column).offsetHeight+this.state.top+"px"},_updateColumnWidth:function(){b("ReactDOM").findDOMNode(this.refs.column).style.width=b("ReactDOM").findDOMNode(this.refs.container).offsetWidth+"px"}});c.EVENT_SHOULD_ADJUST=i;e.exports=c}),null);
__d("FollowRequestResultEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REVERT:"revert"})}),null);
__d("SeeFirstNuxEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","QE2Logger","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=1,j="live_notifs",k={follow:0,see_first:0,see_more:0,highlights_only:0,subscribe_all_live_notifications:j,subscribe_suggested_live_notifications:j,subscribe_none_live_notifications:j};function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=c,this.$2=d,this.$3=f,this.$4=e,this.$5=a,this.$6=null,this.$7=new(b("SubscriptionsHandler"))(),this.$5.getPopover().subscribe("show",function(){b("QE2Logger").logExposureForUser("feed_control_highlight_only")}),this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();a==="unfollow"?(b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$3.id}),b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,{profile_id:this.$3.id}),this.$4&&this.$4.hide(),this.$5.getPopover().hideLayer()):(this.setSelected(a),a===b("ProfileSubFollowStatus").SEE_FIRST?(this.$4&&(this.$4.hide(),this.logNux(b("SeeFirstNuxEvents").SEE_FIRST_SELECTED)),b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!0,see_more:!1,highlights_only:!1})):a===b("ProfileSubFollowStatus").SEE_MORE?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!0,highlights_only:!1}):a===b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!0}):b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!1}))}.bind(this)),this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,c){if(this.$3.id!==c.profile_id)return;c.see_first?this.setSelected(b("ProfileSubFollowStatus").SEE_FIRST):c.see_more?this.setSelected(b("ProfileSubFollowStatus").SEE_MORE):c.highlights_only?this.setSelected(b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY):this.setSelected(b("ProfileSubFollowStatus").REGULAR_FOLLOW)}.bind(this))),this.$7.addSubscriptions(b("Arbiter").subscribe(b("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this))),this.$4&&(this.$4.show(),this.logNux(b("SeeFirstNuxEvents").IMP),this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(),"._50zy"),"click",this.logNux.bind(this,b("SeeFirstNuxEvents").XOUT)))),b("Run").onLeave(this.cleanUp.bind(this))}a.prototype.logNux=function(event){"use strict";var a=b("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setData({event:event,id:this.$3.id}).send()};a.prototype.getButtons=function(){"use strict";return b("DOM").scry(this.$1,"._3oz-")};a.prototype.getSelected=function(){"use strict";var a=this.getButtons(),c=null;a.forEach(function(a){var d=a.getAttribute("data-status");b("CSS").matchesSelector(a,"._52-0")&&(c=d)});return c};a.prototype.setSelected=function(a){"use strict";__p&&__p();this.$6=this.getSelected();var c=this.getButtons(),d=k[a];c.forEach(function(c){if(d===j)return;var e=c.getAttribute("data-status");e===a?b("CSS").addClass(c,"_52-0"):b("CSS").removeClass(c,"_52-0")});this.$2.forEachItem(function(c){if(!c.getValue)return;var e=c.getValue(),f=k[e];if(e==="unfollow")return;c=c.getRoot();e===a?b("CSS").addClass(c,"_52-0"):f===d&&b("CSS").removeClass(c,"_52-0")})};a.prototype.handleResponse=function(event,a){"use strict";if(a.id!==this.$3.id||a.location!==i)return;event===b("FollowRequestResultEnum").REVERT&&this.revert()};a.prototype.revert=function(){"use strict";if(this.$6===null)return;this.setSelected(this.$6)};a.prototype.cleanUp=function(){"use strict";this.$7&&this.$7.release(),this.$7=null,this.$1=null,this.$2=null,this.$3=null};e.exports=a}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){var g;g=babelHelpers.inherits(a,b("PopoverMenu"));g&&g.prototype;a.prototype._onMenuDone=function(a){"use strict"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("ProfileEngagementTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.appid=a;return this};a.prototype.setAppversion=function(a){this.$1.appversion=a;return this};a.prototype.setContentID=function(a){this.$1.content_id=a;return this};a.prototype.setEngagementType=function(a){this.$1.engagement_type=a;return this};a.prototype.setEventMetadata=function(a){this.$1.event_metadata=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setIsemployee=function(a){this.$1.isemployee=a;return this};a.prototype.setItemSubtype=function(a){this.$1.item_subtype=a;return this};a.prototype.setItemType=function(a){this.$1.item_type=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setProductBucket=function(a){this.$1.product_bucket=a;return this};a.prototype.setProfileIDDummy=function(a){this.$1.profile_id_dummy=a;return this};a.prototype.setProfileSessionID=function(a){this.$1.profile_session_id=a;return this};a.prototype.setSubsurface=function(a){this.$1.subsurface=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTabName=function(a){this.$1.tab_name=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={appid:!0,appversion:!0,content_id:!0,engagement_type:!0,event_metadata:!0,isemployee:!0,item_subtype:!0,item_type:!0,name:!0,product_bucket:!0,profile_id_dummy:!0,profile_session_id:!0,subsurface:!0,surface:!0,tab_name:!0,vc:!0};e.exports=a}),null);
__d("TidyArbiter",["TidyArbiterMixin"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("TidyArbiterMixin"));e.exports=a}),null);
__d("VertexScrollColumn.react",["DOMContainer.react","React","ScrollColumn.react"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;var h=5,i=10;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";var a=b("React").createElement(b("ScrollColumn.react"),{topOffset:i,ref:"scrollColumn",zIndex:h},b("React").createElement(b("DOMContainer.react"),null,this.props.content));return a};function a(){"use strict";g.apply(this,arguments)}a.propTypes={content:c.object.isRequired};e.exports=a}),null);
__d("DoublyLinkedListMap",[],(function(a,b,c,d,e,f){__p&&__p();function a(){"use strict";this._head=null,this._tail=null,this._nodes={},this._nodeCount=0}a.prototype.get=function(a){a=(a=this._nodes[a])!=null?a.data:a;return a?a:null};a.prototype.getIndex=function(a){"use strict";var b=this._head;for(var c=0;b;b=b.next,c++)if(b.key===a)return c;return null};a.prototype._insert=function(a,b,c,d){"use strict";__p&&__p();c&&!this._nodes[c]&&(c=null);c&&this._nodes[c]?c=this._nodes[c]:c=d?this._head:this._tail;b={data:b,key:a,next:null,prev:null};c&&(this.remove(a),d?(b.prev=c.prev,c.prev&&(c.prev.next=b),c.prev=b,b.next=c):(b.next=c.next,c.next&&(c.next.prev=b),c.next=b,b.prev=c));b.prev===null&&(this._head=b);b.next===null&&(this._tail=b);this._nodes[a]=b;this._nodeCount++;return this};a.prototype.insertBefore=function(a,b,c){"use strict";return this._insert(a,b,c,!0)};a.prototype.insertAfter=function(a,b,c){"use strict";return this._insert(a,b,c,!1)};a.prototype.prepend=function(a,b){"use strict";return this.insertBefore(a,b,this._head&&this._head.key)};a.prototype.append=function(a,b){"use strict";return this.insertAfter(a,b,this._tail&&this._tail.key)};a.prototype.remove=function(a){"use strict";__p&&__p();var b=this._nodes[a];if(b){var c=b.next,d=b.prev;c&&(c.prev=d);d&&(d.next=c);this._head===b&&(this._head=c);this._tail===b&&(this._tail=d);delete this._nodes[a];this._nodeCount--}return this};a.prototype.find=function(a){"use strict";for(var b=this._head;b;b=b.next)if(a(b.data))return b.key;return null};a.prototype.reduce=function(a,b){"use strict";for(var c=this._head;c;c=c.next)b=a(c.data,b);return b};a.prototype.exists=function(a){"use strict";return!!this._nodes[a]};a.prototype.isEmpty=function(){"use strict";return!this._head};a.prototype.reset=function(){"use strict";this._head=null,this._tail=null,this._nodes={},this._nodeCount=0};a.prototype.map=function(a){"use strict";for(var b=this._head;b;b=b.next)a(b.data)};a.prototype.getCount=function(){"use strict";return this._nodeCount};a.prototype.getHead=function(){var a;return(a=this._head)!=null?a.data:a};a.prototype.getTail=function(){var a;return(a=this._tail)!=null?a.data:a};a.prototype.getNext=function(a){return(a=this._nodes[a])!=null?(a=a.next)!=null?a.data:a:a};a.prototype.getPrev=function(a){return(a=this._nodes[a])!=null?(a=a.prev)!=null?a.data:a:a};a.prototype.getHeadKey=function(){var a;return(a=this._head)!=null?a.key:a};a.prototype.getTailKey=function(){var a;return(a=this._tail)!=null?a.key:a};e.exports=a}),null);
__d("ProfileOverviewSection",["CallbackDependencyManager","DOMScroll","DoublyLinkedListMap","TidyArbiterMixin","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=new(b("CallbackDependencyManager"))(),i={};function a(a,c,d){"use strict";this.id=a,this.label=d,this.nodeID=c,this._isLoaded=!1,this._parentSection=null,this.childSections=new(b("DoublyLinkedListMap"))(),i[a]=this,setTimeout(function(){return h.satisfyPersistentDependency(a)},0)}a.prototype.reset=function(){"use strict";this.childSections.map(function(a){return a.reset()})};a.prototype.appendSection=function(a){"use strict";this.childSections.append(a.id,a),a._parentSection=this};a.prototype.freeze=function(){"use strict";this.freezeChildren()};a.prototype.freezeChildren=function(){"use strict";var a=this.childSections.getHead();while(a)a.isActive()||a.freeze(),a=a.getNext()};a.prototype.getParent=function(){"use strict";return this._parentSection};a.prototype.getChildren=function(){"use strict";return this.childSections};a.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id)};a.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id)};a.prototype.isActive=function(){"use strict";var a=this;while(a){if(a.id===g)return!0;a=a._parentSection}return!1};a.prototype.isLoaded=function(){"use strict";return this._isLoaded};a.prototype.setIsLoaded=function(a){"use strict";this._isLoaded=a;return this};a.prototype.scrollTo=function(){"use strict";if(!b("ge")(this.nodeID))return;b("DOMScroll").scrollTo(this.getNode(),!0,!1,0,0,b("DOMScroll").scrollTo.bind(this).bind(null,this.getNode(),0))};a.prototype.thaw=function(){"use strict";this.thawChildren()};a.prototype.thawChildren=function(){"use strict";var a=this.childSections.getHead();while(a)a.thaw(),a=a.getNext()};a.prototype.getNode=function(){"use strict";throw new Error("This function needs to be implemented in children.")};a.callWithSection=function(a,b){"use strict";h.registerCallback(function(){b(i[a])},[a])};a.setActiveSectionID=function(a){"use strict";g=a};a.resetGlobalState=function(){"use strict";g=null,h=new(b("CallbackDependencyManager"))(),i={}};Object.assign(a,b("TidyArbiterMixin"));e.exports=a}),null);
__d("ProfileOverviewDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MEDLEY_ROOT:"timeline-medley",PREFIX_APP_COLLECTION:"pagelet_timeline_app_collection_",PREFIX_COLLECTION_WRAPPER:"collection_wrapper_",PREFIX_MEDLEY:"pagelet_timeline_medley_",PREFIX_MEDLEY_HEADER:"medley_header_",PREFIX_RECOMMENDATION:"pagelet_recommendation_"})}),null);
__d("TimelineDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",STICKY_HEADER_CONTAINER:"timeline_sticky_header_container",STICKY_HEADER_OVERVIEW:"timeline_sticky_header_overview",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",ABOVE_COMPOSER:"timeline_above_composer",UNDER_COMPOSER:"timeline_under_composer",SERP_ENTRY_POINT:"serp_entry_point",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",TIMELINE_SCHEDULED_POSTS:"timeline_scheduled_posts",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_YEAR:"pagelet_timeline_year_",SUFFIX_MORE_PAGER:"_more_pager"})}),null);
__d("TimelineOverviewDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TAB_CONTENT:"timeline_overview"})}),null);
__d("ProfileTabUtils",["ProfileOverviewDOMID","ProfileTabConst","TimelineDOMID","TimelineOverviewDOMID","qex"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a===null||a===undefined||a===b("ProfileTabConst").TIMELINE||a===b("ProfileTabConst").WALL}var h={isActivityLogTab:function(a){return a===b("ProfileTabConst").ALL_ACTIVITY||a===b("ProfileTabConst").APPROVAL},isTimelineOverviewTab:function(a){return a===b("ProfileTabConst").TIMELINE_OVERVIEW},isOverviewTab:function(a){return a===b("ProfileTabConst").INFO||a===b("ProfileTabConst").OVERVIEW},isTimelineTab:g,isMapTab:function(a){return a===b("ProfileTabConst").MAP},tabHasFixedAds:function(a){return!0},tabHasScrubber:function(a){return h.isActivityLogTab(a)||h.isTimelineTab(a)&&!!b("qex")._("660514")},tabHasStickyHeader:function(a){return g(a)||h.isTimelineOverviewTab(a)},getIDForCollectionToken:function(a){return b("ProfileOverviewDOMID").PREFIX_APP_COLLECTION+a},getIDForSectionKey:function(a){return b("ProfileOverviewDOMID").PREFIX_MEDLEY+a},isMedleyTab:function(a){return!h.isTimelineTab(a)&&!h.isTimelineOverviewTab(a)},normalizeTabKey:function(a){return h.isTimelineTab(a)?b("ProfileTabConst").TIMELINE:a},getIDForTabKey:function(a){if(h.isTimelineTab(a))return b("TimelineDOMID").TAB_CONTENT;return h.isTimelineOverviewTab(a)?b("TimelineOverviewDOMID").TAB_CONTENT:b("ProfileOverviewDOMID").MEDLEY_ROOT},getPageletForTabKey:function(a){if(h.isTimelineTab(a))return b("qex")._("660636")?"TimelineJumperColumn":"TimelineWallColumn";return h.isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}};e.exports=h}),null);
__d("TimelineComponentKeys",[],(function(a,b,c,d,e,f){a={CONTENT:"content",ESCAPE_HATCH:"escape_hatch",OVERVIEW_CONTAINER:"overview_container",NAV:"nav",SCRUBBER:"scrubber",STICKY_HEADER:"sticky_header",STICKY_HEADER_NAV:"sticky_header_nav",STICKY_HEADER_VIEW_SWITCHER:"sticky_header_view_switcher"};e.exports=a}),null);
__d("ProfileDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ABOVE_HEADER_TIMELINE:"pagelet_above_header_timeline",ABOVE_HEADER_TIMELINE_PLACEHOLDER:"above_header_timeline_placeholder",COVER:"fbProfileCover",MAIN_COLUMN:"pagelet_main_column",MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal",MAIN_COLUMN_PERSONAL_OTHER:"pagelet_main_column_personal_other",RIGHT_SIDEBAR:"pagelet_right_sidebar",TAB_LOAD_INDICATOR:"tab_load_indicator",TOP_SECTION:"timeline_top_section",DISCOVERY_INTENT_BUTTON:"discovery_intent_button",DISCOVERY_INTENT_BANNER:"discovery_intent_banner",PREFIX_MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal_"})}),null);
__d("TimelineConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({DS_LOADED:"timeline-capsule-loaded",DS_COLUMN_HEIGHT_DIFFERENTIAL:"timeline-column-diff-height",SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:"TimelineConstants/sectionExpand",SECTION_LOADING:"TimelineConstants/sectionLoading",SECTION_LOADED:"TimelineConstants/sectionLoaded",SECTION_FULLY_LOADED:"TimelineConstants/sectionFullyLoaded",SECTION_REGISTERED:"TimelineConstants/sectionRegistered",UNIT_SEGMENT_LOADED:"TimelineConstants/unitSegmentLoaded"});e.exports=a}),null);
__d("TimelineLegacySections",["fbt","CSS","DOM","getElementText"],(function(a,b,c,d,e,f,g){__p&&__p();var h={},i={},j=!1,k=[],l={},m={get:function(a){return Object.prototype.hasOwnProperty.call(i,a)?i[a]:null},getAll:function(){return i},remove:function(a){for(var b=0;b<k.length;b++)if(k[b]===a){k[b]=null;break}delete i[a]},removeAll:function(){i={}},set:function(a,b){i[a]=b},addOnVisible:function(a,b){l[a]=b},destroyOnVisible:function(a){var c=l[a];c&&(c.remove(),b("DOM").remove(c.getElement()));l[a]=null},removeOnVisible:function(a){a=l[a];a&&a.remove()},removeAllOnVisibles:function(){Object.keys(l).forEach(function(a){return this.removeOnVisible(a)}.bind(this))},getOnVisible:function(a){return l[a]},setMainSectionOrder:function(a,b){k[b]=a},getMainSectionOrder:function(){return k},addLoadPagelet:function(a,b){h[a]=b},cancelLoadPagelet:function(a){h[a]&&h[a].cancel()},cancelLoadPagelets:function(){Object.keys(h).forEach(function(a){return this.cancelLoadPagelet(a)}.bind(this)),h={}},shouldForceNoFriendActivity:function(){return j},forceNoFriendActivity:function(){j=!0},collapsePlaceHolderHeaders:function(){__p&&__p();var a,c,d=!1;for(var e=0;e<k.length;e++){var f=k[e];if(!f)continue;f=m.get(f);if(!f)continue;if(f.canScrollLoad()||f.isLoaded()){f.isLoaded()||(b("CSS").removeClass(f.getNode(),"fbTimelineTimePeriodSuppressed"),b("CSS").addClass(f.getNode(),"fbTimelineTimePeriodUnexpanded"));a&&c&&(this.combineSectionHeaders(a,c),d&&a.deactivateScrollLoad(),d=!0);a=null;c=null;continue}else a?(c=f,f.deactivateScrollLoad()):(a=f,c=f,d&&f.activateScrollLoad());b("CSS").removeClass(f.getNode(),"fbTimelineTimePeriodSuppressed");b("CSS").addClass(f.getNode(),"fbTimelineTimePeriodUnexpanded")}},combineSectionHeaders:function(a,c){b("CSS").removeClass(c.getNode(),"fbTimelineTimePeriodUnexpanded");b("CSS").addClass(c.getNode(),"fbTimelineTimePeriodSuppressed");a=b("DOM").find(a.getNode(),"span.sectionLabel");c=b("DOM").find(c.getNode(),"span.sectionLabel");c.getAttribute("data-original-label")||c.setAttribute("data-original-label",b("getElementText")(c));a.getAttribute("data-month")&&c.getAttribute("data-month")&&a.getAttribute("data-year")==c.getAttribute("data-year")?b("DOM").setContent(c,g._("Mostrar {month1} - {month2} {year}",[g._param("month1",c.getAttribute("data-month")),g._param("month2",a.getAttribute("data-month")),g._param("year",a.getAttribute("data-year"))])):a.getAttribute("data-year")!==c.getAttribute("data-year")?b("DOM").setContent(c,g._("Mostrar {year1} - {year2}",[g._param("year1",c.getAttribute("data-year")),g._param("year2",a.getAttribute("data-year"))])):b("DOM").setContent(c,g._("Exibir {year}",[g._param("year",c.getAttribute("data-year"))]))}};e.exports=m}),null);
__d("findTag",["TAAL","$","ex"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c){__p&&__p();var d=b("$")(a);if(!c){if(d instanceof HTMLElement)return d;throw new Error(b("TAAL").blameToPreviousFile(b("ex")('Element with ID "%s" is not an HTMLElement',a)))}var e=d.tagName.toLowerCase();if(e!==c)throw new Error(b("TAAL").blameToPreviousFile(b("ex")("Expected $('%s') to be of type '%s' but got '%s' instead.",a,c,e)));return d};e.exports=a}),null);
__d("TimelineController",["Arbiter","BlueBar","CSS","DataStore","DOMQuery","Event","ProfileDOMID","ProfileTabConst","ProfileTabUtils","Run","TidyArbiter","TimelineComponentKeys","TimelineConstants","TimelineLegacySections","UITinyViewportAction","URI","Vector","findTag","forEachObject","ge","queryThenMutateDOM","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g=740,h="top",i="paddingTop",j="paddingTop",k=null,l=!1,m=null,n=null,o={},p={},q=null,r=[],s=null,t=null;b("Vector").getViewportDimensions();var u=!1,v=!1,w=!1;function x(a,b,c){c===void 0&&(c=[]);if(o[a])return o[a][b].apply(o[a],c);p[a]=p[a]||{};p[a][b]=c;return!1}function y(){u&&(u=C(b("ge")("rightCol"),j,I.getCurrentScrubber()));if(v){var a=b("ge")(b("ProfileDOMID").ABOVE_HEADER_TIMELINE);a&&(v=C(a,h))}w&&(w=C(b("BlueBar").getBar(),i))}function z(){t=b("Vector").getScrollPosition()}function A(){y(),t&&b("ProfileTabUtils").tabHasStickyHeader(k)&&x(b("TimelineComponentKeys").STICKY_HEADER,"check",[t.y]),x(b("TimelineComponentKeys").CONTENT,"checkCurrentSectionChange")}function B(){b("queryThenMutateDOM")(z,A,"TimelineController/scrollListener")}function C(a,c,d){__p&&__p();if(!a||!t)return!1;if(t.y<=0){D(a,c);return!1}if(d&&b("CSS").hasClass(d.getRoot(),"fixed_elem")){D(a,c);return!1}d=parseInt(a.style[c],10)||0;t.y<d?(b("CSS").addClass(a,"timeline_fixed"),a.style[c]=t.y+"px"):b("CSS").removeClass(a,"timeline_fixed");return!0}function D(a,c){a.style[c]="0px",b("CSS").removeClass(a,"timeline_fixed")}function E(){b("Vector").getViewportDimensions()}function F(){b("queryThenMutateDOM")(E,function(){x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"adjustMenuHeights"),t&&x(b("TimelineComponentKeys").STICKY_HEADER,"check",[t.y])},"TimelineController/resize")}function G(a,c){__p&&__p();a=b("Vector").getScrollPosition();c=Math.min(c,a.y);a=b("ge")("rightCol");a&&(a.style[j]=c+"px",u=!0);I.showAboveHeaderContent(c);w=b("UITinyViewportAction").isTinyHeight();if(w){a=b("BlueBar").getBar();a&&(a.style[i]=c+"px")}b("Arbiter").inform("reflow")}function H(){__p&&__p();while(r.length)r.pop().remove();b("forEachObject")(o,function(a,b){a.reset&&a.reset()});k=null;m=null;o={};p={};s=null;l=!1;v=!1;if(u){var a=b("ge")("rightCol");a&&D(a,j)}u=!1;if(w){a=b("BlueBar").getBar();a&&D(a,i);w=!1}b("DataStore").purge(b("TimelineConstants").DS_LOADED)}var I={init:function(a,c,d){__p&&__p();if(l)return;b("ProfileTabUtils").isTimelineTab(c)&&(c=b("ProfileTabConst").TIMELINE);l=!0;m=a;n=d.relationship_type;q=d.session_token;r.push(b("Event").listen(window,"scroll",B),b("Event").listen(window,"resize",F));b("tidyEvent")(b("TidyArbiter").subscribe("TimelineCover/coverCollapsed",G));b("Run").onLeave(H);a=new(b("URI"))(window.location).getQueryData();I.registerCurrentKey(c,a.subkey)},showAboveHeaderContent:function(a){var c=b("Vector").getScrollPosition();a=Math.min(a,c.y);c=b("findTag")(b("ProfileDOMID").ABOVE_HEADER_TIMELINE);if(c.firstChild){var d=b("findTag")(b("ProfileDOMID").ABOVE_HEADER_TIMELINE_PLACEHOLDER);d.style.height=c.offsetHeight+"px";c.style.top=a+"px";v=!0}},registerCurrentKey:function(a,c){__p&&__p();k=a;s=a!==b("ProfileTabConst").MAP&&b("Vector").getViewportDimensions().y<g&&b("ProfileTabUtils").tabHasScrubber(a);if(!s){var d=b("BlueBar").getBar();s=d&&d.offsetTop}b("Arbiter").inform("TimelineController/sectionKeyChange",[a,c],"state");x(b("TimelineComponentKeys").STICKY_HEADER,"handleTabChange",[a,c]);x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"handleTabChange",[a,c]);x(b("TimelineComponentKeys").OVERVIEW_CONTAINER,"handleTabChange",[a,c]);x(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,"handleTabChange",[a,c]);B()},getProfileID:function(){return m},getRelationshipType:function(){return n},getSessionToken:function(){return q},getCurrentKey:function(){return k},getCurrentScrubber:function(){return o[b("TimelineComponentKeys").SCRUBBER]},getCurrentStickyHeaderNav:function(){return o[b("TimelineComponentKeys").STICKY_HEADER_NAV]},scrubberHasLoaded:function(a){b("CSS").conditionClass(a.getRoot(),"fixed_elem",!s)},sectionHasChanged:function(a,c){a=[a,c];x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"updateSection",a);x(b("TimelineComponentKeys").SCRUBBER,"updateSection",a)},navigateToSection:function(a){x(b("TimelineComponentKeys").CONTENT,"navigateToSection",[a])},adjustStickyHeaderWidth:function(){x(b("TimelineComponentKeys").STICKY_HEADER,"adjustWidth")},dismissStickyHeaderConfirmationBar:function(){x(b("TimelineComponentKeys").STICKY_HEADER,"dismissConfirmationBar")},hideStickyHeaderNavSectionMenu:function(){x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"hideSectionMenu")},register:function(a,c){o[a]=c,p[a]&&(b("forEachObject")(p[a],function(b,c){x(a,c,b)}),delete p[a])},runOnceWhenSectionFullyLoaded:function(a,c,d){__p&&__p();var e=parseInt(d,10);d=b("TimelineLegacySections").get(c);var f=!1;if(d){d=b("DOMQuery").scry(d.getNode(),".fbTimelineCapsule");f=d.some(function(c){c=b("DataStore").get(b("TimelineConstants").DS_LOADED,c.id);if(parseInt(c,10)>=parseInt(e,10)){a();return!0}return!1})}if(!f)var g=b("Arbiter").subscribe(b("TimelineConstants").SECTION_FULLY_LOADED,function(b,d){d.scrubberKey===c&&parseInt(d.pageIndex,10)===e&&(a(),g.unsubscribe())})}};e.exports=I}),null);
__d("TimelineCapsuleUtilities",["CSS"],(function(a,b,c,d,e,f){__p&&__p();a={setFirstUnit:function(a){__p&&__p();var c=!0;for(var d=0;d<a.children.length;++d){var e=a.children[d];if(e.id.indexOf("tl_unit_")===0)if(c)c=!1,b("CSS").addClass(e,"firstUnit");else{b("CSS").removeClass(e,"firstUnit");break}}}};e.exports=a}),null);
__d("TimelineComposer",["csx","Arbiter","Bootloader","ComposerXMarauderLogger","ComposerXStore","CSS","DOM","DOMQuery","Event","Parent","ReloadPage","Run","TimelineCapsuleUtilities","$","ge","getObjectValues","goURI","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i,j;function k(){h&&b("ComposerXMarauderLogger").logCompleted(h.id)}function l(a){__p&&__p();if(a.hidePost){k();return}var c=a.redirect;if(c){var d=b("ComposerXStore").getAllForComposer(a.composer_id);b("getObjectValues")(d).forEach(function(a){a.reset&&a.reset(a)});b("goURI")(c);k();return}d=a.streamStory;if(!d){b("ReloadPage").now();return}if(a.backdatedTime){b("Bootloader").loadModules(["TimelineStoryPublisher"],function(b){b.publish(a)},"TimelineComposer");k();return}m.renderCapsuleBasedStory(b("$")(a.composer_id),d);b("Arbiter").inform("TimelineComposer/on_after_publish",d,"persistent");k()}var m={init:function(a){h||(i=b("Arbiter").subscribe("composer/publish",function(event,a){l(a)}),j=b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){l({composer_id:a,streamStory:c.markup})}),b("Run").onLeave(m.destroy)),h=b("$")(a)},destroy:function(){i&&i.unsubscribe(),j&&j.unsubscribe(),h=null},renderCapsuleBasedStory:function(a,c){__p&&__p();var d=b("ge")("timeline_story_container"),e=null;if(d)e=b("DOM").prependContent(d,c)[0];else{d=b("Parent").byClass(a,"fbTimelineCapsule");if(!(d instanceof HTMLElement))return;a=b("DOMQuery").scry(d,".fbTimelineUnit")[0];e=b("DOM").insertAfter(a,c)[0];b("CSS").hasClass(e,"fbTimelineUnit")&&(e=b("DOM").find(e,"div.timelineUnitContainer"));b("TimelineCapsuleUtilities").setFirstUnit(d)}e&&b("Bootloader").loadModules(["Animation"],function(a){new a(e).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(a.ease.both).go()},"TimelineComposer")},getRoot:function(){return h},initNUX:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){var a=b("DOM").scry(c,"textarea")[0];a&&a.focus()}))}};e.exports=m}),null);
__d("TimelineSmartInsert",["Run","UserAgent_DEPRECATED","Vector"],(function(a,b,c,d,e,f){__p&&__p();var g=100;function h(a){return a==="viewport"?b("Vector").getViewportDimensions().y:a}var i=!1,j=!1;function k(){if(j)return;b("Run").onLeave(l);j=!0}function l(){i=!1,j=!1}a={run:function(a,c,d){__p&&__p();k();if(!i||b("UserAgent_DEPRECATED").ie()<=8){c();return}var e=a.offsetHeight;c();c=a.offsetHeight;var f=b("Vector").getScrollPosition().y;a=b("Vector").getElementPosition(a).y;c!==e&&a<f&&a+e<f+h(d||g)&&window.scrollBy(0,c-e)},enable:function(){i=!0}};e.exports=a}),null);
__d("ReactComposerMediaAttachmentActions",["ReactComposerDispatcher","ReactComposerMediaAttachmentActionType","ReactComposerMediaAttachmentStore"],(function(a,b,c,d,e,f){__p&&__p();b("ReactComposerMediaAttachmentStore");a.prototype.setConfig=function(a,c){"use strict";a={composerID:a,type:b("ReactComposerMediaAttachmentActionType").SET_MEDIA_CONFIG,config:c};b("ReactComposerDispatcher").dispatch(a)};a.prototype.createAlbumSelectorClicked=function(a){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerMediaAttachmentActionType").CREATE_ALBUM_SELECTOR_CLICKED})};function a(){"use strict"}e.exports=new a()}),null);
__d("QE",["Banzai","Cache"],(function(a,b,c,d,e,f){__p&&__p();var g="qe_log_exposure",h=60,i=new(b("Cache"))();a={logExposure:function(a,c){var d=c?a+"|"+c:a;if(i.has(d))return;var e={signal:!0};a={name:a,id:null};c&&(a.id=c);b("Banzai").post(g,a,e);i.set(d,!0,1,h)}};e.exports=a}),null);
__d("FilteredSearchSource",["AbstractSearchSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("AbstractSearchSource"));g=c&&c.prototype;function a(a,b){"use strict";g.constructor.call(this),this.$FilteredSearchSource1=a,this.$FilteredSearchSource2=b}a.prototype.bootstrapImpl=function(a){"use strict";this.$FilteredSearchSource2.bootstrap(a)};a.prototype.searchImpl=function(a,b,c){"use strict";var d=function(a,c){a=this.$FilteredSearchSource3(a,c),b(a,c)}.bind(this);this.$FilteredSearchSource2.search(a,d,c)};a.prototype.$FilteredSearchSource3=function(a,b){"use strict";var c=this.$FilteredSearchSource1;return a.filter(function(a){return c(a,b)})};e.exports=a}),null);
__d("filterCapitalizedNames",["TokenizeUtil"],(function(a,b,c,d,e,f){function a(a,b){return g(a)&&(b.length>=5||h(a,b))}function g(a){var b=a.getAuxiliaryData()||i;return!b.disableAutosuggest&&!!(a.getType()==="user"||b.connectedPage)}function h(a,c){return b("TokenizeUtil").isExactMatch(c,a.getTitle())}var i={};e.exports=a}),null);