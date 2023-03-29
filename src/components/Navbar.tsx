import { A, Outlet } from '@solidjs/router'
import { Component } from 'solid-js'

import './Navbar.scss'

const _default: Component<{}> = () => {
  return (
    <>
      <div class="nav z-10">
        <div class="nav-content">
          <div class="nav-begin"></div>
          <div class="nav-center">
            <A href="/">
              <h1 class="logo">vial.design</h1>
            </A>
          </div>
          <div class="nav-end"></div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default _default
