import React, { FC } from 'react'
import { CurrentUser } from '../../../../modules/user';
import useAuth from '../../../Auth/hooks/useAuth';

const Navbar: FC = () => {
  const { user } = CurrentUser.use()
  const { signOut } = useAuth()

  return (
    <div className="p-2 flex mt-2 border rounded items-center justify-between">
      <h2 className="text-2xl">{user?.firstName} {user?.lastName}</h2>
      <div className="flex">
        <img
          src={user?.photoUrl} alt="#"
          className="w-[50px] h-[50px] rounded-[50%] mr-2"
        />
        <button
          onClick={signOut}
          className="text-[18px] p-[10px_30px] border rounded text-white bg-[red]"
        >Sign out</button>
      </div>
    </div>
  )
}

export default Navbar