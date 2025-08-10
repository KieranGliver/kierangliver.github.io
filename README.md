# [Kieran Glover - Personal Portfolio](https://kieranglover.com)

A modern, interactive portfolio website built with [Eleventy](https://www.11ty.dev/) featuring a retro desktop-inspired interface.

## The Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Styling**: CSS with [98.css](https://jdan.github.io/98.css/) for retro Windows styling
- **JavaScript**: Vanilla ES6+ with class-based architecture
- **Development Tools**: ESLint, Prettier

## Project Structure

```
├── src/                    # Source files
│   ├── _includes/         # Nunjucks layouts and partials
│   ├── images/            # Static images and icons
│   ├── pages/             # Page content (HTML)
│   ├── scripts/           # JavaScript modules
│   ├── styles/            # CSS stylesheets
│   └── index.njk          # Homepage template
├── _site/                 # Generated site (build output)
├── .eleventy.js           # Eleventy configuration
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
└── package.json           # Dependencies and scripts
```

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KieranGliver/kieranglover.github.io.git
cd kieranglover.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run serve
```

The site will be available at `http://localhost:8080` with live reload enabled.

## Available Scripts

- `npm run build` - Build the site for production
- `npm run serve` - Serve the built site locally
- `npm run clean` - Remove build directory
- `npm run lint` - Run ESLint on JavaScript files
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## License

This project is licensed under the MIT License.

## Author

**Kieran Glover**
- Email: kieran.r.glover@gmail.com
- GitHub: [@KieranGliver](https://github.com/KieranGliver)
- Portfolio: [Kieranglover.com](https://kieranglover.com)
