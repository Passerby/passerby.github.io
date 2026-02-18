export interface SiteConfig {
  title: string;
  name: string;
  description: string;
  siteUrl: string;
  social: {
    email?: string;
    github?: string;
    scholar?: string;
    linkedin?: string;
  };
  theme: {
    defaultMode: 'light' | 'dark';
  };
  giscus: {
    enabled: boolean;
    repo?: string;
    repoId?: string;
    category?: string;
    categoryId?: string;
    mapping?: string;
    strict?: string;
    reactionsEnabled?: string;
    inputPosition?: 'top' | 'bottom';
    emitMetadata?: string;
    lang?: string;
  };
  repoCards: {
    lightTheme: string;
    darkTheme: string;
    trophies: {
      enabled: boolean;
      lightTheme: string;
      darkTheme: string;
    };
  };
  nav: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  title: 'Rui Du',
  name: 'Rui Du',
  description: "It's the Age of Agents.",
  siteUrl: 'https://passerby.github.io',
  social: {
    email: 'dr397379567@gmail.com',
    github: 'https://github.com/passerby',
    scholar: 'https://scholar.google.com/citations?user=0PCPhVMAAAAJ'
  },
  theme: {
    defaultMode: 'light'
  },
  giscus: {
    enabled: false,
    category: 'Comments',
    mapping: 'title',
    strict: '1',
    reactionsEnabled: '1',
    inputPosition: 'bottom',
    emitMetadata: '0',
    lang: 'en'
  },
  repoCards: {
    lightTheme: 'default',
    darkTheme: 'dark',
    trophies: {
      enabled: true,
      lightTheme: 'flat',
      darkTheme: 'gitdimmed'
    }
  },
  nav: [{ label: 'About', href: '/' }]
};
