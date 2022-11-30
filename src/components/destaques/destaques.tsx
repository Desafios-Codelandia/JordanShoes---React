import React from "react";
import I1 from './imgs/destaques/1.png'

const Cartao = ({ img }: any) => {
    return (
        <div className="itens-center justify-center flex">
            <div className="w-96 h-80 bg-card-color">
                <img className="p-16" src={img} alt="sapato" />
            </div>
        </div>
    )
}

export const Destaques = () => {
    return (
        <div className="container mx-auto pt-10 pb-10 md: justify-center items-center">
            <div className="text-justify items-center justify-center flex flex-col pb-10">
                <h1 className="text-3xl font-bold">Destaques</h1>
                <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
            </div>

            <div className="grid gap-y-10 justify-center items-center md:grid-cols-2 xl:grid-cols-3">
                <Cartao
                    img="./imgs/destaques/1.png"
                />
                <Cartao
                    img="./imgs/destaques/2.png"
                />
                <Cartao
                    img="./imgs/destaques/3.png"
                />
                <Cartao
                    img="./imgs/destaques/4.png"
                />
                <Cartao
                    img="./imgs/destaques/5.png"
                />
                <Cartao
                    img="./imgs/destaques/6.png"
                />
                <Cartao
                    img="./imgs/destaques/7.png"
                />
                <Cartao
                    img="./imgs/destaques/3.png"
                />
                <Cartao
                    img="./imgs/destaques/2.png"
                />

            </div>
        </div>
    )
}