'use server';

 export async function shareMeal(fromData) {
    const mealData = {
      title: fromData.get('title'),
      summary: fromData.get('summary'),
      instructions: fromData.get('instructions'),
      image: fromData.get('image'),
      creator: fromData.get('name'),
      creator_email: fromData.get('email'),
    };

    console.log(mealData);

    // const response = await fetch('/api/meals', {
    //   method: 'POST',
    //   body: JSON.stringify(mealData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  }