import { useQuery } from "@tanstack/react-query";

const useGetData = <T extends object>(
  key: (string | number | string[])[],
  queryFn: () => Promise<T>,
  options = {}
) => {
  const { data, isPending, isLoading, status, isError, refetch, isSuccess } =
    useQuery({
      queryKey: key,
      queryFn: queryFn,
      staleTime: 0,
      ...options,
    });
  return { data, isPending, status, isError, isLoading, refetch, isSuccess };
};

export default useGetData;
