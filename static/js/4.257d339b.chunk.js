(this["webpackJsonpgoit-react"]=this["webpackJsonpgoit-react"]||[]).push([[4],{113:function(t,e,n){t.exports={container:"Page_container__2G14m",title:"Page_title__3QmcR",homepage_image:"Page_homepage_image__xdbFr",form:"Page_form__2K8JH",label:"Page_label__3PNq8",container_contact:"Page_container_contact__3ODpu"}},115:function(t,e,n){t.exports={Forms:"ContactForm_Forms__3i3wM",Form_label:"ContactForm_Form_label__2_Nbx",Form_input:"ContactForm_Form_input__33uti",Forminput:"ContactForm_Forminput__3xQ_r",Form_button:"ContactForm_Form_button__1fO1y"}},116:function(t,e,n){t.exports={List:"ContactList_List__MJT0g",List_item:"ContactList_List_item__3vrv6",List_button:"ContactList_List_button__2MLdp"}},117:function(t,e,n){t.exports={Title:"Filter_Title__3mdc7",Title_input:"Filter_Title_input__3cwb8"}},140:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var c=n(0),a=n(9),r=n(50),o=n(114),i=n(39),s=n(115),l=n.n(s),u=n(2);function b(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(""),b=Object(o.a)(s,2),_=b[0],j=b[1],m=Object(c.useRef)(null),d=Object(a.c)(i.d.getContacts),O=Object(a.b)();Object(c.useEffect)((function(){m.current.focus()}),[]);return Object(u.jsxs)("form",{className:l.a.Forms,onSubmit:function(t){if(t.preventDefault(),!n||!_)return alert("Some field is empty"),r(""),j(""),!1;d.find((function(t){return t.name===n}))?alert("".concat(n,"is already in the Phonebook")):O(i.c.addContact(n,_)),r(""),j("")},children:[Object(u.jsxs)("label",{className:l.a.Form_label,children:["Name",Object(u.jsx)("input",{className:l.a.Form_input,ref:m,type:"text",name:"name",required:!0,placeholder:"",value:n,onChange:function(t){r(t.target.value)}})]}),Object(u.jsxs)("label",{className:l.a.Form_label,children:["Number",Object(u.jsx)("input",{className:l.a.Form_input,type:"tel",name:"number",value:_,required:!0,placeholder:"111-11-11",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",onChange:function(t){j(t.target.value)}})]}),Object(u.jsx)("button",{className:l.a.Form_button,type:"submit",children:"Add contact"})]})}var _=n(23),j=n(116),m=n.n(j),d=function(t){var e=t.id,n=t.name,c=t.number,a=t.onDelete;return Object(u.jsxs)("li",{className:m.a.List_item,children:[Object(u.jsx)("p",{children:n+": "+c}),Object(u.jsx)("button",{className:m.a.List_button,onClick:function(){return a(e)},children:"Delete"})]},e)};function O(){var t=Object(a.c)(i.d.getVisibleContact),e=Object(a.b)(),n=Object(c.useCallback)((function(t){return e(i.c.deleteContact(t))}),[e]);return 0===t.length?null:Object(u.jsx)("ul",{className:m.a.List,children:t.map((function(t){return Object(u.jsx)(d,Object(_.a)(Object(_.a)({},t),{},{onDelete:n}),t.id)}))})}var f=n(117),h=n.n(f);function p(){var t=Object(a.c)(i.d.getFilter),e=Object(a.b)(),n=Object(c.useCallback)((function(t){e(Object(i.a)(t.target.value))}),[e]);return Object(u.jsxs)("label",{className:h.a.Title,children:["Find contacts by name",Object(u.jsx)("input",{className:h.a.Title_input,type:"text",name:"filter",value:t,onChange:n})]})}var x=n(118),g=n.n(x),F=(n(137),n(113)),v=n.n(F);function C(){var t=Object(a.c)(i.d.getLoding),e=Object(a.c)(i.d.getError),n=Object(a.b)();return Object(c.useEffect)((function(){n(i.c.fetchContact())}),[n]),Object(u.jsxs)(r.a,{className:v.a.container_contact,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(b,{})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(p,{}),Object(u.jsx)(O,{}),t&&Object(u.jsx)(g.a,{type:"ThreeDots",color:"#303f9f",height:80,width:80,className:"Loader"})]}),e&&Object(u.jsx)("h1",{children:"No result found!"})]})}}}]);
//# sourceMappingURL=4.257d339b.chunk.js.map