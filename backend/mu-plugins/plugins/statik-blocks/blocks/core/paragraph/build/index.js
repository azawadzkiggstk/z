!function(){var e,t={89436:function(e,t,r){"use strict";var o=window.lodash,n=window.wp.i18n,a=window.wp.element,c=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{fill:"#1e1e1e",d:"M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"})),i=r(94184),s=r.n(i),l=window.wp.blockEditor;const u={className:!1},p={align:{type:"string"},content:{type:"string",source:"html",selector:"p",default:""},dropCap:{type:"boolean",default:!1},placeholder:{type:"string"},textColor:{type:"string"},backgroundColor:{type:"string"},fontSize:{type:"string"},direction:{type:"string",enum:["ltr","rtl"]},style:{type:"object"}},d=e=>{if(!e.customTextColor&&!e.customBackgroundColor&&!e.customFontSize)return e;const t={};(e.customTextColor||e.customBackgroundColor)&&(t.color={}),e.customTextColor&&(t.color.text=e.customTextColor),e.customBackgroundColor&&(t.color.background=e.customBackgroundColor),e.customFontSize&&(t.typography={fontSize:e.customFontSize});const{customTextColor:r,customBackgroundColor:o,customFontSize:n,...a}=e;return{...a,style:t}},{style:g,...m}=p;var f=[{supports:u,attributes:{...m,customTextColor:{type:"string"},customBackgroundColor:{type:"string"},customFontSize:{type:"number"}},save(e){let{attributes:t}=e;const{align:r,content:o,dropCap:c,direction:i}=t,u=s()({"has-drop-cap":r!==((0,n.isRTL)()?"left":"right")&&"center"!==r&&c,[`has-text-align-${r}`]:r});return(0,a.createElement)("p",l.useBlockProps.save({className:u,dir:i}),(0,a.createElement)(l.RichText.Content,{value:o}))}},{supports:u,attributes:{...m,customTextColor:{type:"string"},customBackgroundColor:{type:"string"},customFontSize:{type:"number"}},migrate:d,save(e){let{attributes:t}=e;const{align:r,content:o,dropCap:n,backgroundColor:c,textColor:i,customBackgroundColor:u,customTextColor:p,fontSize:d,customFontSize:g,direction:m}=t,f=(0,l.getColorClassName)("color",i),h=(0,l.getColorClassName)("background-color",c),y=(0,l.getFontSizeClass)(d),v=s()({"has-text-color":i||p,"has-background":c||u,"has-drop-cap":n,[`has-text-align-${r}`]:r,[y]:y,[f]:f,[h]:h}),b={backgroundColor:h?void 0:u,color:f?void 0:p,fontSize:y?void 0:g};return(0,a.createElement)(l.RichText.Content,{tagName:"p",style:b,className:v||void 0,value:o,dir:m})}},{supports:u,attributes:{...m,customTextColor:{type:"string"},customBackgroundColor:{type:"string"},customFontSize:{type:"number"}},migrate:d,save(e){let{attributes:t}=e;const{align:r,content:o,dropCap:n,backgroundColor:c,textColor:i,customBackgroundColor:u,customTextColor:p,fontSize:d,customFontSize:g,direction:m}=t,f=(0,l.getColorClassName)("color",i),h=(0,l.getColorClassName)("background-color",c),y=(0,l.getFontSizeClass)(d),v=s()({"has-text-color":i||p,"has-background":c||u,"has-drop-cap":n,[y]:y,[f]:f,[h]:h}),b={backgroundColor:h?void 0:u,color:f?void 0:p,fontSize:y?void 0:g,textAlign:r};return(0,a.createElement)(l.RichText.Content,{tagName:"p",style:b,className:v||void 0,value:o,dir:m})}},{supports:u,attributes:{...m,customTextColor:{type:"string"},customBackgroundColor:{type:"string"},customFontSize:{type:"number"},width:{type:"string"}},migrate:d,save(e){let{attributes:t}=e;const{width:r,align:o,content:n,dropCap:c,backgroundColor:i,textColor:u,customBackgroundColor:p,customTextColor:d,fontSize:g,customFontSize:m}=t,f=(0,l.getColorClassName)("color",u),h=(0,l.getColorClassName)("background-color",i),y=g&&`is-${g}-text`,v=s()({[`align${r}`]:r,"has-background":i||p,"has-drop-cap":c,[y]:y,[f]:f,[h]:h}),b={backgroundColor:h?void 0:p,color:f?void 0:d,fontSize:y?void 0:m,textAlign:o};return(0,a.createElement)(l.RichText.Content,{tagName:"p",style:b,className:v||void 0,value:n})}},{supports:u,attributes:{...m,fontSize:{type:"number"}},save(e){let{attributes:t}=e;const{width:r,align:o,content:n,dropCap:c,backgroundColor:i,textColor:l,fontSize:u}=t,p=s()({[`align${r}`]:r,"has-background":i,"has-drop-cap":c}),d={backgroundColor:i,color:l,fontSize:u,textAlign:o};return(0,a.createElement)("p",{style:d,className:p||void 0},n)},migrate(e){return d({...e,customFontSize:Number.isFinite(e.fontSize)?e.fontSize:void 0,customTextColor:e.textColor&&"#"===e.textColor[0]?e.textColor:void 0,customBackgroundColor:e.backgroundColor&&"#"===e.backgroundColor[0]?e.backgroundColor:void 0})}},{supports:u,attributes:{...p,content:{type:"string",source:"html",default:""}},save(e){let{attributes:t}=e;return(0,a.createElement)(a.RawHTML,null,t.content)},migrate(e){return e}}];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},h.apply(this,arguments)}var y=window.wp.components,v=window.wp.blocks,b=window.wp.primitives,k=(0,a.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,a.createElement)(b.Path,{d:"M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM14 14l5-4-5-4v8z"})),x=window.wp.compose,C=window.wp.keycodes,w=window.wp.data;function S(e){const{batch:t}=(0,w.useRegistry)(),{moveBlocksToPosition:r,replaceInnerBlocks:o,duplicateBlocks:n,insertBlock:c}=(0,w.useDispatch)(l.store),{getBlockRootClientId:i,getBlockIndex:s,getBlockOrder:u,getBlockName:p,getBlock:d,getNextBlockClientId:g}=(0,w.useSelect)(l.store),m=(0,a.useRef)(e);return m.current=e,(0,x.useRefEffect)((e=>{function a(e){if(e.defaultPrevented)return;if(e.keyCode!==C.ENTER)return;const{content:a,clientId:l}=m.current;if(a.length)return;const f=i(l);if(!(0,v.hasBlockSupport)(p(f),"__experimentalOnEnter",!1))return;const h=u(f);e.preventDefault();const y=h.indexOf(l);if(y===h.length-1)return void r([l],f,i(f),s(f)+1);const b=d(f);t((()=>{n([f]);const e=s(f);o(f,b.innerBlocks.slice(0,y)),o(g(f),b.innerBlocks.slice(y+1)),c((0,v.createBlock)("core/paragraph"),e+1,i(f),!0)}))}return e.addEventListener("keydown",a),()=>{e.removeEventListener("keydown",a)}}),[])}function E(e){let{direction:t,setDirection:r}=e;return(0,n.isRTL)()&&(0,a.createElement)(y.ToolbarButton,{icon:k,title:(0,n._x)("Left to right","editor button"),isActive:"ltr"===t,onClick:()=>{r("ltr"===t?void 0:"ltr")}})}function _(e){return e===((0,n.isRTL)()?"left":"right")||"center"===e}var B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/paragraph","title":"Paragraph","category":"text","description":"Start with the basic building block of all narrative.","keywords":["text"],"textdomain":"default","attributes":{"align":{"type":"string"},"content":{"type":"string","source":"html","selector":"p","default":"","__experimentalRole":"content"},"dropCap":{"type":"boolean","default":false},"placeholder":{"type":"string"},"direction":{"type":"string","enum":["ltr","rtl"]}},"supports":{"anchor":true,"className":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalSelector":"p","__unstablePasteTextInline":true},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const{name:F}=B;var j={from:[{type:"raw",priority:20,selector:"p",schema:e=>{let{phrasingContentSchema:t,isPaste:r}=e;return{p:{children:t,attributes:r?[]:["style","id"]}}},transform(e){const t=(0,v.getBlockAttributes)(F,e.outerHTML),{textAlign:r}=e.style||{};return"left"!==r&&"center"!==r&&"right"!==r||(t.align=r),(0,v.createBlock)(F,t)}}]};function O(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=O(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var z=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=O(e))&&(o&&(o+=" "),o+=t);return o};function N(e){const{tag:t="div",className:r,children:o,...n}=e;return(0,a.createElement)(t,{className:z("skeleton",r),...n},[o,(0,a.createElement)("span",{key:"skeleton-activity",className:"skeleton__activity"},(0,a.createElement)("span",null))])}N.Inline=function(e){return(0,a.createElement)(N,h({tag:"span"},e))},N.Text=function(e){const{tag:t="div",children:r,...o}=e,n=[r].flat().filter((e=>"string"==typeof e)).map((e=>e.split(" ").map(((e,t)=>(0,a.createElement)(a.Fragment,{key:t},(0,a.createElement)(N.Inline,o,e)," ")))));return(0,a.createElement)(t,{},n.flat())},r(17563);var T=(0,a.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(b.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),I=(0,a.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(b.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),R=(0,a.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(b.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),A=(0,a.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(b.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),V=window.wp.hooks;(0,a.createElement)(y.Icon,{icon:T}),(0,a.createElement)(y.Icon,{icon:I}),(0,a.createElement)(y.Icon,{icon:R}),(0,a.createElement)(y.Icon,{icon:A}),(0,a.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(b.Path,{d:"M15.742 7.009a2.823 2.823 0 0 0-1.351-1.039 4.492 4.492 0 0 0-1.753-.345 4.692 4.692 0 0 0-1.076.123 3.075 3.075 0 0 0-.927.396 2.088 2.088 0 0 0-.65.716c-.166.28-.25.618-.25 1.013 0 .593.208 1.046.626 1.36.417.312.934.584 1.551.815a29.17 29.17 0 0 0 2.028.667c.734.214 1.41.51 2.028.89a4.984 4.984 0 0 1 1.551 1.507c.418.626.626 1.458.626 2.496 0 .938-.175 1.762-.526 2.47a4.998 4.998 0 0 1-1.426 1.73 6.001 6.001 0 0 1-2.053 1.038c-.785.23-1.61.346-2.478.346a9.407 9.407 0 0 1-3.179-.544c-1.018-.362-1.894-.972-2.628-1.828l2.378-2.274a4.085 4.085 0 0 0 1.502 1.36 4.466 4.466 0 0 0 2.002.468c.367 0 .735-.049 1.101-.147a3.428 3.428 0 0 0 1.002-.445 2.38 2.38 0 0 0 .725-.741 2.061 2.061 0 0 0 .276-1.063c0-.643-.208-1.137-.626-1.483-.417-.346-.934-.634-1.552-.864a22.188 22.188 0 0 0-2.028-.693 8.923 8.923 0 0 1-2.026-.864 5.092 5.092 0 0 1-1.553-1.482c-.417-.627-.625-1.458-.625-2.496 0-.906.184-1.689.55-2.347A5.17 5.17 0 0 1 8.46 4.118a6.481 6.481 0 0 1 2.102-.99 9.079 9.079 0 0 1 2.403-.32c.934 0 1.835.14 2.703.42.884.28 1.677.741 2.377 1.384l-2.302 2.397z"}));const{name:$}=B;var P,M,L;P=$,M=B,L={icon:c,example:{attributes:{content:(0,n.__)("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing."),style:{typography:{fontSize:28}},dropCap:!0}},__experimentalLabel(e,t){let{context:r}=t;if("accessibility"===r){const{content:t}=e;return(0,o.isEmpty)(t)?(0,n.__)("Empty"):t}},transforms:j,deprecated:f,merge(e,t){return{content:(e.content||"")+(t.content||"")}},edit:function(e){let{attributes:t,mergeBlocks:r,onReplace:o,onRemove:c,setAttributes:i,clientId:u}=e;const{align:p,content:d,direction:g,dropCap:m,placeholder:f}=t,b=(0,l.useSetting)("typography.dropCap"),k=(0,l.useBlockProps)({ref:S({clientId:u,content:d}),className:s()({"has-drop-cap":!_(p)&&m,[`has-text-align-${p}`]:p}),style:{direction:g}});let x;return x=_(p)?(0,n.__)("Not available for aligned text."):m?(0,n.__)("Showing large initial letter."):(0,n.__)("Toggle to show a large initial letter."),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.BlockControls,{group:"block"},(0,a.createElement)(l.AlignmentControl,{value:p,onChange:e=>i({align:e,dropCap:!_(e)&&m})}),(0,a.createElement)(E,{direction:g,setDirection:e=>i({direction:e})})),b&&(0,a.createElement)(l.InspectorControls,{__experimentalGroup:"typography"},(0,a.createElement)(y.__experimentalToolsPanelItem,{hasValue:()=>!!m,label:(0,n.__)("Drop cap"),onDeselect:()=>i({dropCap:void 0}),resetAllFilter:()=>({dropCap:void 0}),panelId:u},(0,a.createElement)(y.ToggleControl,{label:(0,n.__)("Drop cap"),checked:!!m,onChange:()=>i({dropCap:!m}),help:x,disabled:!!_(p)}))),(0,a.createElement)(l.RichText,h({identifier:"content",tagName:"p"},k,{value:d,onChange:e=>i({content:e}),onSplit:(e,r)=>{let o;(r||e)&&(o={...t,content:e});const n=(0,v.createBlock)("core/paragraph",o);return r&&(n.clientId=u),n},onMerge:r,onReplace:o,onRemove:c,"aria-label":d?(0,n.__)("Paragraph block"):(0,n.__)("Empty block; start writing or type forward slash to choose a block"),"data-empty":!d,placeholder:f||(0,n.__)("Type / to choose a block"),"data-custom-placeholder":!!f||void 0,__unstableEmbedURLOnPaste:!0,__unstableAllowPrefixTransformations:!0})))},save:function(e){let{attributes:t}=e;const{align:r,content:o,dropCap:c,direction:i}=t,u=s()({"has-drop-cap":r!==((0,n.isRTL)()?"left":"right")&&"center"!==r&&c,[`has-text-align-${r}`]:r});return(0,a.createElement)("p",l.useBlockProps.save({className:u,dir:i}),(0,a.createElement)(l.RichText.Content,{value:o}))}},(0,V.addFilter)("blocks.registerBlockType",`statik/override/${P}`,((e,t,r)=>t===P&&(0,o.isNil)(r)?((0,w.select)("statik").getOverriddenBlocks().includes(P)||(0,w.dispatch)("statik").addOverriddenBlock(P),(0,o.merge)({},e,M,L)):e))},94184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=n.apply(null,r);c&&e.push(c)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)o.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),o=new RegExp("("+t+")+","gi");function n(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),o=e.slice(t);return Array.prototype.concat.call([],n(r),n(o))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],o=1;o<t.length;o++)t=(e=n(t,o).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=a(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),i=0;i<c.length;i++){var s=c[i];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},o=Object.keys(e),n=Array.isArray(t),a=0;a<o.length;a++){var c=o[a],i=e[c];(n?-1!==t.indexOf(c):t(c,i,e))&&(r[c]=i)}return r}},17563:function(e,t,r){"use strict";const o=r(70610),n=r(44020),a=r(80500),c=r(92806),i=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function u(e,t){return t.decode?n(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function g(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,o)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=r):o[e]=r};case"bracket":return(e,r,o)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};case"colon-list-separator":return(e,r,o)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};case"comma":case"separator":return(t,r,o)=>{const n="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!n&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const c=n||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);o[t]=c};case"bracket-separator":return(t,r,o)=>{const n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n)return void(o[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==o[t]?o[t]=[].concat(o[t],a):o[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(const n of e.split("&")){if(""===n)continue;let[e,c]=a(t.decode?n.replace(/\+/g," "):n,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:u(c,t),r(u(e,t),c,o)}for(const e of Object.keys(o)){const r=o[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=m(r[e],t);else o[e]=m(r,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce(((e,t)=>{const r=o[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=g,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],o=function(e){switch(e.arrayFormat){case"index":return t=>(r,o)=>{const n=r.length;return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[l(t,e),"[",n,"]"].join("")]:[...r,[l(t,e),"[",l(n,e),"]=",l(o,e)].join("")]};case"bracket":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(o,e)].join("")];case"colon-list-separator":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[l(t,e),":list="].join("")]:[...r,[l(t,e),":list=",l(o,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(o,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?o:(n=null===n?"":n,0===o.length?[[l(r,e),t,l(n,e)].join("")]:[[o,l(n,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,l(t,e)]:[...r,[l(t,e),"=",l(o,e)].join("")]}}(t),n={};for(const t of Object.keys(e))r(t)||(n[t]=e[t]);const a=Object.keys(n);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const n=e[r];return void 0===n?"":null===n?l(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":n.reduce(o(r),[]).join("&"):l(r,t)+"="+l(n,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,o]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(g(e),t)},t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:u(o,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[i]:!0},r);const o=d(e.url).split("?")[0]||"",n=t.extract(e.url),a=t.parse(n,{sort:!1}),c=Object.assign(a,e.query);let s=t.stringify(c,r);s&&(s=`?${s}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[i]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${o}${s}${u}`},t.pick=(e,r,o)=>{o=Object.assign({parseFragmentIdentifier:!0,[i]:!1},o);const{url:n,query:a,fragmentIdentifier:s}=t.parseUrl(e,o);return t.stringifyUrl({url:n,query:c(a,r),fragmentIdentifier:s},o)},t.exclude=(e,r,o)=>{const n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,o)}},80500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,r,n,a){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[s])}))?r.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={2023:0,7045:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,c=r[0],i=r[1],s=r[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var u=s(o)}for(t&&t(r);l<c.length;l++)a=c[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunkroot=self.webpackChunkroot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=o.O(void 0,[7045],(function(){return o(89436)}));n=o.O(n)}();