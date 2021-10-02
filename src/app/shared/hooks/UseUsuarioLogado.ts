import { useContext } from "react"

import { UsuarioLogadoContext } from "../contexts";

export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
}
