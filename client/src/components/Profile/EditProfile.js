import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { app } from '../../base';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [picture, setPicture] = useState('');
  const [phone, setPhone] = useState('');
  const [game, setGame] = useState('');

  const nameHandler = event => {
    // console.log(event.target.value);
  };

  const onFileChange = async e => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file).then(() => {
      console.log('Uploaded file', file.name);
    });
  };

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Редактировать профиль</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control onChange={nameHandler} type='text' placeholder='Введи имя' />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Информация</Form.Label>
          <Form.Control type='text' placeholder='Расскажи немножко о себе' />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Выбрать фото</Form.Label>
          <br />
          <Form.Control type='file' onChange={onFileChange} placeholder='Выбрать фото' />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Телефон</Form.Label>
          <Form.Control type='tel' placeholder='Введи номер телефона для связи' required />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Любимые игры</Form.Label>
          <Form.Control type='text' placeholder='Добавь игру' />
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
