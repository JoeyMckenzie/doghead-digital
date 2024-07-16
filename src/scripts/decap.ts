function initializeDecap() {
  // @ts-expect-error ID will be defined
  if (window.netlifyIdentity) {
    // @ts-expect-error ID will be defined
    window.netlifyIdentity
      .on('init', (user: any) => {
        if (!user) {
          // @ts-expect-error ID will be defined
          window.netlifyIdentity
            .on('login', () => {
              document.location.href = '/admin/';
            });
        }
      });
  }
}

initializeDecap();
