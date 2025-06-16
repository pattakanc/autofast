import React from 'react';
import { categoriesList } from '../constants';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to RianFast</h1>
      <p className="mb-2">Select a category to explore courses:</p>
      <ul className="list-disc pl-6">
        {categoriesList.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </main>
  );
}
