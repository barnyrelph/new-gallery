YUI.add("gallery-datatable-contextmenu",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}n.NAME="DtContextMenu",n.NS="contextmenu",n.ATTRS={tbodyMenu:{value:null},theadMenu:{value:null},tfootMenu:{value:null}},e.extend(n,e.Plugin.Base,{theadCMenu:null,tbodyCMenu:null,tfootCMenu:null,_menuItemTemplate:'<div class="yui3-contextmenu-menuitem" data-cmenu="{menuIndex}">{menuContent}</div>',initializer:function(){var e=this.get("host"),t=e.get("contentBox");t&&t.one("."+e.getClassName("data"))&&this._buildUI(),this.afterHostEvent("renderView",this._onHostRenderViewEvent)},destructor:function(){this.theadCMenu&&this.theadCMenu.destroy&&this.theadCMenu.destroy({remove:!0}),this.tbodyCMenu&&this.tbodyCMenu.destroy&&this.tbodyCMenu.destroy({remove:!0}),this.tfootCMenu&&this.tfootCMenu.destroy&&this.tfootCMenu.destroy({remove:!0}),this.theadCMenu=null,this.tbodyCMenu=null,this.tfootCMenu=null},_buildUI:function(){this.get("theadMenu")&&this._makeTheadCMenu(),this.get("tbodyMenu")&&this._makeTbodyCMenu(),this.get("tfootMenu")&&this._makeTfootCMenu()},_makeTbodyCMenu:function(){var e,t={triggerNodeSel:"."+this.get("host").getClassName("data"),triggerTarget:"tr td"};e=this._buildCMenu(t,"tbodyMenu"),e&&(this.tbodyCMenu=e,this.tbodyCMenu._overlayDY=5)},_makeTheadCMenu:function(){var e,t={triggerNodeSel:"."+this.get("host").getClassName("columns"),triggerTarget:"tr th"};e=this._buildCMenu(t,"theadMenu"),e&&(this.theadCMenu=e,this.theadCMenu._overlayDY=5)},_makeTfootCMenu:function(){var e,t={triggerNodeSel:"."+this.get("host").getClassName("footer"),triggerTarget:"tr th"};e=this._buildCMenu(t,"theadMenu"),e&&(this.theadCMenu=e,this.theadCMenu._overlayDY=5)},_buildCMenu:function(t,n){var r=this.get("host"),i=r.get("contentBox"),s=this.get(n),o;return t=e.merge(t,s),t.trigger={node:i.one(t.triggerNodeSel),target:t.triggerTarget},delete t.triggerNodeSel,delete t.triggerTarget,o=new e.ContextMenuView(t),o},hideCM:function(e){e&&this[e]&&this[e].hideOverlay&&this[e].hideOverlay()},_onHostRenderViewEvent:function(){!this.theadCMenu&&!this.tbodyCMenu&&!this.theadCMenu&&this._buildUI()}}),e.namespace("Plugin").DataTableContextMenu=n},"@VERSION@",{supersedes:[""],skinnable:!1,requires:["plugin","gallery-contextmenu-view"],optional:[""]});
