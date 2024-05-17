import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { LoginForm } from "./components/login/LoginForm";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}