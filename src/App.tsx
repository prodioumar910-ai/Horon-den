/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PhoneMarquee from './components/PhoneMarquee';
import Products from './components/Products';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <PhoneMarquee />
        <Products />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
