import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Cadastro } from "./components/cadastro/Cadastro";
import { LoginForm } from "./components/login/LoginForm";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Comodos } from "./components/comodos/Comodos";
import { Luzes } from "./components/Luzes/Luzes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/comodos" element={<Comodos />} />
        <Route path="/Luzes" element={<Luzes />} />
      </Route>
    </Routes>
  );
}