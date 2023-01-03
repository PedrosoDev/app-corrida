import { useQuery } from "react-query";
import useHelloQuery from "../queries/helloQuery";
import helloService, { THelloResponse } from "../queries/helloQuery";

export default function HomePage() {
  const { data, isLoading, error } = useHelloQuery();

  return (
    <div>
      <h1>Home page</h1>
      {isLoading && <span>Carregando...</span>}
      <p>Data: {data?.message}</p>
    </div>
  );
}
