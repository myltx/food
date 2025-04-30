import { ref, computed } from "vue";
import type { Dish, Menu, MealType, Nutrition } from "~/types/menu";

const breakfastDishes: Dish[] = [
  {
    id: "b1",
    name: "豆浆",
    type: "饮品",
    category: "饮品",
    calories: 100,
    protein: 3,
    fat: 1,
    carbs: 20,
  },
  {
    id: "b2",
    name: "油条",
    type: "主食",
    category: "主食",
    calories: 300,
    protein: 8,
    fat: 15,
    carbs: 40,
  },
  {
    id: "b3",
    name: "鸡蛋",
    type: "荤菜",
    category: "荤菜",
    calories: 150,
    protein: 12,
    fat: 10,
    carbs: 1,
  },
  {
    id: "b4",
    name: "包子",
    type: "主食",
    category: "主食",
    calories: 250,
    protein: 6,
    fat: 5,
    carbs: 45,
  },
  {
    id: "b5",
    name: "粥",
    type: "主食",
    category: "主食",
    calories: 200,
    protein: 4,
    fat: 1,
    carbs: 40,
  },
  {
    id: "b6",
    name: "牛奶",
    type: "饮品",
    category: "饮品",
    calories: 120,
    protein: 8,
    fat: 5,
    carbs: 12,
  },
  {
    id: "b7",
    name: "面包",
    type: "主食",
    category: "主食",
    calories: 280,
    protein: 9,
    fat: 8,
    carbs: 45,
  },
  {
    id: "b8",
    name: "水果沙拉",
    type: "素菜",
    category: "素菜",
    calories: 150,
    protein: 2,
    fat: 1,
    carbs: 35,
  },
];

const lunchDishes: Dish[] = [
  {
    id: "l1",
    name: "米饭",
    type: "主食",
    category: "主食",
    calories: 200,
    protein: 4,
    fat: 0,
    carbs: 45,
  },
  {
    id: "l2",
    name: "红烧排骨",
    type: "荤菜",
    category: "荤菜",
    calories: 350,
    protein: 25,
    fat: 20,
    carbs: 5,
  },
  {
    id: "l3",
    name: "清炒时蔬",
    type: "素菜",
    category: "素菜",
    calories: 100,
    protein: 3,
    fat: 5,
    carbs: 15,
  },
  {
    id: "l4",
    name: "番茄蛋汤",
    type: "汤品",
    category: "汤品",
    calories: 150,
    protein: 8,
    fat: 5,
    carbs: 10,
  },
  {
    id: "l5",
    name: "宫保鸡丁",
    type: "荤菜",
    category: "荤菜",
    calories: 300,
    protein: 20,
    fat: 15,
    carbs: 25,
  },
  {
    id: "l6",
    name: "麻婆豆腐",
    type: "素菜",
    category: "素菜",
    calories: 200,
    protein: 12,
    fat: 10,
    carbs: 15,
  },
  {
    id: "l7",
    name: "酸菜鱼",
    type: "荤菜",
    category: "荤菜",
    calories: 280,
    protein: 22,
    fat: 12,
    carbs: 8,
  },
  {
    id: "l8",
    name: "炒青菜",
    type: "素菜",
    category: "素菜",
    calories: 80,
    protein: 2,
    fat: 3,
    carbs: 12,
  },
];

const dinnerDishes: Dish[] = [
  {
    id: "d1",
    name: "米饭",
    type: "主食",
    category: "主食",
    calories: 200,
    protein: 4,
    fat: 0,
    carbs: 45,
  },
  {
    id: "d2",
    name: "清蒸鱼",
    type: "荤菜",
    category: "荤菜",
    calories: 250,
    protein: 30,
    fat: 10,
    carbs: 0,
  },
  {
    id: "d3",
    name: "炒青菜",
    type: "素菜",
    category: "素菜",
    calories: 80,
    protein: 2,
    fat: 3,
    carbs: 12,
  },
  {
    id: "d4",
    name: "紫菜蛋花汤",
    type: "汤品",
    category: "汤品",
    calories: 120,
    protein: 6,
    fat: 4,
    carbs: 8,
  },
  {
    id: "d5",
    name: "红烧肉",
    type: "荤菜",
    category: "荤菜",
    calories: 400,
    protein: 25,
    fat: 30,
    carbs: 5,
  },
  {
    id: "d6",
    name: "蒜蓉空心菜",
    type: "素菜",
    category: "素菜",
    calories: 90,
    protein: 3,
    fat: 4,
    carbs: 10,
  },
  {
    id: "d7",
    name: "蒸蛋",
    type: "荤菜",
    category: "荤菜",
    calories: 150,
    protein: 12,
    fat: 8,
    carbs: 2,
  },
  {
    id: "d8",
    name: "冬瓜汤",
    type: "汤品",
    category: "汤品",
    calories: 100,
    protein: 2,
    fat: 1,
    carbs: 15,
  },
];

