
import { Link } from "react-router-dom";
import "../styles/tower.css"

const Tower = () => {
    return(
        <div className="tower">
            <div className="tower__top">
                <div className="tower__top__title">
                    TOWER
                </div>
                <Link to="/" className="tower__top__home">
                    HOME
                </Link>
            </div>
            <div className="tower__wrap">
                <div className="tower__wrap__cards">
                    <div className="tower__wrap__cards__floor">
                        <div className="tower__wrap__cards__floor__card">
                            <div className="tower__wrap__cards__floor__card__border">
                                <div className="tower__wrap__cards__floor__card__border__name">
                                   FOUR ARMS CENTUAR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__floor tower__wrap__cards__floor__card__border__floor--activated">
                                  1ST FLOOR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__leftBox tower__wrap__cards__floor__card__border__leftBox--water">
                                
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__rightBox tower__wrap__cards__floor__card__border__rightBox--diamond">
                                
                                </div>
                            </div>
                        </div>
                        <div className="tower__wrap__cards__floor__button">
                            CHALLENGE
                        </div>
                    </div>
                    <div className="tower__wrap__cards__floor">
                        <div className="tower__wrap__cards__floor__card">
                            <div className="tower__wrap__cards__floor__card__border">
                                <div className="tower__wrap__cards__floor__card__border__name">
                                   NINE TAILS FOX
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__floor tower__wrap__cards__floor__card__border__floor--deactivated">
                                  2ND FLOOR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__leftBox tower__wrap__cards__floor__card__border__leftBox--water">
                                
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__rightBox tower__wrap__cards__floor__card__border__rightBox--diamond">
                                
                                </div>
                            </div>
                        </div>
                        <div className="tower__wrap__cards__floor__button">
                            CHALLENGE
                        </div>
                    </div>
                    <div className="tower__wrap__cards__floor">
                        <div className="tower__wrap__cards__floor__card">
                            <div className="tower__wrap__cards__floor__card__border">
                                <div className="tower__wrap__cards__floor__card__border__name">
                                   PURPLE SNAKE
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__floor tower__wrap__cards__floor__card__border__floor--deactivated">
                                  3RD FLOOR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__leftBox tower__wrap__cards__floor__card__border__leftBox--water">
                                
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__rightBox tower__wrap__cards__floor__card__border__rightBox--diamond">
                                
                                </div>
                            </div>
                        </div>
                        <div className="tower__wrap__cards__floor__button">
                            CHALLENGE
                        </div>
                    </div>
                    <div className="tower__wrap__cards__floor">
                        <div className="tower__wrap__cards__floor__card">
                            <div className="tower__wrap__cards__floor__card__border">
                                <div className="tower__wrap__cards__floor__card__border__name">
                                   GOLDEN LION
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__floor tower__wrap__cards__floor__card__border__floor--deactivated">
                                  4TH FLOOR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__leftBox tower__wrap__cards__floor__card__border__leftBox--water">
                                
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__rightBox tower__wrap__cards__floor__card__border__rightBox--diamond">
                                
                                </div>
                            </div>
                        </div>
                        <div className="tower__wrap__cards__floor__button">
                            CHALLENGE
                        </div>
                    </div>
                    <div className="tower__wrap__cards__floor">
                        <div className="tower__wrap__cards__floor__card">
                            <div className="tower__wrap__cards__floor__card__border">
                                <div className="tower__wrap__cards__floor__card__border__name">
                                   CORRUPTED MAGE
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__floor tower__wrap__cards__floor__card__border__floor--deactivated">
                                  5TH FLOOR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__leftBox tower__wrap__cards__floor__card__border__leftBox--water">
                                
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__rightBox tower__wrap__cards__floor__card__border__rightBox--diamond">
                                
                                </div>
                            </div>
                        </div>
                        <div className="tower__wrap__cards__floor__button">
                            CHALLENGE
                        </div>
                    </div>
                    <div className="tower__wrap__cards__floor">
                        <div className="tower__wrap__cards__floor__card">
                            <div className="tower__wrap__cards__floor__card__border">
                                <div className="tower__wrap__cards__floor__card__border__name">
                                    NINE WINGS PHEONIX 
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__floor tower__wrap__cards__floor__card__border__floor--deactivated">
                                    6TH FLOOR
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__leftBox tower__wrap__cards__floor__card__border__leftBox--water">
                                
                                </div>
                                <div className="tower__wrap__cards__floor__card__border__rightBox tower__wrap__cards__floor__card__border__rightBox--diamond">
                                
                                </div>
                            </div>
                        </div>
                        <div className="tower__wrap__cards__floor__button">
                            CHALLENGE
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Tower;