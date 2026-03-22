// .web-ext-firefox.mjs
// Configuration for Mozilla's web-ext CLI tool
// For options: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference
export default {
  // Global options:
  // by default, any file ending in .xpi or .zip is ignored
  // any hidden file (one that starts with a dot) is ignored
  // any directory named node_modules is ignored
  ignoreFiles: [
    `json/font_info.json`,
    `manifest_*.json`,
    `*.md`,
    `package.json`,
    `package-lock.json`,
    `test`,
    `.web-ext-*.js`,
    `*.lock`,
    `*.yml`,
  ],
  verbose: false,
  // Command options:
  build: {
    overwriteDest: true,
  },
};
