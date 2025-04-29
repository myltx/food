# 智能菜单助手

一个基于 Nuxt3 + Vue3 的智能菜单推荐应用，帮助用户根据人数、用餐类型和菜品偏好，智能生成营养均衡的菜单，并支持收藏与历史记录功能。

## 功能介绍

- **智能菜单推荐**：根据用户输入的就餐人数、用餐类型（早餐/午餐/晚餐/夜宵）、菜品类型偏好，自动生成推荐菜单。
- **营养信息展示**：为每份菜单提供热量、蛋白质等营养信息统计。
- **菜单收藏与历史记录**：支持收藏喜欢的菜单，随时查看历史推荐。
- **响应式美观界面**：采用现代化 UI 设计，适配多端设备。
- **数据本地存储**：收藏和历史记录数据本地持久化，保护用户隐私。

## 技术栈

- [Nuxt 3](https://nuxt.com/)（Vue 3 服务端渲染框架）
- [Vue 3](https://vuejs.org/)
- [UnoCSS](https://unocss.dev/)（原子化 CSS 方案）
- [reka-ui](https://reka-ui.com/)（UI 组件库）
- TypeScript

## 目录结构

- `pages/`：页面组件（如首页菜单推荐）
- `composables/`：自定义 hooks（如菜单生成、收藏管理等）
- `types/`：类型定义（如菜单、菜品等数据结构）
- `public/`：静态资源（如 favicon、robots.txt）
- `server/`：后端相关（如有 API 可扩展）

## 快速开始

### 安装依赖

推荐使用 [pnpm](https://pnpm.io/)：

```bash
pnpm install
```

也可使用 npm、yarn、bun 等包管理器。

### 本地开发

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产环境

```bash
pnpm build
```

本地预览生产环境：

```bash
pnpm preview
```

## 相关命令

- `pnpm dev`：本地开发
- `pnpm build`：生产环境构建
- `pnpm preview`：本地预览生产包

## 贡献与反馈

欢迎提交 Issue 或 PR，提出建议或反馈问题。

## License

MIT
