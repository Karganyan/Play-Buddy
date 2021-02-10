import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInSessionThunk } from "../../redux/action-creators/user";
import styles from "./Profile.module.css";

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(userInSessionThunk());
  }, []);

  return <div className={styles.userName}>{user.name}</div>;
};

export default ProfileInfo;
