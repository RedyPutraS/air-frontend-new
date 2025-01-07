import { useQuery } from "react-query";
import { getApi } from "api";

function useCustomQuery(query_key: string) {
  const { status, data } = useQuery({
    queryKey: [query_key],
    queryFn: async () => await getApi(query_key),
    select: (res) => res.data.data,
    // enabled: typeof window !== "undefined",
  });

  return { data, status };
}

export default useCustomQuery;
