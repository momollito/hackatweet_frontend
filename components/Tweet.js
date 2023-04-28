import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  const profilPicture = (
    <Image
      className={styles.imageinfo}
      src="/memoji.png"
      alt="profil picture"
      width={50}
      height={50}
    />
  );
console.log(props)
  return (
   <div className={styles.tweet}>
      <div className={styles.textcontainer}>
        <p>{profilPicture}Title <span>@username. afew second ago</span></p>
      </div>
      <div><p>{props.text}</p></div>
      <div>
       <span><FontAwesomeIcon icon={faHeart}  /> </span>
          <span><FontAwesomeIcon icon={faTrashCan} /></span>
         
      </div>
      
    </div>
  );
}

export default Tweet;
