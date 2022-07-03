import { useEffect } from "react";
import axios from "axios";

export function useCSRF() {
  useEffect(() => {
    axios.post("https://jwt-local-variable.vercel.app/api/quotes", {
      bgColor: "bg-blue-600",
      name: "Test",
      quote: "Test",
    });
  }, []);
}
