import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInSession } from "../../redux/action-creators/user";

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(userInSession());
  }, []);

  return <div className="container mt-5">Имя: {user.name}</div>;
};

export default ProfileInfo;
