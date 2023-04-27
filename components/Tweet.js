import styles from "../styles/Tweet.module.css";
import Image from "next/image";

function Tweet() {
  const profilPicture = (
    <Image
      className={styles.imageinfo}
      src="/peepoodoo.png"
      alt="profil picture"
      width={50}
      height={50}
    />
  );

  return (
   <div className={styles.tweet}>
      <div className={styles.textcontainer}>
        <p>{profilPicture}Title <span>@username. afew second ago</span></p>
      </div>
      <div><p>Tweet message</p></div>
      <div>Logo
      </div>
      
    </div>
  );
}

export default Tweet;
