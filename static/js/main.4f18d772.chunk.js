(window["webpackJsonpcart-widget"]=window["webpackJsonpcart-widget"]||[]).push([[0],{16:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAflBMVEUqKioAAAAhISEeHh4SEhIKCgomJiYYGBgODg4cHBzJyckaGhrV1dXb29snJyd3d3fh4eGrq6uBgYGioqIyMjKNjY3IyMjPz8+Hh4e2traZmZlOTk7f3998fHxvb29ERERgYGDq6uqlpaU9PT1UVFRHR0c4ODjx8fGUlJS/v7/cAxghAAACx0lEQVR4nO3W63LiOBCAUesu3+1AcIBgwoQkk/d/wW0J2MpkZ2eLXyxV36lK2ZbaEDVSS0UBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAvG2NAV2p+fTZ0v3pbeWF/o0ghfnFqLUv501D6EFKNzWy0Bwab7HGu69JnB+u/f9L9lDqtqWvsw9qcBlZsqykXvq2Zqqn1YtFVVTQ+qLTpp9o0twkszTe0YOv2wSCmx05RCXmxhq3y3Vemdan83SdCtsuphUpccxHZ67Qq/PRyl/fhT2pW1VrvhlIM26v556aJ6aq15WKTZERsTbVw2T2VsdJRg7wZl3fYQbzqwK+hW/lU1XHKg53EeQ+Get0aevKnHXW7/OwcuHMr0A7sfm3jJwVK6vDoULt+lYCefmXJ5H77lwE1vboj+rVGn7nrsY1lqGVYuDKFV/dqmjm75rL7moKg3P1XT1aVkSOZBp9WgbzWma+W18Lg658C/Ni6MO7sbw6m7/rHebDa9rIXHrFWbR5N74vBrDvS8VpPEbo6yFor34+qxvNWYrlV+VFWzLs81MaTlv2zUlxws5rl/kWH1c9/3859z0PQSvO/cMK6G9/pWQ7pamgcxpDmfcqA+1uLj9etaCFqn6e21KP9jLRQS06W1oD5395SDXL5POdC7UYXg5Bcd9nlp1L+rieZfauLya010w/aO6sE5B7OKUbW5lqvBHg9vzqqX9T/3RpP2RikheW+Ud6JLO+K3vdEV/v1g7mZfaHIOysVzIz7PD09220yr6XMpZ6TVb85Iq3a0ne4Pk7zTycFo9csZyaW8mrkKNx3ZFU4VrtDplKsvJ2I5JUW/LK2coU2qA/4Sli5aumw+K6ftUncpwuazco6VgpCD9d2shT+4l6kMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4A78BZguJ4gTSPhNAAAAAElFTkSuQmCC"},20:function(t,e,a){t.exports=a(45)},25:function(t,e,a){},26:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),s=(a(25),a(17)),i=a(12),m=a(13),o=a(18),u=a(14),d=a(19),A=(a(26),a(15)),E=a.n(A),p=(a(44),a(16)),f=a.n(p),v=function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"cart-header-title"},c.a.createElement("h5",{className:"m-0 text-center"},"All Items")),c.a.createElement("div",{className:"row"},t.cartData.map(function(e,a){var n=e.price*e.discount/100;return c.a.createElement("div",{key:a,className:"col-md-6"},c.a.createElement("div",{className:"card-deck"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-img",style:{backgroundImage:"url(".concat(f.a,")")}},e.discount&&c.a.createElement("span",{className:"discount"},e.discount,"% OFF")),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.name)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("div",null,c.a.createElement("small",{className:"text-muted ".concat(e.discount?"line-through":"price")},"$",e.price),e.discount?c.a.createElement("span",{className:"text-muted ml-2 price"},"$",e.price-n):""),c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return t.handleAddItemToCart(e,n)}},"Add To Cart")))))}))))},h=function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"cart-header-title"},c.a.createElement("h5",{className:"m-0 text-center"},"checkout")),c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",null,"Items(",t.orderData.totalItems,")"),c.a.createElement("p",null,"$",t.orderData.totalPrice)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",null,"Discount"),c.a.createElement("p",null,"-$",t.orderData.totalDiscount)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",null,"Type Discount"),c.a.createElement("p",null,"-$0"))),c.a.createElement("div",{className:"card-footer d-flex justify-content-between"},c.a.createElement("p",{className:"m-0"},"Order Total"),c.a.createElement("h5",{className:"m-0"},"$",t.orderData.totalPrice-t.orderData.totalDiscount))))))},b=function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-header-title"},c.a.createElement("h5",{className:"m-0 text-center"},"Cart")),c.a.createElement("div",{className:"cart-summary"},c.a.createElement("table",{className:"table table-bordered table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Items"),c.a.createElement("th",null,"Quantity"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,!t.items.length&&t.noItems,t.items&&t.items.map(function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,e.name),c.a.createElement("td",null,c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{className:"btn btn-sm btn-success",onClick:function(){return t.addQuantityHandler(e)}},"+"),c.a.createElement("button",{className:"btn btn-outline-success quantity"},e.quantity),c.a.createElement("button",{className:"btn btn-sm btn-success",onClick:function(){return t.subtractQuantityHandler(e)}},"-"))),c.a.createElement("td",null,"$",e.priceAfterDiscount),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return t.removeItemHandler(e)}},"Remove")))})))))},y=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={cartData:[],items:[],totalItems:0,totalPrice:0,totalDiscount:0},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.getCartData()}},{key:"getCartData",value:function(){var t=this;E.a.get("https://api.myjson.com/bins/qhnfp").then(function(e){e.data.map(function(t){return t.quantity=1}),t.setState({cartData:Object(s.a)(e.data)})}).catch(function(t){console.log("error",t.message)})}},{key:"addItemToCart",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.discountAmount=e,t.priceBeforeDiscount=t.price,t.priceAfterDiscount=t.price-e;var a=!1;this.state.items.map(function(e){return e.id===t.id&&(a=!0),!0}),a?this.addQuantity(t):this.setState({items:this.state.items.concat([t]),totalItems:this.state.items.length+1,totalPrice:this.state.totalPrice+t.priceBeforeDiscount,totalDiscount:this.state.totalDiscount+e})}},{key:"removeItem",value:function(t){this.setState({items:this.state.items.filter(function(e){return e.id!==t.id}),totalItems:this.state.items.length-1,totalPrice:this.state.totalPrice-t.price*t.quantity,totalDiscount:this.state.totalDiscount-t.discountAmount*t.quantity}),t.quantity=1}},{key:"addQuantity",value:function(t){var e=this;this.setState(function(a){var n=Object.assign([],a.items);return n.map(function(e){return e.id===t.id&&(e.quantity++,e.priceAfterDiscount=(e.price-e.discountAmount)*e.quantity,t.priceBeforeDiscount=e.price*e.quantity),!0}),{items:n,totalPrice:e.state.totalPrice+t.price,totalDiscount:e.state.totalDiscount+t.discountAmount}})}},{key:"subtractQuantity",value:function(t){var e=this;this.setState(function(a){var n=Object.assign([],a.items);return n.map(function(e){return e.id===t.id&&(e.quantity--,e.priceAfterDiscount=(e.price-e.discountAmount)*e.quantity,t.priceBeforeDiscount=e.price*e.quantity,e.quantity<1&&(n=n.filter(function(e){return e.id!==t.id}),e.quantity=1)),!0}),{items:n,totalItems:n.length,totalPrice:e.state.totalPrice-t.price,totalDiscount:e.state.totalDiscount-t.discountAmount}})}},{key:"render",value:function(){var t=this,e=this.state,a=e.cartData,n=e.items,r=e.totalItems,l=e.totalPrice,s=e.totalDiscount,i=c.a.createElement("tr",null,c.a.createElement("td",{className:"text-center",colSpan:"4"},"No items added"));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-App"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"cart-title"},"Cart App"),c.a.createElement(b,{items:n,noItems:i,addQuantityHandler:function(e){return t.addQuantity(e)},subtractQuantityHandler:function(e){return t.subtractQuantity(e)},removeItemHandler:function(e){return t.removeItem(e)}}),c.a.createElement("div",{className:"row"},c.a.createElement(v,{cartData:a,handleAddItemToCart:function(e,a){return t.addItemToCart(e,a)}}),c.a.createElement(h,{orderData:{totalItems:r,totalDiscount:s,totalPrice:l}})))))}}]),e}(c.a.Component);l.a.render(c.a.createElement(y,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4f18d772.chunk.js.map