import React, { FC } from 'react'
import useAuth from './hooks/useAuth'
import { FcGoogle } from 'react-icons/fc'

const Auth: FC = () => {
  const { onAuth, goToChatPage } = useAuth()

  const uid = localStorage.getItem('uid')

  React.useEffect(() => {
    if (uid) return goToChatPage()
  }, [uid, goToChatPage])
  

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex flex-col text-center w-[600px] p-4 border rounded bg-white ">
        <h2 className="text-3xl mb-2">Welcome to Onii Chat!</h2>
        <h3 className="text-2xl">Sign up to start chat</h3>
        <FcGoogle
          onClick={onAuth}
          className="w-[50px] h-[50px] my-2 mx-auto cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Auth