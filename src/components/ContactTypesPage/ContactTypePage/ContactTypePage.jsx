import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import AppWrapper from '../../AppWrapper/AppWrapper';
import AppContainer from '../../AppContainer/AppContainer';
import AppForm from '../../AppForm/AppForm';
import AppFormLabel from '../../AppFormLabel/AppFormLabel';
import ApiRestContactTypes from '../../../scripts/api/rest/contact-types';

const ContactTypePage = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    if (id === 'new') return;

    async function readOneFetch() {
      const response = await ApiRestContactTypes.readOne(id);
      setName(response.Name);
    }
    readOneFetch();
  }, [id]);

  async function remove() {
    await ApiRestContactTypes.remove(id);
    navigate('/contact-types');
  }

  async function update() {
    await ApiRestContactTypes.update(id, { Name: name });
    navigate('/contact-types');
  }

  async function create() {
    await ApiRestContactTypes.create({ Name: name });
    navigate('/contact-types');
  }

  return (
    <AppWrapper>
      <AppContainer>
        <AppForm
          title='Форма справочного документа "Типы контакта"'
          footer={
            id === 'new' ? (
              <>
                <button onClick={create}>Создать новый</button>
              </>
            ) : (
              <>
                <button onClick={update}>Обновить</button>
                <button onClick={remove}>Удалить</button>
                <button onClick={create}>Создать копию</button>
              </>
            )
          }
        >
          <AppFormLabel
            label="Наименование"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </AppForm>
      </AppContainer>
    </AppWrapper>
  );
};

ContactTypePage.propTypes = {};

export default ContactTypePage;
