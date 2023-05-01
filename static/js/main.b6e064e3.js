(()=>{"use strict";var e={2646:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Re});var o=r(9439),n=r(9526),a=r(3535),i=r(442),l=r(7394),s=r(6770),c=r(5899),d=r(1609),u=r(9424),f=r(4942),h=r(6337),m=r(7132),g=r(4333);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,f.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const b=function(e){return g.default.create({container:{backgroundColor:e.colors.background,width:"100%",height:"100%"},content:{width:"85%",maxWidth:"85%",alignSelf:"center"},spaceSmall:{margin:5},spaceMedium:{margin:15},spaceBig:{margin:25},cardsContainer:{flexDirection:"web"===m.default.OS?"row":"column",width:"100%",gap:6},touchableCard:y({},"web"===m.default.OS||h.default.get("screen").width<480?{flex:1}:{}),card:{backgroundColor:e.colors.outlineVariant,borderRadius:5,padding:20,flex:"web"===m.default.OS||h.default.get("screen").width<480?1:void 0},wordCardTitle:{flexDirection:"row"},wordCardButton:{color:e.colors.primary,marginLeft:"auto",fontWeight:"700"},wordCardContent:{flexDirection:"row",flexWrap:"wrap",gap:15},divider:{backgroundColor:e.colors.outline}})};var x=r(7077),j=r(1683),v=r(1133),w=r(9899),S=r(5648);const C=function(e){return g.default.create({safeArea:{borderTopWidth:S.default.currentHeight,borderTopColor:e.colors.primary,backgroundColor:e.colors.background,borderBottomWidth:1,borderBottomColor:e.colors.outline,elevation:3},alignContainer:{width:"85%",alignSelf:"center",alignItems:"center",flexDirection:"row"},input:{maxWidth:"50%",width:250,fontSize:12,marginLeft:10,marginBottom:10},inputContent:{paddingRight:5},icon:{backgroundColor:e.colors.background,width:32,height:32},menu:{position:"absolute",right:0},divider:{width:1,height:"50%",alignSelf:"center",backgroundColor:e.colors.outline}})};var O=r(1792),W=r(7065),R=r(5833);const k=function(e){return g.default.create({modal:{backgroundColor:e.colors.background,alignSelf:"center",borderRadius:20,maxWidth:"70%",width:250,padding:20},buttonContent:{borderColor:e.colors.outline,alignSelf:"center",borderWidth:1,width:"90%",margin:5},buttonLabel:{fontWeight:"700"},buttonSelected:{},buttonIcon:{}})};var P=r(7557),T=[{icon:r(692),label:"Portugu\xeas",value:"pt"},{icon:r(6593),label:"English",value:"en"}];const B=function(e){var t=e.dismiss,r=e.visible,o=(0,d.useTheme)(),n=k(o),a=(0,O.useTranslation)().i18n;return(0,P.jsx)(R.default,{children:(0,P.jsx)(W.default,{contentContainerStyle:n.modal,dismissable:!0,onDismiss:t,visible:r,children:T.map((function(e,t){return(0,P.jsx)(l.default,{buttonColor:a.language===e.value?o.colors.primary:"transparent",textColor:a.language===e.value?o.colors.background:o.colors.primary,style:n.buttonContent,labelStyle:n.buttonLabel,icon:function(t){var r=t.size;return(0,P.jsx)(w.default,{source:e.icon,style:{width:r,height:r,borderRadius:5}})},onPress:function(){return t=e.value,void a.changeLanguage(t);var t},children:e.label},t)}))})})};var L=r(6459),F=(0,n.createContext)({search:"",setSearch:function(e){}}),D=function(e){var t=e.children,r=(0,n.useState)(""),a=(0,o.default)(r,2),i=a[0],l=a[1];return(0,P.jsx)(F.Provider,{value:{search:i,setSearch:l},children:t})};const E=function(){var e=(0,n.useContext)(F);return Object.assign({},((0,L.default)(e),e))};var N=r(2727),M=r(7270);const A=function(){var e=(0,d.useTheme)(),t=C(e),r=(0,N.useNavigation)().navigate,a=E(),i=a.search,l=a.setSearch,c=(0,O.useTranslation)().t,u=(0,n.useState)(!1),f=(0,o.default)(u,2),h=f[0],m=f[1],g=function(){m(!h)},p=function(){i&&r("Search",{word:i})};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(B,{visible:h,dismiss:g}),(0,P.jsx)(v.default,{style:t.safeArea,children:(0,P.jsxs)(v.default,{style:t.alignContainer,children:[(0,P.jsx)(x.default,{icon:function(e){var t=e.size;return(0,P.jsx)(w.default,{source:M,style:{width:t,height:t,borderRadius:5}})},iconColor:e.colors.primary,onPress:function(){return r("Home")}}),(0,P.jsx)(s.default,{style:t.divider}),(0,P.jsx)(j.default,{mode:"outlined",theme:{roundness:50},style:t.input,contentStyle:t.inputContent,placeholder:c("Search")||"",textColor:e.colors.primary,placeholderTextColor:e.colors.outline,onKeyPress:function(e){return"Enter"===e.nativeEvent.key&&p()},numberOfLines:1,onChangeText:l,value:i,right:(0,P.jsx)(j.default.Icon,{icon:"magnify",containerColor:e.colors.primary,iconColor:e.colors.background,size:12,onPress:p})}),(0,P.jsx)(x.default,{icon:"web",style:t.menu,iconColor:e.colors.primary,onPress:g})]})})]})};var z=r(5671),H=r(3144),I=function(){function e(t){if((0,z.default)(this,e),t<0||t>1)throw new Error("The loading progress number is out of range");this.num=t}return(0,H.default)(e,[{key:"result",value:function(e){return this.num*e}}]),e}();const V=function(e){var t=e.theme,r=e.progress;return g.default.create({container:{justifyContent:"center",alignItems:"center",backgroundColor:t.colors.primary,width:"100%",height:"100%"},logoUnderlay:{width:111,height:111},logoOverlay:{width:111,height:r&&new I(r).result(111),zIndex:1,position:"absolute"}})};const U=function(e){var t=e.children,o=e.progress,n=e.isLoading,a=(0,d.useTheme)(),i=V({theme:a,progress:o});return n?(0,P.jsxs)(v.default,{style:i.container,children:[(0,P.jsx)(w.default,{source:r(8906),style:i.logoOverlay}),(0,P.jsx)(w.default,{source:r(6216),style:i.logoUnderlay})]}):(0,P.jsx)(P.Fragment,{children:t})};const _=function(e){return g.default.create({row:{borderRadius:5,overflow:"hidden",flexDirection:"row"},button:{borderRightWidth:1,borderRightColor:e.colors.background,borderStyle:"dashed",backgroundColor:e.colors.primary,borderRadius:0,alignItems:"flex-start",justifyContent:"center"},image:{flex:19,backgroundColor:e.colors.primary,justifyContent:"space-between",flexDirection:"row",alignItems:"center",paddingStart:20,padding:10},label:{flex:1,color:e.colors.background,fontSize:13,lineHeight:20,fontWeight:"700"}})};var q=r(9693),Q=r(743);const $={Search:"Search a word",Advertise:"Advertise your product on Synonyms","Most Seen Words":"Most Seen Words","See More":"See More","Most Recent Words":"Most Recent Words","Donate URL":"https://buymeacoffee.com/freelascode","Source URL":"https://github.com/freelascode",Donate:"Donate",Report:"Report",Source:"Source","Search Results":"Showing /quantity/ results for '/word/'",Filter:{Button:"Filter","Words That Start With":"Words that start with"},"Advertise Screen":{Head:"Your brand is important",Body:"And for just $3.01 per month you can place your advertisement on our website and application.",Footer:"Subject to restrictions and adjustments","Primary Button":"Hire","Secondary Button":"Contact Us"},"Word Viewer":{"Empty Word Class":"Word","Empty Information":"No additional information was found for this word","Empty Quote":"No sample quote was found for this word","Empty Synonyms":"No synonyms were found for this word","Synonyms Label":"Synonyms for /word/","Synonyms Button":"Share","Empty Rhymes":"No rhymes were found for this word","Rhymes Label":"Rhymes for /word/","Rhymes Button":"Share"}};const G={Search:"Buscar uma palavra",Advertise:"Anuncie o seu produto em Synonyms","Most Seen Words":"Palavras mais Vistas","See More":"Ver Mais","Most Recent Words":"Palavras mais Recentes","Donate URL":"https://apoia.se/freelascode","Source URL":"https://github.com/freelascode",Donate:"Doar",Report:"Reportar",Source:"Source","Search Results":"Exibindo /quantity/ resultados para '/word/'",Filter:{Button:"Filtrar","Words That Start With":"Palavras que come\xe7am com"},"Advertise Screen":{Head:"A sua marca \xe9 importante",Body:"E por apenas R$ 15.00 por m\xeas voc\xea pode veicular a sua propaganda em nosso website e aplica\xe7\xe3o.",Footer:"Sujeito a restri\xe7\xf5es ou reajustes","Primary Button":"Contratar","Secondary Button":"Entrar em Contato"},"Word Viewer":{"Empty Word Class":"Palavra","Empty Information":"Nenhuma informa\xe7\xe3o adicional foi encontrada para esta palavra","Empty Quote":"Nenhuma frase de exemplo foi inserida no momento","Empty Synonyms":"Nenhum sin\xf4nimo foi encontrado para esta palavra","Synonyms Label":"Sin\xf4nimos de /word/","Synonyms Button":"Compartilhar","Empty Rhymes":"Nenhuma rima foi encontrada para esta palavra","Rhymes Label":"Rimas de /word/","Rhymes Button":"Compartilhar"}};q.default.use(O.initReactI18next).init({compatibilityJSON:"v3",resources:{en:{translation:$},pt:{translation:G}},lng:Q.locale.slice(0,2),fallbackLng:"en",interpolation:{escapeValue:!1}});const J=q.default;const K=function(){var e=(0,d.useTheme)(),t=_(e),r=(0,N.useNavigation)().navigate;return(0,P.jsxs)(v.default,{style:t.row,children:[(0,P.jsx)(v.default,{style:t.button,children:(0,P.jsx)(x.default,{icon:"bullhorn",iconColor:e.colors.background})}),(0,P.jsxs)(v.default,{style:t.image,children:[(0,P.jsx)(c.default,{style:t.label,children:J.t("Advertise")}),(0,P.jsx)(x.default,{icon:"arrow-right-thin-circle-outline",iconColor:e.colors.background,onPress:function(){r("Advertise")}})]})]})};var Y=r(7301),X=r(3026);const Z=function(e){var t=e.theme;return(0,P.jsx)(v.default,{style:t.spaceSmall})},ee=function(e){var t=e.theme;return(0,P.jsx)(v.default,{style:t.spaceMedium})},te=function(e){var t=e.theme;return(0,P.jsx)(v.default,{style:t.spaceBig})};var re=function(e){var t=e.items,r=(0,N.useNavigation)().navigate,o=(0,d.useTheme)(),n=b(o);return(0,P.jsx)(v.default,{style:n.cardsContainer,children:t.map((function(e,t){return(0,P.jsx)(u.default,{onPress:function(){var t,o;e.navigate&&(e.navigate.external?"web"===m.default.OS?window.open(null==(t=e.navigate)?void 0:t.to,"_blank"):Y.default.openURL(null==(o=e.navigate)?void 0:o.to):r("Home"))},rippleColor:o.colors.primary+"80",style:n.touchableCard,children:(0,P.jsx)(l.default,{textColor:o.colors.shadow,style:n.card,icon:e.icon,children:e.label})},t)}))})},oe=function(e){var t=e.label,r=e.right,o=e.words,n=(0,d.useTheme)(),a=b(n);return(0,P.jsxs)(v.default,{children:[(0,P.jsxs)(v.default,{style:a.wordCardTitle,children:[(0,P.jsx)(c.default,{children:t}),(0,P.jsx)(c.default,{style:a.wordCardButton,onPress:function(){},children:r})]}),(0,P.jsx)(Z,{theme:a}),(0,P.jsx)(X.default,{contentContainerStyle:a.wordCardContent,children:o.map((function(e,t){return(0,P.jsx)(c.default,{children:e},t)}))})]})};const ne=function(){var e=(0,d.useTheme)(),t=b(e),r=(0,O.useTranslation)().t;return(0,P.jsx)(U,{isLoading:!1,progress:0,children:(0,P.jsxs)(v.default,{style:t.container,children:[(0,P.jsx)(A,{}),(0,P.jsxs)(v.default,{style:t.content,children:[(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(K,{}),(0,P.jsx)(Z,{theme:t}),(0,P.jsx)(re,{items:[{label:r("Donate"),icon:"hand-heart",navigate:{external:!0,to:r("Donate URL")}},{label:r("Report"),icon:"police-badge",navigate:{external:!1,to:"Home"}},{label:r("Source"),icon:"github",navigate:{external:!0,to:r("Source URL")}}]}),(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(oe,{label:r("Most Seen Words"),right:r("See More"),words:["teste","testando"]}),(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(s.default,{style:t.divider}),(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(oe,{label:r("Most Recent Words"),right:r("See More"),words:["comprar","vender"]})]})]})})};const ae=function(e){return g.default.create({container:{backgroundColor:e.colors.background,width:"100%",height:"100%"},content:{width:"85%",maxWidth:"85%",alignSelf:"center"},spaceSmall:{margin:5},spaceMedium:{margin:15},spaceBig:{margin:25},divider:{backgroundColor:e.colors.outline},resultContainer:{flexDirection:"row",flexWrap:"wrap",gap:15},resultText:{textDecorationLine:"underline",textDecorationStyle:"dotted"},resultButton:{borderColor:e.colors.outline,borderWidth:2},filterLabel:{fontWeight:"600"},filterButton:{width:100,borderColor:e.colors.outline,borderWidth:2},addedFilterButton:{borderColor:e.colors.outline,borderWidth:2},addedFilterContent:{flexDirection:"row-reverse"},filterContainer:{flexDirection:"row",flexWrap:"wrap",gap:6}})};const ie=function(){var e,t=(0,d.useTheme)(),r=ae(t),o=(0,O.useTranslation)().t,n=(0,N.useRoute)().params,a=(0,N.useNavigation)().navigate;return(0,P.jsx)(U,{isLoading:!1,progress:0,children:(0,P.jsxs)(v.default,{style:r.container,children:[(0,P.jsx)(A,{}),(0,P.jsxs)(v.default,{style:r.content,children:[(0,P.jsx)(ee,{theme:r}),(0,P.jsx)(K,{}),(0,P.jsx)(ee,{theme:r}),(0,P.jsx)(c.default,{children:o("Search Results").replace("/quantity/","1").replace("/word/",null!=(e=null==n?void 0:n.word)?e:"")}),(0,P.jsx)(Z,{theme:r}),(0,P.jsx)(X.default,{contentContainerStyle:r.resultContainer,children:[null==n?void 0:n.word].map((function(e,o){return e&&(0,P.jsx)(l.default,{onPress:function(){return a("Word",{word:e})},theme:{roundness:1},icon:"magnify",textColor:t.colors.primary,labelStyle:r.resultText,contentStyle:r.resultButton,children:e},o)}))}),(0,P.jsx)(ee,{theme:r}),(0,P.jsx)(s.default,{style:r.divider}),(0,P.jsx)(ee,{theme:r}),(0,P.jsxs)(X.default,{contentContainerStyle:r.filterContainer,children:[(0,P.jsx)(l.default,{theme:{roundness:1},icon:"filter",buttonColor:t.colors.primary,textColor:t.colors.background,labelStyle:r.filterLabel,style:r.filterButton,onPress:function(){},children:o("Filter.Button")}),(0,P.jsxs)(l.default,{theme:{roundness:1},icon:"delete",textColor:t.colors.primary,labelStyle:r.filterLabel,contentStyle:r.addedFilterContent,style:r.addedFilterButton,onPress:function(){},children:[o("Filter.Words That Start With"),' "',null==n?void 0:n.word,'"']})]})]})]})})};var le=r(5861),se=r(4357);const ce=function(e){return g.default.create({container:{backgroundColor:e.colors.background,width:"100%",height:"100%"},content:{width:"85%",maxWidth:"85%",alignSelf:"center"},spaceSmall:{margin:5},spaceMedium:{margin:15},spaceBig:{margin:25},divider:{backgroundColor:e.colors.outline},rowText:{flexDirection:"row"},rowTextButton:{color:e.colors.primary,marginLeft:"auto",fontWeight:"700"},quoteContainer:{backgroundColor:e.colors.primary,alignItems:"center",borderRadius:5,padding:20},quoteText:{color:e.colors.background,textAlign:"center",fontWeight:"800"},rowContentContainer:{flexDirection:"row",flexWrap:"wrap",gap:15},rowContentText:{textDecorationLine:"underline",textDecorationStyle:"dotted"},loading:{shadowOffset:{width:0,height:0},shadowOpacity:0}})};const de=r(8615).default.create({baseURL:"https://sinouns-1-x6008571.deta.app",timeout:8e3});var ue=function(e){var t=e.title,r=e.button,o=e.children,n=(0,d.useTheme)(),a=ce(n);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(v.default,{style:a.rowText,children:[(0,P.jsx)(c.default,{children:t}),(0,P.jsx)(c.default,{style:a.rowTextButton,children:r})]}),(0,P.jsx)(Z,{theme:a}),(0,P.jsx)(X.default,{contentContainerStyle:a.rowContentContainer,children:o})]})};const fe=function(){var e,t,r,a=(0,d.useTheme)(),i=ce(a),l=(0,O.useTranslation)().t,u=(0,N.useRoute)().params,f=(0,N.useNavigation)(),h=f.navigate,m=f.goBack,g=f.canGoBack,p=f.isFocused,y=(0,n.useState)(!0),b=(0,o.default)(y,2),x=b[0],j=b[1],w=(0,n.useState)([]),S=(0,o.default)(w,2),C=S[0],k=S[1],T=(0,n.useState)([]),B=(0,o.default)(T,2),L=B[0];B[1];return(0,n.useEffect)((function(){var e=function(){var e=(0,le.default)((function*(){j(!0);try{var e=(yield de.post("/word",{word:null==u?void 0:u.word},{params:{country:"br"}})).data;k(e.message),setTimeout((function(){j(!1)}),150)}catch(t){j(!1),console.log(t),g()?m():h("Home")}}));return function(){return e.apply(this,arguments)}}();e()}),[null==u?void 0:u.word,p]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(R.default,{children:(0,P.jsx)(W.default,{dismissable:!1,visible:x,contentContainerStyle:i.loading,children:(0,P.jsx)(se.default,{size:32,color:a.colors.primary})})}),(0,P.jsxs)(X.default,{style:i.container,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:[(0,P.jsx)(A,{}),(0,P.jsxs)(v.default,{style:i.content,children:[(0,P.jsx)(ee,{theme:i}),(0,P.jsx)(ue,{title:null!=(e=null==u?void 0:u.word)?e:"",button:l("Word Viewer.Empty Word Class"),children:(0,P.jsx)(c.default,{children:l("Word Viewer.Empty Information")})}),(0,P.jsx)(ee,{theme:i}),(0,P.jsx)(v.default,{style:i.quoteContainer,children:(0,P.jsx)(c.default,{style:i.quoteText,children:l("Word Viewer.Empty Quote")})}),(0,P.jsx)(ee,{theme:i}),(0,P.jsxs)(ue,{title:l("Word Viewer.Synonyms Label").replace("/word/",null!=(t=null==u?void 0:u.word)?t:""),button:l("Word Viewer.Synonyms Button"),children:[C.map((function(e,t){return e&&(0,P.jsx)(c.default,{onPress:function(){return h("Word",{word:e})},style:i.rowContentText,children:e},t)})),!C.length&&(0,P.jsx)(c.default,{children:l("Word Viewer.Empty Synonyms")})]}),(0,P.jsx)(ee,{theme:i}),(0,P.jsx)(s.default,{style:i.divider}),(0,P.jsx)(ee,{theme:i}),(0,P.jsx)(ue,{title:l("Word Viewer.Rhymes Label").replace("/word/",null!=(r=null==u?void 0:u.word)?r:""),button:l("Word Viewer.Rhymes Button"),children:!L.length&&(0,P.jsx)(c.default,{children:l("Word Viewer.Empty Rhymes")})})]})]})]})};const he=function(e){return g.default.create({container:{backgroundColor:e.colors.background,width:"100%",height:"100%"},content:{width:300,maxWidth:"85%",alignSelf:"center"},spaceSmall:{margin:5},spaceMedium:{margin:15},spaceBig:{margin:25},buttonContact:{borderColor:e.colors.outline,borderWidth:2,width:"100%"},labelContact:{fontWeight:"700"},image:{borderRadius:0,width:"100%",height:100},title:{color:e.colors.primary,fontWeight:"800",fontSize:26},label:{color:e.colors.shadow,textAlign:"center",fontWeight:"700",fontSize:14},labelSmall:{color:e.colors.primary,textAlign:"center",fontWeight:"400",fontSize:10}})};var me=r(3264);const ge=function(){var e=(0,d.useTheme)(),t=he(e),r=(0,O.useTranslation)().t;return(0,P.jsx)(U,{isLoading:!1,progress:0,children:(0,P.jsxs)(v.default,{style:t.container,children:[(0,P.jsx)(A,{}),(0,P.jsxs)(v.default,{style:t.content,children:[(0,P.jsx)(te,{theme:t}),(0,P.jsx)(c.default,{style:t.title,adjustsFontSizeToFit:!0,numberOfLines:1,children:r("Advertise Screen.Head")}),(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(w.default,{source:me,style:t.image}),(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(c.default,{style:t.label,children:r("Advertise Screen.Body")}),(0,P.jsx)(Z,{theme:t}),(0,P.jsx)(c.default,{style:t.labelSmall,children:r("Advertise Screen.Footer")}),(0,P.jsx)(ee,{theme:t}),(0,P.jsx)(l.default,{onPress:function(){},buttonColor:e.colors.primary,labelStyle:t.labelContact,textColor:e.colors.background,style:t.buttonContact,icon:"handshake-outline",children:r("Advertise Screen.Primary Button")}),(0,P.jsx)(Z,{theme:t}),(0,P.jsx)(l.default,{onPress:function(){},labelStyle:t.labelContact,textColor:e.colors.primary,style:t.buttonContact,icon:"phone-dial",children:r("Advertise Screen.Secondary Button")})]})]})})};var pe={prefixes:["/"],config:{screens:{Home:"",Search:"search/:word",Word:":word",Advertise:"advertise"}}},ye=(0,i.default)();const be=function(){return(0,P.jsx)(a.default,{linking:pe,children:(0,P.jsxs)(ye.Navigator,{screenOptions:{headerShown:!1,title:"Synonyms"},children:[(0,P.jsx)(ye.Screen,{name:"Home",component:ne}),(0,P.jsx)(ye.Screen,{name:"Search",component:ie}),(0,P.jsx)(ye.Screen,{name:"Advertise",component:ge}),(0,P.jsx)(ye.Screen,{name:"Word",component:fe})]})})};var xe=r(8083),je=(0,H.default)((function e(){(0,z.default)(this,e)}));je.config={default:{fontFamily:"Nunito-Regular",fontWeight:"500",letterSpacing:0,lineHeight:28,fontSize:16},regular:{fontFamily:"Nunito-Regular",fontWeight:"500",letterSpacing:0,lineHeight:28,fontSize:16},medium:{fontFamily:"Nunito-Bold",fontWeight:"500",letterSpacing:0,lineHeight:28,fontSize:16},light:{fontFamily:"Nunito-Light",fontWeight:"500",letterSpacing:0,lineHeight:28,fontSize:16},thin:{fontFamily:"Nunito-LightItalic",fontWeight:"500",letterSpacing:0,lineHeight:28,fontSize:16}},je.imports={"Nunito-Regular":r(9218),"Nunito-Bold":r(8267),"Nunito-Light":r(2415),"Nunito-LightItalic":r(4574)};var ve=r(1739),we=r(2698);function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){(0,f.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Oe=Ce(Ce({},ve.MD3LightTheme),{},{colors:Ce(Ce({},ve.MD3LightTheme.colors),{},{primary:"#FF70A6",outline:"#FFD0E1",outlineVariant:"#FFECF7",surface:"#201A23",background:"#FFFFFF",tertiary:"#222034"}),fonts:(0,we.default)({config:je.config,isV3:!0})});var We=r(1925);function Re(){var e=(0,xe.useFonts)(je.imports),t=(0,o.default)(e,1)[0],r=(0,n.useState)(0),a=(0,o.default)(r,2),i=a[0],l=a[1],s=(0,n.useState)(!0),c=(0,o.default)(s,2),d=c[0],u=c[1];return(0,n.useEffect)((function(){var e=[t],r=e.filter((function(e){return!!e}));r.length/e.length!==1?l(r.length/e.length):u(!1)}),[t]),(0,P.jsx)(D,{children:(0,P.jsx)(O.I18nextProvider,{i18n:J,children:(0,P.jsx)(We.default,{theme:Oe,children:(0,P.jsx)(U,{isLoading:d,progress:i,children:(0,P.jsx)(be,{})})})})})}},8267:(e,t,r)=>{e.exports=r.p+"static/media/Nunito-Bold.f4338623f94e6079de97.ttf"},2415:(e,t,r)=>{e.exports=r.p+"static/media/Nunito-Light.0ec468f65958d1263b60.ttf"},4574:(e,t,r)=>{e.exports=r.p+"static/media/Nunito-LightItalic.ca6674927a6bf05c3bf7.ttf"},9218:(e,t,r)=>{e.exports=r.p+"static/media/Nunito-Regular.99a3b019e7727ac19479.ttf"},7270:(e,t,r)=>{e.exports=r.p+"static/media/icon.8b0f1b42afca1939be8c.png"},692:(e,t,r)=>{e.exports=r.p+"static/media/brazil.566c43dc609fdaf4eee9.png"},6593:(e,t,r)=>{e.exports=r.p+"static/media/usa.bc6ea25f6deeee206d45.png"},3264:(e,t,r)=>{e.exports=r.p+"static/media/placeholder.5d72b7c55ffa1a92367f.png"},8906:(e,t,r)=>{e.exports=r.p+"static/media/overlay.1d3057c17a49cb52ca1f.png"},6216:(e,t,r)=>{e.exports=r.p+"static/media/underlay.6d2d5ea17ae8c07e6052.png"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(a,i),a}})(),r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var d=s(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[773],(()=>r(9484)));o=r.O(o)})();
//# sourceMappingURL=main.b6e064e3.js.map