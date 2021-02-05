import { Form, Button } from "react-bootstrap";
const CreateEventForm = () => {

  return (
    <div>
      <h1>Редактировать профиль</h1>
      <Form>
        <Form.Group>
          <Form.Label>Название события</Form.Label>
          <Form.Control type="text" placeholder="Введите  название" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Описание события</Form.Label>
          <Form.Control as="textarea" placeholder="Что планируете?" rows={3} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Выбрать фото</Form.Label>
          <br />
          <Form.Control
            type="file"
            accept="image/*"
            placeholder="Выбрать фото"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Ожидаемое кол-во участников</Form.Label>
          <Form.Control
            min="2"
            type="number"
            placeholder="Введите количество участников"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Приглашаю...</Form.Label>
          <Form.Check
            key={`custom-checkbox`}
            className="mb-3"
            custom
            type="checkbox"
            id={`custom-checkbox`}
            label={`начинающих игроков`}
          />
          <Form.Check
            key={`custom-checkbox`}
            className="mb-3"
            custom
            type="checkbox"
            id={`custom-checkbox`}
            label={`продвинутых игроков`}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" /* onSubmit={createEventHandler} */>
          Добавить событие
        </Button>
      </Form>
    </div>
  );
};

export default CreateEventForm;
