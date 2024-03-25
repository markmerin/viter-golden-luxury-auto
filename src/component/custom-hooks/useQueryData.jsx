import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { queryData } from "../helpers/queryData";

// Queries hook
const useQueryData = (endpoint, method, key = "", fd = {}, id = null) => {
  const result = useQuery({
    queryKey: [key, id],
    queryFn: async () => await queryData(endpoint, method, fd),
    retry: false,
    refetchOnWindowFocus: false,
    cacheTime: 200,
  });

  return result;
};

export default useQueryData;
