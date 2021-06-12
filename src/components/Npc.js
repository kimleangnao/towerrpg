

import { Link } from "react-router-dom";
import "../styles/npc.css"
const Npc = () => {
    return(
        <div className="npc">
            <div className="npc__top">
                <div className="npc__top__title">
                    NPC
                </div>
                <Link to="/" className="npc__top__home">
                    HOME
                </Link>
            </div>
            <div className="npc__wrap">
                <div className="npc__wrap__card">
                    <div className="npc__wrap__card__background">
                        <div className="npc__wrap__card__background__border">
                            <div className="npc__wrap__card__background__border__rarity">
                            
                            </div>
                            <div className="npc__wrap__card__background__border__name">
                                Merchant
                            </div>
                        </div>
                    </div>
                    <div className="npc__wrap__card__button">
                        QUEST <span className="npc__wrap__card__button__span">(no quest available)</span>
                    </div>
                </div>
                <div className="npc__wrap__card">
                    <div className="npc__wrap__card__background">
                        <div className="npc__wrap__card__background__border">
                            <div className="npc__wrap__card__background__border__rarity">
                            
                            </div>
                            <div className="npc__wrap__card__background__border__name">
                                Alchemist
                            </div>
                        </div>
                    </div>
                    <div className="npc__wrap__card__button">
                        QUEST <span className="npc__wrap__card__button__span">(no quest available)</span>
                    </div>
                </div>
                <div className="npc__wrap__card">
                    <div className="npc__wrap__card__background">
                        <div className="npc__wrap__card__background__border">
                            <div className="npc__wrap__card__background__border__rarity">
                            
                            </div>
                            <div className="npc__wrap__card__background__border__name">
                                Blacksmith
                            </div>
                        </div>
                    </div>
                    <div className="npc__wrap__card__button">
                        QUEST <span className="npc__wrap__card__button__span">(no quest available)</span>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default Npc;