import styles from '../styles/Login.module.css';
import Image from 'next/image';
import Signup from './Signup';
import React, {useState} from 'react'





function Login() {

const [openSignup, setOpenSignup] = useState(false)

  const handleSignup = () => {
return (
  <Signup />
)
  }



  return (
    <div>
      <main className={styles.main}>
      <div className={styles.left}>
      <Image src="/twitterlogo.png" alt="the blue bird"  width={450} height={450} className={styles.image}/>
      </div>
      <div className={styles.right}>
        <Image src="/twitterlogo.png" alt="the blue bird"  width={40} height={40} className={styles.image}/>
        <h1 className={styles.h1}>See What's<br/>happening</h1>
        <h2 className={styles.h2}>Join Hackatweet today.</h2>
        <div className={styles.registerContainer}>
				<div className={styles.registerSection}>
					<button id="register" className={styles.signin} >Signin</button>
				</div>
				<div className={styles.registerSection}>
        <p className={styles.p}>Already have an account ?</p>
					<button id="connection" className={styles.signup} onClick={() => handleSignup()} >Signup</button>
				</div>
			</div>
      </div>
      </main>
    </div>
  );
}

export default Login;
