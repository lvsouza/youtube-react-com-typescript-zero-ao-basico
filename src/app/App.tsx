import { UsuarioLogadoProvider } from "./shared/contexts";
import { Routes } from "./routes";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
}
