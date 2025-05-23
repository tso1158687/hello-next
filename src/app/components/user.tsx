'use client';
import { useUsers } from "../service/useUser";
export function User(){
    const users = useUsers()

    return (
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    )
}

// {users.map((u) => (
//         <li key={u.id}>{u.name}</li>
//       ))}