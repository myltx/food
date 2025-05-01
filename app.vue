<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
// 应用入口逻辑
</script>

<style>
body {
  font-family: "Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    sans-serif;
  background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ef 100%);
  color: #222;
}

/* 导航栏美化 */
nav {
  box-shadow: 0 2px 16px 0 rgba(60, 72, 88, 0.1), 0 1.5px 0 0 #e0e7ef;
  border-bottom: 1.5px solid #e0e7ef;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
}
nav .text-xl,
nav .font-bold {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
nav a {
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
}
nav a:hover {
  color: #6366f1;
}
nav a:hover::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #6366f1 0%, #818cf8 100%);
}

/* 卡片优化 */
.card-hover {
  transition: box-shadow 0.3s, transform 0.3s;
  border-radius: 1.5rem;
  box-shadow: 0 6px 32px 0 rgba(60, 72, 88, 0.12);
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid #f3f4f6;
}
.card-hover:hover {
  transform: translateY(-3px) scale(1.015);
  box-shadow: 0 16px 48px 0 rgba(60, 72, 88, 0.16);
}

/* 按钮美化 */
.btn-hover {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 1px 4px 0 rgba(99, 102, 241, 0.06);
}
.btn-hover:active {
  transform: scale(0.97);
}
.btn-hover.bg-blue-600 {
  background: linear-gradient(90deg, #2563eb 0%, #6366f1 100%);
  border: none;
}
.btn-hover.bg-blue-600:hover {
  background: linear-gradient(90deg, #1e40af 0%, #6366f1 100%);
}

/* 输入框优化 */
.input-focus {
  transition: box-shadow 0.2s, border-color 0.2s;
  box-shadow: 0 1px 4px 0 rgba(60, 72, 88, 0.06);
  border-radius: 0.75rem;
}
.input-focus:focus {
  border-color: #6366f1;
  box-shadow: 0 2px 8px 0 rgba(99, 102, 241, 0.1);
}

/* 主内容区优化 */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}

/* 响应式优化 */
@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .text-3xl {
    font-size: 1.3rem;
  }
  .p-6 {
    padding: 0.75rem;
  }
  .gap-4 {
    gap: 0.5rem;
  }
  nav .text-xl {
    font-size: 1.1rem;
  }
  nav .h-16 {
    height: 3rem;
  }
  .container {
    padding: 1.2rem 0.3rem;
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb {
  background: #c7d2fe;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #818cf8;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
