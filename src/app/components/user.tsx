"use client";
import { VersionContext } from "../context/versionContext";
import { useUsers } from "../service/useUser";
import { useContext } from "react";
export function User() {
  const users = useUsers();

  return (
    <div>
      <h2>version: {useContext(VersionContext)}</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// {users.map((u) => (
//         <li key={u.id}>{u.name}</li>
//       ))}
