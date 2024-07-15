import { tsParticles } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';

// @ts-expect-error added to window
window.particlesInit = async function () {
  await loadLinksPreset(tsParticles);
};

// @ts-expect-error added to window
window.particlesLoaded = function () {
  // eslint-disable-next-line no-console
  console.log('particlesLoaded callback');
};
