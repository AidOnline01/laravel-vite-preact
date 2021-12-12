import Router from 'preact-router';
// import AsyncRoute from 'preact-async-route';
import Loadable from '@loadable/component';

const Home = Loadable(() => import('@/pages/Home'));
const About = Loadable(() => import('@/pages/About'));

import '@/scss/app.scss';

export default function App() {
  return <div id="app">
    <Router>
      <Home path="/" />
      <About path="/about" />
      {/* <AsyncRoute path="/" getComponent={() => import('@/pages/Home').then(module => module.default)} /> */}
      {/* <AsyncRoute path="/about" getComponent={() => import('@/pages/About').then(module => module.default)} /> */}
    </Router>
  </div>
}