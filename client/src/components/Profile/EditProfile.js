import { Form, Button } from 'react-bootstrap';
const EditProfile = () => {
  return (
    <div>
      <h1>Редактировать профиль</h1>
      <Form>
        <Form.Group>
          <Form.Label>Имя</Form.Label>
          <Form.Control type='text' placeholder='Введите имя' />
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
          <Form.Control type="tel"
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
         placeholder="Введите номер телефона" required/>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Любимые игры</Form.Label>
          <Form.Control type='text' placeholder='Добавить игру' />
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
