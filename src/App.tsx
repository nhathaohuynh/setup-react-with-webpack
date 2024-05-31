import { FC, useState } from 'react'
import logo from './assets/image/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullName] = useState('Huynh Nhat Hao')

  console.log(fullName)
  return (
    <div>
      <h1>{fullName}</h1>
      <img src={logo} alt='React Logo' width={100} height={100} />
      <h2>Bai biet duoc viet tai blog {process.env.HOST}</h2>
    </div>
  )
}

export default App
