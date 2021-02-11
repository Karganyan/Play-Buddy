import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateUserThunk } from '../../redux/action-creators/user';
import { Multiselect } from 'multiselect-react-dropdown';
import styles from './Profile.module.css';
import { useEffect } from 'react';
import { getAllGamesThunk } from '../../redux/action-creators/getGames';

const EditProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(store => store.user.name);
  const userId = useSelector(store => store.user.id);

  useEffect(() => {
    !userId ? history.push('/signin') : null;
  }, []);

  const games = useSelector(store => store.games.games);
  const selectedGames = useSelector(store => store.games.favGames);
  console.log(selectedGames);

  const [inputs, setInputs] = useState({
    name: username,
    info: '',
    phone: '',
    fav_games:
      Array.isArray(selectedGames) && selectedGames.length
        ? selectedGames.map(e => (e = e._id))
        : [],
    avatar: {},
  });

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, []);

  const nameHandler = event => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    //console.log('inputs', inputs);
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(updateUserThunk(inputs, userId, history));
  };

  const onFileChange = event => {
    setInputs(prev => {
      return { ...prev, avatar: event.target.files[0] };
    });
  };

  const selectHandler = event => {
    //console.log(inputs.fav_games);
    setInputs({ ...inputs, fav_games: event.map(e => (e = e._id)) });
  };
  return (
    <div>
      <h1>Редактировать профиль</h1>
      <Form onSubmit={onSubmit} className={styles.form}>
        <Form.Group >
          <Form.Label>Имя</Form.Label>
          <Form.Control
            className={styles.Group}
            onChange={nameHandler}
            type='text'
            placeholder='Введи имя'
            name='name'
            value={inputs.name}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Информация</Form.Label>
          <Form.Control
            className={styles.Group}
            onChange={nameHandler}
            type='text'
            placeholder='Расскажи немножко о себе'
            name='info'
            value={inputs.info}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Выбрать фото</Form.Label>
          <br />
          <Form.Control
            
            type='file'
            onChange={onFileChange}
            placeholder='Выбрать фото'
            name='avatar'
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Телефон</Form.Label>
          <Form.Control
            onChange={nameHandler}
            className={styles.Group}
            type='tel'
            placeholder='Введи номер телефона для связи'
            name='phone'
            value={inputs.phone}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Любимые игры</Form.Label>
          <Multiselect
            className={styles.Group}
            options={games}
            displayValue='title'
            onSelect={selectHandler}
            selectedValues={selectedGames}
          />
        </Form.Group>
        <br />
        <Button variant='primary' type='submit'>
          Сохранить изменения
        </Button>
      </Form>

    </div>
  );
};

export default EditProfile;
