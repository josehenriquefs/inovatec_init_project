import {AuthProvider } from './src/contexts/Auth';
import server from './src/lib/services/server';
import mirage from './src/lib/services/server';
import { Router } from './src/routes/Router';

if (window.server) {
  window.server.shutdown();
}

window.server = mirage();


const App = () => {
  return <AuthProvider 
    signIn={function (email: string, password: string){
      throw new Error('Function not implemented.');
    } } 
    signOut={function (): Promise<void> {
      throw new Error('Function not implemented.');
    } }>
            <Router/>
          </AuthProvider>
}

export default App;