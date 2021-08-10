import React, { FC, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../actions/user/atom';

import { io } from "socket.io-client";



const Chat: FC = (props) => {
  const ENDPOINT='localhost:3000'
  const User = useRecoilValue(userAtom);

  useEffect(() => {
   const socket= io(ENDPOINT);
   socket.emit("Join",{...User})

   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT])

  return <div></div>;
};

export default Chat;
