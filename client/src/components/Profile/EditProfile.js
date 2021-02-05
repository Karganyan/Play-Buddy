import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [picture, setPicture] = useState('');
  const [phone, setPhone] = useState('');
  const [game, setGame] = useState('');

  const nameHandler = (event) => {
    console.log(event.target.name);
    
  }

  return (
    <div>
      <h1>Редактировать профиль</h1>
      <Form>
        <Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control onChange={nameHandler} type='text' placeholder='Введи имя' value={name}/>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Информация</Form.Label>
          <Form.Control type='text' placeholder='Расскажи немножко о себе' value={info} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Выбрать фото</Form.Label>
          <br />
          <Form.Control type='file' accept='image/*' placeholder='Выбрать фото' />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Телефон</Form.Label>
          <Form.Control
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            placeholder='Введи номер телефона для связи'
            value={phone}
            required
          />
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
