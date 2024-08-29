import React, { useEffect, useState } from 'react';
import { CSS } from '../Carrinho/carrinho.css';
import Logo from '../../assets/logo.webp';
import CarrinhoImg from '../../assets/car-market.webp'
import Freelings from '../../assets/freelings.webp'

import {
    Footer,
    FooterImg,
    FooterLink
} from '../../components/Footer/styles'

const CarrinhoComponent = () => {
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        const storedCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        setCarrinho(storedCarrinho);
    }, []);

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    }, [carrinho]);

    const atualizarCarrinho = () => {
        // Função para atualizar o DOM ou outras lógicas
    };

    const adicionarAoCarrinho = (nome, preco) => {
        setCarrinho(prevCarrinho => {
            const item = prevCarrinho.find(produto => produto.nome === nome);
            if (item) {
                return prevCarrinho.map(produto =>
                    produto.nome === nome ? { ...produto, quantidade: produto.quantidade + 1 } : produto
                );
            } else {
                return [...prevCarrinho, { nome, preco, quantidade: 1 }];
            }
        });
        window.location.href = '../pages/LandingPage/index.js';
    };

    const adicionarUmItemAoCarrinho = (index) => {
        setCarrinho(prevCarrinho =>
            prevCarrinho.map((produto, i) =>
                i === index ? { ...produto, quantidade: produto.quantidade + 1 } : produto
            )
        );
    };

    const removerUmItemDoCarrinho = (index) => {
        setCarrinho(prevCarrinho =>
            prevCarrinho.map((produto, i) =>
                i === index && produto.quantidade > 1
                    ? { ...produto, quantidade: produto.quantidade - 1 }
                    : produto
            ).filter((_, i) => i !== index || prevCarrinho[i].quantidade > 1)
        );
    };

    const removerTodosItensDoCarrinho = (index) => {
        setCarrinho(prevCarrinho => prevCarrinho.filter((_, i) => i !== index));
    };

    const continuarComprando = () => {
        window.location.href = '/menu';
    };

    // Calcular o número total de itens no carrinho
    // const totalItensCarrinho = carrinho.reduce((total, produto) => total + produto.quantidade, 0);
    const totalItensCarrinho = carrinho.reduce((total, produto) => total + produto.quantidade, 0);

    // Calcular o subtotal
    const subtotal = carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);

    return (
        <body className='body-cart'>
            <div className='maskCart'></div>
            <header className="header-cart">
                <div className="header-container">
                    <div className="logo-box-cart">
                        <img src={Logo} alt="" className="logo-cart" />
                        <h1>Ciro Lanches</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/carrinho">Carrinho</a></li>
                        </ul>
                        <div className="carrinho-box">
                            <a href="/carrinho">
                                <img src={CarrinhoImg} alt="" className="carrinho-buy" />
                                <div id="cart-count">{totalItensCarrinho}</div>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            <main>

                <section id="carrinho">
                    <h2>Meu Carrinho</h2>
                    <div id="produtos-carrinho">
                        {carrinho.map((produto, index) => (
                            <div key={index} className="produto-carrinho">
                                <div className="produto-info">
                                    <h4>{produto.nome}</h4>
                                    <p><strong>R$ {(produto.preco * produto.quantidade).toFixed(2)}</strong></p>
                                </div>
                                <div className="produto-actions">
                                    <button onClick={() => removerUmItemDoCarrinho(index)} className="btn-remove-one sinais">-</button>
                                    <span className="number-cart">{produto.quantidade}</span>
                                    <button onClick={() => adicionarUmItemAoCarrinho(index)} className="btn-add-one sinais">+</button>
                                    <button onClick={() => removerTodosItensDoCarrinho(index)} className="btn-remove-all">Remover Todos</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="resumo-pedido">
                        <p>Subtotal: <span id="subtotal">R$ {subtotal.toFixed(2)}</span></p>
                        <p>Total: <span id="total">R$ {subtotal.toFixed(2)}</span></p>
                        <div className="btns">
                            <button id="finalizar-compra">Finalizar Compra</button>
                            <button id="btn-continuar-comprando" onClick={continuarComprando}>Continuar Comprando</button>
                        </div>
                    </div>
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
};

export default CarrinhoComponent;