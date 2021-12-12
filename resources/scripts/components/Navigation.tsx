import { Link } from 'preact-router/match';

export default function Navigation() {
  return <div className="navigation">
    <Link activeClassName="active" href="/">Home</Link>
    <Link activeClassName="active" href="/about">About</Link>
  </div>;
}