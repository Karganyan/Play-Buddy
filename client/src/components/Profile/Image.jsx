import { Form, Button } from 'react-bootstrap';
import multer from 'multer';

const Image = () => {

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

  router.use(multer({ storage: storage }).single("avatar"));
  
  const onSubmit = event => {
    event.preventDefault();

  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Выбрать фото</Form.Label>
        <Form.Control type='file' placeholder='Выбрать фото'
        enctype="multipart/form-data" name="avatar"/>
      </Form.Group>
      <Button variant="primary" type="submit">
          Сохранить изменения
      </Button>
    </Form>
  );
};

export default Image;
