(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},296:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(291),l=t.n(i),m=t(14),o=function(e){var a="/dialogs/".concat(e.id);return n.a.createElement("div",{className:l.a.dialog+" "+l.a.active},n.a.createElement(m.b,{to:a},e.name))},c=function(e){return n.a.createElement("div",{className:l.a.message},e.message)},r=t(127),g=t(8),d=t(88),u=t(128),_=t(72),b=t(33),E=Object(_.a)(50),p=Object(u.a)({form:"dialogsAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(d.a,{component:b.b,validate:[_.b,E],name:"newMessageBody",placeholder:"Enter your message"})),n.a.createElement("div",null,n.a.createElement("button",{type:"submit"},"Submit")))})),f=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(o,{key:e.id,name:e.name,id:e.id})})),s=a.messages.map((function(e){return n.a.createElement(c,{key:e.id,message:e.message})}));return e.isAuth?n.a.createElement("div",{className:l.a.dialogs},n.a.createElement("div",{className:l.a.dialogsItems},t),n.a.createElement("div",{className:l.a.messages},n.a.createElement("div",null,s)),n.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):n.a.createElement(g.a,{to:"/login"})},v=t(11),h=t(137),y=t(9);a.default=Object(y.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(r.b)(a))}}})),h.a)(f)}}]);
//# sourceMappingURL=4.5016f08c.chunk.js.map