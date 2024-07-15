document.addEventListener('alpine:init', () => {
  // @ts-expect-error alpine will exist on the global window
  Alpine.store('global', {
    init() {
      // @ts-expect-error alpine will exist on the global window
      this.on = Alpine.$persist(true).as('darkMode_on');
    },
    on: false,
    expanded: false,
    toggle() {
      this.on = !this.on;
    },
    getBodyClass() {
      let className = '';

      if (this.on) {
        className += 'dark-mode';
      }

      if (this.expanded) {
        className += ' cs-open';
      }

      return className;
    },
  });
});
