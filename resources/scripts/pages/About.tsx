import Navigation from '@/components/Navigation';

type About = {
  path: String
};

export default function About(props: About) {
  return (
    <div className="about">
      <Navigation />
      <div>I am an about page</div>
    </div>
  );
}