import { UserFindAllDocument, UserFindAllQuery, UserType } from '@service/graphql-ts/graphql';
import client from '@service/client';
import ListUsers from '@components/users/listUsers';

let listUsers: UserType[];
(async () => {
  const { data } = await client.query({
    query: (UserFindAllDocument)
  });
  if (data === null) throw new Error('Faild to request')
  listUsers = data.userFindAll as UserType[]
})();


const HomePage = () => {
  console.log(listUsers);
  return (
    <div>
      {listUsers && <ListUsers listUsers={listUsers} />}
    </div>
  )
}
export default HomePage;
