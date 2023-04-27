import styles from "../styles/Main.module.css";
import Image from "next/image";
import Tweet from "./Tweet";
import { Button } from 'antd';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.infosection}>
        <div>
          <Image
            src="/twitterlogo.png"
            alt="the blue bird"
            width={50}
            height={50}
            className={styles.imageinfo}
          />
        </div>
        <div className={styles.userinfo}>
          <Image 
          className={styles.imageinfo} src="/peepoodoo.png" alt="profil picture" width={50}
            height={50}
          />
          <div>
            <h4>Title</h4>
            <p>@username
            </p>
          </div>
        </div>
      </div>
      <div className={styles.homesection}>
    <div className={styles.newtweet}>
        <p className={styles.hometitle}>
            Home
        </p>
        
            <input className={styles.input} type="text"  color='#FFFF00' placeholder="What's up?"></input>
       <p>0/280<span> <Button>Tweet</Button></span> </p> 
        
       
    </div>
    <Tweet></Tweet>


      </div>
      <div className={styles.trendssection}>Trends</div>
    </div>
  );
}

export default Main;
