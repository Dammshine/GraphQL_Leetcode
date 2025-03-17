import { useParams } from "react-router-dom";

export const User = () => {
  const { userId } = useParams<{ userId: string }>();

  return <h1>User Page: {userId}</h1>;
};

