/* @refresh reload */
import { Route, Router, Routes } from '@solidjs/router'
import { render } from 'solid-js/web'

import Article from './pages/Article'
import Index from './pages/Index'
import Navbar from './components/Navbar'

import './index.scss'

const root = document.getElementById('root')
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  )
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Navbar}>
          <Route path="/" component={Index} />
          <Route path="/article/:path" component={Article} />
        </Route>
      </Routes>
    </Router>
  ),
  root!
)
