import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Cadastro.module.css";
export function Cadastro() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log("Login:", login);
    console.log("Senha:", password);
  };
  return (
    <div className={styles.container}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="login" className={styles.label}>
            Login
          </label>
          <input
            type="text"
            id="login"
            className={styles.input}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
        <Link to="/login">
          <button type="submit" className={styles.loginbutton}>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
