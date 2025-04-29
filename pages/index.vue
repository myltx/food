<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <!-- 顶部导航 -->
    <nav
      class="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- 左侧 Logo 和标题 -->
          <div class="flex items-center gap-3">
            <div
              class="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div
                class="i-heroicons-sparkles text-2xl text-blue-600 animate-bounce"></div>
              <span
                class="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >智能菜单助手</span
              >
            </div>
            <div class="hidden sm:flex items-center gap-6 ml-8">
              <a
                href="#"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1">
                <div class="i-heroicons-home"></div>
                首页
              </a>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1">
                <div class="i-heroicons-star"></div>
                我的收藏
              </a>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1">
                <div class="i-heroicons-clock"></div>
                历史记录
              </a>
            </div>
          </div>

          <!-- 右侧功能区 -->
          <div class="flex items-center gap-4">
            <button
              class="btn-hover px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <div class="i-heroicons-question-mark-circle"></div>
              <span class="hidden sm:inline">使用帮助</span>
            </button>
            <button
              class="btn-hover px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-1">
              <div class="i-heroicons-plus"></div>
              <span class="hidden sm:inline">新建菜单</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <!-- 标题区域 -->
      <div class="text-center mb-8">
        <h1
          class="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          智能菜单推荐
        </h1>
        <p class="text-gray-600">为您定制完美的用餐计划</p>
      </div>

      <!-- 表单卡片 -->
      <div
        class="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 mb-6 card-hover">
        <form @submit.prevent="handleSubmit">
          <!-- 基本信息 -->
          <div class="space-y-6 mb-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                就餐人数
                <span class="text-red-500">*</span>
              </label>
              <div class="max-w-[200px]">
                <input
                  v-model="form.peopleCount"
                  type="number"
                  min="1"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-focus"
                  placeholder="请输入人数" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                用餐类型
                <span class="text-red-500">*</span>
              </label>
              <select
                v-model="form.mealType"
                required
                class="w-full max-w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-focus">
                <option value="breakfast">早餐</option>
                <option value="lunch">午餐</option>
                <option value="dinner">晚餐</option>
                <option value="supper">夜宵</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                菜品类型
              </label>
              <div class="grid grid-cols-3 gap-4">
                <label
                  v-for="type in dishTypes"
                  :key="type"
                  class="flex items-center hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                  <input
                    type="checkbox"
                    :value="type"
                    v-model="form.selectedTypes"
                    class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <span class="ml-2 text-sm text-gray-700">{{ type }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 提交按钮 -->
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="isLoading"
              class="btn-hover px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
              <div
                v-if="isLoading"
                class="i-heroicons-arrow-path animate-spin"></div>
              <div v-else class="i-heroicons-sparkles"></div>
              {{ isLoading ? "生成中..." : "生成菜单" }}
            </button>
          </div>
        </form>
      </div>

      <!-- 推荐菜单结果 -->
      <Transition name="fade">
        <div
          v-if="menu"
          class="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 card-hover mb-6">
          <h2
            class="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
            <div class="i-heroicons-clipboard-document-check"></div>
            推荐菜单
          </h2>

          <!-- 菜品列表 -->
          <div class="space-y-4 mb-8">
            <div
              v-for="dish in menu.dishes"
              :key="dish.id"
              class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
              <div class="flex items-center gap-2">
                <span class="font-medium text-gray-900">{{ dish.name }}</span>
                <span
                  class="px-2 py-1 text-xs rounded-full"
                  :class="getDishTypeClass(dish.type)">
                  {{ dish.type }}
                </span>
              </div>
              <button
                @click="toggleFavorite(dish)"
                class="p-1 hover:bg-gray-100 rounded-full transition-transform duration-200 hover:scale-110">
                <div
                  :class="[
                    isFavorite(dish)
                      ? 'i-heroicons-star-solid text-yellow-400'
                      : 'i-heroicons-star text-gray-400',
                  ]"></div>
              </button>
            </div>
          </div>

          <!-- 营养信息 -->
          <div class="border-t border-gray-100 pt-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">营养信息</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="p-4 bg-orange-50 rounded-lg">
                <div class="flex items-center gap-2 text-orange-600 mb-1">
                  <div class="i-heroicons-fire"></div>
                  <span class="text-sm">热量</span>
                </div>
                <div class="text-lg font-semibold text-gray-900">
                  {{ menu.totalCalories || 0 }} 千卡
                </div>
              </div>
              <div class="p-4 bg-blue-50 rounded-lg">
                <div class="flex items-center gap-2 text-blue-600 mb-1">
                  <div class="i-heroicons-beaker"></div>
                  <span class="text-sm">蛋白质</span>
                </div>
                <div class="text-lg font-semibold text-gray-900">
                  {{ menu.totalProtein || 0 }}g
                </div>
              </div>
              <div class="p-4 bg-yellow-50 rounded-lg">
                <div class="flex items-center gap-2 text-yellow-600 mb-1">
                  <div class="i-heroicons-circle-stack"></div>
                  <span class="text-sm">脂肪</span>
                </div>
                <div class="text-lg font-semibold text-gray-900">
                  {{ menu.totalFat || 0 }}g
                </div>
              </div>
              <div class="p-4 bg-green-50 rounded-lg">
                <div class="flex items-center gap-2 text-green-600 mb-1">
                  <div class="i-heroicons-cube"></div>
                  <span class="text-sm">碳水</span>
                </div>
                <div class="text-lg font-semibold text-gray-900">
                  {{ menu.totalCarbs || 0 }}g
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- 历史记录 -->
      <Transition name="fade">
        <div
          v-if="history.length > 0"
          class="bg-white/80 backdrop-blur-sm rounded-lg shadow p-6 card-hover">
          <div class="flex items-center justify-between mb-4">
            <h2
              class="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
              <div class="i-heroicons-clock"></div>
              历史记录
            </h2>
            <button
              @click="clearHistory"
              class="btn-hover px-3 py-1.5 text-sm text-red-600 bg-red-50 rounded-md hover:bg-red-100 flex items-center gap-1">
              <div class="i-heroicons-trash"></div>
              清除历史
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="item in history"
              :key="item.id"
              class="p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">
                  {{ new Date(item.createdAt).toLocaleString() }}
                </span>
                <span
                  class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  {{ item.menu.peopleCount }}人 ·
                  {{ getMealTypeName(item.menu.mealType) }}
                </span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="dish in item.menu.dishes"
                  :key="dish.id"
                  class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                  {{ dish.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Dish, Menu, MealType } from "~/types/menu";

// 状态
const form = ref({
  peopleCount: 1,
  mealType: "lunch" as MealType,
  selectedTypes: [] as string[],
});

const menu = ref<Menu | null>(null);
const isLoading = ref(false);

// 常量
const dishTypes = ["荤菜", "素菜", "主食", "汤品", "小吃", "饮品"];

// 工具函数
const getDishTypeClass = (type: string) => {
  const classes = {
    荤菜: "bg-red-100 text-red-800",
    素菜: "bg-green-100 text-green-800",
    主食: "bg-yellow-100 text-yellow-800",
    汤品: "bg-blue-100 text-blue-800",
    小吃: "bg-purple-100 text-purple-800",
    饮品: "bg-indigo-100 text-indigo-800",
  };
  return classes[type as keyof typeof classes] || "bg-gray-100 text-gray-800";
};

const getMealTypeName = (type: MealType) => {
  const typeMap = {
    breakfast: "早餐",
    lunch: "午餐",
    dinner: "晚餐",
    supper: "夜宵",
  };
  return typeMap[type];
};

// 获取依赖的组合式函数
const { generateMenu } = useMenu();
const {
  favorites,
  history,
  addFavorite,
  removeFavorite,
  addToHistory,
  clearHistory,
} = useMenuStorage();

// 方法
const handleSubmit = async () => {
  try {
    isLoading.value = true;
    menu.value = generateMenu(
      form.value.peopleCount,
      form.value.mealType,
      undefined,
      form.value.selectedTypes.length > 0 ? form.value.selectedTypes : undefined
    );

    if (menu.value) {
      addToHistory(menu.value);
    }
  } catch (error) {
    console.error("生成菜单失败:", error);
  } finally {
    isLoading.value = false;
  }
};

const toggleFavorite = (dish: Dish) => {
  if (isFavorite(dish)) {
    removeFavorite(dish.id);
  } else {
    addFavorite(dish);
  }
};

const isFavorite = (dish: Dish) => {
  return favorites.value.some((f) => f.id === dish.id);
};
</script>

<style>
/* 基础过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 卡片悬浮效果 */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 按钮动画 */
.btn-hover {
  transition: all 0.2s ease;
}

.btn-hover:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 输入框焦点效果 */
.input-focus {
  transition: all 0.2s ease;
}

.input-focus:focus {
  transform: scale(1.01);
}

/* 添加响应式样式 */
@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .text-3xl {
    font-size: 1.875rem;
  }

  .p-6 {
    padding: 1rem;
  }

  .gap-4 {
    gap: 0.75rem;
  }
}

/* 添加滚动条样式 */
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
</style>
