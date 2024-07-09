// //
// //    The Dark Mode System
// //

// // helper functions to toggle dark mode
// function enableDarkMode() {
//   document.body.classList.add('dark-mode');
//   // For Tailwind dark mode integration
//   document.documentElement.classList.add('dark');
//   localStorage.setItem('theme', 'dark');
// }

// function disableDarkMode() {
//   document.body.classList.remove('dark-mode');
//   // For Tailwind dark mode integration
//   document.documentElement.classList.remove('dark');
//   localStorage.setItem('theme', 'light');
// }

// // determines a new users dark mode preferences
// function detectColorScheme() {
//   // default to the light theme
//   let theme = 'light';

//   // check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
//   if (localStorage.getItem('theme')) {
//     theme = localStorage.getItem('theme') ?? '';
//   }
//   // if it's not there, check to see if the user has applied dark mode preferences themselves in the browser
//   else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     theme = 'dark';
//   }

//   // if there is no preference set, the default of light will be used. apply accordingly
//   if (theme === 'dark') {
//     enableDarkMode();
//   }
//   else {
//     disableDarkMode();
//   }
// }

// function getCookieValue(cookieName: string) {
//     const regex = new RegExp(`(?:^|; )${cookieName}=([^;]*)`);
//     const match = document.cookie.match(regex);
//     return match ? match[1] : null;
// }

// function setCookie(name: string, value: string, days?: number) {
//         let expires = "";
//         if (days) {
//             const date = new Date();
//             date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//             expires = `; expires=${date.toUTCString()}`;
//         }
//         document.cookie = `${name}=${value || ""}${expires}; path=/`;
//     }

// function toggleDarkModeCookie() {
//     console.log({cookie: document.cookie})
//     const cookieName = 'prefersdark';
//     let cookieValue = getCookieValue(cookieName);

//     if (!!cookieValue) {
//       // Toggle cookie value between true and false
//       cookieValue = (cookieValue === 'true') ? 'false' : 'true';
//       setCookie(cookieName, cookieValue, 365);
//     } else {
//       // Cookie doesn't exist, set it to true
//       setCookie(cookieName, 'true', 365);
//     }

//     if (cookieValue === 'true') {
//       // Prefers dark, add the class name
//       enableDarkMode();
//     } else {
//       disableDarkMode();
//     }
// }

// // run on page load
// // detectColorScheme();

// // add event listener to the dark mode button toggle
// document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
// toggleDarkModeCookie();

//   // on click, check localStorage for the dark mode value, use to apply the opposite of what's saved
//   // if (localStorage.getItem('theme') === 'light') {
//   //   enableDarkMode();
//   // }
//   // else {
//   //   disableDarkMode();
//   // }
// });
