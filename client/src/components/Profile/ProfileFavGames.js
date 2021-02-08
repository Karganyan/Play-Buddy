import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInSessionThunk } from "../../redux/action-creators/user";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Profile.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import Game from '../Game/Game';

const ProfileFavGames = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(userInSessionThunk());
  }, []);

  const images = [
    "https://images-na.ssl-images-amazon.com/images/I/51A-LThX1rL._AC_SX450_.jpg",
    "https://ruslania.com/pictures/printed_photos/0/1000/4606369116640_o.jpg",
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div >
      

      <Carousel
        responsive={responsive}
        ssr
        partialVisbile
        itemClass="image-item"
      >
        {images.slice(0, 10).map((image) => {
          return (
            <Link to="/game">
              <Image
                className={styles.favGameImage}
                draggable={false}
                src={image}
                key={Math.random()} // тут будет id игры
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProfileFavGames;
