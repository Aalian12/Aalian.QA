import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Expertise } from './components/sections/Expertise';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Expertise />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
}

export default App;