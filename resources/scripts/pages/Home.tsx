import Navigation from '@/components/Navigation';

type Home = {
  path: String
};

export default function Home(props: Home) {
  return (
    <div className="home">
      <Navigation />
      <div>I am a home page</div>
    </div>
  );
}