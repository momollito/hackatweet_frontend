import styles from '../styles/Signup.module.css';
import React from 'react'

const Signup = ({open}) => {

if (!open) return null

  return (
    <div className="overlay">
        <div className="signUpContainer">
        <Image src="/twitterlogo.png" alt="the blue bird"  width={40} height={40} className={styles.image}/>
        <h2 className={styles.h2}>Create your Hackatweet account</h2>
        <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
		<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
        <button id="signin" className={styles.signin} >Signin</button>
        </div>
    </div>
  )
}

export default Signup