import { useState, useEffect } from 'react'
import axios from 'axios'
export interface User {
  id: number
  name: string
  email: string
  // 可依照 API 增加欄位，例如 phone, website 等
}
export function useUsers() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    console.log('use effect')
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log(res)
      setUsers(res.data)
    })
  }, [])

  return users
}