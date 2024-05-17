import styles from "./LoginForms.module.css";

export function LoginForms() {
  return (
    <div className={styles.container}>
    <form className={styles.form}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="login" className={styles.label}>Login:</label>
        <input type="text" id="login" className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Senha:</label>
        <input type="password" id="password" className={styles.input} />
      </div>
      <button type="submit" className={styles.button}>Entrar</button>
      <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>
      <button className={styles.signupButton}>Cadastro</button>
    </form>
  </div>
  );
}
