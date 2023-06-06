!function(){"use strict";var e,t={33580:function(e,t,r){var n=window.wp.blocks,o=window.wp.element,a=window.wp.blockEditor,l=window.wp.components,c=window.wp.i18n;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=i(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var u=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n};function d(e){const{tag:t="div",className:r,children:n,...a}=e;return(0,o.createElement)(t,{className:u("skeleton",r),...a},[n,(0,o.createElement)("span",{key:"skeleton-activity",className:"skeleton__activity"},(0,o.createElement)("span",null))])}d.Inline=function(e){return(0,o.createElement)(d,s({tag:"span"},e))},d.Text=function(e){const{tag:t="div",children:r,...n}=e,a=[r].flat().filter((e=>"string"==typeof e)).map((e=>e.split(" ").map(((e,t)=>(0,o.createElement)(o.Fragment,{key:t},(0,o.createElement)(d.Inline,n,e)," ")))));return(0,o.createElement)(t,{},a.flat())},r(17563),window.wp.keycodes;var b=window.wp.primitives,p=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),m=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),k=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),f=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),v=window.lodash;function g(e,t){if(!(0,v.isObjectLike)(e)||(0,v.isArrayLike)(e))throw new Error("The passed value is not a valid object");if(!(0,v.isFunction)(t))throw new Error("The passed value is not a valid function");return Object.fromEntries(Object.entries(e).filter(t))}var h=window.wp.data;window.wp.hooks;function C(e){const{clientId:t}=(0,a.useBlockEditContext)(),r=null!=e?e:t,{updateBlockAttributes:n}=(0,h.useDispatch)("core/block-editor");return{attributes:(0,h.useSelect)((e=>{const{getBlockAttributes:t}=e("core/block-editor");return t(r)}),[r]),setAttributes:e=>{n(r,e)}}}function y(){const{clientId:e}=(0,a.useBlockEditContext)();return e}function w(e){const{clientId:t}=(0,a.useBlockEditContext)(),r=null!=e?e:t;return(0,h.useSelect)((e=>{const{getBlocks:t}=e("core/block-editor");return t(r)}),[r])}function E(){const{setAttributes:e,attributes:t}=C(),{descriptionEnabled:r,preSelectedTab:n,tabsAlignment:s,textColor:i,accentColor:u,activeTextColor:d,activeAccentColor:b,contentTextColor:p,contentBackgroundColor:m}=t,k=w(),f=(0,a.useSetting)("color.palette")||[],v=(0,o.useMemo)((()=>k.map(((e,t)=>({value:t,label:e.attributes.title})))),[k]),g=[{value:"left",label:(0,c.__)("Left","statik-blocks")},{value:"center",label:(0,c.__)("Center","statik-blocks")},{value:"right",label:(0,c.__)("Right","statik-blocks")}];return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,c.__)("Tabs Selector","statik-blocks")},(0,o.createElement)(l.ToggleControl,{label:"Tab Descriptions",checked:r,onChange:t=>{e({descriptionEnabled:t})}}),(0,o.createElement)(l.SelectControl,{label:(0,c.__)("Pre-selected Tab","statik-blocks"),value:n,onChange:t=>{e({preSelectedTab:Number(t)})},options:v}),(0,o.createElement)(l.SelectControl,{label:(0,c.__)("Selector alignment","statik-blocks"),value:s,onChange:t=>{e({tabsAlignment:t})},options:g})),(0,o.createElement)(l.PanelBody,{title:(0,c.__)("Tabs Selector Settings","statik-blocks")},(0,o.createElement)(a.__experimentalColorGradientControl,{label:(0,c.__)("Accent color","statik-blocks"),colors:f,colorValue:u,onColorChange:t=>{e({accentColor:t||""})},gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0}),(0,o.createElement)(a.__experimentalColorGradientControl,{label:(0,c.__)("Active accent color","statik-blocks"),colors:f,colorValue:b,onColorChange:t=>{e({activeAccentColor:t||""})},gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0}),(0,o.createElement)(a.__experimentalColorGradientControl,{label:(0,c.__)("Text color","statik-blocks"),colors:f,colorValue:i,onColorChange:t=>{e({textColor:t||""})},gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0}),(0,o.createElement)(a.__experimentalColorGradientControl,{label:(0,c.__)("Active text color","statik-blocks"),colors:f,colorValue:d,onColorChange:t=>{e({activeTextColor:t||""})},gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0})),(0,o.createElement)(l.PanelBody,{title:(0,c.__)("Content Settings","statik-blocks")},(0,o.createElement)(a.__experimentalColorGradientControl,{label:(0,c.__)("Background color","statik-blocks"),colors:f,colorValue:m,onColorChange:t=>{e({contentBackgroundColor:t||""})},gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0}),(0,o.createElement)(a.__experimentalColorGradientControl,{label:(0,c.__)("Text color","statik-blocks"),colors:f,colorValue:p,onColorChange:t=>{e({contentTextColor:t||""})},gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0}))))}(0,o.createElement)(l.Icon,{icon:p}),(0,o.createElement)(l.Icon,{icon:m}),(0,o.createElement)(l.Icon,{icon:k}),(0,o.createElement)(l.Icon,{icon:f}),(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M15.742 7.009a2.823 2.823 0 0 0-1.351-1.039 4.492 4.492 0 0 0-1.753-.345 4.692 4.692 0 0 0-1.076.123 3.075 3.075 0 0 0-.927.396 2.088 2.088 0 0 0-.65.716c-.166.28-.25.618-.25 1.013 0 .593.208 1.046.626 1.36.417.312.934.584 1.551.815a29.17 29.17 0 0 0 2.028.667c.734.214 1.41.51 2.028.89a4.984 4.984 0 0 1 1.551 1.507c.418.626.626 1.458.626 2.496 0 .938-.175 1.762-.526 2.47a4.998 4.998 0 0 1-1.426 1.73 6.001 6.001 0 0 1-2.053 1.038c-.785.23-1.61.346-2.478.346a9.407 9.407 0 0 1-3.179-.544c-1.018-.362-1.894-.972-2.628-1.828l2.378-2.274a4.085 4.085 0 0 0 1.502 1.36 4.466 4.466 0 0 0 2.002.468c.367 0 .735-.049 1.101-.147a3.428 3.428 0 0 0 1.002-.445 2.38 2.38 0 0 0 .725-.741 2.061 2.061 0 0 0 .276-1.063c0-.643-.208-1.137-.626-1.483-.417-.346-.934-.634-1.552-.864a22.188 22.188 0 0 0-2.028-.693 8.923 8.923 0 0 1-2.026-.864 5.092 5.092 0 0 1-1.553-1.482c-.417-.627-.625-1.458-.625-2.496 0-.906.184-1.689.55-2.347A5.17 5.17 0 0 1 8.46 4.118a6.481 6.481 0 0 1 2.102-.99 9.079 9.079 0 0 1 2.403-.32c.934 0 1.835.14 2.703.42.884.28 1.677.741 2.377 1.384l-2.302 2.397z"}));var x=(0,o.createElement)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(b.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),_=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(b.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),B=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"}));function T(){const e=y(),t=w(),{selectBlock:r,insertBlock:a}=(0,h.useDispatch)("core/block-editor"),{getBlockIndex:s}=(0,h.useSelect)("core/block-editor"),{attributes:i,setAttributes:u}=C(),{activeTab:d}=i,b=(0,o.useMemo)((()=>t.map(((e,t)=>({label:e.attributes.title||`Tab #${t}`,value:e.clientId})))),[t]),p=async t=>{const n=s(t,e);u({activeTab:n}),await r(t);const o=`block-${t}`;window.document.getElementById(o)?.focus()};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.ToolbarDropdownMenu,{icon:x,label:(0,c.__)("Select Tab","statik-blocks")},(()=>(0,o.createElement)(l.MenuGroup,null,(0,o.createElement)(l.MenuItemsChoice,{choices:b,value:null,onSelect:p})))),(0,o.createElement)(l.ToolbarButton,{icon:_,label:(0,c.__)("Add new Tab","statik-blocks"),onClick:async()=>{const t=(0,n.createBlock)("statik/tab"),r=d+1;await a(t,r,e,!0),await p(t.clientId)}}),(0,o.createElement)(l.ToolbarButton,{icon:B,label:(0,c.__)("Delete Tab","statik-blocks"),isDisabled:!0}))}function S(){return(0,o.createElement)(a.BlockControls,null,(0,o.createElement)(l.ToolbarGroup,null,(0,o.createElement)(T,null)))}const j=[["statik/tab"]],F=["statik/tab"],I=()=>{const e=y(),{removeBlock:t}=(0,h.useDispatch)("core/block-editor"),r=function(e){const{clientId:t}=(0,a.useBlockEditContext)(),r=t;return(0,h.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(r).length>0}),[r])}();return r?null:(0,o.createElement)(a.Warning,{actions:[(0,o.createElement)(l.Button,{key:"remove-block",onClick:()=>{t(e)},variant:"primary"},(0,c.__)("Remove block","statik-blocks"))]},(0,c.__)('"Tabs" block requires at least one "Tab" inner block.',"statik-blocks"))};var O=(0,o.createElement)("svg",{version:"1.1",id:"Layer_1",focusable:"false",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},(0,o.createElement)("g",null,(0,o.createElement)("path",{d:"M18,6.7h-1.1V6.1c0-1.1-0.9-2-2-2c0,0,0,0,0,0h-3.1c-0.5,0-1,0.2-1.4,0.5C10.1,4.2,9.6,4,9.1,4H6.1C5,4,4,4.9,4,6v2.7v7.8 v1.5c0,1.1,0.9,2,2,2h11.9c1.1,0,2-0.9,2-2V8.7C20,7.6,19.1,6.7,18,6.7z M11.8,5.4h3c0.4,0,0.7,0.3,0.7,0.7v0.6h-4.4V6.1 C11.1,5.7,11.4,5.4,11.8,5.4z M18.6,17.9c-0.2,0.5-0.5,0.7-0.7,0.7H6.1c-0.4,0-0.7-0.3-0.7-0.7V8V6.8V6.1c0-0.4,0.3-0.7,0.7-0.7h3 c0.4,0,0.7,0.3,0.7,0.7v0.6V8h1.3h4.4h1.3h1.1c0.4,0,0.7,0.3,0.7,0.7V17.9z"}),(0,o.createElement)("path",{d:"M15.2,10.6c-0.2-0.2-0.5-0.1-0.6,0.1L12,13.5c0,0-1.7-1.3-2.1-1.6c-0.2-0.2-0.4-0.2-0.6,0L6.7,14v1.6l2.9-2.4l2,1.5 c0.2,0.2,0.5,0.2,0.8,0l2.5-2.7l2.6,2.7V13L15.2,10.6C15.2,10.6,15.2,10.6,15.2,10.6z"})));const V=e=>{const{attributes:t}=e,{tabs:r=[]}=t;return(0,o.createElement)("nav",{className:"wp-block-statik-tabs__nav"},(0,o.createElement)("ul",{className:"wp-block-statik-tabs__nav-list",role:"tablist"},r.map((e=>(0,o.createElement)(A,{key:e.blockId,tab:e,attributes:t})))))},A=e=>{const{tab:t,attributes:r}=e,{tabs:n,preSelectedTab:a,descriptionEnabled:l}=r,c=n.findIndex((e=>e.blockId===t.blockId)),s=Number(a)===c,i=`wp-block-${t.blockId}-tab`,d=`wp-block-${t.blockId}-tabpanel`;return(0,o.createElement)("li",{key:t.blockId,className:u("wp-block-statik-tabs__nav-list-item",{"wp-block-statik-tabs__nav-list-item--selected":s,[t.tabClassName]:Boolean(t.tabClassName)})},(0,o.createElement)("button",{className:"wp-block-statik-tabs__nav-item",type:"button",role:"tab","aria-selected":s,"aria-controls":d,tabIndex:s?0:-1,id:i},(0,o.createElement)("p",{className:"wp-block-statik-tabs__nav-item-title"},t.title),l&&(0,o.createElement)("p",{className:"wp-block-statik-tabs__nav-item-desc"},t.description)))};var N=[{attributes:{activeTab:{type:"number",default:0},descriptionEnabled:{type:"boolean",default:!1},preSelectedTab:{type:"number",default:0},tabsAlignment:{enum:["left","center","right"],default:"left"},accentColor:{type:"string",default:"#CCE3EB"},textColor:{type:"string",default:"#3858E9"},activeAccentColor:{type:"string",default:"#1D35B4"},activeTextColor:{type:"string",default:"#FFFFFF"},contentBackgroundColor:{type:"string"},contentTextColor:{type:"string"}},save(){return(0,o.createElement)(a.InnerBlocks.Content,null)}}],z=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/tabs","version":"4.13.0","title":"Tabs","category":"layout","description":"Organise content in a tabbed layout","keywords":[],"textdomain":"statik-blocks","attributes":{"activeTab":{"type":"number","default":0},"descriptionEnabled":{"type":"boolean","default":false},"preSelectedTab":{"type":"number","default":0},"tabsAlignment":{"enum":["left","center","right"],"default":"left"},"accentColor":{"type":"string","default":"#CCE3EB"},"textColor":{"type":"string","default":"#3858E9"},"activeAccentColor":{"type":"string","default":"#1D35B4"},"activeTextColor":{"type":"string","default":"#FFFFFF"},"contentBackgroundColor":{"type":"string"},"contentTextColor":{"type":"string"},"tabs":{"type":"array"}},"example":{"attributes":{"descriptionEnabled":true,"contentBackgroundColor":"#FFFFFF","contentTextColor":"#39414D"},"innerBlocks":[{"name":"statik/tab","attributes":{"title":"Tab #1","description":"Tab #1 description"},"innerBlocks":[{"name":"core/group","attributes":{"style":{"spacing":{"padding":{"top":20,"right":20,"bottom":20,"left":20}}}},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet"}}]}]},{"name":"statik/tab","attributes":{"title":"Tab #2","description":"Tab #2 description"}}]},"supports":{"align":["wide","full"],"html":false},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","viewScript":"file:./build/view.js"}');const M={icon:O,edit:function(e){const{attributes:t}=e,{blockId:r,accentColor:n,activeAccentColor:l,textColor:c,activeTextColor:s,contentBackgroundColor:i,contentTextColor:d,tabsAlignment:b}=t;(()=>{const{attributes:e,setAttributes:t}=C(),{activeTab:r,preSelectedTab:n}=e,l=w(),c=function(e){const{clientId:t}=(0,a.useBlockEditContext)(),r=t;return(0,h.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(r)}),[r])}(),s=c.length>0,[i,u]=(0,o.useState)((()=>c[r])),[d,b]=(0,o.useState)((()=>c[n]));(0,o.useEffect)((()=>{s&&u(c[r])}),[r]),(0,o.useEffect)((()=>{s&&b(c[n])}),[n]),(0,o.useEffect)((()=>{s&&(c.includes(i)?t({activeTab:c.indexOf(i)}):t({activeTab:Math.max(0,r-1)})),s&&(c.includes(d)?t({preSelectedTab:c.indexOf(d)}):t({preSelectedTab:Math.max(0,n-1)}))}),[c]),(0,o.useEffect)((()=>{const e=l.map((e=>{const{blockId:t,title:r,description:n,tabClassName:o}=e.attributes;return{blockId:t,title:r,description:n,tabClassName:o}}));t({tabs:e})}),[l])})();const p=(0,a.useBlockProps)({className:u(`wp-block-${r}`,{[`wp-block-statik-tabs--nav-align-${b}`]:Boolean(b)}),style:g({"--statik-tabs--accentColor":n,"--statik-tabs--activeAccentColor":l,"--statik-tabs--textColor":c,"--statik-tabs--activeTextColor":s,"--statik-tabs--contentBackgroundColor":i,"--statik-tabs--contentTextColor":d},(e=>{let[,t]=e;return""!==t}))}),m=(0,a.useInnerBlocksProps)({className:"wp-block-statik-tabs__inner-blocks"},{allowedBlocks:F,template:j,templateInsertUpdatesSelection:!0,renderAppender:!1,orientation:"horizontal"});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(S,null),(0,o.createElement)(E,null),(0,o.createElement)("div",p,(0,o.createElement)("div",m),(0,o.createElement)(I,null)))},save:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.createElement)(a.InnerBlocks.Content,null);return function(r){return function(){if("undefined"!=typeof statikBlocks)return Boolean(statikBlocks?.config?.saveJsExecution);throw new Error("`statikBlocks` variable does not exist")}()?e(r):t}}((function(e){const{attributes:t}=e,{accentColor:r,activeAccentColor:n,textColor:l,activeTextColor:c,contentBackgroundColor:s,contentTextColor:i,tabsAlignment:d}=t,b=a.useBlockProps.save({className:u({[`wp-block-statik-tabs--nav-align-${d}`]:Boolean(d)}),style:g({"--statik-tabs--accentColor":r,"--statik-tabs--activeAccentColor":n,"--statik-tabs--textColor":l,"--statik-tabs--activeTextColor":c,"--statik-tabs--contentBackgroundColor":s,"--statik-tabs--contentTextColor":i},(e=>{let[,t]=e;return""!==t}))}),p=a.useInnerBlocksProps.save({className:"wp-block-statik-tabs__inner-blocks"});return(0,o.createElement)("div",b,(0,o.createElement)(V,{attributes:t}),(0,o.createElement)("div",p))})),deprecated:N};(0,n.registerBlockType)(z,M)},44020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var l=Object.keys(t),c=0;c<l.length;c++){var s=l[c];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},92806:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var l=n[a],c=e[l];(o?-1!==t.indexOf(l):t(l,c,e))&&(r[l]=c)}return r}},17563:function(e,t,r){const n=r(70610),o=r(44020),a=r(80500),l=r(92806),c=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function d(e){return Array.isArray(e)?e.sort():"object"==typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function b(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=b(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function k(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const l=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=l};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,l]=a(t.decode?o.replace(/\+/g," "):o,"=");l=void 0===l?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?l:u(l,t),r(u(e,t),l,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=m(r[e],t);else n[e]=m(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=d(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=k,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[",o,"]"].join("")]:[...r,[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[]"].join("")]:[...r,[i(t,e),"[]=",i(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),":list="].join("")]:[...r,[i(t,e),":list=",i(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[i(r,e),t,i(o,e)].join("")]:[[n,i(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,i(t,e)]:[...r,[i(t,e),"=",i(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?i(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?i(r,t)+"[]":o.reduce(n(r),[]).join("&"):i(r,t)+"="+i(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:k(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);const n=b(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),l=Object.assign(a,e.query);let s=t.stringify(l,r);s&&(s=`?${s}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[c]?i(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${s}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:l(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},80500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<l&&(l=a));if(c){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={7995:0,9987:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],c=r[1],s=r[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);i<l.length;i++)a=l[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkroot=self.webpackChunkroot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[9987],(function(){return n(33580)}));o=n.O(o)}();