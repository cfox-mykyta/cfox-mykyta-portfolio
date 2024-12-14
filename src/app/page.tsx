import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navigation />
      <Footer />
    </main>
  );
};

export default Page;