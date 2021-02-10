import { useDispatch, useSelector } from 'react-redux';
import { filterEvents, getEventsThunk} from '../../redux/action-creators/events';
import { userInSessionThunk } from '../../redux/action-creators/user';
import { GET_EVENTS } from '../../redux/types/events'
import {useEffect, useState} from "react"


const Checkbox = ({sortByCheckbox}) => {
  return (
    <div>
      <h3>Выбери категорию</h3>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' id='one' data-id='602169c62667f6c388999be9' onChange={sortByCheckbox}/>
        <label htmlFor='one' className='form-check-label' >
        Классика
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' id='two' data-id='602169c62667f6c388999bea' onChange={sortByCheckbox}/>
        <label htmlFor='two' className='form-check-label' >
        Подходит для детей
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' id='three'data-id='602169c62667f6c388999beb' onChange={sortByCheckbox}/>
        <label htmlFor='three' className='form-check-label' >
        Карточная
        </label>
      </div>
      <br/>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bec' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        ККИ
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bed' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        Словесная
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bee' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        На целый день
        </label>
      </div>
      <br/>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bef' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        Ролевая
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bf0' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        На скорость
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bf1' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        Детективная
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input className='form-check-input' type='checkbox' data-id='602169c62667f6c388999bf2' onChange={sortByCheckbox}/>
        <label className='form-check-label' >
        Мафия
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
