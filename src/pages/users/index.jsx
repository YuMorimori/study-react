// /* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <SWRConfig value={fallback}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;
