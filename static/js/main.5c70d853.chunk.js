(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{29:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},49:function(e,c,t){},50:function(e,c,t){},51:function(e,c,t){},55:function(e,c,t){"use strict";t.r(c);var s=t(0),i=t(13),a=t.n(i),n=(t(29),t(5)),r=t(12),l=t(9),j=t(22),d={items:[],totalAmount:0,totalQuantity:0,overAllAmount:0},o=Object(j.b)({name:"cart",initialState:{items:[],totalQuantity:0,totalAmount:0,overAllAmount:0},reducers:{addItemToCart:function(e,c){var t=c.payload,s=e.items.find((function(e){return e.id===t.id}));e.totalQuantity++,s?(s.quantity=s.quantity+1,s.totalPrice=s.totalPrice+t.price):e.items.push({id:t.id,price:t.price,quantity:1,totalPrice:t.price,name:t.name,preview:t.preview})},clearCartData:function(e,c){return d}}}),h=o.actions,b=o,m=(t(40),t(41),t(1)),O=function(){return Object(m.jsxs)("footer",{children:[Object(m.jsxs)("ul",{className:"online_store",children:[Object(m.jsx)("li",{children:Object(m.jsx)("h3",{children:"ONLINE STORE"})}),Object(m.jsx)("li",{children:"MEN CLOTHING"}),Object(m.jsx)("li",{children:"WOMEN CLOTHING"}),Object(m.jsx)("li",{children:"MEN ACCEESSORIES"}),Object(m.jsx)("li",{children:"WOMEN ACCEESSORIES"})]}),Object(m.jsxs)("ul",{className:"helpful_links",children:[Object(m.jsx)("li",{children:Object(m.jsx)("h3",{children:"HELPFUL LINKS"})}),Object(m.jsx)("li",{children:"HOME"}),Object(m.jsx)("li",{children:"ABOUT"}),Object(m.jsx)("li",{children:"CONTACT"})]}),Object(m.jsxs)("ul",{className:"partners",children:[Object(m.jsx)("li",{children:Object(m.jsx)("h3",{children:"PARTNERS"})}),Object(m.jsx)("li",{children:"ZARA"}),Object(m.jsx)("li",{children:"PANTALOONS"}),Object(m.jsx)("li",{children:"LEVIS"}),Object(m.jsx)("li",{children:"UCB"}),Object(m.jsx)("li",{children:"+MANY MORE"})]}),Object(m.jsxs)("ul",{className:"address",children:[Object(m.jsx)("li",{children:Object(m.jsx)("h3",{children:"ADDRESS"})}),Object(m.jsx)("li",{children:"BUILDING 101"}),Object(m.jsx)("li",{children:"CENTRAL AVENUE"}),Object(m.jsx)("li",{children:"LA - 902722"}),Object(m.jsx)("li",{children:"UNITED STATES"})]})]})},x=function(e){var c=Object(r.c)((function(e){return e.items})),t=Object(r.c)((function(e){return e.totalQuantity})),i=0;c.map((function(e){i+=e.totalPrice,console.log(i)})),console.log(c);var a=Object(r.b)();return Object(m.jsx)(s.Fragment,{children:Object(m.jsxs)("section",{className:"checkout_page",children:[Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)("h1",{className:"checkout",children:"Checkout"}),Object(m.jsxs)("div",{class:"cart_container",children:[Object(m.jsxs)("div",{className:"left_page",children:[Object(m.jsxs)("p",{children:["Total Items: ",Object(m.jsx)("span",{className:"no_of_items",children:t})]}),c.map((function(e){return Object(m.jsx)(s.Fragment,{children:Object(m.jsx)("div",{className:"cart_items",children:Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{src:e.preview}),Object(m.jsxs)("div",{className:"detail",children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsxs)("p",{children:["x",e.quantity]}),Object(m.jsxs)("p",{children:["Amount: ",e.totalPrice]})]})]})})})}))]}),Object(m.jsx)("div",{className:"right_page",children:Object(m.jsxs)("div",{className:"total_amount",children:[Object(m.jsx)("h2",{children:"Total Amount"}),Object(m.jsxs)("p",{children:["Total Amount: Rs"," ",Object(m.jsx)("span",{className:"total_price",children:i})]}),Object(m.jsx)(l.b,{to:"/order",onClick:function(){console.log("clicked"),a(h.clearCartData())},children:Object(m.jsx)("button",{className:"place_order",children:"Place Order"})})]})})]})]}),Object(m.jsx)(O,{})]})})},u=(t(46),t(18)),p=t(7),_=t.n(p),v=function(){var e=Object(s.useState)([]),c=Object(u.a)(e,2),t=c[0],i=c[1];Object(s.useEffect)((function(){fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),console.log(t);var a=t.map((function(e){return e.isAccessory?"":Object(m.jsx)(s.Fragment,{children:Object(m.jsx)("div",{className:_.a.single_preview,children:Object(m.jsxs)(l.b,{to:"/product_detail?p=".concat(e.id),className:_.a.link,children:[Object(m.jsx)("img",{className:_.a.preview_img,src:e.preview,alt:"data_image"}),Object(m.jsxs)("div",{className:_.a.description,children:[Object(m.jsx)("h3",{className:_.a.name,children:e.name}),Object(m.jsx)("h4",{className:_.a.brand,children:e.brand}),Object(m.jsxs)("h3",{className:_.a.price,children:["Rs.",e.price]})]})]})},e.id)})})),n=t.map((function(e){return e.isAccessory?Object(m.jsx)(s.Fragment,{children:Object(m.jsx)("div",{className:_.a.single_preview,children:Object(m.jsxs)(l.b,{to:"/product_detail?p=".concat(e.id),className:_.a.link,children:[Object(m.jsx)("img",{className:_.a.preview_img,src:e.preview,alt:"data_image"}),Object(m.jsxs)("div",{className:_.a.description,children:[Object(m.jsx)("h3",{className:_.a.name,children:e.name}),Object(m.jsx)("h4",{className:_.a.brand,children:e.brand}),Object(m.jsxs)("h3",{className:_.a.price,children:["Rs.",e.price]})]})]})},e.id)}):""}));return Object(m.jsxs)("section",{className:_.a.Products,children:[Object(m.jsx)("h2",{children:"Clothing for Men and Women"}),Object(m.jsx)("div",{className:_.a.clothing,id:"clothing",children:a}),Object(m.jsx)("h2",{children:"Accessories for Men and Women"}),Object(m.jsx)("div",{className:_.a.accessories,id:"accessories",children:n}),Object(m.jsx)(O,{})]})},g=(t(47),t(48),t(16)),N=function(){return Object(m.jsx)("section",{className:"slider",children:Object(m.jsx)("div",{id:"slide",children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(g.a.Item,{interval:2e3,children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503577/H_M_iwwozr.png",alt:"First slide"})}),Object(m.jsx)(g.a.Item,{interval:2e3,children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503627/US_dihxc3.png",alt:"Second slide"})}),Object(m.jsx)(g.a.Item,{interval:2e3,children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503648/w_odwc0j.png",alt:"Third slide"})}),Object(m.jsx)(g.a.Item,{interval:2e3,children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503606/puma_jfiinm.png",alt:"Third slide"})})]})})})},f=function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("section",{id:"features",children:[Object(m.jsxs)("div",{className:"icon_container",children:[Object(m.jsx)("div",{className:"icon_image",children:Object(m.jsx)("img",{src:"https://shoplane.netlify.app/img/icon1.png",alt:"icon_images"})}),Object(m.jsx)("h4",{children:"Free Delivery"})]}),Object(m.jsxs)("div",{className:"icon_container",children:[Object(m.jsx)("div",{className:"icon_image",children:Object(m.jsx)("img",{src:"https://shoplane.netlify.app/img/icon2.png",alt:"icon_images"})}),Object(m.jsx)("h4",{children:"Money Back Gurantee"})]}),Object(m.jsxs)("div",{className:"icon_container",children:[Object(m.jsx)("div",{className:"icon_image",children:Object(m.jsx)("img",{src:"https://shoplane.netlify.app/img/icon3.png",alt:"icon_images"})}),Object(m.jsx)("h4",{children:"Always Support"})]}),Object(m.jsxs)("div",{className:"icon_container",children:[Object(m.jsx)("div",{className:"icon_image",children:Object(m.jsx)("img",{src:"https://shoplane.netlify.app/img/icon4.png",alt:"icon_images"})}),Object(m.jsx)("h4",{children:"Secure Payment"})]})]}),Object(m.jsx)(v,{})]})},w=(t(49),t(19)),k=t.n(w),A=(t(50),function(e){var c=Object(r.b)(),t=e.data,s=t.name,i=t.price,a=(t.description,t.id),n=t.preview;console.log(e.data);return Object(m.jsx)("div",{class:"button",children:Object(m.jsx)("button",{class:"add_to_cart",onClick:function(){c(h.addItemToCart({id:a,price:i,name:s,preview:n}))},children:"Add to Cart"})})}),C=function(){var e=Object(s.useState)({}),c=Object(u.a)(e,2),t=c[0],i=c[1],a=Object(s.useState)([]),n=Object(u.a)(a,2),r=n[0],l=n[1],j=window.location.search.split("=")[1];Object(s.useEffect)((function(){fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+j).then((function(e){return e.json()})).then((function(e){return i(e),l(e.photos),e}))}),[]),console.log(t),console.log(r);var d=Object(m.jsx)("img",{src:t.preview,className:"main_image",alt:"Product_image"}),o=function(e){return console.log(e),k()(".main_image").addClass(" main_image"),k()(".preview_img img").removeClass("active-image"),k()("#"+e.target.id).addClass("active-image"),k()(".main_image").attr("src",e.target.currentSrc)},h=Object(m.jsxs)("div",{className:"product_description",children:[Object(m.jsx)("h1",{className:"name",children:t.name}),Object(m.jsx)("h4",{className:"brand",children:t.brand}),Object(m.jsxs)("h3",{className:"price",children:["Price: Rs",t.price]}),Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("h3",{children:"Description"}),Object(m.jsx)("p",{className:"desc",children:t.description})]}),Object(m.jsxs)("div",{className:"product_preview",children:[Object(m.jsx)("h3",{children:"Product Preview"}),Object(m.jsx)("div",{className:"preview_img",children:r.map((function(e,c){return Object(m.jsx)("img",{id:c,src:e,className:"preImg",alt:"Preview_Images",onClick:o},e.id)}))})]})]});return Object(m.jsx)(s.Fragment,{children:Object(m.jsxs)("section",{className:"product_details",children:[Object(m.jsx)("div",{className:"left_section",children:d}),Object(m.jsxs)("div",{className:"right_section",children:[h,Object(m.jsx)(A,{data:t})]}),Object(m.jsx)(O,{})]})})},E=(t(51),function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"order_block",children:[Object(m.jsx)("img",{src:"https://shoplane.netlify.app/img/img_confirm.png",alt:"ordered_Image"}),Object(m.jsx)("h3",{children:"Order Placed Successfully"}),Object(m.jsx)("p",{children:"We have sent you an email with the order details"})]}),Object(m.jsx)(O,{})]})}),S=t(6),P=t.n(S),y=t(23),I=t(15),T=function(){var e=Object(r.c)((function(e){return e.totalQuantity}));return Object(m.jsxs)("div",{className:P.a.top_bar,children:[Object(m.jsx)("div",{children:Object(m.jsx)(l.b,{to:"/",className:P.a.navlink,children:Object(m.jsxs)("h4",{className:P.a.logo,children:[Object(m.jsx)("span",{className:P.a.logo_color,children:"SHOP"}),"LANE"]})})}),Object(m.jsxs)("div",{className:P.a.center_nav,children:[Object(m.jsx)("div",{className:P.a.home,children:Object(m.jsx)(l.b,{to:"/",activeClassName:P.a.active,className:P.a.navlink,children:"HOME"})}),Object(m.jsx)("div",{className:P.a.clothing_nav,children:Object(m.jsx)(l.b,{to:"/",activeClassName:P.a.active,className:P.a.navlink,children:"CLOTHING"})}),Object(m.jsx)("div",{className:P.a.accessoires,children:Object(m.jsx)(l.b,{to:"/",activeClassName:P.a.active,className:P.a.navlink,children:"ACCESSORIES"})})]}),Object(m.jsxs)("div",{className:P.a.right_nav,children:[Object(m.jsx)("div",{className:P.a.icons,children:Object(m.jsx)(y.a,{icon:I.a})}),Object(m.jsx)("div",{className:P.a.icons,children:Object(m.jsxs)(l.b,{to:"/checkout",className:P.a.link,children:[Object(m.jsx)(y.a,{icon:I.b}),Object(m.jsx)("div",{className:P.a.cart_count,children:Object(m.jsx)("p",{children:e})})]})}),Object(m.jsx)("div",{className:P.a.icons,children:Object(m.jsx)(y.a,{icon:I.c})})]})]})},R=function(){return Object(m.jsx)(s.Fragment,{children:Object(m.jsxs)("div",{className:"main_wrap",children:[Object(m.jsx)("header",{children:Object(m.jsx)(T,{})}),Object(m.jsx)("main",{children:Object(m.jsxs)(n.c,{children:[Object(m.jsx)(n.a,{path:"/",exact:!0,children:Object(m.jsx)(f,{})}),Object(m.jsx)(n.a,{path:"/product_detail",children:Object(m.jsx)(C,{})}),Object(m.jsx)(n.a,{path:"/checkout",children:Object(m.jsx)(x,{})}),Object(m.jsx)(n.a,{path:"/order",children:Object(m.jsx)(E,{})})]})})]})})},L=Object(j.a)({reducer:b.reducer});a.a.render(Object(m.jsx)(l.a,{children:Object(m.jsx)(r.a,{store:L,children:Object(m.jsx)(R,{})})}),document.getElementById("root"))},6:function(e,c,t){e.exports={top_bar:"Navigation_top_bar__3Rpdj",navlink:"Navigation_navlink__1ZBHs",logo:"Navigation_logo__26snu",logo_color:"Navigation_logo_color__2_va6",center_nav:"Navigation_center_nav__3CoTJ",active:"Navigation_active__w0OIt",right_nav:"Navigation_right_nav__3rmlh",icons:"Navigation_icons__1IFNM",link:"Navigation_link__2GOrg",cart_count:"Navigation_cart_count__1FSZE"}},7:function(e,c,t){e.exports={Products:"Products_Products__1wtRA",single_preview:"Products_single_preview__QaAVC",clothing:"Products_clothing__2DvA9",accessories:"Products_accessories__1dnZL",preview_img:"Products_preview_img__myaR3",description:"Products_description__1_ALq",name:"Products_name__13-G9",brand:"Products_brand__3U9QD",price:"Products_price__1kiWT",link:"Products_link__kISTc"}}},[[55,1,2]]]);
//# sourceMappingURL=main.5c70d853.chunk.js.map