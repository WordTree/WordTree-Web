import MenuItem from './menu-item.mjs';

class Menu {
  constructor(domNode) {
    this.domNode = domNode;
    this.init();
  }
  init() {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren, (child) => {
      if (child.nodeType === 1) {
        new MenuItem(child);
      }
    });
  }
}

export { Menu as default };
//# sourceMappingURL=menu-bar.mjs.map
