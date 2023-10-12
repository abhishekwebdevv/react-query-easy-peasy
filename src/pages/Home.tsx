import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

const Home: FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["homeData"],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/repos/TanStack/query");
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error) return <div>An error has occured: {error?.message}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong> <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong>
    </div>
  );
};

export default Home;
