import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from "./LoginForms.module.css";

export function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === "adm" && password === "adm") {
      navigate("/");
    } else {
      alert("Login/Senha incorretos");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="login" className={styles.label}>Login:</label>
          <input 
            type="text" 
            id="login" 
            className={styles.input} 
            value={login} 
            onChange={(e) => setLogin(e.target.value)} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Senha:</label>
          <input 
            type="password" 
            id="password" 
            className={styles.input} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className={styles.button}>Entrar</button>
        <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>
        <Link to="/cadastro">
          <button type="button" className={styles.signupButton}>Cadastro</button>
        </Link>
      </form>
    </div>
  );
}
