'use client'
export default function ErrorPage({ error, reset }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}