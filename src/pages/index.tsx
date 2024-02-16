import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import { useQuery } from '@apollo/client'
import { UserFindAllDocument, UserType } from '@service/graphql-ts/graphql';
import { client } from '@service/client';
import ListUsers from '@components/users/listUsers';

export const getStaticProps: GetStaticProps<{ listUsers: UserType[] }> = async () => {
  try {
    const response = await client.query({
      query: UserFindAllDocument
    })
    if (response.data.userFindAll == null) throw new Error('Faild to request')
    const listUsers = response.data.userFindAll;
    return {
      props: {
        listUsers
      }
    };
  } catch (error) {
    console.log(error)
    return {
      props: {
        listUsers: []
      }
    }
  }

};

const HomePage = ({listUsers }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const { loading, data, error } = useQuery(UserFindAllDocument);
  return (
    <div>
      <ListUsers listUsers={listUsers}/>
    </div>
  )
}
export default HomePage;
