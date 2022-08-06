import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import AppWrapper from '../AppWrapper/AppWrapper';
import AppContainer from '../AppContainer/AppContainer';
import AppForm from '../AppForm/AppForm';
import AppTableBlock from '../AppTableBlock/AppTableBlock';
import ApiRestContactTypes from '../../scripts/api/rest/contact-types';
import DateController from '../../scripts/DateController/DateController';

const ContactTypesPage = (props) => {
  let navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [selectedRow, setSelectedRow] = useState(0);

  useEffect(() => {
    async function ContactTypesFetch() {
      const response = await ApiRestContactTypes.readAll();
      setArray(response);
      setSelectedRow(response[0]?.id);
    }
    ContactTypesFetch();
  }, []);

  async function read() {
    const response = await ApiRestContactTypes.readAll();
    setArray(response);
  }

  function createNew() {
    navigate('/contact-types/new');
  }

  function edit(id) {
    navigate(`/contact-types/${id}`);
  }

  async function remove(id) {
    await ApiRestContactTypes.remove(id);
    await read();
  }

  return (
    <AppWrapper>
      <AppContainer>
        <AppForm title='Справочный документ "Типы контакта"'>
          <AppTableBlock title="Список всех типов контакта">
            <>
              <div>
                <button
                  title="Создать новую строку"
                  onClick={createNew}
                  children={<FontAwesomeIcon icon={faPlus} />}
                />
                <button
                  title={`Редактировать строку под id=${selectedRow}`}
                  onClick={(event) => edit(selectedRow)}
                  children={<FontAwesomeIcon icon={faPencil} />}
                />
                <button
                  title={`Удалить элемент под id=${selectedRow}`}
                  onClick={(event) => remove(selectedRow)}
                  children={<FontAwesomeIcon icon={faTrash} />}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th width="100px">№ п/п</th>
                    <th>Наименование</th>
                    <th width="120px">Обновлен</th>
                    <th width="120px">Создан</th>
                  </tr>
                </thead>
                <tbody>
                  {array.map((element) => {
                    const { id, Name, updatedAt, createdAt } = element || {};
                    return (
                      <tr
                        key={id}
                        onClick={(event) => setSelectedRow(id)}
                        onDoubleClick={(event) => edit(selectedRow)}
                        style={{
                          backgroundColor: id === selectedRow && '#e9ecef',
                        }}
                      >
                        <td>{selectedRow === id ? `( ${id} )` : id}</td>
                        <td>{Name}</td>
                        <td>
                          {DateController.toStringTimeAgo(new Date(updatedAt))}
                        </td>
                        <td>
                          {DateController.toStringTimeAgo(new Date(createdAt))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          </AppTableBlock>
        </AppForm>
      </AppContainer>
    </AppWrapper>
  );
};

ContactTypesPage.propTypes = {};

export default ContactTypesPage;
