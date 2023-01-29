import React from "react";
import './style.scss'
import { awards } from "./awards";

const Awards = () => {

    const upScreen = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="main-awards">
            <div className="titulo-awards">PUBLIC AWARDS</div>
            <div className="container-cards-awards">
                {
                    awards.map((e) => {
                        return (
                            <div className="container-awards">
                                <div className="container-img-awards">
                                    <img src={require('../../images/trofeu.png')} alt="" />
                                </div>
                                <div>{e.name}</div>
                                <div>{e.award}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="arrow-top" onClick={() => upScreen()}>
                <span class="material-symbols-outlined">
                    straight
                </span>
            </div>

            <div className="board">

            </div>

        </div>
    )
}

export default Awards;