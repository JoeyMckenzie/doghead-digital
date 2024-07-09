interface Config {
  company: string;
  website: string;
  logo: string;
  phone: string;
  email: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  tel: string;
  mailto: string;
  formattedAddress?: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
};

function identity<T>(atom: T) {
  return atom;
};

function defineConfig(config: Config) {
  return identity<Config>(config);
}

export default defineConfig({
  company: 'Doghead Digital',
  website: 'https://doghead.digital',
  logo: 'https://doghead.digital/logo.webp',
  phone: '(530) 356-7734',
  email: 'info@doghead.digital',
  tel: 'tel:530-356-7734',
  mailto: 'mailto:info@doghead.digital',
  socials: {
    instagram: 'https://instagram.com/',
  },
});
