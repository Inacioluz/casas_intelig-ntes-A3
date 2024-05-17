import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Cadastro } from "./components/cadastro/Cadastro";
import { LoginForm } from "./components/login/LoginForm";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}