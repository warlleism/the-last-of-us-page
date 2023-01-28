import React from "react";
import './style.scss'
import { interpreters } from "./interpreters";

const Interpreter = () => {
    return (
        <div className="main-Interpreter">
            <div className="titulo-Interpreter">INTERPRETER</div>

            <div className="container-cards-interpreters">
                {
                    interpreters.map((e) => {
                        return (

                            <div className="container-interpreters">
                                <img src={e.img} alt="" />
                                <div>{e.name}</div>
                                <div>{e.character}</div>
                                <div>Interpreter</div>

                                <div className="squares">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Interpreter;