import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createEventThunk } from "../../redux/action-creators/createEventThunk";

const CreateEventForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    eventName: '',
    eventTextArea: '',
    address: '',
    game: '',
    eventPersons: 2,
  });
  const inputHandler = (event) => {
    setForm(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }
  const createEventHandler = (event) => {
    event.preventDefault()
    dispatch(createEventThunk(form));
  }

  console.log(form)
  return (
    <div className='container'>
      <h1 className='mb-4'>Создание события</h1>
      {/*<Form onChange={formHandler} onSubmit={createEventHandler}>*/}
      {/*  <Form.Group>*/}
      {/*    <Form.Label>Название события</Form.Label>*/}
      {/*    <Form.Control name="eventName" type="text" placeholder="Введите название" />*/}
      {/*  </Form.Group>*/}
      {/*  <br />*/}
      {/*  <Form.Group>*/}
      {/*    <Form.Label>Адрес</Form.Label>*/}
      {/*    <Form.Control name="eventName" type="text" placeholder="Введите адрес" />*/}
      {/*  </Form.Group>*/}
      {/*  <br />*/}
      {/*  <Form.Group>*/}
      {/*    <Form.Label>Описание события</Form.Label>*/}
      {/*    <Form.Control name="eventTextArea" as="textarea" placeholder="Что планируете?" rows={3} />*/}
      {/*  </Form.Group>*/}
      {/*  <br />*/}
      {/*  <Form.Group>*/}
      {/*    <Form.Label>Выбрать фото</Form.Label>*/}
      {/*    <br />*/}
      {/*    <Form.Control*/}
      {/*      type="file"*/}
      {/*      accept="image/*"*/}
      {/*      placeholder="Выбрать фото"*/}
      {/*    />*/}
      {/*  </Form.Group>*/}
      {/*  <br />*/}
      {/*  <Form.Group>*/}
      {/*    <Form.Label>Ожидаемое кол-во участников</Form.Label>*/}
      {/*    <Form.Control*/}
      {/*      name="eventPersons"*/}
      {/*      min="2"*/}
      {/*      type="number"*/}
      {/*      placeholder="Введите количество участников"*/}
      {/*    />*/}
      {/*  </Form.Group>*/}
      {/*  <br />*/}
      {/*  <Form.Group>*/}
      {/*    <Form.Label>Приглашаю...</Form.Label>*/}
      {/*    <Form.Check*/}
      {/*      key={`custom-checkbox1`}*/}
      {/*      className="mb-3"*/}
      {/*      custom*/}
      {/*      type="checkbox"*/}
      {/*      id={`custom-checkbox`}*/}
      {/*      label={`начинающих игроков`}*/}
      {/*    />*/}
      {/*    <Form.Check*/}
      {/*      name="begginer"*/}
      {/*      key={`custom-checkbox2`}*/}
      {/*      className="mb-3"*/}
      {/*      custom*/}
      {/*      type="checkbox"*/}
      {/*      id={`custom-checkbox`}*/}
      {/*      label={`продвинутых игроков`}*/}
      {/*    />*/}
      {/*  </Form.Group>*/}
      {/*  <br />*/}
      {/*  <Button variant="primary" type="submit">*/}
      {/*    Добавить событие*/}
      {/*  </Button>*/}
      {/*</Form>*/}
      <form onSubmit={createEventHandler}>
        <div className="mb-3">
          <label htmlFor="event" className="form-label">Название события</label>
          <input onChange={inputHandler} name='eventName' type="text" className="form-control" id="event" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Адрес</label>
          <input onChange={inputHandler} name='address' type="text" className="form-control" id="address" />
        </div>
        <div className="mb-3">
          <label htmlFor="game" className="form-label">Название игры</label>
          <input onChange={inputHandler} name='game' type="text" className="form-control" id="game" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc">Описание события</label>
          <textarea onChange={inputHandler} name='eventTextArea' className="form-control" id="desc" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Колличество игроков</label>
          <input onChange={inputHandler} name='eventPersons' type="number" className="form-control" id="amount" />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="beginner">Начинащий игрок</label>
          <input onChange={inputHandler} name='beginner' className="form-check-input" type="checkbox" value="" id="beginner" />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="advanced">Продвинутый игрок</label>
          <input onChange={inputHandler} name='advanced' className="form-check-input" type="checkbox" value="" id="advanced" />
        </div>
        <select onChange={inputHandler} className="mb-3 form-select">
          <option selected>Колличество игроков</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5-8</option>
          <option value="8">8-12</option>
        </select>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
