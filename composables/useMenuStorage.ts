import { ref } from "vue";
import type { Dish, Menu } from "~/types/menu";

export const useMenuStorage = () => {
  // 状态
  const favorites = ref<Dish[]>([]);
  const history = ref<{ id: string; createdAt: number; menu: Menu }[]>([]);

  // 从 localStorage 加载数据
  const loadFromStorage = () => {
    try {
      const storedFavorites = localStorage.getItem("menu-favorites");
      if (storedFavorites) {
        favorites.value = JSON.parse(storedFavorites);
      }

      const storedHistory = localStorage.getItem("menu-history");
      if (storedHistory) {
        history.value = JSON.parse(storedHistory);
      }
    } catch (error) {
      console.error("从 localStorage 加载数据失败:", error);
    }
  };

  // 保存数据到 localStorage
  const saveToStorage = () => {
    try {
      localStorage.setItem("menu-favorites", JSON.stringify(favorites.value));
      localStorage.setItem("menu-history", JSON.stringify(history.value));
    } catch (error) {
      console.error("保存数据到 localStorage 失败:", error);
    }
  };

  // 收藏相关方法
  const addFavorite = (dish: Dish) => {
    if (!favorites.value.some((f) => f.id === dish.id)) {
      favorites.value.push(dish);
      saveToStorage();
    }
  };

  const removeFavorite = (dishId: string) => {
    favorites.value = favorites.value.filter((f) => f.id !== dishId);
    saveToStorage();
  };

  // 历史记录相关方法
  const addToHistory = (menu: Menu) => {
    const historyItem = {
      id: Date.now().toString(),
      createdAt: Date.now(),
      menu,
    };
    history.value.unshift(historyItem);

    // 限制历史记录数量为最近 10 条
    if (history.value.length > 10) {
      history.value = history.value.slice(0, 10);
    }

    saveToStorage();
  };

  const clearHistory = () => {
    history.value = [];
    saveToStorage();
  };

  // 初始化时加载数据
  loadFromStorage();

  return {
    favorites,
    history,
    addFavorite,
    removeFavorite,
    addToHistory,
    clearHistory,
  };
};
