import Tabs from '../components/Tabs';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Tabs />
      <Footer />
    </main>
  );
};

export default Page;



