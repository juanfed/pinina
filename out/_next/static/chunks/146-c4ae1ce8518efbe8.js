"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{41146:function(n,e,r){r.d(e,{Z:function(){return B}});var t=r(85893),i=r(67294),a=r(58377),c=r(61214),d=r(7906),l=r(295),o=r(53252),s=r(72882),u=r(53184),h=r(53816),j=r(55113),x=r(86886),m=r(83321),f=r(79305),y=r(69368),p=r(28750),_=r(15861),Z=r(94054),g=r(33841),v=r(73575),b=r(30431),P=r(45843),k=r(92145),C=r(24901),S=r(66818);r(27755);function N(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function I(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){N(n,e,r[e])}))}return n}var E=(0,a.Z)((function(n){return{head:{backgroundColor:"#FFB714"},body:{fontSize:14}}}))(o.Z),w=(0,a.Z)((function(n){return{root:{"&:nth-of-type(even)":{backgroundColor:"#FFFFFF"}}}}))(h.Z),D=(0,c.Z)({main:{borderRadius:"20px"},table:{minWidth:500},typography:{color:p.__}});(0,c.Z)((function(n){return{root:{flexShrink:0,marginLeft:n.spacing(2.5)}}}));function B(n){var e=n.tableData,r=n.rows,a=n.handleDisplayModules,c=n.handleMoreInfo,o=n.handleClick,y=n.handleEdit,p=n.handleDelete,Z=n.handleSelect,g=(0,k.v9)((function(n){return n.admin})),v=g.switchAdminState,b=g.selectedBusinessData,P=D(),S=(0,k.I0)(),N=e,I=(0,i.useState)(0),B=I[0],A=I[1],M=(0,i.useState)(5),W=M[0],U=M[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{component:j.Z,className:P.main,elevation:5,children:(0,t.jsxs)(d.Z,{className:P.table,"aria-label":"customized table",children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(h.Z,{children:r.map((function(n){return(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{style:{fontSize:"16px",color:"#8E5207"},className:P.typography,align:"center",variant:"body1",children:n.title})},n.id)}))})}),(0,t.jsx)(l.Z,{children:(W>0?N.slice(B*W,B*W+W):N).map((function(n){return(0,t.jsxs)(w,{onClick:function(){return o&&o(n.data_0,n.data_3)},children:[(0,t.jsx)(E,{component:"th",scope:"row",children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_1})}),n.data_2&&(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_2})}),n.data_3&&(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_3})}),n.data_4?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_4})}):null,n.modulesMenu?(0,t.jsx)(E,{children:(0,t.jsx)(O,{id:n.data_0})}):null,n.data_5?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_5})}):null,n.data_6?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_6})}):null,n.data_7?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_7})}):null,n.data_8?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_8})}):null,n.data_9?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_9})}):null,n.data_10?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_10})}):null,n.data_11?(0,t.jsx)(E,{children:(0,t.jsx)(_.Z,{className:P.typography,variant:"body2",align:"center",children:n.data_11})}):null,n.removeUser&&(0,t.jsx)(E,{children:(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(m.Z,{variant:"outlined",color:"secondary",onClick:function(){return S((0,C.lT)(n.data_0))},children:(0,t.jsx)(_.Z,{align:"center",color:"secondary",variant:"body2",children:(0,t.jsx)("b",{children:"Eliminar"})})})})})}),n.edit&&(0,t.jsx)(E,{children:(0,t.jsx)(m.Z,{fullWidth:!0,variant:"outlined",size:"small",color:"secondary",onClick:function(){return y(n)},children:(0,t.jsx)(_.Z,{align:"center",color:"secondary",variant:"body2",children:(0,t.jsx)("b",{children:"Editar"})})})}),n.delete&&(0,t.jsx)(E,{children:(0,t.jsx)(m.Z,{fullWidth:!0,variant:"outlined",size:"small",color:"secondary",onClick:function(){return p(n.data_0)},children:(0,t.jsx)(_.Z,{align:"center",color:"secondary",variant:"body2",children:(0,t.jsx)("b",{children:"Eliminar"})})})}),n.removeUserProfile&&(0,t.jsx)(E,{children:(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(m.Z,{variant:"outlined",color:"secondary",onClick:function(){return S((0,C.Az)(n.id_usuario))},children:(0,t.jsx)(_.Z,{align:"center",color:"secondary",variant:"body2",children:(0,t.jsx)("b",{children:"Eliminar"})})})})})}),n.moreInfo&&(0,t.jsx)(E,{children:(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(m.Z,{variant:"outlined",color:"secondary",onClick:function(){return c(n.id_usuario)},children:(0,t.jsx)(_.Z,{align:"center",color:"secondary",variant:"body2",children:"M\xe1s informaci\xf3n"})})})})}),n.select&&(0,t.jsx)(E,{children:(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(m.Z,{variant:"outlined",color:"secondary",onClick:function(){return Z(n)},children:(0,t.jsx)(_.Z,{align:"center",color:"secondary",variant:"body2",children:"Seleccionar"})})})})}),n.adminSwitch&&(0,t.jsx)(E,{children:(0,t.jsx)(F,{initialState:n.t_adm,userId:n.id_usuario,moduleId:n.data_0})}),n.updateUser&&(0,t.jsx)(E,{children:(0,t.jsx)(z,{userId:n.id_usuario})}),n.assignButton&&(0,t.jsx)(E,{children:(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,xs:10,children:(0,t.jsx)(m.Z,{variant:"outlined",color:"secondary",fullWidth:!0,onClick:a,children:(0,t.jsx)(_.Z,{variant:"body2",align:"center",children:"Agregar"})})})})}),n.assignModulesButton&&(0,t.jsx)(E,{children:(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,xs:10,children:(0,t.jsx)(m.Z,{variant:"outlined",color:"secondary",fullWidth:!0,onClick:function(){return S((0,C.Sx)({id_usuario:n.id_usuario,id_modulo:n.data_0,id_empresa:b.id_empresa},v))},children:(0,t.jsx)(_.Z,{variant:"body2",align:"center",children:"Asignar Permisos"})})})})})]},n.data_0)}))})]})}),(0,t.jsx)(x.ZP,{container:!0,justifyContent:"flex-end",children:(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(f.Z,{component:"div",count:e.length,SelectProps:{inputProps:{"aria-label":"Filas por p\xe1gina"},native:!0},colSpan:3,page:B,onPageChange:function(n,e){A(e)},rowsPerPage:W,onRowsPerPageChange:function(n){U(parseInt(n.target.value,10)),A(0)}})})})]})}var F=function(n){var e=n.initialState,r=n.userId,a=n.moduleId,c=(0,i.useState)(e),d=c[0],l=c[1],o=(0,k.I0)(),s=D(),u=(0,k.v9)((function(n){return n.admin})),h=u.selectedBusinessData,j=u.switchAdminState,m=u.updateAdminData;return(0,i.useEffect)((function(){o((0,C.Yu)({id_usuario:r,t_adm:!1,t_restri:!e,id_empresa:h.id_empresa}))}),[]),(0,i.useEffect)((function(){var n=j.map((function(n){return n.id_modulo===a?I({},n,{t_adm:d}):n}));if(o((0,C.OQ)(n)),0!==m.length){var e=m.map((function(n){return n.id_usuario===r?I({},n,{t_adm:d,t_restri:!d}):n}));o((0,C.n6)(e))}}),[d]),(0,t.jsxs)(x.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(_.Z,{className:s.typography,variant:"body2",children:"Restringido"})}),(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(P.Z,{checked:d,onChange:function(n){var e=n.target;l(e.checked),o((0,C.Yu)({id_usuario:r,t_adm:e.checked,t_restri:!e.checked,id_empresa:h.id_empresa}))}})}),(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(_.Z,{className:s.typography,variant:"body2",children:"Administrador"})})]})},O=function(n){var e=n.id,r=(0,k.v9)((function(n){return n.admin})),a=r.modules,c=r.currentUserDataSettings,d=(0,i.useState)([]),l=d[0],o=d[1],s=(0,k.I0)();(0,i.useEffect)((function(){if(0!==a.length){for(var n=[],e=0;e<a.length;e++)n.push(I({},a[e],{checkBox:!1}));o(n)}}),[a]);return(0,i.useEffect)((function(){if(0!==l.length){var n=l.map((function(n){if(!0===n.checkBox)return{id_usuario:e,id_modulo:n.id,t_adm:c.t_adm,t_restri:!c.t_adm,id_empresa:c.id_empresa}}));s((0,C.Dt)(n))}}),[l]),(0,i.useEffect)((function(){if(0!==c.length&&0!==l.length){var n=l.map((function(n){if(!0===n.checkBox)return{id_modulo:n.id,id_usuario:e,t_adm:c.t_adm,t_restri:!c.t_adm,id_empresa:c.id_empresa}}));s((0,C.Dt)(n))}}),[c]),(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,xs:12,children:(0,t.jsxs)(Z.Z,{size:"small",fullWidth:!0,color:"secondary",children:[(0,t.jsx)(g.Z,{children:"M\xf3dulos"}),(0,t.jsx)(v.Z,{multiple:!0,value:l,children:l.map((function(n){return(0,t.jsxs)(b.Z,{value:n.id,children:[(0,t.jsx)(y.Z,{checked:n.checkBox,onChange:function(e){return function(n,e){var r=l.map((function(r){return r.id===e?I({},r,{checkBox:n.target.checked}):r}));o(r)}(e,n.id)}}),n.modulo]},n.id)}))})]})})})},z=function(n){var e=n.userId,r=(0,k.v9)((function(n){return n.admin})).updateAdminData,i=(0,k.I0)();return(0,t.jsx)(x.ZP,{container:!0,justifyContent:"center",children:(0,t.jsx)(x.ZP,{item:!0,children:(0,t.jsx)(m.Z,{size:"small",variant:"outlined",color:"secondary",startIcon:(0,t.jsx)(S.Z,{}),onClick:function(){var n=r.filter((function(n){return n.id_usuario===e}));i((0,C.m5)(n[0],!0))},children:(0,t.jsx)(_.Z,{children:"Guardar"})})})})}}}]);