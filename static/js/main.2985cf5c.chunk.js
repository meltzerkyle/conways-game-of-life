(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(4),i=a.n(o),r=(a(21),a(23),a(5)),s=a(6),c=a(8),u=a(7),d=a(9),g=a(3),m=(a(25),a(27),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).selectBox=function(){a.props.selectBox(a.props.row,a.props.col)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.boxClass,id:this.props.id,onClick:this.selectBox})}}]),t}(n.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=14*this.props.cols+1,t=[],a="",n=0;n<this.props.rows;n++)for(var o=0;o<this.props.cols;o++){var i=n+"_"+o;a=this.props.gridFull[n][o]?"box on":"box off",t.push(l.a.createElement(m,{boxClass:a,key:i,boxId:i,row:n,col:o,selectBox:this.props.selectBox}))}return l.a.createElement("div",{className:"grid",style:{width:e}},t)}}]),t}(n.Component);a(29);var h=function(e){return JSON.parse(JSON.stringify(e))},f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},a.toggle2=function(){a.setState(function(e){return{dropdownOpen2:!e.dropdownOpen2}})},a.toggleModal=function(){a.setState({modal:!a.state.modal})},a.toggleModal2=function(){a.setState({modal2:!a.state.modal2})},a.selectBox=function(e,t){if(!1===a.state.isPlaying){var n=h(a.state.gridFull);n[e][t]=!n[e][t],a.setState({gridFull:n})}else alert("Simulation in progress \u2013 cannot select cell!")},a.seedGame=function(){if(!1===a.state.isPlaying){for(var e=h(a.state.gridFull),t=0;t<a.rows;t++)for(var n=0;n<a.cols;n++)1===Math.floor(4*Math.random())&&(e[t][n]=!0);a.setState({gridFull:e})}else alert("Simulation in progress \u2013 cannot seed game!")},a.gliderGun=function(){if(!1===a.state.isPlaying){var e=h(a.state.gridFull);e[5][1]=!0,e[6][1]=!0,e[5][2]=!0,e[6][2]=!0,e[5][11]=!0,e[6][11]=!0,e[7][11]=!0,e[4][12]=!0,e[8][12]=!0,e[3][13]=!0,e[9][13]=!0,e[3][14]=!0,e[9][14]=!0,e[6][15]=!0,e[4][16]=!0,e[8][16]=!0,e[5][17]=!0,e[6][17]=!0,e[7][17]=!0,e[6][18]=!0,e[3][21]=!0,e[4][21]=!0,e[5][21]=!0,e[3][22]=!0,e[4][22]=!0,e[5][22]=!0,e[2][23]=!0,e[6][23]=!0,e[1][25]=!0,e[2][25]=!0,e[6][25]=!0,e[7][25]=!0,e[3][35]=!0,e[4][35]=!0,e[3][36]=!0,e[4][36]=!0,a.setState({gridFull:e})}else alert("Simulation in progress \u2013 cannot seed game!")},a.acorn=function(){if(!1===a.state.isPlaying){var e=h(a.state.gridFull);e[13][19]=!0,e[13][20]=!0,e[11][20]=!0,e[12][22]=!0,e[13][23]=!0,e[13][24]=!0,e[13][25]=!0,a.setState({gridFull:e})}else alert("Simulation in progress \u2013 cannot seed game!")},a.gridSmall=function(){!1===a.state.isPlaying?(a.rows=20,a.cols=40,a.clearButton()):alert("Simulation in progress \u2013 cannot change game size!")},a.gridLarge=function(){!1===a.state.isPlaying?(a.rows=40,a.cols=80,a.clearButton()):alert("Simulation in progress \u2013 cannot change game size!")},a.playButton=function(){clearInterval(a.intervalId),a.intervalId=setInterval(a.playGame,a.speed)},a.pauseButton=function(){clearInterval(a.intervalId),a.setState({isPlaying:!1})},a.slowButton=function(){a.speed=500,a.playButton()},a.normalButton=function(){a.speed=100,a.playButton()},a.fastButton=function(){a.speed=1,a.playButton()},a.clearButton=function(){var e=Array(a.rows).fill(Array(a.cols).fill(!1));a.setState({gridFull:e,generation:0,isPlaying:!1})},a.playGame=function(){for(var e=a.state.gridFull,t=h(a.state.gridFull),n=0;n<a.rows;n++)for(var l=0;l<a.cols;l++){var o=0;n>0&&e[n-1][l]&&o++,n>0&&l>0&&e[n-1][l-1]&&o++,n>0&&l<a.cols-1&&e[n-1][l+1]&&o++,l<a.cols-1&&e[n][l+1]&&o++,l>0&&e[n][l-1]&&o++,n<a.rows-1&&e[n+1][l]&&o++,n<a.rows-1&&l>0&&e[n+1][l-1]&&o++,n<a.rows-1&&l<a.cols-1&&e[n+1][l+1]&&o++,e[n][l]&&(o<2||o>3)&&(t[n][l]=!1),e[n][l]||3!==o||(t[n][l]=!0)}a.setState({gridFull:t,isPlaying:!0,generation:a.state.generation+1})},a.speed=100,a.rows=30,a.cols=50,a.state={generation:0,gridFull:Array(a.rows).fill(Array(a.cols).fill(!1)),isPlaying:!1,dropdownOpen:!1,dropdownOpen2:!1,modal:!1,modal2:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.seedGame()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Conway's Game of Life"),l.a.createElement(p,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),l.a.createElement("h2",null,"Generations:",l.a.createElement("div",{className:"innerbox"},this.state.generation)),l.a.createElement(g.c,{className:"buttons"},l.a.createElement(g.a,{onClick:this.playButton},"Play"),l.a.createElement(g.a,{onClick:this.pauseButton},"Pause"),l.a.createElement(g.a,{onClick:this.clearButton},"Clear"),l.a.createElement(g.a,{onClick:this.seedGame},"Seed"),l.a.createElement(g.a,{onClick:this.slowButton},"Slow"),l.a.createElement(g.a,{onClick:this.normalButton},"Normal"),l.a.createElement(g.a,{onClick:this.fastButton},"Fast"),l.a.createElement(g.b,{isOpen:this.state.dropdownOpen,toggle:this.toggle},l.a.createElement(g.f,{caret:!0},"Patterns"),l.a.createElement(g.e,null,l.a.createElement(g.d,{onClick:this.gliderGun},"Glider Gun"),l.a.createElement(g.d,{onClick:this.acorn},"Acorn"))),l.a.createElement(g.b,{isOpen:this.state.dropdownOpen2,toggle:this.toggle2},l.a.createElement(g.f,{caret:!0},"Size"),l.a.createElement(g.e,null,l.a.createElement(g.d,{onClick:this.gridSmall},"Small"),l.a.createElement(g.d,{onClick:this.gridLarge},"Large")))),l.a.createElement("span",null,l.a.createElement(g.a,{className:"modals",color:"danger",onClick:this.toggleModal},"Rules"),l.a.createElement(g.g,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className},l.a.createElement(g.i,{toggle:this.toggleModal},"Rules"),l.a.createElement(g.h,null,l.a.createElement("ol",null,l.a.createElement("li",null,"Any live cell with fewer than two live neighbors dies, as if by underpopulation."),l.a.createElement("li",null,"Any live cell with two or three live neighbors lives on to the next generation."),l.a.createElement("li",null,"Any live cell with more than three live neighbors dies, as if by overpopulation."),l.a.createElement("li",null,"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction"))))),l.a.createElement("span",null,l.a.createElement(g.a,{className:"modals",color:"danger",onClick:this.toggleModal2},"About"),l.a.createElement(g.g,{isOpen:this.state.modal2,toggle:this.toggleModal2,className:this.props.className},l.a.createElement(g.i,{toggle:this.toggleModal2},"About"),l.a.createElement(g.h,null,"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced players, by creating patterns with particular properties."))))}}]),t}(n.Component);i.a.render(l.a.createElement(f,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.2985cf5c.chunk.js.map