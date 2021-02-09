import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { app } from "../../base";
import { updateUserThunk } from "../../redux/action-creators/user";
import { Multiselect } from "multiselect-react-dropdown";
import styles from "./Profile.module.css";
import { useEffect } from "react";
import { getAllGamesThunk } from '../../redux/action-creators/getGames';

const EditProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector((store) => store.user.name);
  const userId = useSelector((store) => store.user.id);
  const games = useSelector((store) => store.games.games);

  const [inputs, setInputs] = useState({
    name: username,
    info: "",
    phone: "",
    fav_games: []
  });

  const [file, setFile] = useState("");

  useEffect(() => {
     dispatch(getAllGamesThunk());
  }, []);

  const nameHandler = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    console.log('inputs', inputs);
  };

  const handleInfo = async () => {
    dispatch(updateUserThunk(inputs, userId, history));

    // console.log(response);
  };

  /*  // сохранение картинки в firebase
  const onFileChange = async e => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file).then(() => {
      // console.log('Uploaded file', file.name);
    });
  }; */
  // сохранение картинки в локальное хранилице
  const onFileChange = (e) => {
    console.log(e.target.files[0].name);
    setFile(e.target.files[0].name);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleInfo();
  };

    const selectHandler = (event) => {
      console.log(event);
      setInputs({ ...inputs, fav_games: event.map(e => e = e._id) });
    };
console.log('inputs', inputs);
  return (
    <div>
      <h1>Редактировать профиль</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control
            onChange={nameHandler}
            type="text"
            placeholder="Введи имя"
            name="name"
            value={inputs.name}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Информация</Form.Label>
          <Form.Control
            onChange={nameHandler}
            type="text"
            placeholder="Расскажи немножко о себе"
            name="info"
            value={inputs.info}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Выбрать фото</Form.Label>
          <br />
          <Form.Control
            type="file"
            onChange={onFileChange}
            placeholder="Выбрать фото"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Телефон</Form.Label>
          <Form.Control
            onChange={nameHandler}
            type="tel"
            placeholder="Введи номер телефона для связи"
            name="phone"
            value={inputs.phone}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Любимые игры</Form.Label>
          <Multiselect
            options={games}
            displayValue="title"
            onSelect={selectHandler}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Сохранить изменения
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
