import { ReactNode } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { getQueryClient } from "./getQueryClient";

interface HydratedProps {
  queryKey: (string | number)[];
  queryFn: () => Promise<any>;
  children: ReactNode;
}

export default async function Hydrated({
  queryKey,
  queryFn,
  children,
}: HydratedProps) {
  const queryClient: QueryClient = getQueryClient();
 
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 5,
  });
 
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
