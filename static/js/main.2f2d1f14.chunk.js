(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(2),c=a(3),l=a(5),o=a(4),s=a(6),i=a(0),u=a.n(i),m=a(28),p=a.n(m);a(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(10),h=a(22),E=a(14),f=a(11),b=a(12),v=(a(65),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a.openMenu=function(){document.getElementsByClassName("navigation-menu")[0].classList.toggle("open")},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.cartValue.length>0&&document.getElementsByClassName("cartContainer")[0].classList.remove("hidden-cart")}},{key:"render",value:function(){var e=this.props.cartValue.length;return u.a.createElement("header",null,u.a.createElement("div",{className:"container header-container"},u.a.createElement(d.b,{to:"/"},u.a.createElement("div",{className:"logo"},u.a.createElement("p",{className:"first"},u.a.createElement("span",null,"C"),"LOTHES"),u.a.createElement("p",{className:"second"},u.a.createElement("span",null,"S"),"HOP"))),u.a.createElement("nav",{className:"navigation-menu"},u.a.createElement(d.b,{to:"#"},"PRODUCTS"),u.a.createElement(d.b,{to:"#"},"STORE"),u.a.createElement(d.b,{to:"#"},"DESIGNER"),u.a.createElement(d.b,{to:"#"},"CONTACT"),u.a.createElement(d.b,{to:"/login"},u.a.createElement(f.a,{icon:b.h})),u.a.createElement(d.b,{to:"/cart",className:"cartContainer hidden-cart","data-after-content":e},u.a.createElement(f.a,{icon:b.f})),u.a.createElement(d.b,{to:"/register"},u.a.createElement(f.a,{icon:b.e}))),u.a.createElement("div",{className:"button",onClick:this.openMenu})))}}]),t}(i.Component)),g=Object(E.b)(function(e){return{cartValue:e.cart}})(v),O=(a(67),a(50)),y=a.n(O),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"my-jumbotron"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"product"},u.a.createElement("p",null,"The Latest Product from Clothes Shop"),u.a.createElement("h2",{className:"price"},u.a.createElement("span",null,"$"),"99"),u.a.createElement("h2",{className:"product-title"},"clothes shop"),u.a.createElement("button",{className:"product-button"},"shop"),u.a.createElement("img",{src:y.a,alt:""}))))}}]),t}(i.Component),N=u.a.createContext(null),w=(u.a.createContext(null),function(e){return function(t){return u.a.createElement(N.Consumer,null,function(a){return u.a.createElement(e,Object.assign({},t,{firebase:a}))})}}),C=a(27),k=a.n(C),S=(a(70),a(72),a(105),{apiKey:"AIzaSyCCvIIUIs_zQU-ewfNjUq48q83VZPaF0PA",authDomain:"commerce-46380.firebaseapp.com",databaseURL:"https://commerce-46380.firebaseio.com",projectId:"commerce-46380",storageBucket:"commerce-46380.appspot.com",messagingSenderId:"886954032992",appId:"1:886954032992:web:c1eb47e7c5def775"}),T=function e(){var t=this;Object(r.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.database=function(e){return t.db.ref(e)},this.storage=function(e){return t.stor.ref(e)},k.a.initializeApp(S),this.auth=k.a.auth(),this.db=k.a.database(),this.stor=k.a.storage()},A=(a(75),a(76),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a.redirect=function(e){a.props.history.push("/product/".concat(e))},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.name,r=t.description,c=t.url;return u.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 cart-product",onClick:function(){return e.redirect(a)}},u.a.createElement("h2",null,n),u.a.createElement("p",null,r.slice(0,40).concat("...")),u.a.createElement("img",{src:c,alt:""}),u.a.createElement("p",{className:"price"},u.a.createElement("span",null,"$"),"99"),u.a.createElement("div",{className:"search-icon"},u.a.createElement(f.a,{icon:b.e})))}}]),t}(i.Component)),D=Object(h.f)(A),P=w(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={products:[]},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];this.props.firebase.database("products").limitToLast(8).once("value").then(function(a){a.forEach(function(e){var a={name:e.val().name,description:e.val().description,key:e.key,url:e.val().url,id:e.key};t.push(a)}),e.setState({products:t})})}},{key:"render",value:function(){return u.a.createElement("main",null,u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"container-title"},u.a.createElement("h2",null,"Popular arrival"),u.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam rerum sint temporibus deserunt quis maiores dolorum! Tempore adipisci doloribus consequatur delectus labore")),u.a.createElement("div",{className:"row cart-container"},this.state.products.map(function(e){return u.a.createElement(D,{key:e.key,name:e.name,description:e.description,url:e.url,id:e.id})}))))}}]),t}(i.Component)),U=(a(77),w(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={products:[]},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];this.props.firebase.database("products").limitToLast(4).once("value").then(function(a){a.forEach(function(e){t.push({name:e.val().name,description:e.val().description,url:e.val().url,key:e.key})}),e.setState({products:t})})}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"container-title"},u.a.createElement("h2",null,"New arrival"),u.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam rerum sint temporibus deserunt quis maiores dolorum! Tempore adipisci doloribus consequatur delectus labore")),u.a.createElement("div",{className:"row cart-container"},this.state.products.map(function(e){return u.a.createElement("div",{key:e.key,className:"col-lg-3 col-md-3 col-sm-6 new-product"},u.a.createElement("img",{src:e.url,alt:""}),u.a.createElement("h2",null,e.name),u.a.createElement("p",{className:"short-description"},e.description.slice(0,40).concat("...")),u.a.createElement("p",{className:"price"},u.a.createElement("span",null,"$"),"99"))})))}}]),t}(i.Component))),H=(a(78),function(){return u.a.createElement("div",{className:"cnowledge"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"container-title"},u.a.createElement("h2",null,"knowledge share"),u.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam rerum sint temporibus deserunt quis maiores dolorum! Tempore adipisci doloribus consequatur delectus labore")),u.a.createElement("div",{className:"row"},[1,2].map(function(e){return u.a.createElement("div",{key:e,className:"col-lg-6 calendar"},u.a.createElement("div",{className:"calendar-element"},u.a.createElement("p",{className:"month"},"september"),u.a.createElement("h2",null,"29"),u.a.createElement("h3",null,"Lorem ipsum dolor"),u.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laboriosam a. Rem, voluptas obcaecati ab nisi reprehenderit numquam nostrum similique inventore consequatur")))}))))}),L=(a(79),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"newsletter"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"container-title"},u.a.createElement("h2",null,"knowledge share"),u.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi")),u.a.createElement("div",{className:"form-container"},u.a.createElement("form",{action:""},u.a.createElement("input",{type:"email",placeholder:"Enter your email address"}),u.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault()}},"send me")))))}}]),t}(i.Component)),R=(a(80),function(){return u.a.createElement("footer",null,u.a.createElement("div",{className:"container footer-container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:" col-md-3"},u.a.createElement("h1",null,"Clothes Shop"),u.a.createElement("p",{className:"icon-paragraph"},u.a.createElement(f.a,{className:"icon",icon:b.c}),"Street No.12, Newyork 12, MD-123 USA."),u.a.createElement("p",{className:"icon-paragraph"},u.a.createElement(f.a,{className:"icon",icon:b.d}),"123-123-123"),u.a.createElement("p",{className:"icon-paragraph"},u.a.createElement(f.a,{className:"icon",icon:b.b}),"info@clothesshop.com")),u.a.createElement("div",{className:" col-md-3"},u.a.createElement("h2",null,"Helpful links"),u.a.createElement("p",null,"Products"),u.a.createElement("p",null,"Find a Store"),u.a.createElement("p",null,"Features"),u.a.createElement("p",null,"Privacy Policy"),u.a.createElement("p",null,"Blog"),u.a.createElement("p",null,"Press Kit")),u.a.createElement("div",{className:" col-md-3"},u.a.createElement("h2",null,"shop"),u.a.createElement("p",null,"About Us"),u.a.createElement("p",null,"Career"),u.a.createElement("p",null,"Shipping Methods"),u.a.createElement("p",null,"Contact"),u.a.createElement("p",null,"Support"),u.a.createElement("p",null,"Retailer")),u.a.createElement("div",{className:"col-md-3"},u.a.createElement("h2",null,"my account"),u.a.createElement("p",null,"Login"),u.a.createElement("p",null,"My Account"),u.a.createElement("p",null,"My Cart"),u.a.createElement("p",null,"Wishlist"),u.a.createElement("p",null,"Checkout")))))}),_=(a(81),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={scrollButton:!1},a.windowScrollControl=function(){var e=document.getElementById("scrollTop");document.documentElement.scrollTop>window.innerHeight?e.classList.add("show"):e.classList.remove("show")},a.scrollToTop=function(e,t){var a=document.documentElement,n=document.body,r=Math.round(n.scrollTop||a.scrollTop),c=e,l=setInterval(function(){var o,s;if(c>=0){var i=r*(1-(s=t,(o=(e-c)/e)<.5?.5*Math.pow(2*o,s):.5*(2-Math.pow(2*(1-o),s))));n.scrollTop=i,a.scrollTop=i,c--}else clearInterval(l)},1)},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.onscroll=this.windowScrollControl}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(g,null),u.a.createElement(j,null),u.a.createElement(P,null),u.a.createElement(U,null),u.a.createElement(H,null),u.a.createElement(L,null),u.a.createElement(R,null),u.a.createElement("button",{className:"scrrol-to-up ",id:"scrollTop",onClick:function(){return e.scrollToTop(300,3)}},u.a.createElement(f.a,{icon:b.a})))}}]),t}(i.Component)),I=(a(82),function(e){return{type:"ADD_USER",user:e}}),M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).testFunction=function(){a.props.addUser("name")},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"container register-container"},u.a.createElement(g,null),u.a.createElement("button",{onClick:this.testFunction},"test"))}}]),t}(i.Component),q={addUser:I},B=Object(E.b)(function(e){return{user:e}},q)(M),F=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a.renderList=function(e){var t=e.name,a=e.picture,n=t.title,r=t.first,c=t.last,l=a.thumbnail,o="".concat(n," ").concat(r," ").concat(c);return u.a.createElement("li",{key:o},u.a.createElement("p",null,o),u.a.createElement("img",{src:l,alt:""}))},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.users?u.a.createElement("ul",null,this.props.users.map(function(t){return e.renderList(t)})):u.a.createElement("p",null,"data loading")}}]),t}(i.Component),x=a(51),V=a.n(x),W=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={users:""},a.getData=function(){V.a.get("https://randomuser.me/api/?results=10").then(function(e){return a.setState({users:e.data.results})})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("button",{onClick:this.getData},"reload"),u.a.createElement(F,{users:this.state.users}))}}]),t}(i.Component),X=a(20),Y=a(30),$={email:"",password:"",error:null,authUser:null},z=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state=Object(n.a)({},$),a.changeHandler=function(e){var t=e.currentTarget.name;a.setState(Object(X.a)({},t,e.currentTarget.value))},a.submit=function(e){var t=a.state,r=t.email,c=t.password;a.props.firebase.doSignInWithEmailAndPassword(r,c).then(function(){a.setState(Object(n.a)({},$)),a.props.history.push("/")}).catch(function(e){a.setState({error:e.message})}),e.preventDefault()},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,r=!t||!a;n&&document.getElementsByClassName("hidden")[0].classList.remove("hidden");return u.a.createElement("div",{className:"login-form"},u.a.createElement("h2",null,"Login"),u.a.createElement("form",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",value:t,onChange:this.changeHandler})),u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{className:"form-control",type:"password",name:"password",placeholder:"Password",value:a,onChange:this.changeHandler})),u.a.createElement("button",{disabled:r,type:"submit",onClick:this.submit,className:"form-button"},"Sign In"),u.a.createElement("p",{className:"hidden"},"error message: ",n)))}}]),t}(i.Component),J=Object(Y.a)(h.f,w)(z),K={username:"",email:"",password:"",error:null},G=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state=Object(n.a)({},K),a.changeHandler=function(e){var t=e.currentTarget.name;a.setState(Object(X.a)({},t,e.currentTarget.value))},a.submit=function(e){var t=a.state,n=t.username,r=t.email,c=t.password;e.preventDefault(),a.props.firebase.doCreateUserWithEmailAndPassword(r,c).then(function(e){a.props.firebase.user(e.user.uid).set({username:n,email:r}),a.props.history.push("/")}).catch(function(e){a.setState({error:e.message})})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password,r=!t||!a||!n;if(this.state.error){var c=document.getElementsByClassName("hidden");c[0]&&c[0].classList.remove("hidden")}return u.a.createElement("div",{className:"login-form"},u.a.createElement("h2",null,"Register"),u.a.createElement("form",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{className:"form-control",type:"text",name:"username",placeholder:"Name",value:this.state.username,onChange:this.changeHandler})),u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{className:"form-control",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.changeHandler})),u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{className:"form-control",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler})),u.a.createElement("button",{disabled:r,type:"submit",onClick:this.submit,className:"form-button"},"Sign Up"),u.a.createElement("p",{className:"hidden"},"error message: ",this.state.error)))}}]),t}(i.Component),Q=Object(Y.a)(h.f,w)(G),Z=(a(99),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,null),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row form-container"},u.a.createElement("div",{className:"col-md-6 login"},u.a.createElement(J,null)),u.a.createElement("div",{className:"col-md-6"},u.a.createElement(Q,null)))),u.a.createElement(L,null),u.a.createElement(R,null))}}]),t}(i.Component)),ee=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changeHandler,a=e.name,n=e.description,r=e.url,c=e.sendProduct,l=e.imageHandler;return u.a.createElement("div",{className:"admin-form"},u.a.createElement("p",null,"create products:"),u.a.createElement("img",{src:r,alt:"there "}),u.a.createElement("form",{onSubmit:c},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"productImage"},"image"),u.a.createElement("input",{type:"file",className:"form-control-file picture",id:"productImage",onChange:l,accept:"image/png, image/jpeg",required:!0})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"productName"},"Product Name"),u.a.createElement("input",{type:"text",className:"form-control",id:"productName",value:a,onChange:t,placeholder:"Enter name",name:"name",required:!0})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"productDescription"},"Description:"),u.a.createElement("textarea",{className:"form-control",id:"productDescription",placeholder:"Enter description",value:n,onChange:t,name:"description",rows:"3",required:!0})),u.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),t}(i.Component),te=(a(100),w(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={url:"",name:"",description:""},a.sendProduct=function(e){e.preventDefault(),a.props.firebase.database("products").push().set({url:a.state.url,name:a.state.name,description:a.state.description})},a.changeHandler=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;a.setState(Object(X.a)({},t,n))},a.imageHandler=function(e){var t=e.currentTarget.files[0],n=Math.floor(1e3*Math.random()),r="".concat(n).concat(t.name);a.props.firebase.storage().child("".concat(n).concat(t.name)).put(t).on("state_changed",function(e){},function(e){console.log(e)},function(){a.props.firebase.storage(r).getDownloadURL().then(function(e){a.setState({url:e})})})},a.isAuth=function(){return a.props.user?"admin"===a.props.user.role?u.a.createElement(ee,{changeHandler:a.changeHandler,name:a.state.name,description:a.state.description,url:a.state.url,sendProduct:a.sendProduct,imageHandler:a.imageHandler}):u.a.createElement(h.a,{to:"/login"}):u.a.createElement("p",null,"loading")},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,null),u.a.createElement("div",{className:"container"},this.isAuth()))}}]),t}(i.Component))),ae=Object(E.b)(function(e){return Object(n.a)({},e.user)})(te),ne=(a(101),w(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={id:"",name:"",description:"",url:""},a.buyFunction=function(e){if(a.state.id){var t=a.state,n=t.id,r=t.name,c=t.description,l=t.url;a.props.addCart({id:n,name:r,description:c,url:l}),a.props.history.push("/")}},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.database("products/".concat(this.props.match.params.id)).once("value").then(function(t){e.setState({id:t.key,name:t.val().name,description:t.val().description,url:t.val().url})})}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,null),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row product-container"},u.a.createElement("div",{className:"col-md-4 picture-container"},u.a.createElement("img",{src:this.state.url,alt:""})),u.a.createElement("div",{className:"col-md-8 description-container"},u.a.createElement("h2",null,this.state.name),u.a.createElement("p",null,"description:"),u.a.createElement("p",null,this.state.description)),u.a.createElement("button",{onClick:this.buyFunction},"Buy"))),u.a.createElement(L,null),u.a.createElement(R,null))}}]),t}(i.Component))),re={addCart:function(e){return{type:"ADD_PRODUCT",cart:e}}},ce=Object(E.b)(function(e){return{cart:e.cart}},re)(ne),le=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.props.carts.map(function(t,a){return u.a.createElement("div",{key:a,className:"row cart"},u.a.createElement("div",{className:"col-3 picture"},u.a.createElement("img",{src:t.url,alt:""})),u.a.createElement("div",{className:"col-9 text"},u.a.createElement("p",null,"Title: ",t.name),u.a.createElement("p",null,"Value: ",t.value),u.a.createElement("button",{onClick:function(){return e.props.removeHandler(t.id)}},u.a.createElement(f.a,{icon:b.g}))))}))}}]),t}(i.Component),oe=(a(102),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={isBought:!1},a.removeHandler=function(e){a.props.removeProduct(e)},a.buyHandler=function(){a.props.cart.length&&(a.props.buyProduct(),a.setState({isBought:!0}),setTimeout(function(){a.props.history.push("/")},5e3))},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,null),u.a.createElement("div",{className:"container carts-container"},u.a.createElement("h2",null,"Cart:"),this.state.isBought&&u.a.createElement("div",null,u.a.createElement("p",null,"You just bought in our Shop"),u.a.createElement("p",null,"You will be redirect to home page in 5s")),!this.state.isBought&&u.a.createElement(le,{carts:this.props.cart,removeHandler:this.removeHandler}),u.a.createElement("button",{className:"buy-button",onClick:this.buyHandler},"Buy")),u.a.createElement(L,null),u.a.createElement(R,null))}}]),t}(i.Component)),se={removeProduct:function(e){return{type:"REMOVE_PRODUCT",cart:e}},buyProduct:function(){return{type:"BUY_PRODUCT"}}},ie=Object(E.b)(function(e){return{cart:e.cart}},se)(oe),ue=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(h.b,{exact:!0,path:"/",component:_}),u.a.createElement(h.b,{path:"/register",component:B}),u.a.createElement(h.b,{path:"/users",component:W}),u.a.createElement(h.b,{path:"/login",component:Z}),u.a.createElement(h.b,{path:"/product/:id",component:ce}),u.a.createElement(h.b,{path:"/cart",component:ie}),u.a.createElement(h.b,{path:"/admin",component:ae}))}}]),t}(i.Component),me=(a(103),a(24)),pe=Object(me.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return{user:t.user};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":if(e[0]){var a=e,r=a.findIndex(function(e){return e.id===t.cart.id});return-1!==r?(a[r].value++,a):(a.push(Object(n.a)({},t.cart,{value:1})),a)}return e.push(Object(n.a)({},t.cart,{value:1})),e;case"REMOVE_PRODUCT":return e.filter(function(e){return e.id!==t.cart});case"BUY_PRODUCT":return[];default:return e}}}),de=Object(me.c)(pe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),he=w(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={auth:null,user:null},a.getUser=function(){a.props.firebase.database("users/"+a.state.auth.uid).once("value").then(function(e){a.props.addUser(e.val())})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged(function(t){e.setState({auth:t}),t?e.getUser():e.setState({user:null})})}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(ue,null))}}]),t}(i.Component)),Ee={addUser:I},fe=Object(E.b)(function(e){return Object(n.a)({},e.user)},Ee)(he);p.a.render(u.a.createElement(E.a,{store:de},u.a.createElement(N.Provider,{value:new T},u.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,a){e.exports=a.p+"static/media/jumbotron.f805fc80.png"},53:function(e,t,a){e.exports=a(104)},58:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},99:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.2f2d1f14.chunk.js.map