import { tsParticles } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { loadStarsPreset } from 'tsparticles-preset-stars';

// @ts-expect-error added to window
window.particlesInitForHero = async function () {
  await loadLinksPreset(tsParticles);
};

// @ts-expect-error added to window
window.particlesInitForSbs = async function () {
  await loadStarsPreset(tsParticles);
};

// @ts-expect-error added to window
window.particlesLoaded = function () {
  // eslint-disable-next-line no-console
  console.log('particlesLoaded callback');
};
