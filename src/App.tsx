import { Outlet } from 'react-router-dom'

export const App = () => {

  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  )
}
