# Plum Yi - I Ching & Plum Blossom Divination

[English](README.md) | [简体中文](README_zh.md)

---

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple.svg)](https://vitejs.dev/)

> A local web application for I Ching and Plum Blossom Numerology divination with bilingual Chinese-English support.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Build & Deploy](#build--deploy)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Plum Yi (梅花易) is a comprehensive divination application that implements two classical Chinese divination systems:

1. **I Ching (易经)** - The ancient Book of Changes, using traditional methods like Yarrow Stalk and Coin divination
2. **Plum Blossom Numerology (梅花易数)** - A number-based divination system created by Shao Yong in the Song Dynasty

The application runs entirely in the browser with no backend required, making it perfect for local use, offline access, or deployment to static hosting services.

## Features

### Divination Methods

| Method | System | Description |
|--------|--------|-------------|
| Yarrow Stalk | I Ching | Traditional 49-stalk method with accurate probability simulation |
| Coin Toss | I Ching | Three-coin method for quick hexagram generation |
| Time-based | Plum Blossom | Generate hexagrams from lunar calendar date and time |
| Number-based | Plum Blossom | Use random numbers to generate hexagrams |
| Text-based | Plum Blossom | Generate hexagrams from Chinese character stroke counts |

### Analysis Capabilities

- **Complete 64 Hexagrams** - Full data with Chinese and English judgments, line texts, and images
- **Five Elements Analysis** - Wood, Fire, Earth, Metal, Water relationships
- **Body-Use Relationship** - Identify which trigram represents the querent and the situation
- **Mutual and Changed Hexagrams** - Calculate derived hexagrams for deeper insight
- **Seasonal Prosperity** - Analyze the strength of elements based on the current season
- **Comprehensive Interpretation** - Multi-dimensional analysis for career, relationships, wealth, and health

### User Experience

- **Bilingual Support** - Seamless switching between Chinese and English
- **History Tracking** - Save and review past divination results (localStorage)
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Chinese Aesthetic** - Traditional visual theme with Noto Serif SC font
- **Offline Ready** - No internet connection required after initial load

## Prerequisites

| Dependency | Version | Required |
|------------|---------|----------|
| Node.js    | >= 18   | Yes      |
| npm        | >= 9    | Yes      |

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/plum-yi.git
cd plum-yi
```

### Install Dependencies

```bash
npm install
```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Using the Application

1. **Select Divination Method**
   - Choose between I Ching (易经) or Plum Blossom (梅花易数) on the home page

2. **Perform Divination**
   - For I Ching: Select Yarrow Stalk or Coin method and follow the animation
   - For Plum Blossom: Enter time, numbers, or text as prompted

3. **View Results**
   - See the generated hexagram with all six lines
   - Read the judgment and line texts in your preferred language
   - Analyze the Five Elements relationships and body-use dynamics

4. **Review History**
   - Access past divinations from the History page
   - Compare results and track patterns

5. **Switch Language**
   - Click the language button in the top-right corner to toggle Chinese/English

## Project Structure

```
plum-yi/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Route configuration
│   ├── index.css             # Global Chinese-style theme
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navigation bar
│   │   ├── LanguageSwitcher.tsx # Language toggle component
│   │   ├── HexagramDisplay.tsx  # Hexagram visualization
│   │   └── LineDisplay.tsx      # Individual line renderer
│   ├── pages/
│   │   ├── HomePage.tsx       # Landing page with method selection
│   │   ├── IChingPage.tsx     # I Ching divination interface
│   │   ├── MeihuaPage.tsx     # Plum Blossom divination interface
│   │   ├── ResultPage.tsx     # Divination result analysis
│   │   └── HistoryPage.tsx    # Divination history viewer
│   ├── services/
│   │   ├── iChing.ts          # I Ching divination algorithms
│   │   ├── meihua.ts          # Plum Blossom Numerology algorithms
│   │   ├── hexagramData.ts    # Complete 64 hexagram data
│   │   └── wuxingData.ts      # Five Elements data and relationships
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── i18n/
│   │   ├── index.ts           # i18next configuration
│   │   ├── zh.json            # Chinese translations
│   │   └── en.json            # English translations
│   └── assets/                # Static resources
├── public/                    # Public assets
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── LICENSE                    # GPL v3 license
```

## Build & Deploy

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Build

Test the production build locally:

```bash
npm run preview
```

### Deploy to Static Hosting

The `dist/` folder can be deployed to any static hosting service:

**GitHub Pages:**

```bash
# Add to package.json
"homepage": "https://your-username.github.io/plum-yi",

# Deploy
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages
```

**Netlify / Vercel:**

1. Connect your repository
2. Set build command to `npm run build`
3. Set output directory to `dist`
4. Deploy

### Local Offline Use

After building, you can open `dist/index.html` directly in your browser for completely offline usage.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

### GPL v3 Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Patent use
- ❌ Private use
- ❌ Liability
- ❌ Warranty

**Important:** If you distribute a modified version, you must also distribute it under GPL v3.

---

<div align="center">

**Made with ❤️ for preserving and sharing ancient Chinese wisdom**

</div>
