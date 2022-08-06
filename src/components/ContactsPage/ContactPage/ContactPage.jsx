import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import AppWrapper from '../../AppWrapper/AppWrapper';
import AppContainer from '../../AppContainer/AppContainer';
import AppTableBlock from '../../AppTableBlock/AppTableBlock';
import AppForm from '../../AppForm/AppForm';
import AppFormLabel from '../../AppFormLabel/AppFormLabel';
import ApiRestContacts from '../../../scripts/api/rest/contacts';
import ApiRestContactTypes from '../../../scripts/api/rest/contact-types';
import useForceUpdate from '../../../packages/useForceUpdate';

const ContactPage = (props) => {
  let navigate = useNavigate();
  const forceUpdate = useForceUpdate();
  const { id } = useParams();
  const [data, setData] = useState({
    Name: '_',
    Description: '_',
    TablePartContactTypes: [],
  });
  const [contactTypes, setContactTypes] = useState([]);
  const [selectedRow, setSelectedRow] = useState(0);

  useEffect(() => {
    if (id === 'new') return;

    async function readOne() {
      const data = await ApiRestContacts.readOne(id);
      setData(data);

      const array = await ApiRestContactTypes.readAll();
      setContactTypes(array);
    }

    readOne();
  }, [id]);

  function nameChanged(value) {
    let temp = data;
    temp.Name = value;
    setData(temp);
    forceUpdate();
  }

  function descriptionChanged(value) {
    let temp = data;
    temp.Description = value;
    setData(temp);
    forceUpdate();
  }

  function tableAddRow() {
    let temp = data;
    temp.TablePartContactTypes.push({
      Name: 'новый',
      ContactTypeId: '1',
    });
    setData(temp);
    forceUpdate();
  }

  function tableNameChanged(id, name) {
    let temp = data;
    temp.TablePartContactTypes[id].Name = name;
    setData(temp);
    forceUpdate();
  }

  function tableContactTypeIdChanged(id, value) {
    let temp = data;
    temp.TablePartContactTypes[id].ContactTypeId = value;
    setData(temp);
    forceUpdate();
  }

  function tableDeleteRow(id) {
    let temp = data;
    temp.TablePartContactTypes = temp.TablePartContactTypes.filter(
      (element, index) => (index === id ? undefined : element)
    );
    setData(temp);
    forceUpdate();
  }

  async function remove() {
    await ApiRestContacts.remove(id);
    navigate('/contacts');
  }

  async function create() {
    await ApiRestContacts.create(data);
    navigate('/contacts');
  }

  async function update() {
    await ApiRestContacts.update(id, data);
    navigate('/contacts');
  }

  return (
    <AppWrapper>
      <AppContainer>
        <AppForm
          title='Форма справочного документа "Контакты"'
          footer={
            id === 'new' ? (
              <>
                <button
                  onClick={create}
                  title="Создать контакт"
                  children="Создать"
                />
              </>
            ) : (
              <>
                <button
                  onClick={update}
                  title="Обновить текущий контакт"
                  children="Обновить"
                />
                <button
                  onClick={remove}
                  title="Обновить текущий контакт"
                  children="Удалить"
                />
                <button
                  onClick={create}
                  title="Создать копию контакта"
                  children="Создать копию"
                />
              </>
            )
          }
        >
          <AppFormLabel
            label="Наименование"
            type="text"
            value={data.Name}
            onChange={(event) => nameChanged(event.target.value)}
          />
          <AppFormLabel
            label="Описание"
            type="text"
            value={data.Description}
            onChange={(event) => descriptionChanged(event.target.value)}
          />
          <AppTableBlock title='Табличная часть "Типы контакта"'>
            <>
              <div>
                <button
                  title="Добавить новую строку"
                  onClick={tableAddRow}
                  children={<FontAwesomeIcon icon={faPlus} />}
                />
                <button
                  title={`Удалить строку под id=${selectedRow}`}
                  onClick={(event) => tableDeleteRow(selectedRow)}
                  children={<FontAwesomeIcon icon={faTrash} />}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th width="80px">№ п/п</th>
                    <th>Наименование</th>
                    <th>Тип контакта</th>
                  </tr>
                </thead>
                <tbody>
                  {data.TablePartContactTypes &&
                    data.TablePartContactTypes.map((element, element_i) => {
                      const { Name, ContactTypeId } = element || {};
                      return (
                        <tr
                          key={element_i}
                          onClick={(event) => setSelectedRow(element_i)}
                          style={{
                            backgroundColor:
                              selectedRow === element_i && '#e9ecef',
                          }}
                        >
                          <td>
                            {selectedRow === element_i
                              ? `( ${element_i} )`
                              : element_i}
                          </td>
                          <td>
                            <input
                              type="text"
                              value={Name}
                              onChange={(event) =>
                                tableNameChanged(element_i, event.target.value)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={ContactTypeId}
                              onChange={(event) =>
                                tableContactTypeIdChanged(
                                  element_i,
                                  event.target.value
                                )
                              }
                            >
                              {contactTypes.map((element) => {
                                const { id, Name } = element || {};
                                return (
                                  <option key={id} value={id}>
                                    {Name}
                                  </option>
                                );
                              })}
                            </select>
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

ContactPage.propTypes = {};

export default ContactPage;
