import * as React from 'react';
import SocketConneter from './socket';

export interface IChatProps {
}

export function Chat (props: IChatProps) {
    console.log(props)
    React.useEffect(()=>{
    
      
    },[])
    return (
        <SocketConneter />
    );
}
