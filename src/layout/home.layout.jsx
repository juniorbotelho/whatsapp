import React from 'react'
import Component from '../utils/Component'

const HomeLayout = ({children}) => {
  const component = Component.getInstance(children);

  return (
    <div className="pages_home home_layout">
      <div className="container">
        {component.getComponentByKey('container')}
      </div>
      <div className="grid">
        {component.getComponentByKey('grid')}
      </div>
    </div>
  )
}

export default HomeLayout
