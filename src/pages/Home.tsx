import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import Challenges from '../sections/Challenges';
import Methodology from '../sections/Methodology';
import HighDensity from '../sections/HighDensity';
import ContactCTA from '../sections/ContactCTA';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Portfolio />
      <Challenges />
      <Methodology />
      <HighDensity />
      <ContactCTA />
    </main>
  );
}
