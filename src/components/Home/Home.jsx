import { useState,useEffect, useRef } from 'react';
import { Lightbulb } from 'lucide-react';
import styles from './Home.module.css';

export function Home() {
    const [activeCard, setActiveCard] = useState(null);
    const [namesList, setNamesList] = useState([
      { title: 'Casa do Inacio', names: ['Sala', 'Cozinha', 'Quarto'], lightColors: ['red', 'red', 'red'] },
      { title: 'Casa do Anderson', names: ['Sala de estar', 'Lavanderia', 'Quarto'], lightColors: ['red', 'red', 'red'] },
      { title: 'Casa do Julio', names: ['Sala cinema', 'Garagem', 'Quarto de visita'], lightColors: ['red', 'red', 'red'] },
      { title: 'Casa da Ingrid', names: ['Escritório', 'Cozinha', 'Porão'], lightColors: ['red', 'red', 'red'] }
    ]);
  
    const [editNameIndices, setEditNameIndices] = useState({});
  
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
        i === index
          ? { ...card, names: [...card.names, newName], lightColors: [...card.lightColors, 'red'] }
          : card
      );
      setNamesList(updatedNamesList);
    };
  
    const handleNameDelete = (cardIndex, nameIndex) => {
      const updatedNamesList = namesList.map((card, i) => {
        if (i === cardIndex) {
          const newNames = card.names.filter((_, idx) => idx !== nameIndex);
          const newLightColors = card.lightColors.filter((_, idx) => idx !== nameIndex);
          return { ...card, names: newNames, lightColors: newLightColors };
        }
        return card;
      });
      setNamesList(updatedNamesList);
    };
  
    const handleNameEdit = (cardIndex, nameIndex, newName) => {
      const updatedNamesList = namesList.map((card, i) => {
        if (i === cardIndex) {
          const newNames = card.names.map((name, idx) =>
            idx === nameIndex ? newName : name
          );
          return { ...card, names: newNames };
        }
        return card;
      });
      setNamesList(updatedNamesList);
      setEditNameIndices({ ...editNameIndices, [cardIndex]: null });
    };
  
    const addNewCard = () => {
      const newCard = { title: 'Casa', names: ['New', 'Name', 'List'], lightColors: ['red', 'red', 'red'] };
      setNamesList([...namesList, newCard]);
    };
  
    const toggleLightColor = (cardIndex, nameIndex) => {
      const updatedNamesList = namesList.map((card, i) => {
        if (i === cardIndex) {
          const newLightColors = card.lightColors.map((color, idx) =>
            idx === nameIndex ? (color === 'red' ? 'green' : 'red') : color
          );
          return { ...card, lightColors: newLightColors };
        }
        return card;
      });
      setNamesList(updatedNamesList);
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
        {namesList.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className={styles.card}
            onClick={() => handleCardClick(cardIndex)}
            ref={(el) => (cardRefs.current[cardIndex] = el)}
          >
            {activeCard === cardIndex ? (
              <input
                className={styles.cardTitleInput}
                value={card.title}
                onChange={(e) => handleTitleChange(cardIndex, e.target.value)}
              />
            ) : (
              <h2>{card.title}</h2>
            )}
            {activeCard === cardIndex && (
              <>
                <ul>
                  {card.names.map((name, nameIndex) => (
                    <li key={nameIndex}>
                      {editNameIndices[cardIndex] === nameIndex ? (
                        <input
                          type="text"
                          defaultValue={name}
                          onBlur={(e) => handleNameEdit(cardIndex, nameIndex, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleNameEdit(cardIndex, nameIndex, e.target.value);
                            }
                          }}
                        />
                      ) : (
                        <span>{name}</span>
                      )}
                      <button
                        className={styles.editButton}
                        onClick={() => setEditNameIndices({ ...editNameIndices, [cardIndex]: nameIndex })}
                      >
                        Editar
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleNameDelete(cardIndex, nameIndex)}
                      >
                        Deletar
                      </button>
                      <button
                        className={styles.lightButton}
                        onClick={() => toggleLightColor(cardIndex, nameIndex)}
                        style={{ color: card.lightColors[nameIndex] }}
                      >
                        <Lightbulb />
                      </button>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Adicionar nome"
                  className={styles.nameInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim() !== '') {
                      handleNameAdd(cardIndex, e.target.value.trim());
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
        Adicionar Casa Nova
      </button>
    </div>
    );
} 