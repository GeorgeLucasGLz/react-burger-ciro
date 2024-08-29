import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Freelings from '../../assets/freelings.webp'
import Logo from '../../assets/logo.webp';
import Xbacon from '../../assets/x-bacon.webp';
import Batata from '../../assets/batata.webp';
import Bolinha from '../../assets/bolinha-de-queijo.webp';
import Frango from '../../assets/frango.webp';
import RefriLata from '../../assets/latas.webp';
import RefriGarrafa from '../../assets/garrafas.webp';
import Suco from '../../assets/laranja.webp';
import Picanha from '../../assets/picanha.webp';
import Previsao from '../../assets/previsaoDoTempo.webp';
import Caseirao from '../../assets/caseirao.webp';
import Carrinho from '../../assets/car-market.webp';
import '../Menu/styles.css';

import {
  Footer,
  FooterImg,
  FooterLink
} from '../../components/Footer/styles'

const Menu = () => {
  const [cart, setCart] = useState([]);
  const history = useHistory();

  // Carregar o carrinho do localStorage quando o componente é montado
  useEffect(() => {
    const storedCart = localStorage.getItem('carrinho');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const voltarHome = () => {
    history.push('/');
  };

  const adicionarAoCarrinho = (nome, preco) => {
    setCart(prevCart => {
      const item = prevCart.find(produto => produto.nome === nome);
      let novoCart;
      if (item) {
        novoCart = prevCart.map(produto =>
          produto.nome === nome ? { ...produto, quantidade: produto.quantidade + 1 } : produto
        );
      } else {
        novoCart = [...prevCart, { nome, preco, quantidade: 1 }];
      }
      // Salvar o carrinho atualizado no localStorage
      localStorage.setItem('carrinho', JSON.stringify(novoCart));
      history.push('/carrinho');
      return novoCart;
    });
  };

  useEffect(() => {
    // Atualizar o localStorage sempre que o carrinho mudar
    localStorage.setItem('carrinho', JSON.stringify(cart));
  }, [cart]);

  return (
    <body className="body-menu">
      <header className="header-menu">
        <div className="container-menu">
          <div className="logo-box-menu">
            <img src={Logo} alt="Logo" className="logo-menu" />
            <h1>Ciro Lanches</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#Home" onClick={voltarHome}>Início</a></li>
              <li><a href="/carrinho">Carrinho</a></li>
            </ul>
            <div className="carrinho-box">
              <a href="/carrinho">
                <img src={Carrinho} alt="Carrinho" className="carrinho-buy" />
                <div id="cart-count">{cart.reduce((total, item) => total + item.quantidade, 0)}</div>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="menu">
          {[
            { img: Picanha, nome: "Burger de Picanha", descricao: "Pão, carne de picanha moída 130g, alface americana, picles, sour cream, bacon. Acompanha batata rústica", preco: 31.00 },
            { img: Xbacon, nome: "X-Bacon", descricao: "Pão, carne caseira 130g, bacon, queijo mussarela, alface, tomate", preco: 24.00 },
            { img: Frango, nome: "X-Frango", descricao: "Pão, frango 160g, bacon, queijo mussarela, alface, tomate, milho e batata palha", preco: 22.00 },
            { img: Previsao, nome: "Previsão do Tempo", descricao: "Pão, carne caseira 130g, queijo mussarela, bacon, alface, tomate, milho. Acompanha batata rústica", preco: 25.00 },
            { img: Caseirao, nome: "Caseirão", descricao: "Pão, duas carnes caseira 130g, queijo mussarela, bacon, alface, tomate, catupiry, cebola roxa no shoyu, maionese verde da casa.", preco: 38.00 },
            { img: Batata, nome: "Batatas com cheddar e bacon", descricao: "Batatas deliciosas e crocantes com cheddar e bacon, porção de 200g", preco: 20.00 },
            { img: Bolinha, nome: "Mini Bolinhas de queijo", descricao: "Bolinhas de queijo, porção com 20 unidades", preco: 19.90 },
            { img: RefriLata, nome: "Refrigerante - Lata", descricao: "Coca-Cola, Guaraná Antártica, Fanta Uva, Fanta Laranja, Sprite, Coca-Cola Zero", preco: 7.00 },
            { img: RefriGarrafa, nome: "Refrigerante - 2 Litros", descricao: "Coca-Cola, Guaraná Antártica, Fanta Uva, Fanta Laranja, Sprite", preco: 14.00 },
            { img: Suco, nome: "Suco de Laranja", descricao: "Suco de Laranja de 500ml", preco: 10.00 },
          ].map((produto, index) => (
            <div key={index} className="produto">
              <img src={produto.img} alt={produto.nome} />
              <div className="produto-info-menu">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p className="preco">R$ {produto.preco.toFixed(2)}</p>
                <button
                  className="btn-adicionar"
                  onClick={() => adicionarAoCarrinho(produto.nome, produto.preco)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer>
        <FooterLink href="https://www.freelings.com.br" target="blank">
          <FooterImg src={Freelings}></FooterImg>
        </FooterLink>

        <FooterLink href="https://www.freelings.com.br" target="blank">
          &copy; 2024 Freelings. Todos os direitos reservados
        </FooterLink>
      </Footer>
    </body>
  );
}

export default Menu;

