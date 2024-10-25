import { Params } from "next/dist/server/request/params";

export default async function MovieDetail({ params }: { params: Params }) {
  const { id } = await params;
  return <h1>Movie {id}</h1>;
}
