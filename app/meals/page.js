import Link from "next/link";
import MealsGrid from "@/app/components/meals/meals-grid";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}


export default function MealsPage() {
    return (
        <>
        <header className={classes.header}>
            <h1>Delicious, meals, created <span className={classes.highlight}>by you</span></h1>
            <p>Choose your favorite recipe and cock it yourself, It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href='/meals/share'>
                    Share your favorite recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
                <Meals />
            </Suspense>
        </main>
        </>
    );
}