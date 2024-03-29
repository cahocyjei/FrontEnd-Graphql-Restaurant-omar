import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import ListUsers from "@components/users/listUsers";
import { useQuery } from '@apollo/client'
import { UserFindAllDocument, UserType } from '@service/graphql-ts/graphql';
import { client } from '@service/client';

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
      {data? <ListUsers listUsers={listUsers} />:<p>{ `ApolloError: Unauthorized ${error?.message}`}</p>}
    </div>
  )
}
export default HomePage;
