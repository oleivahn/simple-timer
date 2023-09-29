import { useAuth0 } from "@auth0/auth0-react";

export const DataSource = {
  get: () => {
    return "Hello World";
  },
  get2: async (message) => {
    // const { getAccessTokenSilently, user } = useAuth0();

    // const acessToken = await getAccessTokenSilently().then((res) => res);
    // console.log("acessToken", acessToken);
    return message;
  },
};

export const FetchWorkout = async (message) => {
  const { getAccessTokenSilently, user } = useAuth0();

  const acessToken = await getAccessTokenSilently().then((res) => res);
  console.log("acessToken", acessToken);
  return message;
};
