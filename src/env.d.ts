/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Container, Engine } from 'tsparticles-engine';

interface Window {
  Alpine: import('alpinejs').Alpine;
  particlesInit: (engine: Engine) => Promise<void>;
  particlesLoaded: (container: Container) => void;
}
