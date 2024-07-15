CSS Library of components based on the latest SF design system and built with Tailwind and POST CSS.

Design System link https://www.figma.com/file/8nHrFNqE4NFdXNF3j1jwdh/Shepherds-Friendly-Design-System?type=design&node-id=408-1275&mode=design

---

# Package.json Documentation

## Overview

This `package.json` file defines a Node.js project configuration, including scripts and development dependencies related to CSS processing and serving. The project utilizes various PostCSS plugins and tools for building and optimizing CSS, along with other utilities to enhance the development workflow.

## Scripts

### 1. `build:css`

- **Description:** Compiles and processes the main CSS file (`input.css`) using PostCSS, applying specified plugins and configurations. The resulting CSS is then saved to the `public/assets/css/output.css`.

- **Command:**
  ```
  npm run build:css
  ```
- **Options:**
  - `-m`: Minifies the output CSS.

### 2. `watch:css`

- **Description:** Similar to `build:css`, but additionally watches for changes in the source CSS file (`input.css`). Upon any modifications, it automatically rebuilds the CSS and updates the output file in real-time.

- **Command:**
  ```
  npm run watch:css
  ```
- **Options:**
  - `-w`: Enables watch mode.
  - `-m`: Minifies the output CSS.

### 3. `serve`

- **Description:** Uses `live-server` to serve the contents of the `public` directory. This is typically used during development to view the project in a local development server.

- **Command:**
  ```
  npm run serve
  ```

### 4. `start`

- **Description:** Concurrently runs both the `serve` and `watch:css` scripts using `concurrently`. This is a convenient way to start the development server and CSS watch processes simultaneously.

- **Command:**
  ```
  npm run start
  ```

## DevDependencies

- **autoprefixer:** Parses CSS and adds vendor prefixes to CSS rules.
- **concurrently:** Executes multiple commands concurrently, improving the development workflow.
- **cssnano:** Minifies CSS to reduce file size.
- **postcss:** A tool for transforming CSS with JavaScript plugins.
- **postcss-assets:** Handles assets in CSS, like images or fonts.
- **postcss-cli:** Command-line interface for PostCSS.
- **postcss-font-pack:** Helps manage font resources in CSS.
- **postcss-import:** Allows the use of `@import` for CSS files.
- **postcss-preset-env:** Converts modern CSS into an earlier version, considering browser compatibility.
- **precss:** Enables the use of Sass-like syntax and features in CSS.
- **tailwindcss:** A utility-first CSS framework that provides a set of pre-designed styles and components.

## Conclusion

This `package.json` configuration is tailored for a project where PostCSS is the primary tool for CSS processing, and Tailwind CSS is utilized for styling. The included scripts streamline tasks related to CSS compilation, watching for changes, and serving the project during development. Additionally, the development dependencies enhance CSS processing and overall development efficiency.

---
