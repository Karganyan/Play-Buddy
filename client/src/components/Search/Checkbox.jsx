const Checkbox = () => {
  return (
    <div>
      <h3>Выбери категорию</h3>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option1' />
        <label className='form-check-label' for='inlineCheckbox1'>
        Классика
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option2' />
        <label className='form-check-label' for='inlineCheckbox2'>
        Подходит для детей
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option3' />
        <label className='form-check-label' for='inlineCheckbox3'>
        Карточная
        </label>
      </div>
      <br/>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option4' />
        <label className='form-check-label' for='inlineCheckbox4'>
        ККИ
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option5' />
        <label className='form-check-label' for='inlineCheckbox5'>
        Словесная
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option6' />
        <label className='form-check-label' for='inlineCheckbox6'>
        На целый день
        </label>
      </div>
      <br/>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option7' />
        <label className='form-check-label' for='inlineCheckbox7'>
        Ролевая
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option8' />
        <label className='form-check-label' for='inlineCheckbox8'>
        На скорость
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option9' />
        <label className='form-check-label' for='inlineCheckbox9'>
        Детективная
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' value='option10' />
        <label className='form-check-label' for='inlineCheckbox10'>
        Мафия
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
