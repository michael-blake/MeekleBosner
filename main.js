'use strict'

window.onload = function() {
  HSSR.getElements();
  HSSR.createNav();
  HSSR.createProjects();
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
    this.navItems = [];
    this.navLR = new navElement('Latest Release', null, "latest-release");
    this.navOP = new navElement('Other Projects', null, "other-projects");
    // this.navCS = new navElement('Cold Storage', null, "cold-storage");
    this.navSM = new navElement('Contact', null, "contact");

    for(var i = 0; i < this.navItems.length; ++i){
      this.navMain.appendChild(this.navItems[i].element);
    }
  },

  createProjects: function() {
    this.projects = [];
    var parent = document.getElementById('other-projects');
    this.brutalEnigma = new project('Brutal Enigma', 'images/BrutalEnigma.png',
    'A writing/recording project with Christian "Dat Boi" Miller influenced by folk, trip-hop, and funk.',
    'https://soundcloud.com/brutal_enigma', parent);
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

    HSSR.navItems.push(this);
  }

  navigate(){
    HSSR.toggleNav();
    document.getElementById(this.scollID).scrollIntoView({behavior: "smooth"});
  }
}

class project {
  constructor(name, image, desc, link, parent) {
    this.name = name;
    this.image = image;
    this.desc = desc;
    this.link = link;
    this.parent = parent;

    // The wrapper for this project
    var wrapper = document.createElement('div');
    wrapper.classList.add('project-wrapper');
    this.parent.appendChild(wrapper);

    // The image for this project
    var image = document.createElement('a');
    image.classList.add('project-image');
    image.style.backgroundImage = "url('" + this.image + "')";
    image.style.href = "https://soundcloud.com/brutal_enigma";
    image.setAttribute('target', '_blank');
    image.href = this.link;
    wrapper.appendChild(image);

    // The description of this project
    var descDiv = document.createElement('div');
    descDiv.classList.add('project-desc');
    wrapper.appendChild(descDiv);

    // The description title (name) of this project
    var descTitle = document.createElement('div');
    descTitle.classList.add('project-title');
    descTitle.innerHTML = this.name;
    descDiv.appendChild(descTitle);

    // The description (name) of this project
    var descSubtitle = document.createElement('div');
    descSubtitle.classList.add('project-subtitle');
    descSubtitle.innerHTML = this.desc;
    descDiv.appendChild(descSubtitle);

  }
}





























// End