const supperDishes: Dish[] = [
  {
    id: "s1",
    name: "炒面",
    type: "主食",
    category: "主食",
    calories: 400,
    protein: 12,
    fat: 15,
    carbs: 60,
  },
  {
    id: "s2",
    name: "烤串",
    type: "荤菜",
    category: "荤菜",
    calories: 300,
    protein: 20,
    fat: 20,
    carbs: 10,
  },
  {
    id: "s3",
    name: "凉拌黄瓜",
    type: "素菜",
    category: "素菜",
    calories: 50,
    protein: 1,
    fat: 0,
    carbs: 10,
  },
  {
    id: "s4",
    name: "麻辣烫",
    type: "小吃",
    category: "小吃",
    calories: 350,
    protein: 15,
    fat: 18,
    carbs: 35,
  },
  {
    id: "s5",
    name: "煎饺",
    type: "主食",
    category: "主食",
    calories: 280,
    protein: 10,
    fat: 12,
    carbs: 35,
  },
  {
    id: "s6",
    name: "烤冷面",
    type: "小吃",
    category: "小吃",
    calories: 320,
    protein: 8,
    fat: 15,
    carbs: 40,
  },
  {
    id: "s7",
    name: "炸鸡",
    type: "荤菜",
    category: "荤菜",
    calories: 450,
    protein: 25,
    fat: 30,
    carbs: 25,
  },
  {
    id: "s8",
    name: "水果拼盘",
    type: "素菜",
    category: "素菜",
    calories: 120,
    protein: 2,
    fat: 1,
    carbs: 28,
  },
];

export function useMenu() {
  const currentMenu = ref<Menu>({
    id: "",
    mealType: "breakfast",
    dishes: [],
    totalCalories: 0,
    totalProtein: 0,
    totalFat: 0,
    totalCarbs: 0,
    createdAt: Date.now(),
    peopleCount: 1,
  });

  const calculateTotalNutrition = (): Nutrition => {
    const total = currentMenu.value.dishes.reduce(
      (acc, dish) => ({
        calories: acc.calories + dish.calories,
        protein: acc.protein + dish.protein,
        fat: acc.fat + dish.fat,
        carbs: acc.carbs + dish.carbs,
      }),
      { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );
    return total;
  };

  const updateTotalNutrition = () => {
    const totals = calculateTotalNutrition();
    currentMenu.value.totalCalories = totals.calories;
    currentMenu.value.totalProtein = totals.protein;
    currentMenu.value.totalFat = totals.fat;
    currentMenu.value.totalCarbs = totals.carbs;
  };

  const addDish = (dish: Dish) => {
    currentMenu.value.dishes.push(dish);
    updateTotalNutrition();
  };

  const removeDish = (dishId: string) => {
    currentMenu.value.dishes = currentMenu.value.dishes.filter(
      (dish) => dish.id !== dishId
    );
    updateTotalNutrition();
  };

  const clearMenu = () => {
    currentMenu.value.dishes = [];
    updateTotalNutrition();
  };

  const setMealType = (type: MealType) => {
    if (
      type === "breakfast" ||
      type === "lunch" ||
      type === "dinner" ||
      type === "supper"
    ) {
      currentMenu.value.mealType = type;
    }
  };

  const isEmpty = computed(() => currentMenu.value.dishes.length === 0);
  const dishCount = computed(() => currentMenu.value.dishes.length);

  const generateMenu = (
    peopleCount: number,
    mealType: MealType,
    favorites?: Dish[],
    selectedTypes?: string[]
  ): Menu => {
    // 根据用餐类型选择对应的菜品池
    let dishPool: Dish[] = [];
    switch (mealType) {
      case "breakfast":
        dishPool = breakfastDishes;
        break;
      case "lunch":
        dishPool = lunchDishes;
        break;
      case "dinner":
        dishPool = dinnerDishes;
        break;
      case "supper":
        dishPool = supperDishes;
        break;
    }

    // 如果指定了菜品类型，过滤菜品池
    if (selectedTypes && selectedTypes.length > 0) {
      dishPool = dishPool.filter((dish) => selectedTypes.includes(dish.type));
    }

    // 根据人数动态决定菜品数量（更贴近国人习惯）
    let dishCount = 0;
    if (peopleCount === 1) {
      dishCount = 4;
    } else if (peopleCount <= 3) {
      dishCount = 6;
    } else if (peopleCount <= 6) {
      dishCount = 8;
    } else if (peopleCount <= 10) {
      dishCount = 10;
    } else {
      dishCount = Math.min(14, Math.ceil(peopleCount * 1.2));
    }
    // 早餐/夜宵适当减少
    if (mealType === "breakfast" || mealType === "supper") {
      dishCount = Math.max(3, Math.floor(dishCount * 0.6));
    }
    dishCount = Math.min(dishCount, dishPool.length); // 不超过可选菜品数

    // 随机选择菜品
    const selectedDishes: Dish[] = [];
    const usedIndexes = new Set<number>();
    while (selectedDishes.length < dishCount && dishPool.length > 0) {
      const randomIndex = Math.floor(Math.random() * dishPool.length);
      if (!usedIndexes.has(randomIndex)) {
        const dish = dishPool[randomIndex];
        selectedDishes.push(dish);
        usedIndexes.add(randomIndex);
      }
    }

    // 计算总营养值（每道菜建议准备 peopleCount 份）
    const totalNutrition = selectedDishes.reduce(
      (acc, dish) => ({
        calories: acc.calories + dish.calories * peopleCount,
        protein: acc.protein + dish.protein * peopleCount,
        fat: acc.fat + dish.fat * peopleCount,
        carbs: acc.carbs + dish.carbs * peopleCount,
      }),
      { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );

    // 创建并返回菜单，附带建议分量
    return {
      id: Date.now().toString(),
      mealType,
      dishes: selectedDishes,
      totalCalories: totalNutrition.calories,
      totalProtein: totalNutrition.protein,
      totalFat: totalNutrition.fat,
      totalCarbs: totalNutrition.carbs,
      createdAt: Date.now(),
      peopleCount, // 新增字段，方便前端展示
    };
  };

  return {
    currentMenu,
    isEmpty,
    dishCount,
    addDish,
    removeDish,
    clearMenu,
    setMealType,
    generateMenu,
  };
}
