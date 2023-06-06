!function(){"use strict";var e,t={86303:function(e,t,r){var o=window.wp.blocks,n=window.wp.element,a=window.wp.blockEditor,c=window.wp.primitives,l=(0,n.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(c.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),i=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,n.createElement)(c.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),s=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"})),u=window.wp.data,d=window.wp.i18n,p=window.wp.components;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)}function f(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=f(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var g=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=f(e))&&(o&&(o+=" "),o+=t);return o};function k(e){const{tag:t="div",className:r,children:o,...a}=e;return(0,n.createElement)(t,{className:g("skeleton",r),...a},[o,(0,n.createElement)("span",{key:"skeleton-activity",className:"skeleton__activity"},(0,n.createElement)("span",null))])}k.Inline=function(e){return(0,n.createElement)(k,m({tag:"span"},e))},k.Text=function(e){const{tag:t="div",children:r,...o}=e,a=[r].flat().filter((e=>"string"==typeof e)).map((e=>e.split(" ").map(((e,t)=>(0,n.createElement)(n.Fragment,{key:t},(0,n.createElement)(k.Inline,o,e)," ")))));return(0,n.createElement)(t,{},a.flat())},r(17563),window.wp.keycodes;var h=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),b=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),v=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),y=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),w=window.lodash;function C(e,t){if(!(0,w.isObjectLike)(e)||(0,w.isArrayLike)(e))throw new Error("The passed value is not a valid object");if(!(0,w.isFunction)(t))throw new Error("The passed value is not a valid function");return Object.fromEntries(Object.entries(e).filter(t))}window.wp.hooks;function E(){const{clientId:e}=(0,a.useBlockEditContext)();return e}function x(e){const{clientId:t}=(0,a.useBlockEditContext)(),r=null!=e?e:t;return(0,u.useSelect)((e=>{const{getBlocks:t}=e("core/block-editor");return t(r)}),[r])}function B(e){const{rootClientId:t}=e,r=x(t),a=E(),{selectBlock:c,insertBlock:m,removeBlock:f}=(0,u.useDispatch)("core/block-editor"),g=t===a,k=r.length>1,h=(0,n.useMemo)((()=>r.map(((e,t)=>({label:e.attributes.title||`Untitled #${t}`,value:e.clientId})))),[r]),b=async e=>{await c(e);const t=`block-${e}`;try{window.document.getElementById(t)?.focus()}catch(e){console.error("Something went wrong",e)}};return(0,n.createElement)(p.ToolbarGroup,null,(0,n.createElement)(p.ToolbarDropdownMenu,{icon:l,label:(0,d.__)("Select item","statik-blocks")},(()=>(0,n.createElement)(p.MenuGroup,null,(0,n.createElement)(p.MenuItemsChoice,{choices:h,value:a,onSelect:b})))),(0,n.createElement)(p.ToolbarButton,{icon:i,label:(0,d.__)("Add new item","statik-blocks"),onClick:async()=>{const e=(0,o.createBlock)("statik/accordion-item");await m(e,void 0,t)}}),(0,n.createElement)(p.ToolbarButton,{icon:s,label:(0,d.__)("Delete item","statik-blocks"),onClick:async()=>{await f(a)},isDisabled:g||!k}))}function O(){const e=E();return(0,n.createElement)(a.BlockControls,null,(0,n.createElement)(B,{rootClientId:e}))}function j(){const{attributes:e,setAttributes:t}=function(e){const{clientId:t}=(0,a.useBlockEditContext)(),r=t,{updateBlockAttributes:o}=(0,u.useDispatch)("core/block-editor");return{attributes:(0,u.useSelect)((e=>{const{getBlockAttributes:t}=e("core/block-editor");return t(r)}),[r]),setAttributes:e=>{o(r,e)}}}(),{showToggleIcon:r,openOnlyOne:o,headerBackgroundColor:c,headerTextColor:l,contentBackgroundColor:i,contentTextColor:s}=e,m=x(),{updateBlockAttributes:f}=(0,u.useDispatch)("core/block-editor"),g=(0,a.useSetting)("color.palette")||[],k=["p","span","h1","h2","h3","h4","h5","h6"].map((e=>({label:e,value:e}))),h=m[0]?m[0].attributes.headerSelector:"h3";return(0,n.createElement)(a.InspectorControls,null,(0,n.createElement)(p.PanelBody,{title:(0,d.__)("Accordion settings","statik-blocks")},(0,n.createElement)(p.ToggleControl,{label:(0,d.__)("Display toggle Icons","statik-blocks"),checked:r,onChange:()=>{t({showToggleIcon:!r})}}),(0,n.createElement)(p.ToggleControl,{label:(0,d.__)("Allow one item expanded at the time","statik-blocks"),checked:o,onChange:()=>{t({openOnlyOne:!o})}})),(0,n.createElement)(p.PanelBody,{title:(0,d.__)("Header Settings","statik-blocks"),initialOpen:!1},(0,n.createElement)(p.SelectControl,{label:(0,d.__)("Header selector","statik-blocks"),options:k,value:h,onChange:e=>{m.forEach((t=>{f(t.clientId,{headerSelector:e})}))}}),(0,n.createElement)(a.__experimentalColorGradientControl,{label:(0,d.__)("Background color","statik-blocks"),colorValue:c,colors:g,gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0,onColorChange:e=>{t({headerBackgroundColor:e||""})}}),(0,n.createElement)(a.__experimentalColorGradientControl,{label:(0,d.__)("Text color","statik-blocks"),colorValue:l,colors:g,gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0,onColorChange:e=>{t({headerTextColor:e||""})}})),(0,n.createElement)(p.PanelBody,{title:(0,d.__)("Content Settings","statik-blocks"),initialOpen:!1},(0,n.createElement)(a.__experimentalColorGradientControl,{label:(0,d.__)("Background color","statik-blocks"),colorValue:i,colors:g,gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0,onColorChange:e=>{t({contentBackgroundColor:e||""})}}),(0,n.createElement)(a.__experimentalColorGradientControl,{label:(0,d.__)("Text color","statik-blocks"),colorValue:s,colors:g,gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0,onColorChange:e=>{t({contentTextColor:e||""})}})))}(0,n.createElement)(p.Icon,{icon:h}),(0,n.createElement)(p.Icon,{icon:b}),(0,n.createElement)(p.Icon,{icon:v}),(0,n.createElement)(p.Icon,{icon:y}),(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M15.742 7.009a2.823 2.823 0 0 0-1.351-1.039 4.492 4.492 0 0 0-1.753-.345 4.692 4.692 0 0 0-1.076.123 3.075 3.075 0 0 0-.927.396 2.088 2.088 0 0 0-.65.716c-.166.28-.25.618-.25 1.013 0 .593.208 1.046.626 1.36.417.312.934.584 1.551.815a29.17 29.17 0 0 0 2.028.667c.734.214 1.41.51 2.028.89a4.984 4.984 0 0 1 1.551 1.507c.418.626.626 1.458.626 2.496 0 .938-.175 1.762-.526 2.47a4.998 4.998 0 0 1-1.426 1.73 6.001 6.001 0 0 1-2.053 1.038c-.785.23-1.61.346-2.478.346a9.407 9.407 0 0 1-3.179-.544c-1.018-.362-1.894-.972-2.628-1.828l2.378-2.274a4.085 4.085 0 0 0 1.502 1.36 4.466 4.466 0 0 0 2.002.468c.367 0 .735-.049 1.101-.147a3.428 3.428 0 0 0 1.002-.445 2.38 2.38 0 0 0 .725-.741 2.061 2.061 0 0 0 .276-1.063c0-.643-.208-1.137-.626-1.483-.417-.346-.934-.634-1.552-.864a22.188 22.188 0 0 0-2.028-.693 8.923 8.923 0 0 1-2.026-.864 5.092 5.092 0 0 1-1.553-1.482c-.417-.627-.625-1.458-.625-2.496 0-.906.184-1.689.55-2.347A5.17 5.17 0 0 1 8.46 4.118a6.481 6.481 0 0 1 2.102-.99 9.079 9.079 0 0 1 2.403-.32c.934 0 1.835.14 2.703.42.884.28 1.677.741 2.377 1.384l-2.302 2.397z"}));const I=["statik/accordion-item"],S=[["statik/accordion-item"],["statik/accordion-item"]];var _=(0,n.createElement)("svg",{version:"1.1",id:"Layer_1",focusable:"false",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},(0,n.createElement)("path",{d:"M22.2,3.8H1.9c-0.4,0-0.7,0.3-0.7,0.7v14.4v0.4c0,0.4,0.3,0.7,0.7,0.7h20.3c0.4,0,0.7-0.3,0.7-0.7V4.9V4.5 C22.9,4.1,22.6,3.8,22.2,3.8z M21.4,5.2v6.7H2.7V5.2H21.4z M21.4,13.3v1.9H2.7v-1.9H21.4z M2.7,18.6v-1.9h18.7v1.9H2.7z"})),T=[{attributes:{showToggleIcon:{type:"boolean",default:!0},openOnlyOne:{type:"boolean",default:!1},headerBackgroundColor:{type:"string",default:"#f5f5f5"},headerTextColor:{type:"string",default:"#444444"},contentBackgroundColor:{type:"string",default:"#fafafa"},contentTextColor:{type:"string",default:"#444444"}},save(){return(0,n.createElement)(a.InnerBlocks.Content,null)}}],V=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/accordion","version":"4.13.0","title":"Accordion","category":"layout","description":"Display a vertically stacked list of items that can be expanded or collapsed to reveal content associated with a specific item.","keywords":[],"textdomain":"statik-blocks","attributes":{"showToggleIcon":{"type":"boolean","default":true},"openOnlyOne":{"type":"boolean","default":false},"headerBackgroundColor":{"type":"string","default":"#f5f5f5"},"headerTextColor":{"type":"string","default":"#444444"},"contentBackgroundColor":{"type":"string","default":"#fafafa"},"contentTextColor":{"type":"string","default":"#444444"}},"example":{"innerBlocks":[{"name":"statik/accordion-item","attributes":{"title":"First element of accordion"}},{"name":"statik/accordion-item","attributes":{"title":"Second element of accordion"}}]},"supports":{"align":["wide","full"],"html":false},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","viewScript":"file:./build/view.js"}');const F={icon:_,edit:function(e){const{attributes:t}=e,{blockId:r,showToggleIcon:o,headerBackgroundColor:c,headerTextColor:l,contentBackgroundColor:i,contentTextColor:s}=t,u=(0,a.useBlockProps)({className:g(`wp-block-${r}`,{"wp-block-statik-accordion--no-toggle-icons":!Boolean(o)}),style:C({"--statik-accordion--headerBackgroundColor":c,"--statik-accordion--headerTextColor":l,"--statik-accordion--contentBackgroundColor":i,"--statik-accordion--contentTextColor":s},(e=>{let[,t]=e;return""!==t}))}),d=(0,a.useInnerBlocksProps)({className:"wp-block-statik-accordion__inner-blocks"},{allowedBlocks:I,template:S,templateInsertUpdatesSelection:!0});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(O,null),(0,n.createElement)(j,null),(0,n.createElement)("div",u,(0,n.createElement)("div",d)))},save:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.createElement)(a.InnerBlocks.Content,null);return function(r){return function(){if("undefined"!=typeof statikBlocks)return Boolean(statikBlocks?.config?.saveJsExecution);throw new Error("`statikBlocks` variable does not exist")}()?e(r):t}}((function(e){const{attributes:t}=e,{showToggleIcon:r,headerBackgroundColor:o,headerTextColor:c,contentBackgroundColor:l,contentTextColor:i}=t,s=a.useBlockProps.save({className:g({"wp-block-statik-accordion--no-toggle-icons":!Boolean(r)}),style:C({"--statik-accordion--headerBackgroundColor":o,"--statik-accordion--headerTextColor":c,"--statik-accordion--contentBackgroundColor":l,"--statik-accordion--contentTextColor":i},(e=>{let[,t]=e;return""!==t}))}),u=a.useInnerBlocksProps.save({className:"wp-block-statik-accordion__inner-blocks"});return(0,n.createElement)("div",s,(0,n.createElement)("div",u))})),deprecated:T};(0,o.registerBlockType)(V,F)},44020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),o=new RegExp("("+t+")+","gi");function n(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),o=e.slice(t);return Array.prototype.concat.call([],n(r),n(o))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],o=1;o<t.length;o++)t=(e=n(t,o).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=a(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),l=0;l<c.length;l++){var i=c[l];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},92806:function(e){e.exports=function(e,t){for(var r={},o=Object.keys(e),n=Array.isArray(t),a=0;a<o.length;a++){var c=o[a],l=e[c];(n?-1!==t.indexOf(c):t(c,l,e))&&(r[c]=l)}return r}},17563:function(e,t,r){const o=r(70610),n=r(44020),a=r(80500),c=r(92806),l=Symbol("encodeFragmentIdentifier");function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function u(e,t){return t.decode?n(e):e}function d(e){return Array.isArray(e)?e.sort():"object"==typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,o)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=r):o[e]=r};case"bracket":return(e,r,o)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};case"colon-list-separator":return(e,r,o)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};case"comma":case"separator":return(t,r,o)=>{const n="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!n&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const c=n||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);o[t]=c};case"bracket-separator":return(t,r,o)=>{const n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n)return void(o[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==o[t]?o[t]=[].concat(o[t],a):o[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(const n of e.split("&")){if(""===n)continue;let[e,c]=a(t.decode?n.replace(/\+/g," "):n,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:u(c,t),r(u(e,t),c,o)}for(const e of Object.keys(o)){const r=o[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=f(r[e],t);else o[e]=f(r,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce(((e,t)=>{const r=o[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=d(r):e[t]=r,e}),Object.create(null))}t.extract=m,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],o=function(e){switch(e.arrayFormat){case"index":return t=>(r,o)=>{const n=r.length;return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[s(t,e),"[",n,"]"].join("")]:[...r,[s(t,e),"[",s(n,e),"]=",s(o,e)].join("")]};case"bracket":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(o,e)].join("")];case"colon-list-separator":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[s(t,e),":list="].join("")]:[...r,[s(t,e),":list=",s(o,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(o,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?o:(n=null===n?"":n,0===o.length?[[s(r,e),t,s(n,e)].join("")]:[[o,s(n,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,s(t,e)]:[...r,[s(t,e),"=",s(o,e)].join("")]}}(t),n={};for(const t of Object.keys(e))r(t)||(n[t]=e[t]);const a=Object.keys(n);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const n=e[r];return void 0===n?"":null===n?s(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?s(r,t)+"[]":n.reduce(o(r),[]).join("&"):s(r,t)+"="+s(n,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,o]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(m(e),t)},t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:u(o,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);const o=p(e.url).split("?")[0]||"",n=t.extract(e.url),a=t.parse(n,{sort:!1}),c=Object.assign(a,e.query);let i=t.stringify(c,r);i&&(i=`?${i}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[l]?s(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${o}${i}${u}`},t.pick=(e,r,o)=>{o=Object.assign({parseFragmentIdentifier:!0,[l]:!1},o);const{url:n,query:a,fragmentIdentifier:i}=t.parseUrl(e,o);return t.stringifyUrl({url:n,query:c(a,r),fragmentIdentifier:i},o)},t.exclude=(e,r,o)=>{const n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,o)}},80500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,r,n,a){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&a||c>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[i])}))?r.splice(i--,1):(l=!1,a<c&&(c=a));if(l){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={6493:0,8021:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,c=r[0],l=r[1],i=r[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var u=i(o)}for(t&&t(r);s<c.length;s++)a=c[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunkroot=self.webpackChunkroot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=o.O(void 0,[8021],(function(){return o(86303)}));n=o.O(n)}();