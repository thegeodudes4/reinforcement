
import React, {useState, useEffect} from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { loginOrCreateAccount } from '../api/users'
import { getTodos } from '../api/todos'

interface GoogleLoginResponse {
  credential: string;
}

const GoogleOAuth = () => {
  const [loginCredential, setLoginCredential] = useState<string | null>(null)

  useEffect(() => {
    if(loginCredential){

      (async () => {
        const response = await loginOrCreateAccount(loginCredential);
      })();
    }
  },[loginCredential])

  const handleSuccessfulLogin = (credential: string | undefined) => {
    if(credential){
      setLoginCredential(credential)
    }

  }

  
  // const signOutOfGoogle = () => {
  //   console.log('in signOutOfGoogle');
    
  //   return googleLogout();
  // }

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => handleSuccessfulLogin(credentialResponse.credential)}
        onError={() => {
          console.log('Login Failed');
      }} />
      <button onClick={getTodos}>Get Todos</button>
    </>
  )
}

export default GoogleOAuth;