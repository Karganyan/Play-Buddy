import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInSessionThunk } from "../../redux/action-creators/user";
import styles from "./Profile.module.css";

const ProfileInfo = () => {

  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userInSessionThunk());
  }, []);

  return <h1 className={styles.userName}>Привет, {user.name} !</h1>;
};

export default ProfileInfo;
