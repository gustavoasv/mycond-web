import { api } from "../services/api";

interface typeFuncion {
  error: string;
  tokenGet: () => object;
}

export const validadeUserToken = {
  tokenGet: async (): Promise<typeFuncion> => {
    const getToken: any = localStorage.getItem("token");
    const json = await api.post("/auth/validate", {}, getToken);
    return json.data;
  },
};
