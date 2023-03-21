import React, {useEffect, useState} from 'react'

export default function Home() {
  const [verified, setVerified] = useState<boolean>(false);
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email !== null) {
        setVerified(true);
    } else {
        setVerified(false);
    }
    console.log(email);
    console.log(verified);
  }, []);
  return (
    <div>Home</div>
  )
}

