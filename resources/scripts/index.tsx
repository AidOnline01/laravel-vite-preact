import { loadableReady } from '@loadable/component';
import { hydrate } from 'preact';
import App from './App';

loadableReady(() => {
  const AppEl = document.getElementById('app')!;

  hydrate(<App />, AppEl.parentElement, AppEl);
})