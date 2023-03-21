import React, {useEffect, useState} from 'react'

export default function Home() {
  const [verified, setVerified] = useState<boolean>(false);
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email === null) setVerified(false);
    else setVerified(true);
    console.log(email);
    console.log(verified)
  }, []);
  return (
    <div>Home</div>
  )
}

