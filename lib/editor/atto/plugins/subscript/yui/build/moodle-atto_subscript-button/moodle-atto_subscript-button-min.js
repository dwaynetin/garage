YUI.add("moodle-atto_subscript-button",function(e,t){e.namespace("M.atto_subscript").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_subscriptApplier:null,_superscriptApplier:null,initializer:function(){this.addButton({buttonName:"subscript",callback:this.toggleSubscript,icon:"e/subscript",inlineFormat:!0,tags:"sub"}),this._subscriptApplier=window.rangy.createCssClassApplier("editor-subscript"),this._superscriptApplier=window.rangy.createCssClassApplier("editor-superscript")},toggleSubscript:function(){this.get("host").changeToCSS("sup","editor-superscript"),this.get("host").changeToCSS("sub","editor-subscript"),this._superscriptApplier.undoToSelection(),this._subscriptApplier.toggleSelection(),this.get("host").changeToTags("editor-subscript","sub"),this.get("host").changeToTags("editor-superscript","sup")}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});