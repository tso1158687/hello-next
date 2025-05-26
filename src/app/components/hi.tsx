"use client";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { citiesAtom } from "../jotai/jotai";

type Prop = {
  name: string;
  onClick: (message: string) => void;
};
export default function Hi({ name, onClick }: Prop) {
useEffect(() => {
    console.log("Hi component mounted");
    return () => {
      console.log("Hi component unmounted");
    };
  }, []);
  const [cities] = useAtom(citiesAtom);
  const [friend, setFriend] = useState("george");
  return (
    <div>
      <h1>hello {name}</h1>
      <div>
        say hi to{" "}
        <input
          type="text"
          value={friend}
          onChange={(e) => setFriend(e.target.value)}
        />
      </div>
      <div>
        <h2>cities</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
        <button onClick={() => onClick(friend)}>Click</button>
      </div>
    </div>
  );
}
