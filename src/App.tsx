import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { Socket } from 'socket.io-client';

function App(){
  Socket
  const elem = useRoutes(routes)
  return elem
}

export default App;