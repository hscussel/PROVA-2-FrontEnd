import React from 'react';
import { Link} from 'react-router-dom';
const Main = () => {
  return (
    <main>
        <section className='welcomeContainer'>
            <h2>Bem-Vindo ao ConnectBook</h2>
            <p>Gerencie e visualize seus contatos de forma prática.</p>
            <Link to='/contatos'><button className='welcomeBtn'>Visualizar Contatos</button></Link>
        </section>
    </main>
  );
}

export default Main;