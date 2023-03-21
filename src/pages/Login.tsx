import { useState } from 'react';
import { LoginUser } from '../interface';
import { supabase } from '../supabase/client.js';

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [user, setUser] = useState<LoginUser>()

  //singUp()
  async function signInWithEmail() {
    try {
      const data = await supabase.auth.signInWithOtp({
      email: email
    })
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUser({
      email: email
    })
    localStorage.setItem("email", email);

    signInWithEmail();
  }

  console.log(localStorage.getItem("email"))

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label><br />
      <input type="email" placeholder="email@site.com" onChange={(e) => setEmail(e.target.value)} /><br />
      <button>Submit</button>
    </form>
  )
}
