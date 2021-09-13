(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(20),o=n.n(i),a=(n(27),n(4)),s=n(5),u=n(7),h=n(6),j=n(9),d=n(2),b=(n(28),n(12)),l=n.n(b),m=n(13);function p(t,e){var n="".concat("https://api.themoviedb.org/3","/trending/").concat(t,"/").concat(e,"?api_key=").concat("c3df5a3d5b89cc698ddf2b6481fb989c");return fetch(n).then((function(t){return t.json()}))}var v=n(0),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={movies:[]},t.mounted=!1,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,p("movie","day").then((function(t){e.mounted&&e.setState({movies:t.results})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.mounted&&Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Trending today"}),Object(v.jsx)("ul",{children:this.state.movies.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}}]),n}(r.a.Component);function O(t){var e="".concat("https://api.themoviedb.org/3","/search/movie/?query=").concat(t,"&api_key=").concat("c3df5a3d5b89cc698ddf2b6481fb989c");return fetch(e).then((function(t){return t.json()}))}var x=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={movies:[],query:""},t.onSubmit=function(e){e.preventDefault(),O(t.state.query).then((function(e){t.setState({movies:e.results})}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{onChange:function(e){t.setState({query:e.currentTarget.value})},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),Object(v.jsx)("button",{type:"submit",children:"Search"})]}),Object(v.jsx)("ul",{children:this.state.movies.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}}]),n}(r.a.Component);function y(t){var e="".concat("https://api.themoviedb.org/3","/movie/").concat(t,"?api_key=").concat("c3df5a3d5b89cc698ddf2b6481fb989c");return fetch(e).then((function(t){return t.json()}))}n(36);function g(t){var e="".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/credits?api_key=").concat("c3df5a3d5b89cc698ddf2b6481fb989c");return fetch(e).then((function(t){return t.json()}))}var w=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={cast:[]},t.mounted=!1,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,g(this.props.match.params.movieId).then((function(t){e.mounted&&e.setState({cast:t.cast})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.mounted&&Object(v.jsx)("div",{children:Object(v.jsx)("ul",{children:this.state.cast.map((function(t){return Object(v.jsxs)("li",{children:[t.profile_path?Object(v.jsx)("img",{src:"".concat("https://image.tmdb.org","/t/p/w200").concat(t.profile_path),alt:""}):Object(v.jsx)("p",{children:"No image for this actor"}),Object(v.jsx)("p",{children:t.name}),Object(v.jsx)("p",{children:"Character: ".concat(t.character)})]},t.id)}))})})}}]),n}(r.a.Component);function k(t){var e="".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/reviews?api_key=").concat("c3df5a3d5b89cc698ddf2b6481fb989c");return fetch(e).then((function(t){return t.json()}))}var C=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={reviews:[]},t.mounted=!1,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,k(this.props.match.params.movieId).then((function(t){e.mounted&&e.setState({reviews:t.results})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.mounted&&Object(v.jsx)("ul",{children:0===this.state.reviews.length?Object(v.jsx)("p",{children:"No rewiews for this movie."}):this.state.reviews.map((function(t){return Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:t.author}),Object(v.jsx)("br",{}),t.content]},t.id)}))})}}]),n}(r.a.Component),S=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={movie:{}},t.mounted=!1,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,y(this.props.match.params.movieId).then((function(t){e.mounted&&e.setState({movie:t})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.mounted&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("button",{children:Object(v.jsx)(j.b,{to:"/",children:"Go back"})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"details",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"".concat("https://image.tmdb.org","/t/p/w400").concat(this.state.movie.backdrop_path),alt:""})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"".concat(this.state.movie.title," (").concat(this.state.movie.release_date,")")}),Object(v.jsx)("p",{children:"User Score: ".concat(this.state.movie.popularity,"%")}),Object(v.jsx)("h4",{children:"Overview"}),Object(v.jsx)("p",{children:this.state.movie.overview}),Object(v.jsx)("h4",{children:"Genres"}),Object(v.jsx)("p",{children:this.state.movie.genres.reduce((function(t,e){return t+" "+e.name}),"")})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Additional information"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/movies/".concat(this.props.match.params.movieId,"/cast"),children:"Cast"})}),Object(v.jsx)("li",{children:Object(v.jsx)(j.b,{to:"/movies/".concat(this.props.match.params.movieId,"/reviews"),children:"Reviews"})})]})]}),Object(v.jsx)(d.b,{path:"/movies/:movieId/cast",component:w}),Object(v.jsx)(d.b,{path:"/movies/:movieId/reviews",component:C})]})}}]),n}(r.a.Component),I=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{children:Object(v.jsx)(j.b,{to:"/",children:"Home"})}),Object(v.jsx)("button",{children:Object(v.jsx)(j.b,{to:"/movies",children:"Movies"})})]})}}]),n}(r.a.Component),_=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(j.a,{children:[Object(v.jsx)(d.b,{component:I}),Object(v.jsx)(d.b,{path:"/",exact:!0,component:f}),Object(v.jsx)(d.b,{path:"/movies",exact:!0,component:x}),Object(v.jsx)(d.b,{path:"/movies/:movieId",component:S}),Object(v.jsx)(d.a,{to:"/"})]})}}]),n}(r.a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.e2be3991.chunk.js.map