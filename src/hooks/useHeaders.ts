import { Headers } from "@/types/headersType";
import React, { useState } from "react";

const useHeaders = () => {
  const [headers, setHeaders] = useState<Headers>({
    Authorization: "",
  });

  React.useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  }, []);

  return headers;
};

export default useHeaders;
