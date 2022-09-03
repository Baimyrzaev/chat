import React, { FC } from 'react'
import SendMessage from './components/SendMessage'
import Loading from '../../components/Loading'
import { query, orderBy, limit, collection } from 'firebase/firestore';
import { db } from '../../configs'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Navbar from './components/Navbar'
import MessageItem from './components/MessageItem/index';


const Chat: FC = () => {
  const messageRef = collection(db, 'messages')
  const data = query(messageRef, orderBy('createdAt'), limit(25))

  const [messages, loading] = useCollectionData(data)

  return (
    <div className="flex flex-col bg-[#fff] w-[1200px] h-screen m-[0_auto] border-l border-r px-4">
      <Navbar />
      <div className="flex flex-col h-[90vh] overflow-y-auto relative">
        {
          loading ? <Loading /> :
          messages?.map((message) => (
            <MessageItem item={message} key={message.createdAt} />
          ))
        }
      </div>
      <SendMessage />
    </div>
  )
}

export default Chat