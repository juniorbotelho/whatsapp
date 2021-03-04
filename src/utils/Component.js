import React from 'react'

class Component extends React.Component {
  static getInstance(children) {
    return new Component(children);
  }

  // Component
  constructor(children) {
    super();
    this.children = children;
  }

  // Public
  getComponentByKey(key) {
    return React.Children.map(this.children, (child) => {
      if (key === child.props['data-key']) {
        return child;
      }
    });
  }
}

export default Component;
