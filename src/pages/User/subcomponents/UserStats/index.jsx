import { Head } from "@/components/Head";
import useFetch from "@/hooks/useFetch";
import { GET_USER_STATS } from "@/api";
import { lazy, Suspense, useEffect } from "react";
import { Loading } from "@/components/helpers/Loading";
import { Error } from "@/components/helpers/Error";
const UserStatsCharts = lazy(() => import("./subcomponents/UserStatsCharts"));

export function UserStats() {
  const { data, error, loading, request } = useFetch();

  console.log(UserStatsCharts);

  useEffect(function () {
    async function getUserStats() {
      const { url, options } = GET_USER_STATS();
      await request(url, options);
    }
    getUserStats();
  }, [request]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error errorMessage={error} />
  }

  if (data && data.length > 0) {
    return (
      <Suspense fallback={<></>}>
        <Head title="Estatísticas" />
        <UserStatsCharts data={data} />
      </Suspense>
    )
  } else return (
    <div className="container main-container">
      <h2 className="empty-message">Você não possui postagens...</h2>
    </div>
  );
}