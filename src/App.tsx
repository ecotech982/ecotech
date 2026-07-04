/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <ValueProposition />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
