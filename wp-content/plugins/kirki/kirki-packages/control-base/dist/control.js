!function(){var t;wp.customize.kirkiDynamicControl=wp.customize.Control.extend({initialize:function(t,e){var i,n=this,o=e||{};if(o.params=o.params||{},o.params.type||(o.params.type="kirki-generic"),o.content){var r=o.content.split('class="');r=r[1].split('"'),i=r[0]}else i="customize-control customize-control-"+o.params.type;!o.params.wrapper_attrs&&o.params.wrapper_atts&&(o.params.wrapper_attrs=o.params.wrapper_atts),o.params.content=jQuery("<li></li>"),o.params.content.attr("id","customize-control-"+t.replace(/]/g,"").replace(/\[/g,"-")),o.params.content.attr("class",i),_.each(o.params.wrapper_attrs,(function(t,e){"class"===e&&(t=t.replace("{default_class}",i)),o.params.content.attr(e,t)})),n.propertyElements=[],wp.customize.Control.prototype.initialize.call(n,t,o),wp.hooks.doAction("kirki.dynamicControl.init.after",t,n,o)},_setUpSettingRootLinks:function(){var t=this;t.container.find("[data-customize-setting-link]").each((function(){var e=jQuery(this);wp.customize(e.data("customizeSettingLink"),(function(i){var n=new wp.customize.Element(e);t.elements.push(n),n.sync(i),n.set(i())}))}))},_setUpSettingPropertyLinks:function(){var t=this;t.setting&&t.container.find("[data-customize-setting-property-link]").each((function(){var e,i=jQuery(this),n=i.data("customizeSettingPropertyLink");e=new wp.customize.Element(i),t.propertyElements.push(e),e.set(t.setting()[n]),e.bind((function(e){var i=t.setting();e!==i[n]&&((i=_.clone(i))[n]=e,t.setting.set(i))})),t.setting.bind((function(t){t[n]!==e.get()&&e.set(t[n])}))}))},ready:function(){var t=this;t._setUpSettingRootLinks(),t._setUpSettingPropertyLinks(),wp.customize.Control.prototype.ready.call(t),t.deferred.embedded.done((function(){t.initKirkiControl(),wp.hooks.doAction("kirki.dynamicControl.ready.deferred.embedded.done",t)})),wp.hooks.doAction("kirki.dynamicControl.ready.after",t)},embed:function(){var t=this,e=t.section();e&&(wp.customize.section(e,(function(e){"kirki-expanded"===e.params.type||e.expanded()||wp.customize.settings.autofocus.control===t.id?t.actuallyEmbed():e.expanded.bind((function(e){e&&t.actuallyEmbed()}))})),wp.hooks.doAction("kirki.dynamicControl.embed.after",t))},actuallyEmbed:function(){var t=this;"resolved"!==t.deferred.embedded.state()&&(t.renderContent(),t.deferred.embedded.resolve(),wp.hooks.doAction("kirki.dynamicControl.actuallyEmbed.after",t))},focus:function(t){var e=this;e.actuallyEmbed(),wp.customize.Control.prototype.focus.call(e,t),wp.hooks.doAction("kirki.dynamicControl.focus.after",e)},initKirkiControl:function(t){t=t||this,wp.hooks.doAction("kirki.dynamicControl.initKirkiControl",this),t.container.on("change keyup paste click","input",(function(){t.setting.set(jQuery(this).val())}))}}),(t=wp.customize).Value.prototype.set=function(e){var i,n,o=this._value;return e=this._setter.apply(this,arguments),null===(e=this.validate(e))||_.isEqual(o,e)||(this.id&&t.control(this.id)&&t.control(this.id).params&&t.control(this.id).params.parent_setting&&(i=t.control(this.id).params.parent_setting,(n={})[this.id.replace(i+"[","").replace("]","")]=e,t.control(i).setting.set(jQuery.extend({},t.control(i).setting._value,n))),this._value=e,this._dirty=!0,this.callbacks.fireWith(this,[e,o])),this},t.Value.prototype.get=function(){var e;return this.id&&t.control(this.id)&&t.control(this.id).params&&t.control(this.id).params.parent_setting?(e=t.control(this.id).params.parent_setting,t.control(e).setting.get()[this.id.replace(e+"[","").replace("]","")]):this._value}}();
//# sourceMappingURL=control.js.map
