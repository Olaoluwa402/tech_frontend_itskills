import React from "react";
import Card from "../Card/Card";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import CustomCardTwo from "../CustomCardTwo/CustomCardTwo";

import styles from "./Video.module.css";

const videos = [
  {
    id: Math.random() * 100000,
    title: "First video",
    description: "Video description",
    imgUrl:
      "https://nigerianinfopedia.com/wp-content/uploads/2021/04/hearing-aid-prices-in-nigeria.jpg",
  },
  {
    id: Math.random() * 100000,
    title: "Second video",
    description: "Video description",
    imgUrl:
      "https://nigerianinfopedia.com/wp-content/uploads/2021/04/hearing-aid-prices-in-nigeria.jpg",
  },
  {
    id: Math.random() * 100000,
    title: "Third video",
    description: "Video description",
    imgUrl:
      "https://nigerianinfopedia.com/wp-content/uploads/2021/04/hearing-aid-prices-in-nigeria.jpg",
  },
];

const Video = (props) => {
  return (
    <CustomCardTwo>
      <div className={styles.video_pane}></div>
      <div className={styles.video_list}>
        <h4>
          {videos.length > 1
            ? `${videos.length}videos`
            : `${videos.length}video`}
        </h4>
        {videos.map((video) => (
          <Card
            key={video.id}
            title={video.title}
            description={video.description}
            imgUrl={video.imgUrl}
            icon=<MdOutlineFavoriteBorder />
          />
        ))}
      </div>
    </CustomCardTwo>
  );
};

export default Video;
