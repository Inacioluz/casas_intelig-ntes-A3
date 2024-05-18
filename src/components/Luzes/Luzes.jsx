import { useState } from "react";
import styles from "./Luzes.module.css";
import { useNavigate } from "react-router-dom";
import { Lightbulb } from "lucide-react";


export function Luzes() {
    const [isOn, setIsOn] = useState(false);
    const [title, setTitle] = useState("Luz Central");
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const navigate = useNavigate();
  
    const toggleLight = () => {
      setIsOn(!isOn);
    };
  
    const handleTitleEdit = () => {
      setIsEditingTitle(true);
    };
  
    const handleTitleChange = (e) => {
      if (e.key === 'Enter' || e.type === 'blur') {
        setTitle(e.target.value);
        setIsEditingTitle(false);
      }
    };
    const handleLogout = () => {
      navigate("/comodos");
    };
  
  return (
    <div className={styles.cardContainer}>
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        {isEditingTitle ? (
          <input
            className={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleTitleChange}
            onBlur={handleTitleChange}
          />
        ) : (
          <h2 className={styles.title}>
            {title}
            <button className={styles.editButton} onClick={handleTitleEdit}>Editar</button>
          </h2>
        )}
      </div>
      <div
        className={styles.svgContainer}
        onClick={toggleLight}
        style={{ color: isOn ? "green" : "red" }}
      >
        <Lightbulb className={styles.smallSvg} />
      </div>
      <p className={styles.legend}>
        Estado atual: {isOn ? "Ligado" : "Desligado"}
      </p>
    </div>
    <button className={styles.logoutButton} onClick={handleLogout}>
        Comodos
      </button>
  </div>
  );
}
