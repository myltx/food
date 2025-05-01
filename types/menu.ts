export type MealType = "breakfast" | "lunch" | "dinner" | "supper";

export type DishType = "荤菜" | "素菜" | "主食" | "汤品" | "甜点" | "饮品";

export interface Dish {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  tags?: string[];
  category: string;
  type: DishType;
}

export interface Menu {
  id: string;
  mealType: MealType;
  dishes: Dish[];
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
  createdAt: number;
  peopleCount: number;
}

export interface NutritionRequirement {
  minCalories?: number;
  maxCalories?: number;
  minProtein?: number;
  maxProtein?: number;
  minFat?: number;
  maxFat?: number;
  minCarbs?: number;
  maxCarbs?: number;
}

export interface MenuHistory {
  id: string;
  menu: Menu;
  createdAt: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}
