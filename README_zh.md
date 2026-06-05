# Plum Yi - 易经与梅花易数占卜应用

[English](README.md) | [简体中文](README_zh.md)

---

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple.svg)](https://vitejs.dev/)

> 一个支持中英双语的本地 Web 应用，用于易经和梅花易数占卜。

## 目录

- [简介](#简介)
- [功能特性](#功能特性)
- [环境要求](#环境要求)
- [安装](#安装)
- [使用方法](#使用方法)
- [项目结构](#项目结构)
- [构建与部署](#构建与部署)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

## 简介

Plum Yi（梅花易）是一个综合性的占卜应用，实现了两种经典的中国占卜体系：

1. **易经** - 古老的《易经》，采用蓍草法和金钱卦等传统方法
2. **梅花易数** - 由宋代邵雍创立的以数起卦的占卜体系

该应用完全在浏览器端运行，无需后端服务，非常适合本地使用、离线访问或部署到静态托管服务。

## 功能特性

### 占卜方法

| 方法 | 体系 | 说明 |
|------|------|------|
| 蓍草法 | 易经 | 传统的四十九蓍草法，精确模拟概率分布 |
| 金钱卦 | 易经 | 三币法，快速生成卦象 |
| 时间起卦 | 梅花易数 | 根据农历日期和时辰生成卦象 |
| 数字起卦 | 梅花易数 | 使用随机数生成卦象 |
| 文字起卦 | 梅花易数 | 根据汉字笔画数生成卦象 |

### 分析能力

- **完整的六十四卦** - 包含中英文卦辞、爻辞和象辞的完整数据
- **五行分析** - 木、火、土、金、水之间的生克关系
- **体用关系** - 识别哪个经卦代表求卦者，哪个代表所问之事
- **互卦与变卦** - 推算衍生卦象以获得更深层的洞察
- **时令旺衰** - 根据当前季节分析五行的强弱状态
- **综合解读** - 涵盖事业、感情、财运、健康等多维度分析

### 用户体验

- **双语支持** - 中英文无缝切换
- **历史记录** - 保存和回顾过往的占卜结果（localStorage）
- **响应式设计** - 适配桌面端、平板和移动设备
- **中式美学** - 采用思源宋体（Noto Serif SC）的传统视觉主题
- **离线可用** - 首次加载后无需网络连接即可使用

## 环境要求

| 依赖项 | 版本 | 是否必需 |
|--------|------|----------|
| Node.js | >= 18 | 是 |
| npm    | >= 9  | 是 |

## 安装

### 克隆仓库

```bash
git clone https://github.com/your-username/plum-yi.git
cd plum-yi
```

### 安装依赖

```bash
npm install
```

## 使用方法

### 开发服务器

启动带有热模块替换功能的开发服务器：

```bash
npm run dev
```

应用将在 `http://localhost:5173/` 上运行。

### 使用应用

1. **选择占卜方式**
   - 在首页选择易经占卜或梅花易数占卜

2. **进行占卜**
   - 易经：选择蓍草法或金钱卦法，按照动画引导操作
   - 梅花易数：根据提示输入时间、数字或文字

3. **查看结果**
   - 查看生成的卦象及其六爻
   - 以您偏好的语言阅读卦辞和爻辞
   - 分析五行关系和体用变化

4. **回顾历史**
   - 从历史记录页面查看过往的占卜记录
   - 对比结果，追踪规律

5. **切换语言**
   - 点击右上角的语言按钮切换中文/英文

## 项目结构

```
plum-yi/
├── src/
│   ├── main.tsx              # 应用入口
│   ├── App.tsx               # 路由配置
│   ├── index.css             # 全局中式主题样式
│   ├── components/
│   │   ├── Navbar.tsx         # 响应式导航栏
│   │   ├── LanguageSwitcher.tsx # 语言切换组件
│   │   ├── HexagramDisplay.tsx  # 卦象可视化
│   │   └── LineDisplay.tsx      # 单爻渲染器
│   ├── pages/
│   │   ├── HomePage.tsx       # 首页，包含占卜方式选择
│   │   ├── IChingPage.tsx     # 易经占卜界面
│   │   ├── MeihuaPage.tsx     # 梅花易数占卜界面
│   │   ├── ResultPage.tsx     # 占卜结果分析页面
│   │   └── HistoryPage.tsx    # 占卜历史记录查看器
│   ├── services/
│   │   ├── iChing.ts          # 易经占卜算法
│   │   ├── meihua.ts          # 梅花易数算法
│   │   ├── hexagramData.ts    # 完整的六十四卦数据
│   │   └── wuxingData.ts      # 五行数据及生克关系
│   ├── types/
│   │   └── index.ts           # TypeScript 类型定义
│   ├── i18n/
│   │   ├── index.ts           # i18next 国际化配置
│   │   ├── zh.json            # 中文翻译
│   │   └── en.json            # 英文翻译
│   └── assets/                # 静态资源
├── public/                    # 公共资源
├── package.json               # 依赖和脚本配置
├── vite.config.ts             # Vite 配置
├── tsconfig.json              # TypeScript 配置
└── LICENSE                    # GPL v3 许可证
```

## 构建与部署

### 生产环境构建

```bash
npm run build
```

此命令将在 `dist/` 目录下生成优化后的生产环境构建产物。

### 预览构建结果

在本地测试生产环境构建：

```bash
npm run preview
```

### 部署到静态托管服务

`dist/` 文件夹可以部署到任意静态托管服务：

**GitHub Pages：**

```bash
# 在 package.json 中添加
"homepage": "https://your-username.github.io/plum-yi",

# 部署
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages
```

**Netlify / Vercel：**

1. 连接您的代码仓库
2. 将构建命令设置为 `npm run build`
3. 将输出目录设置为 `dist`
4. 开始部署

### 本地离线使用

构建完成后，您可以直接在浏览器中打开 `dist/index.html`，实现完全离线使用。

## 参与贡献

欢迎参与贡献！请随时提交 Pull Request。

1. Fork 本仓库
2. 创建您的功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交您的更改（`git commit -m '添加某个新功能'`）
4. 推送到远程分支（`git push origin feature/AmazingFeature`）
5. 发起 Pull Request

## 许可证

本项目基于 GNU 通用公共许可证 v3.0 授权 - 详见 [LICENSE](LICENSE) 文件。

### GPL v3 摘要

- ✅ 商业使用
- ✅ 修改
- ✅ 分发
- ✅ 专利使用
- ❌ 私人使用
- ❌ 责任
- ❌ 担保

**重要提示：** 如果您分发修改后的版本，同样必须在 GPL v3 许可证下分发。

---

<div align="center">

**以 ❤️ 之心，传承与分享中华古老智慧**

</div>
