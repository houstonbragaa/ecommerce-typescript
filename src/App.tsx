import { collection, getDocs, type DocumentData } from 'firebase/firestore'
import { db } from './config/firebase'
import { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState<DocumentData[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const user = querySnapshot.docs.map((doc) => doc.data())
      console.log(user)
      setUsers(user)
    }
    getUsers()
  }, [])

  return (
    <div>
      <div>
        {users.map((u) => (
          <h1 key={u.id}>{u.name}</h1>
        ))}
      </div>
    </div>
  )
}

export default App
