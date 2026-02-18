const THEME = 'theme';
const LIGHT = 'light';
const DARK = 'dark';

function getPreferTheme(): string {
  const currentTheme = localStorage.getItem(THEME);
  if (currentTheme) return currentTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

let themeValue = (window as any).theme?.themeValue ?? getPreferTheme();

function reflectPreference(): void {
  document.firstElementChild?.setAttribute('data-theme', themeValue);
  document.querySelector('#theme-btn')?.setAttribute('aria-label', themeValue);

  const body = document.body;
  if (!body) return;
  const bgColor = window.getComputedStyle(body).backgroundColor;
  document.querySelector("meta[name='theme-color']")?.setAttribute('content', bgColor);
}

function setPreference(): void {
  localStorage.setItem(THEME, themeValue);
  reflectPreference();
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: themeValue } }));
}

if ((window as any).theme) {
  (window as any).theme.setPreference = setPreference;
  (window as any).theme.reflectPreference = reflectPreference;
} else {
  (window as any).theme = {
    themeValue,
    setPreference,
    reflectPreference,
    getTheme: () => themeValue,
    setTheme: (val: string) => {
      themeValue = val;
    }
  };
}

reflectPreference();

function setThemeFeature(): void {
  reflectPreference();
  document.querySelector('#theme-btn')?.addEventListener('click', () => {
    themeValue = themeValue === LIGHT ? DARK : LIGHT;
    (window as any).theme?.setTheme(themeValue);
    setPreference();
  });
}

setThemeFeature();
document.addEventListener('astro:after-swap', setThemeFeature);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  themeValue = isDark ? DARK : LIGHT;
  (window as any).theme?.setTheme(themeValue);
  setPreference();
});
