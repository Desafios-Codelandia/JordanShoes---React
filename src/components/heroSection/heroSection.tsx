import React from "react";
import { Jordan } from "./jordan";
import jo from './jo.png'


export const Hero = () => {
    return (
        <div>
            <div className="bg-Joordan bg-cover bg-no-repeat bg-center w-full h-80 text-white brightness-50">
            </div>
            <div className="container mx-auto xl:px-14 flex flex-col h-0 relative -top-52">
                <div className="px-5 max-w-md text-justify  text-white">
                    <h1 className="text-3xl font-bold">A melhor loja de Jordan</h1>
                    <p className="text-1xl">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                </div>

            </div>
        </div>
    )
}