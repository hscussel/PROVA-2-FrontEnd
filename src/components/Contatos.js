import React, { useEffect, useState } from 'react';
import '../styles/Contatos.css';

const contatosSimulados = [
  { id: 1, nome: "Alice Santos", email: "alice@email.com" },
  { id: 2, nome: "Bruno Lima", email: "bruno@email.com" },
  { id: 3, nome: "Carla Souza", email: "carla@email.com" },
  { id: 4, nome: "Diego Martins", email: "diego@email.com" },
  { id: 5, nome: "Elaine Rocha", email: "elaine@email.com" },
  { id: 6, nome: "Fernando Dias", email: "fernando@email.com" },
  { id: 7, nome: "Gabriela Tavares", email: "gabriela@email.com" },
  { id: 8, nome: "Henrique Moraes", email: "henrique@email.com" },
  { id: 9, nome: "Isabela Costa", email: "isabela@email.com" },
  { id: 10, nome: "João Pereira", email: "joao@email.com" },
  { id: 11, nome: "Karina Melo", email: "karina@email.com" },
  { id: 12, nome: "Leonardo Cunha", email: "leonardo@email.com" },
  { id: 13, nome: "Mariana Lopes", email: "mariana@email.com" },
  { id: 14, nome: "Nicolas Barreto", email: "nicolas@email.com" },
  { id: 15, nome: "Otávio Lima", email: "otavio@email.com" },
];

function Contatos() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    console.log("Página de lista carregada");
    setContatos(contatosSimulados);

    return () => {
      console.log("Saindo da página de lista");
    };
  }, []);

  return (
    <div>
      <section className="contactsContainer">
        <h2>Lista de Contatos</h2>
        <p>Total de contatos: {contatos.length}</p>
        <ul className="infosContainer">
          {contatos.map(contato => (
            <li key={contato.id} className="contactItem">
              <div className="contactCard">
                <strong className='nameContact'>{contato.nome}</strong><br />
                <strong className='emailContact'>Email:</strong> {contato.email}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Contatos;
