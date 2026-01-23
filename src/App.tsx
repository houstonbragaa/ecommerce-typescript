import { collection, getDocs } from 'firebase/firestore'
import { db } from './lib/firestore.config'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const user = querySnapshot.docs.map((doc) => doc.data())
      console.log(user)
    }
    getUsers()
  }, [])

  return (
    <div>
      <h1 className=""></h1>
    </div>
  )
}

export default App
