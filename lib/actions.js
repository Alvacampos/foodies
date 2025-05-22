"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(fromData) {
  const mealData = {
    title: fromData.get("title"),
    summary: fromData.get("summary"),
    instructions: fromData.get("instructions"),
    image: fromData.get("image"),
    creator: fromData.get("name"),
    creator_email: fromData.get("email"),
  };

  if (
    isInvalidText(mealData.title) ||
    isInvalidText(mealData.summary) ||
    isInvalidText(mealData.instructions) ||
    isInvalidText(mealData.creator) ||
    isInvalidText(mealData.creator_email) ||
    !mealData.creator_email.includes("@") ||
    !mealData.image ||
    !mealData.image.size === 0
  ) {
    return {
      message: "Invalid input - please check your data",
    }
  }

  await saveMeal(mealData);
  redirect("/meals");
}
