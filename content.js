const styleOverride = document.createElement('style');

styleOverride.innerHTML = `
  div#dismissible.ytd-rich-shelf-renderer,
  ytd-guide-entry-renderer a[title="Shorts"] {
    display: none !important;
  }
`;

document.head.appendChild(styleOverride);