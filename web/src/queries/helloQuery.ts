import { useQuery } from "react-query";
import axios from "../lib/axios";

export type THelloResponse = {
  code: string;
  message: string;
};

export async function helloFetch() {
  return await axios.get("/hello");
}

export default function useHelloQuery() {
  return useQuery<THelloResponse>(["hello"], async () => {
    const request = await helloFetch();

    return request.data;
  });
}
