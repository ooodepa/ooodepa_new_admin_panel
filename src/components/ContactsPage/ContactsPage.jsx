import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import AppWrapper from '../AppWrapper/AppWrapper';
import AppContainer from '../AppContainer/AppContainer';
import AppForm from '../AppForm/AppForm';
import AppTableBlock from '../AppTableBlock/AppTableBlock';
import ApiRestContacts from '../../scripts/api/rest/contacts';
import DateController from '../../scripts/DateController/DateController';

const ContactsPage = (props) => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [selectedRow, setSelectedRow] = useState(-1);
  useEffect(() => {
    readAll();
  }, []);

  async function readAll() {
    const array = await ApiRestContacts.readAll();
    setSelectedRow(array[0]?.id ? array[0]?.id : -1);
    setContacts(array);
  }

  function createNew() {
    navigate(`/contacts/new`);
  }

  function edit(id) {
    navigate(`/contacts/${id}`);
  }

  async function remove(id) {
    await ApiRestContacts.remove(id);
    readAll();
  }

  return (
    <AppWrapper>
      <AppContainer>
        <AppForm title='Справочный документ "Контакты"'>
          <AppTableBlock title="Список всех контактов">
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
                    <th width="100px">Ид</th>
                    <th>Наименование</th>
                    <th>Описание</th>
                    <th width="120px">Обновлен</th>
                    <th width="120px">Создан</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((element) => {
                    const { id, Name, Description, updatedAt, createdAt } =
                      element || {};
                    return (
                      <tr
                        key={id}
                        onClick={(event) => setSelectedRow(id)}
                        onDoubleClick={(event) => edit(selectedRow)}
                        style={{
                          backgroundColor: id === selectedRow && '#e9ecef',
                        }}
                      >
                        <td>{id === selectedRow ? `( ${id} )` : id}</td>
                        <td>{Name}</td>
                        <td>{Description}</td>
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

ContactsPage.propTypes = {};

export default ContactsPage;
