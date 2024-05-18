import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Cadastro } from "./components/cadastro/Cadastro";
import { LoginForm } from "./components/login/LoginForm";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Comodos } from "./components/comodos/Comodos";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/comodos" element={<Comodos />} />
      </Route>
    </Routes>
  );
}