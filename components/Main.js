import styles from "../styles/Main.module.css";
import Image from "next/image";
import Tweet from "./Tweet";
import { Button } from "antd";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const [inputValue, setinputValue] = useState("");
  const [tweetList, setallTweet] = useState([]);

  const input = (
    <input
      className={styles.input}
      type="text"
      placeholder="What's up?"
      maxlength="280"
      onChange={(e) => setinputValue(e.target.value)}
      value={inputValue}
    ></input>
  );
  const inputLength = inputValue.length + "/ 280";

  function handleTweetClick() {
    if (inputValue.length > 0) {
      let newTweet = <Tweet text={inputValue} />;
      setinputValue("");
      return setallTweet([...tweetList, newTweet]);
    }
  }

  function handleTrashClick() {}

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
            className={styles.imageinfo}
            src="/memoji.png"
            alt="profil picture"
            width={50}
            height={50}
          />
          <div>
            <h4>Title</h4>
            <p>@username</p>
          </div>
        </div>
      </div>
      <div className={styles.homesection}>
        <div className={styles.newtweet}>
          <h1 className={styles.hometitle}>Home</h1>
          {input}
          <div className={styles.button_lenght}>
            <span>{inputLength}</span>
            <Button onClick={() => handleTweetClick()}>Tweet</Button>
          </div>
        </div>
        {tweetList}
      </div>
      <div className={styles.trendssection}>Trends</div>
    </div>
  );
}

export default Main;
