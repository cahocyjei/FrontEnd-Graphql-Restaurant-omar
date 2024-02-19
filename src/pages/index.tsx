import { UserFindAllDocument, UserType } from '@service/graphql-ts/graphql';
import ListUsers from '@components/users/listUsers';
import { useQuery } from '@apollo/client';
import { Menu, Dropdown } from "semantic-ui-react";
import { useState } from 'react';

const options = [
  { key: 'profile', text: 'Perfil', value: 'profile' },
  { key: 'loadusers', text: 'Usuarios', value: 'loadusers' },
  { key: 'registro', text: 'Registro', value: 'registro' },
  { key: 'logOut', text: 'Log-Out', value: 'logOut' },
  { key: 'logIn', text: 'Log-In', value: 'logIn' },
  { key: 'salir', text: 'Salir', value: 'salir' }
];

const HomePage = () => {
  const [ isEnabled, setEnabled ] = useState(false);
  const handleOptionClick = (event: React.MouseEvent, value: string) => {
    value == 'loadusers' && setEnabled(true);
    value == 'salir' && setEnabled(false);
  }
  const { loading, error, data } = useQuery(UserFindAllDocument);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <div style={{
      marginLeft:'20px',
      marginRight:'20px'
    }}>
      <Menu position="right" >
        <Dropdown
          item
          text="Opciones"
        >
          <Dropdown.Menu>
            {options.map(option => (
              <Dropdown.Item
                key={option.key}
                text={option.text}
                value={option.value}
                onClick={(event: React.MouseEvent) => handleOptionClick(event, option.value)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      </div>
      <div>
        {isEnabled && <ListUsers listUsers={data?.userFindAll as UserType[]} />}
      </div>
    </div>
  )
}
export default HomePage;
