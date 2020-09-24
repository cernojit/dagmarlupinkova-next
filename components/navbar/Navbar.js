import React, {Component} from 'react';
import '../../static/Navbar.module.css';

class Navbar extends Component {
	constructor (){
		super();
		this.state = {
			menuIsOpen: false
			// showNav: false
		}
	}

	// navButtonClick = () => {
	// 	this.setState({showNav: !this.state.showNav});
	// }

	closeMenu(){
	  document.getElementById('menu').classList.replace('left-50', 'left-100')
	  document.getElementById('menu').classList.add('dn')
	  document.getElementById('bar-top').classList.replace('top-clicked', 'top')
	  document.getElementById('bar-middle').classList.replace('middle-clicked', 'middle')
	  document.getElementById('bar-bottom').classList.replace('bottom-clicked', 'bottom')	  
	  this.setState({menuIsOpen: false})
	}

	openMenu() {
	  document.getElementById('menu').classList.replace('left-100', 'left-50')
	 	document.getElementById('menu').classList.remove('dn')
		document.getElementById('bar-top').classList.replace('top', 'top-clicked')
	  document.getElementById('bar-middle').classList.replace('middle', 'middle-clicked')
	  document.getElementById('bar-bottom').classList.replace('bottom', 'bottom-clicked')
	  this.setState({menuIsOpen: true})
	}

	handleClickMenu = (event) => {
		if(this.state.menuIsOpen === false){
			this.openMenu();
		} else {
			this.closeMenu()
		}
	}

	hideNav = () => {
		this.closeMenu();
	}

	render(){
		return(
			<nav className="nav-tach dt dt--fixed w-100 border-box ph4 pa3 pa0-ns ph6-ns" >
				<a className="icon dtc v-mid w-20 w-25-ns tc tl-ns mb2 mb0-ns" href="/" title="Home">
			    <img src='./images/nav_icon.svg' id="logo"  alt="Lupínková"/>
			  </a>
			  
			  <div id="menu" className="static-ns absolute mt0 mt0-ns pa0-ns left-100 db dtc-ns v-mid w-40 w-100-ns w-75-ns h-80 tr">
			    <a className="link tr tl-ns f8-ns db dib-ns mr4 mr4-ns mt4" href="#home" title="Home" onClick={this.hideNav}>Domů</a>
			    <a className="link tr tl-ns f8-ns db dib-ns mr4 mr4-ns mt3" href="#info" title="About" onClick={this.hideNav}>Informace</a>
			    <a className="link tr tl-ns f8-ns db dib-ns mr4 mr0-ns mb4-ns mb4 mt3" href="#kontakt" title="Contact" onClick={this.hideNav}>Kontakt</a>
			  </div>
			  <a href="/#" id="menu-btn" className="dtc tr v-mid dn-ns w-20 pa0 pa0-ns tc" >
			  <button type="button" className="white ba b--white bg-white" onClick={this.handleClickMenu}>
		      <span id="bar-top" className="icon-bar top"></span>
		      <span id="bar-middle" className="icon-bar middle"></span>
		      <span id="bar-bottom" className="icon-bar bottom"></span>
		      </button>
			  </a>
			</nav>
		)
	}

}

export default Navbar;

