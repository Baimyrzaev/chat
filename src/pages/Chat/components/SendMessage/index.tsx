import React, { FC } from 'react'
import { collection, setDoc, doc, serverTimestamp  } from 'firebase/firestore';
import { db } from '../../../../configs'
import { CurrentUser } from '../../../../modules/user';

const SendMessage: FC = () => {
  const [message, setMessage] = React.useState<string>('')

  const { user } = CurrentUser.use()

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = {
      id: user?.uid,
      name: user?.firstName,
      avatar: user?.photoUrl,
      message: message,
      createdAt: serverTimestamp()
    }
    setMessage('')
    const messagesRef = collection(db, 'messages')
    return setDoc(doc(messagesRef), data)
  }

  return (
    <div className="flex border rounded p-3 mb-4">
      <input 
        type="text"
        onChange={handleMessage}
        value={message}
        className="w-full border rounded text-2xl mr-2 px-2 outline-none focus:border-[green]"
      />
      <button
        onClick={onSubmit}
        className="text-2xl p-[10px_50px] border rounded active:bg-[lightgreen]"
      >Send</button>
    </div>
  )
}


export default SendMessage