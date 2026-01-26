import Header from './components/header'
import HomePage from './pages/home'

const App = () => {
  return (
    <div className="flex w-full flex-col justify-center md:items-center">
      <Header />
      <HomePage />
    </div>
  )
}

export default App
