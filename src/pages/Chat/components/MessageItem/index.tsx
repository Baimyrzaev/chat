import React, { FC } from 'react'
import { IMessage } from '../../../../types/index';

interface MessageItemProps {
  item: IMessage | any,
}



const MessageItem: FC<MessageItemProps> = ({ item }) => {
  const uid = localStorage.getItem('uid')

  const {
    name,
    avatar,
    id,
    message,
  } = item

  return (
    <div
      className={`flex items-center w-[300px] p-2 border rounded my-4 ${uid === id ? 'ml-auto' : 'mr-auto' }`}
    >
      <div className="flex flex-col">
        <p>{name}</p>
        <img
          src={avatar}
          alt="#"
          className="w-[50px] h-[50px] rounded-[50%]"
        />
      </div>
      <h2 className="text-2xl">{message}</h2>
    </div>
  )
}

export default MessageItem