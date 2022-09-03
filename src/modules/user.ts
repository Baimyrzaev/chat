import React, { FC } from 'react'
import { baseApi } from '../configs'
import { IUser } from '../types/index';

const getUser = (id: string | null) => baseApi.get(`/users/${id}.json`)

const useUser = () => {
  const uid = localStorage.getItem('uid')
  const [user, setUser] = React.useState<IUser | null>(null)

  React.useEffect(() => {
    const request = getUser(uid)

    request
      .then(res => setUser(res.data))
  }, [uid])

  return {
    user,
  }
}

const use = useUser

export const CurrentUser = {
  use,
}