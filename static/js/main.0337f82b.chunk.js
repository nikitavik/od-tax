(this["webpackJsonpod-test"]=this["webpackJsonpod-test"]||[]).push([[0],{21:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var i,r,a,o,d,c,l,h,s,p,b,x,u,g,C,j,f,m,v,O,w,y,k,E,L,S,z,F,B,V,H,M,G,Z=t(0),A=t.n(Z),D=t(13),T=t.n(D),U=(t(21),t(2)),P=t(5),R=t(3),_=t(1),J=U.b.button.attrs((function(n){var e=n.bSize;return{padding:"small"===e?"12px":"16px",fontSize:"small"===e?"14px":"16px",lineHeight:"small"===e?"133%":"150%"}}))(i||(i=Object(R.a)(["\n  width: 100%;\n  padding: ",";\n\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  white-space: nowrap;\n\n  color: #fff;\n  background: ",";\n  border-radius: 6px;\n  box-shadow: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n  }\n  &:disabled {\n    background: ",";\n    box-shadow: none;\n  }\n  &.alternative {\n    border: 1px solid #fff;\n    background: transparent;\n    box-shadow: none;\n    &:hover {\n      color: #000;\n      background: #fff;\n    }\n    &:disabled {\n      border: none;\n    }\n  }\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 150%;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.fontSize}),(function(n){return n.lineHeight}),(function(n){return n.theme.redGrad}),(function(n){return n.theme.mainShadow}),(function(n){return n.theme.red}),(function(n){return n.theme.gray900})),I=function(n){var e=n.title,t=n.disabled,i=n.bSize,r=n.altStyle,a=n.onClick;return Object(_.jsx)(J,{disabled:t,onClick:a,bSize:i,className:r?"alternative":"",children:e})},N=U.b.div(r||(r=Object(R.a)(["\n  width: 100%;\n"]))),q=U.b.input(a||(a=Object(R.a)(["\n  width: 100%;\n  padding: 8px 0 8px 10px;\n\n  font-size: 14px;\n  line-height: 171%;\n\n  color: #000;\n  border: 1px solid ",";\n  border-radius: 3px;\n  outline: none;\n  &::placeholder {\n    color: ",";\n  }\n  &:focus {\n    border-color: ",";\n  }\n  &:hover {\n    border-color: #000;\n  }\n  &:disabled &::placeholder {\n    color: ",";\n    border-color: ",";\n  }\n  &.error {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.gray800}),(function(n){return n.theme.gray900}),(function(n){return n.theme.gray800}),(function(n){return n.theme.grayText}),(function(n){return n.theme.grayText}),(function(n){return n.theme.red})),$=U.b.div(o||(o=Object(R.a)(["\n  margin-bottom: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 171%;\n\n  color: #000;\n"]))),K=U.b.p(d||(d=Object(R.a)(["\n  margin-top: 4px;\n\n  font-size: 10px;\n  line-height: 120%;\n\n  color: ",";\n  @media (min-width: 768px) {\n    font-size: 12px;\n    line-height: 155%;\n  }\n"])),(function(n){return n.theme.red})),Q=function(n){var e=n.name,t=n.onChange,i=n.onBlur,r=n.value,a=n.invalid,o=n.isTouched,d=n.error,c=n.title,l=n.isDirty;return Object(_.jsxs)(N,{children:[Object(_.jsx)($,{children:c}),Object(_.jsx)(q,{name:e,onBlur:i,onChange:t,value:r}),(o||l)&&a?Object(_.jsx)(K,{children:null===d||void 0===d?void 0:d.message}):""]})},W=U.b.button(c||(c=Object(R.a)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 171%;\n  text-align: start;\n  padding: 0;\n\n  color: ",";\n  border: none;\n  background-color: #fff;\n  cursor: pointer;\n  &:hover {\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.red}),(function(n){return n.theme.orange}),(function(n){return n.theme.red})),X=function(n){var e=n.title,t=n.onClick,i=n.type;return Object(_.jsx)(W,{type:i,onClick:t,children:e})},Y=t(11),nn=U.b.label(l||(l=Object(R.a)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n"]))),en=U.b.input.attrs({type:"radio"})(h||(h=Object(R.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  &:checked + div {\n    color: #fff;\n    background: ",";\n  }\n"])),(function(n){return n.theme.redGrad})),tn=U.b.div(s||(s=Object(R.a)(["\n  width: 100%;\n  padding: 6px 12px;\n  \n  font-size: 14px;\n  line-height: 171%;\n  \n  color: #000;\n  background-color: #EEF0F2;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  &:hover{\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.gray800})),rn=function(n){var e=n.children,t=n.onChange,i=n.name,r=n.value;return Object(_.jsxs)(nn,{children:[Object(_.jsx)(en,{value:r,onChange:t,name:i}),Object(_.jsx)(tn,{children:e})]})},an=U.b.div(p||(p=Object(R.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),on=U.b.input.attrs({type:"checkbox"})(b||(b=Object(R.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  &:checked + div {\n    background-image: ",";\n    border: none;\n  }\n"])),(function(n){return n.theme.checkBoxRed})),dn=U.b.div(x||(x=Object(R.a)(["\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n\n  border: 1px solid ",";\n  border-radius: 6px;\n\n  background: #fff;\n  box-sizing: border-box;\n\n  &:hover {\n    border-color: #000;\n  }\n  &.disabled {\n    background-image: ",";\n  }\n"])),(function(n){return n.theme.gray800}),(function(n){return n.theme.checkBoxGray})),cn=function(n){var e=n.value,t=n.name,i=n.onChange,r=n.checked;return Object(_.jsx)(an,{children:Object(_.jsxs)("label",{children:[Object(_.jsx)(on,{type:"checkbox",value:e,checked:r,name:t,onChange:i}),Object(_.jsx)(dn,{})]})})},ln=U.b.form(u||(u=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),hn=U.b.div(g||(g=Object(R.a)(["\n  padding: 0 16px 8px;\n\n  @media (min-width: 768px) {\n    padding: 0 32px 8px;\n  }\n"]))),sn=U.b.div(C||(C=Object(R.a)(["\n  padding: 0 16px 16px;\n  @media (min-width: 768px) {\n    padding: 0 32px 16px;\n  }\n"]))),pn=U.b.div(j||(j=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px 24px;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    padding: 0 32px 40px;\n  }\n"]))),bn=U.b.h6(f||(f=Object(R.a)(["\n  font-size: 14px;\n  line-height: 171%;\n  font-weight: 500;\n  margin: 0 32px 0 0;\n  padding-bottom: 24px;\n  @media (min-width: 768px) {\n    padding: 12px 0;\n  }\n"]))),xn=U.b.div(m||(m=Object(R.a)(["\n  display: flex;\n"]))),un=U.b.div(v||(v=Object(R.a)(["\n  margin-right: 8px;\n  @media (min-width: 768px) {\n    margin-right: 16px;\n  }\n"]))),gn=U.b.div(O||(O=Object(R.a)(["\n  padding: 0 16px 16px;\n  @media (min-width: 768px) {\n    padding: 0 32px 32px;\n  }\n"]))),Cn=U.b.div(w||(w=Object(R.a)(["\n  padding-top: 4px;\n"]))),jn=U.b.div(y||(y=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px 24px;\n  @media (min-width: 768px) {\n    padding: 0 32px 16px;\n  }\n"]))),fn=U.b.div(k||(k=Object(R.a)(["\n  padding: 16px 0;\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.gray800})),mn=U.b.div(E||(E=Object(R.a)(["\n  display: inline-block;\n  margin-left: 11px;\n"]))),vn=U.b.span(L||(L=Object(R.a)(["\n  font-size: 14px;\n  line-height: 171%;\n"]))),On=U.b.span(S||(S=Object(R.a)(["\n  font-size: 14px;\n  line-height: 171%;\n  color: ",";\n"])),(function(n){return n.theme.gray900})),wn=function(){var n=Object(Z.useState)([]),e=Object(P.a)(n,2),t=e[0],i=e[1],r=Object(Z.useState)(!1),a=Object(P.a)(r,2),o=a[0],d=a[1],c=Object(Z.useContext)(Vn),l=Object(Y.b)({mode:"all",defaultValues:{clientSalary:"",taxSelected:[],target:""}}),h=l.control,s=l.handleSubmit,p=l.getValues,b=l.setValue,x=l.formState,u=x.isValid,g=x.isValidating,C=x.isSubmitting,j=function(n){var e=t.map((function(e){return e.year===+n.target.value?(e.checked=!e.checked,e):e}));i(e);var r=e.filter((function(n){return n.checked}));b("taxSelected",r)},f=function(n){b("target",n.target.value)};return Object(_.jsxs)(ln,{onSubmit:s((function(n){console.log(n),alert(JSON.stringify(n,null,1)),null===c||void 0===c||c.closePopUp()})),children:[Object(_.jsx)(hn,{children:Object(_.jsx)(Y.a,{render:function(n){var e=n.field,t=e.onChange,i=e.onBlur,r=e.value,a=e.name,o=n.fieldState,d=o.invalid,c=o.isTouched,l=o.isDirty,h=o.error;return Object(_.jsx)(Q,{title:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446",onChange:t,onBlur:i,value:r,name:a,invalid:d,isDirty:l,isTouched:c,error:h})},name:"clientSalary",control:h,rules:{required:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435",minLength:{value:5,message:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430\u044f 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},validate:function(n){return/^[1-9]\d*$/.test(n)||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"}}})}),Object(_.jsx)(sn,{children:Object(_.jsx)(X,{type:"button",title:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",onClick:function(){if(u){var n=26e4,e=325e3;e=e>=n?n:e;for(var t=12*+p("clientSalary")*.13,r=Math.ceil(e/t),a=[],o=0;o<r;o++)o===r-1?a.push({year:o+1,value:e-t*(r-1),checked:!1}):a.push({year:o+1,value:t,checked:!1});i(a),d(!0),console.log("valid",e,t,r,a)}}})}),t?Object(_.jsxs)(jn,{children:[Object(_.jsx)(Cn,{children:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),null===t||void 0===t?void 0:t.map((function(n){return Object(_.jsxs)(fn,{children:[Object(_.jsx)(cn,{value:n.year,name:"".concat(n.value,"_").concat(n.year),checked:n.checked,onChange:j}),Object(_.jsxs)(mn,{children:[Object(_.jsxs)(vn,{children:[n.value," \u0440\u0443\u0431\u043b\u0435\u0439\xa0"]}),Object(_.jsxs)(On,{children:["\u0432 ",n.year,"-\u0439\u044b \u0433\u043e\u0434"]})]})]},n.year)}))]}):null,Object(_.jsxs)(pn,{children:[Object(_.jsx)(bn,{children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c"}),Object(_.jsxs)(xn,{children:[Object(_.jsx)(un,{children:Object(_.jsx)(rn,{onChange:f,name:"target",value:"payment",children:"\u041f\u043b\u0430\u0442\u0451\u0436"})}),Object(_.jsx)(un,{children:Object(_.jsx)(rn,{onChange:f,name:"target",value:"time",children:"\u0421\u0440\u043e\u043a"})})]})]}),Object(_.jsx)(gn,{children:Object(_.jsx)(I,{type:"submit",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:function(){return null},bSize:"small",altStyle:!1,disabled:C||!u||g||!o||0===p("taxSelected").length})})]})},yn=U.b.div(z||(z=Object(R.a)(["\n  z-index: 1000;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  background: ",";\n"])),(function(n){return n.theme.dark30})),kn=U.b.div(F||(F=Object(R.a)(["\n  z-index: 1010;\n  position: relative;\n\n  margin: 0 auto;\n\n  background: #fff;\n  @media (max-width: 768px) {\n    min-height: 100%;\n  }\n  @media (min-width: 768px) {\n    max-width: 453px;\n    border-radius: 30px;\n    margin: 120px auto;\n  }\n  @media (min-width: 1440px) {\n    max-width: 552px;\n  }\n"]))),En=U.b.h3(B||(B=Object(R.a)(["\n  margin: 0;\n  padding: 32px 16px 16px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 133%;\n\n  @media (min-width: 768px) {\n    font-size: 28px;\n    line-height: 143%;\n\n    padding: 32px 32px 16px;\n  }\n"]))),Ln=U.b.div(V||(V=Object(R.a)(["\n  font-size: 12px;\n  line-height: 133%;\n\n  padding: 0 16px 24px;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 171%;\n\n    padding: 0 32px 24px;\n  }\n"]))),Sn=U.b.div(H||(H=Object(R.a)(["\n  position: absolute;\n  background-image: ",";\n  height: 12px;\n  width: 12px;\n  top: 22px;\n  right: 22px;\n  cursor: pointer;\n  @media (min-width: 768px) {\n    height: 18px;\n    width: 18px;\n    top: 27px;\n    right: 27px;\n    background-image: ",";\n  }\n"])),(function(n){return n.theme.smallRedCross}),(function(n){return n.theme.bigRedCross})),zn=function(n){var e=n.isOpen,t=Object(Z.useContext)(Vn);return e?Object(_.jsx)(yn,{children:Object(_.jsxs)(kn,{children:[Object(_.jsx)(Sn,{onClick:null===t||void 0===t?void 0:t.closePopUp}),Object(_.jsx)(En,{children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(_.jsx)(Ln,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(_.jsx)(wn,{})]})}):null},Fn=U.b.main(M||(M=Object(R.a)(["\n  width: 100%;\n  height: 100%;\n  background: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.redGrad})),Bn=U.b.div(G||(G=Object(R.a)(["\n  min-width: 149px;\n  @media (min-width: 768px) {\n    min-width: 198px;\n  }\n"]))),Vn=Z.createContext(null),Hn=function(){var n=Object(Z.useState)(!1),e=Object(P.a)(n,2),t=e[0],i=e[1];return Object(_.jsxs)(Fn,{children:[Object(_.jsx)(Bn,{children:Object(_.jsx)(I,{title:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442",onClick:function(){i(!0)},bSize:"big",altStyle:!0,disabled:!1,type:"button"})}),Object(_.jsx)(Vn.Provider,{value:{closePopUp:function(){i(!1)}},children:Object(_.jsx)(zn,{isOpen:t})})]})},Mn={red:"#EA0029",orange:"#F53A31",redGrad:"linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56",mainShadow:" 0px 0px 24px rgba(234, 0, 41, 0.33)",gray900:"#BEC5CC",gray800:"#DFE3E6",grayText:"#808080",dark30:"#b3b3b3",checkBoxRed:"url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V14C19.5 17.0376 17.0376 19.5 14 19.5H6C2.96243 19.5 0.5 17.0376 0.5 14V6Z' fill='%23FF5E56'/%3E%3Cpath d='M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V14C19.5 17.0376 17.0376 19.5 14 19.5H6C2.96243 19.5 0.5 17.0376 0.5 14V6Z' fill='url(%23paint0_linear)'/%3E%3Cpath d='M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V14C19.5 17.0376 17.0376 19.5 14 19.5H6C2.96243 19.5 0.5 17.0376 0.5 14V6Z' stroke='%23FF5E56'/%3E%3Cpath d='M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V14C19.5 17.0376 17.0376 19.5 14 19.5H6C2.96243 19.5 0.5 17.0376 0.5 14V6Z' stroke='url(%23paint1_linear)'/%3E%3Cpath d='M7.45455 13.7015L4.11364 10.2537L3 11.403L7.45455 16L17 6.14925L15.8864 5L7.45455 13.7015Z' fill='white'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='20' y1='0.798563' x2='-7.38102' y2='7.95678' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DC3131'/%3E%3Cstop offset='0.932292' stop-color='%23FF4F4F' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='20' y1='0.798563' x2='-7.38102' y2='7.95678' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DC3131'/%3E%3Cstop offset='0.932292' stop-color='%23FF4F4F' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\")",checkBoxGray:"url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H14C17.0376 0.5 19.5 2.96243 19.5 6V14C19.5 17.0376 17.0376 19.5 14 19.5H6C2.96243 19.5 0.5 17.0376 0.5 14V6Z' fill='%23BEC5CC' stroke='%23BEC5CC'/%3E%3Cpath d='M7.45455 13.7015L4.11364 10.2537L3 11.403L7.45455 16L17 6.14925L15.8864 5L7.45455 13.7015Z' fill='white'/%3E%3C/svg%3E%0A\")",smallRedCross:"url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.6151 6.00057L11.6514 1.96311C11.7605 1.85778 11.8475 1.73179 11.9073 1.59248C11.9671 1.45318 11.9986 1.30335 12 1.15174C12.0013 1.00013 11.9724 0.849774 11.915 0.709449C11.8576 0.569124 11.7728 0.441638 11.6656 0.33443C11.5584 0.227222 11.4309 0.142438 11.2905 0.0850268C11.1502 0.0276153 10.9999 -0.00127433 10.8483 4.31116e-05C10.6967 0.00136056 10.5468 0.032859 10.4075 0.0927004C10.2682 0.152542 10.1422 0.239527 10.0369 0.348583L5.99943 4.3849L1.96311 0.348583C1.85778 0.239527 1.73179 0.152542 1.59248 0.0927004C1.45318 0.032859 1.30335 0.00136056 1.15174 4.31116e-05C1.00013 -0.00127433 0.849774 0.0276153 0.709449 0.0850268C0.569124 0.142438 0.441638 0.227222 0.33443 0.33443C0.227222 0.441638 0.142438 0.569124 0.0850268 0.709449C0.0276153 0.849774 -0.00127433 1.00013 4.31116e-05 1.15174C0.00136056 1.30335 0.032859 1.45318 0.0927004 1.59248C0.152542 1.73179 0.239527 1.85778 0.348583 1.96311L4.3849 5.99943L0.348583 10.0369C0.239527 10.1422 0.152542 10.2682 0.0927004 10.4075C0.032859 10.5468 0.00136056 10.6967 4.31116e-05 10.8483C-0.00127433 10.9999 0.0276153 11.1502 0.0850268 11.2905C0.142438 11.4309 0.227222 11.5584 0.33443 11.6656C0.441638 11.7728 0.569124 11.8576 0.709449 11.915C0.849774 11.9724 1.00013 12.0013 1.15174 12C1.30335 11.9986 1.45318 11.9671 1.59248 11.9073C1.73179 11.8475 1.85778 11.7605 1.96311 11.6514L5.99943 7.6151L10.0369 11.6514C10.1422 11.7605 10.2682 11.8475 10.4075 11.9073C10.5468 11.9671 10.6967 11.9986 10.8483 12C10.9999 12.0013 11.1502 11.9724 11.2905 11.915C11.4309 11.8576 11.5584 11.7728 11.6656 11.6656C11.7728 11.5584 11.8576 11.4309 11.915 11.2905C11.9724 11.1502 12.0013 10.9999 12 10.8483C11.9986 10.6967 11.9671 10.5468 11.9073 10.4075C11.8475 10.2682 11.7605 10.1422 11.6514 10.0369L7.6151 5.99943V6.00057Z' fill='%23EA0029'/%3E%3C/svg%3E%0A\")",bigRedCross:"url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z' fill='%23EA0029'/%3E%3C/svg%3E%0A\")"},Gn=function(){return Object(_.jsx)(U.a,{theme:Mn,children:Object(_.jsx)(Hn,{})})},Zn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};T.a.render(Object(_.jsx)(A.a.StrictMode,{children:Object(_.jsx)(Gn,{})}),document.getElementById("root")),Zn()}},[[26,1,2]]]);
//# sourceMappingURL=main.0337f82b.chunk.js.map