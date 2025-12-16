# Webpack React Template

A modern, production-ready React + TypeScript starter template with best practices baked in.

## ✨ Features

- ⚛️ **React 19** with TypeScript
- 📦 **Webpack 5** for bundling
- 🎨 **SCSS** support
- 🔍 **ESLint 9** with flat config (React + TypeScript rules)
- 💅 **Prettier** for code formatting
- 🐶 **Husky** + **lint-staged** for pre-commit hooks
- 📝 **Commitlint** for conventional commit messages
- 🚀 **Hot Module Replacement** for fast development

## 🚀 Quick Start

### Use this template

Click the **"Use this template"** button on GitHub to create a new repository.

Or clone manually:

```bash
git clone https://github.com/YOUR_USERNAME/webpack-react-template.git my-project
cd my-project
pnpm install
```

### Development

```bash
pnpm start       # Start dev server at http://localhost:3210
pnpm build       # Build for production
pnpm lint        # Run ESLint
pnpm lint:fix    # Fix ESLint errors
pnpm format      # Format code with Prettier
```

## 📁 Project Structure

```
├── public/
│   └── index.html        # HTML template
├── src/
│   ├── index.tsx         # Entry point
│   ├── app.tsx           # Root component
│   ├── index.scss        # Global styles
│   └── types/            # TypeScript declarations
├── .husky/               # Git hooks
├── eslint.config.js      # ESLint flat config
├── commitlint.config.js  # Commit message rules
├── tsconfig.json         # TypeScript config
├── webpack.config.ts     # Webpack config
└── package.json
```

## 📜 Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, semicolons, etc.
refactor: code refactoring
perf: performance improvements
test: adding tests
chore: maintenance tasks
```

## 📄 License

MIT
