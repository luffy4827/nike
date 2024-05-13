import "./App.css";
import {Hero, Footer, PopularProduct, Reviews, Services, SpecialOffers, Subscribe, SuperQuality} from './sections/index';
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>{" "}
      <section className="padding"><PopularProduct /></section>
      <section className="padding"><SuperQuality /></section>
      <section className="padding-x py-10"><Services /></section>
      <section className="padding"><SpecialOffers /></section>
      <section className="padding bg-pale-blue padding"><Reviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
      <section className="padding-x bg-black padding-t pb-8"><Footer /></section>
    </main>
  );
}

export default App;
