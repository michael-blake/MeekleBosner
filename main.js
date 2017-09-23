'use strict'

window.onload = function() {
  HSSR.getElements();
  HSSR.createNav();
  HSSR.addEvents();
}

var HSSR = {
  getElements: function() {
    this.body       = document.body;
    this.logo       = document.getElementById('menu-logo');
    this.hamburger  = document.getElementById('hamburger');
    this.navOverlay = document.getElementById('nav-overlay');
    this.navMain    = document.getElementById('nav-main');
  },

  createNav: function() {
    this.navLR = new navElement('Latest Release', null, "latest-release");
    this.navOP = new navElement('Other Projects', null, "other-projects");
    this.navCS = new navElement('Cold Storage', null, "cold-storage");

    var navItems = [this.navLR, this.navOP, this.navCS];

    for(var i = 0; i < navItems.length; ++i){
      this.navMain.appendChild(navItems[i].element);
    }
  },

  addEvents: function() {
    this.logo.onclick       = this.goHome.bind(this);
    this.hamburger.onclick  = this.toggleNav.bind(this);
  },

  goHome: function() {
    window.scrollTo(0, 0);
    this.body.classList.remove('nav-open');
  },

  toggleNav: function() {
    this.hamburger.classList.toggle('is-active');
    this.body.classList.toggle('nav-open');
  }
}

class navElement {
  constructor(name, link, scollID) {
    this.name = name;
    this.link = link;
    this.scollID = scollID;

    if(this.scollID != undefined){
      this.element = document.createElement('div');
      this.element.onclick = this.navigate.bind(this);
    }
    else if(this.link != undefined){
      this.element = document.createElement('a');
      this.element.href = this.link;
    }

    this.element.classList.add('nav-item');
    this.element.innerHTML = this.name;
  }

  navigate(){
    HSSR.toggleNav();
    document.getElementById(this.scollID).scrollIntoView({behavior: "smooth"});
  }
}
