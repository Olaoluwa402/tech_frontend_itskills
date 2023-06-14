import Banner from "../../components/banner/banner";
import Button from "../../components/Button/Button";
import CustomCardOne from "../../components/CustomCardOne/CustomCardOne";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Card from "../../components/Card/Card";
import Video from "../../components/Videos/Video";

import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div>
      {/* button component */}
      <div className={styles.buttonContainer}>
        <Button name="Submit" color="white" />
        <Button name="Edit" color="white" bg="green" />
        <Button
          name="Cancel"
          color="white"
          bg="purple"
          borderRadius="15px"
          icon=<FaUserAlt size=".7rem" />
        />
      </div>

      {/* cards section */}

      <section>
        <CustomCardOne>
          <Card
            title="React is simple"
            description="Yes, react is lovely and simple"
            icon=<MdOutlineFavoriteBorder />
            imgUrl="https://nigerianinfopedia.com/wp-content/uploads/2021/04/hearing-aid-prices-in-nigeria.jpg"
          />
        </CustomCardOne>
      </section>

      {/* Video */}
      <Video />
    </div>
  );
};

export default HomeScreen;
