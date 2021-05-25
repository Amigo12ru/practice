'use strict';

class catalogMenuList {
  constructor() {
    this.activeLiClassName = 'menu-item-active';
    this.ul = document.querySelector('#catalog-menu-list');
    this.activeLi = this.ul.querySelector('.' + this.activeLiClassName);
    this.init();
  }
  init() {
    let here = this;
    [].forEach.call(this.ul.children, function (item) {
      item.onclick = function () {
        if (this != here.activeLi) {
          here.activeLi.classList.remove(here.activeLiClassName);
          item.classList.add(here.activeLiClassName);
          here.activeLi = this;
        }
      };
    });
  }
}
new catalogMenuList();
