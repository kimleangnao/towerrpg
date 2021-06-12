

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/zones.css";

const Zones = () => {

    const [rateD, setRateD] = useState(true);
    const [rateC, setRateC] = useState(false);
    const [rateB, setRateB] = useState(false);
    const [rateA, setRateA] = useState(false);
    const [rateS, setRateS] = useState(false);

    function switchZoneRate(fn){
        setRateD(false);
        setRateC(false);
        setRateB(false);
        setRateA(false);
        setRateS(false);

        fn(true);
    }

    return(
        <div className="zones">
            <div className="zones__top">
                <div className="zones__top__title">
                    ZONES
                </div>
                <Link to="/" className="zones__top__home">
                    HOME
                </Link>
            </div>
            <div className="zones__wrap">
                <div className="zones__wrap__nav">
                    <div onClick={() => switchZoneRate(setRateD)} className={rateD == true ? "zones__wrap__nav__button zones__wrap__nav__button--active":"zones__wrap__nav__button"}>
                        <div className="zones__wrap__nav__button__rarity--white">
                       
                        </div>
                        <div className="zones__wrap__nav__button__text">
                            RATED: D
                        </div>
                    </div>
                    <div onClick={() => switchZoneRate(setRateC)} className={rateC == true ? "zones__wrap__nav__button zones__wrap__nav__button--active":"zones__wrap__nav__button"}>
                        <div className="zones__wrap__nav__button__rarity--blue">
                       
                        </div>
                        <div className="zones__wrap__nav__button__text">
                            RATED: C
                        </div>
                    </div>
                    <div onClick={() => switchZoneRate(setRateB)} className={rateB == true ? "zones__wrap__nav__button zones__wrap__nav__button--active":"zones__wrap__nav__button"}>
                        <div className="zones__wrap__nav__button__rarity--green">
                        
                        </div>
                        <div className="zones__wrap__nav__button__text">
                            RATED: B
                        </div>
                    </div>
                    <div onClick={() => switchZoneRate(setRateA)} className={rateA == true ? "zones__wrap__nav__button zones__wrap__nav__button--active":"zones__wrap__nav__button"}>
                        <div className="zones__wrap__nav__button__rarity--gold">
                        
                        </div>
                        <div className="zones__wrap__nav__button__text">
                            RATED:A
                        </div>
                    </div>
                    <div onClick={() => switchZoneRate(setRateS)} className={rateS == true ? "zones__wrap__nav__button zones__wrap__nav__button--active":"zones__wrap__nav__button"}>
                        <div className="zones__wrap__nav__button__rarity--crimson">
                        
                        </div>
                        <div className="zones__wrap__nav__button__text">
                            RATED: S
                        </div>
                    </div>
                </div>
                {
                    rateD == true ? 
                    (
                        <div className="zones__wrap__cards">
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--white">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            HAUNTING VALLEY
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/1" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--white">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            WOLF'S DEN
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/2" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--white">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            IRON TOOTH BOAR
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/3" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                        </div>
                    ) 
                    : rateC == true ?
                    (
                        <div className="zones__wrap__cards">
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--blue">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            BLOSSOM VALLEY
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/4" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--blue">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                           SENTIMENT HILL
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/5" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--blue">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            MEZ RIVER 
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/6" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                        </div>
                    ) : rateB == true ? 
                    (
                        <div className="zones__wrap__cards">
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--green">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            WITCH'S HUNT
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/7" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--green">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            THE FOREST
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/8" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--green">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            ROUGE'S HIDEOUT
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/9" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                        </div>
                    ):  null}
                    {/*
                        rateA == true ? 
                    (
                        <div className="zones__wrap__cards">
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--gold">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            WANDERING TING
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/10" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--gold">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            FALLEN MAGE
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/11" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--gold">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            THREE EYES MYSTIC
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/12" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                        </div>
                    ): rateS == true ? 
                    (
                        <div className="zones__wrap__cards">
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--crimson">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            WING SERPENT
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/13" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--crimson">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">
                                        
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            EAGLE'S NEST
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/14" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                            <div className="zones__wrap__cards__zone">
                                <div className="zones__wrap__cards__zone__card">
                                    <div className="zones__wrap__cards__zone__card__border">
                                        <div className="zones__wrap__cards__zone__card__border__rarity--crimson">
                                            
                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__text">

                                        </div>
                                        <div className="zones__wrap__cards__zone__card__border__name">
                                            MISTY FOREST
                                        </div>
                                    </div>
                                </div>
                                <Link to="zones/15" className="zones__wrap__cards__zone__button">
                                    CHALLENGE
                                </Link>
                            </div>
                        </div>
                    ): null
                */}
                
                
            </div>
        </div>
    )
}

export default Zones;