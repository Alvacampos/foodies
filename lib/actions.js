'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

 export async function shareMeal(fromData) {
    const mealData = {
      title: fromData.get('title'),
      summary: fromData.get('summary'),
      instructions: fromData.get('instructions'),
      image: fromData.get('image'),
      creator: fromData.get('name'),
      creator_email: fromData.get('email'),
    };

   await saveMeal(mealData)
   redirect('/meals'); 

    // const response = await fetch('/api/meals', {
    //   method: 'POST',
    //   body: JSON.stringify(mealData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  }