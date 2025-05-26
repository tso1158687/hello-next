"use client";
import Link from "next/link";
import { useAtom } from "jotai";
import { citiesAtom } from "../jotai/jotai";
import { useState } from "react";

export default function About() {
  const [cities, setCities] = useAtom(citiesAtom);
  const [newCity, setNewCity] = useState("");

  const addCity = () => {
    console.log("Adding city:", newCity);
    // const newCity = (document.querySelector('input') as HTMLInputElement).value;
    if (newCity) {
      setCities([...cities, newCity]);
      setNewCity(""); // Clear the input after adding
    }
  };
  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold">Hello About?</h1>
      <Link href="/">home</Link>
      <h2>add city</h2>
      <input
        type="text"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button
        onClick={() => {
          addCity();
        }}
      >add</button><br />
       new city: {newCity}
    </div>
  );
}
