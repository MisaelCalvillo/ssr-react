import React from 'react';
import logo from './icon.png';

import './../../less/less.less'
import './../../sass/sass.scss'
import './../../stylus/stylus.styl'

function App() {
  return (
    <div>
      <p className="sass">Esto es sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
      <p className="post-css">Esto es post-css</p>
      <img src={logo} />
    </div>
  )
}

export default App;