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
  formattedAddress: string;
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
  company: 'Company',
  website: 'https://reddit.com',
  logo: 'https://reddit.com',
  phone: '(555) 555-5555',
  email: 'company@email.com',
  address: {
    street: '123 Address St.',
    city: 'Redding',
    state: 'CA',
    zipCode: '96003',
    country: 'U.S.',
  },
  tel: 'tel:555-555-5555',
  mailto: 'mailto:company@email.com',
  formattedAddress: '123 Address St, Redding, CA 96003',
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
});
