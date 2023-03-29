import { Component } from 'solid-js'

import './Loader.scss'

const _default: Component<{}> = () => {
  return (
    <div class="loading-screen">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default _default
