import { useState,useEffect, useRef } from 'react';
import styles from './Home.module.css';

export function Home() {
    const [activeCard, setActiveCard] = useState(null);
    const [namesList, setNamesList] = useState([
      { title: 'Casa do Inacio', names: ['Alice', 'Bob', 'Charlie'] },
      { title: 'Casa do Julio', names: ['David', 'Eve', 'Frank'] },
      { title: 'Casa do Anderson', names: ['Grace', 'Heidi', 'Ivan'] },
      { title: 'Casa da Ingrid', names: ['Judy', 'Karl', 'Leo'] }
    ]);
  
    const handleCardClick = (index) => {
      setActiveCard(index);
    };
  
    const handleTitleChange = (index, newTitle) => {
      const updatedNamesList = namesList.map((card, i) =>
        i === index ? { ...card, title: newTitle } : card
      );
      setNamesList(updatedNamesList);
    };
  
    const handleNameAdd = (index, newName) => {
      const updatedNamesList = namesList.map((card, i) =>
        i === index ? { ...card, names: [...card.names, newName] } : card
      );
      setNamesList(updatedNamesList);
    };
  
    const addNewCard = () => {
      const newCard = { title: 'New Card', names: ['New', 'Name', 'List'] };
      setNamesList([...namesList, newCard]);
    };
  
    const cardRefs = useRef([]);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (activeCard !== null && cardRefs.current[activeCard] && !cardRefs.current[activeCard].contains(event.target)) {
          setActiveCard(null);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [activeCard]);
  
    return (
        <div className={styles.pageContainer}>
      <div className={styles.container}>
        {namesList.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(index)}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            {activeCard === index ? (
              <input
                className={styles.cardTitleInput}
                value={card.title}
                onChange={(e) => handleTitleChange(index, e.target.value)}
              />
            ) : (
              <h2>{card.title}</h2>
            )}
            {activeCard === index && (
              <>
                <ul>
                  {card.names.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Adicionar nome"
                  className={styles.nameInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim() !== '') {
                      handleNameAdd(index, e.target.value.trim());
                      e.target.value = '';
                    }
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={addNewCard}>
        Adicionar Novo Card
      </button>
    </div>
    );
} 