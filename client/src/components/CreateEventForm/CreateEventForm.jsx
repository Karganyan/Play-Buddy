import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createEventThunk } from "../../redux/action-creators/createEventThunk";

const CreateEventForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    eventName: '',
    eventTextArea: '',
    eventPersons: 2,
  });
  const formHandler = (event) => {
    setForm(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }
  const createEventHandler = (event) => {
    event.preventDefault()
    dispatch(createEventThunk(form));
  }

  return (
    <div>
      <h1>Создание события</h1>
      <Form onChange={formHandler} onSubmit={createEventHandler}>
        <Form.Group>
          <Form.Label>Название события</Form.Label>
          <Form.Control name="eventName" type="text" placeholder="Введите  название" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Описание события</Form.Label>
          <Form.Control name="eventTextArea" as="textarea" placeholder="Что планируете?" rows={3} />
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
            name="eventPersons"
            min="2"
            type="number"
            placeholder="Введите количество участников"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Приглашаю...</Form.Label>
          <Form.Check
            key={`custom-checkbox1`}
            className="mb-3"
            custom
            type="checkbox"
            id={`custom-checkbox`}
            label={`начинающих игроков`}
          />
          <Form.Check
            name="begginer"
            key={`custom-checkbox2`}
            className="mb-3"
            custom
            type="checkbox"
            id={`custom-checkbox`}
            label={`продвинутых игроков`}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Добавить событие
        </Button>
      </Form>
    </div>
  );
};

export default CreateEventForm;
