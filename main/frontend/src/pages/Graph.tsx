import { useParams } from "react-router-dom";

export const Graph = () => {
  const { graphId } = useParams<{ graphId: string }>();

  return <h1>Graph Page: {graphId}</h1>;
};

