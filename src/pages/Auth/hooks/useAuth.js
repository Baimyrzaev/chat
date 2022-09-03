import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { postUser } from '../api'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {

  const navigate = useNavigate()

  const goToChatPage = () => navigate('/chat')
  const goToAuthPage = () => navigate('/')

  const signOut = () => {
    localStorage.removeItem('uid')
    goToAuthPage()
  }

  const handleAuth = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    return signInWithPopup(auth, provider)
  }

  const onAuth = () => {
    const request = handleAuth()

    request
      .then(res => {
        const tokenResponse = res._tokenResponse
        const isNewUser = tokenResponse.isNewUser
        const uid = res.user.uid
        const registerData = {
          uid,
          firstName: tokenResponse.firstName,
          lastName: tokenResponse.lastName,
          photoUrl: tokenResponse.photoUrl,
        }

        localStorage.setItem('uid', uid)
        goToChatPage()
        if (isNewUser) return postUser(registerData, uid)
      })
  }

  return {
    onAuth,
    goToChatPage,
    signOut,
  }
}

export default useAuth