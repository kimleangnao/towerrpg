
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import "../styles/status.css";

import UserContext from "../state/UserContext.js";

const Status = () => {
  
    //const [currentUserInfo, setCurrentUserInfo] = useState(userInfo)
    const [currentUserInfo, setCurrentUserInfo] = useContext(UserContext);
    const [equipItemButton, setEquipItemButton] = useState(false);
    const [equipSpellsButton, setEquipSpellsButton] = useState(false);
    const [allButton, setAllButton] = useState(true);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);


    function switchButtons(fn){
        setEquipItemButton(false);
        setEquipSpellsButton(false);
        setAllButton(false);
        fn(true);
    }

    function increaseSTR(){
    
        let updatingCurrentUserInfo = {...currentUserInfo};

        if(updatingCurrentUserInfo.sp > 0){
            updatingCurrentUserInfo.strength =  updatingCurrentUserInfo.strength  + 1;
            updatingCurrentUserInfo.sp = updatingCurrentUserInfo.sp - 1;
        }
        ///updating here
        setCurrentUserInfo(updatingCurrentUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(updatingCurrentUserInfo))
        //updating the main
        //setUserInfo(updatingCurrentUserInfo);
    }
    function increaseVIT(){
        let updatingCurrentUserInfo = {...currentUserInfo};
        if(updatingCurrentUserInfo.sp > 0){
            updatingCurrentUserInfo.vitality =  updatingCurrentUserInfo.vitality  + 1;
            updatingCurrentUserInfo.hitpoint = updatingCurrentUserInfo.vitality * 10;
            updatingCurrentUserInfo.sp = updatingCurrentUserInfo.sp - 1;
            
        }
        ///updating here
        setCurrentUserInfo(updatingCurrentUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(updatingCurrentUserInfo))
        //updating the main
        //setUserInfo(updatingCurrentUserInfo);
    }
    function increaseINT(){
        let updatingCurrentUserInfo = {...currentUserInfo};
        if(updatingCurrentUserInfo.sp > 0){
            updatingCurrentUserInfo.intelligence =  updatingCurrentUserInfo.intelligence  + 1;
            updatingCurrentUserInfo.manapoint = updatingCurrentUserInfo.intelligence  * 5;
            updatingCurrentUserInfo.sp = updatingCurrentUserInfo.sp - 1;
        }
        ///updating here
        setCurrentUserInfo(updatingCurrentUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(updatingCurrentUserInfo))
        //updating the main
        //setUserInfo(updatingCurrentUserInfo);

    }
    //when VIT up, increase VIT and HP, * 10
    //when STR up, increase STR
    //when INT up, increase INT and MANA, * 5

    
    function addCardToDeck(cardId){
        //check if deck is full
        //if not, check if card is already in deck
        //if yes, message already added
        //if not, add it
        //give message, just added
        //if deck is full, if yes, then message say it's full
        let updatingUserInfo = {...currentUserInfo};
     
        if(updatingUserInfo.deck.length == 6){
            setMessage("Deck is full!");
            setShowMessage(true);
            setTimeout(function(){
              
                setShowMessage(false);
                
            }, 1000)
        }else{
            //deck is not full
            //check card if it's in the deck
            let foundCardInDeck = false;
            for(let i = 0; i < updatingUserInfo.deck.length; i++){
                if(updatingUserInfo.deck[i].id == cardId){
                    //found it
                    //it's in the deck
                    foundCardInDeck = true;
                    setMessage("This card is already in the deck!");
                    setShowMessage(true);
                    setTimeout(function(){
                    
                        setShowMessage(false);
                       
                    }, 1000)
                    break;
                }
            }
            if(foundCardInDeck == false){
                //not in deck
              
                let currentCard = null;
                for(let index = 0; index <updatingUserInfo.ownspells.length; index++){
                    if(updatingUserInfo.ownspells[index].id == cardId){
                        currentCard = updatingUserInfo.ownspells[index];
                        break;
                    }
                }  
                //add to deck  
                updatingUserInfo.deck.push(currentCard);   
                //then show messge
                setMessage("Card added!");
                setShowMessage(true);
                setTimeout(function(){
                 
                    setShowMessage(false);
                    
                }, 1000)
            }
        }
        setCurrentUserInfo(updatingUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(updatingUserInfo))
    }

    function removeCardFromDeck(cardId){
        let updatingUserInfo = {...currentUserInfo};
        for(let i = 0; i < updatingUserInfo.deck.length; i++){
            if(updatingUserInfo.deck[i].id == cardId){
                updatingUserInfo.deck.splice(i, 1);
                setMessage("Card removed from the deck!");
                setShowMessage(true);
                setTimeout(function(){
                
                    setShowMessage(false);
                    
                }, 1000)
                break;
            }
        }
        setCurrentUserInfo(updatingUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(updatingUserInfo))
    }


    return(
        <div className="status">
            <div className="status__top">
                <div className="status__top__title">
                    STATUS
                </div>
                <div className="status__top__wrap">
                    <div className={showMessage ? "status__top__wrap__text" : "status__top__wrap__text--hide"}>
                        {message}
                    </div>
                </div>
                <Link to="/" className="status__top__home">
                    HOME
                </Link>
            </div>
            <div className="status__wrap">
                <div className="status__wrap__info">
                    <div className="status__wrap__info__card">
                        <div className="status__wrap__info__card__border">
                            <div className="status__wrap__info__card__border__rarity">

                            </div>
                            <div className="status__wrap__info__card__border__text">
                                LEVEL: {currentUserInfo.level}
                            </div>
                            <div className="status__wrap__info__card__border__text">
                                EXP: {currentUserInfo.exp}
                            </div>
                            <div className="status__wrap__info__card__border__text">
                                HP: {currentUserInfo.vitality * 10}
                            </div>
                            {/*
                            <div className="status__wrap__info__card__border__text">
                                MANA: {currentUserInfo.manapoint}
                            </div>
                             */}
                            <div className="status__wrap__info__card__border__text">
                                DEF: {currentUserInfo.defense}
                            </div>
                            <div className="status__wrap__info__card__border__text">
                                STR: {currentUserInfo.strength} {currentUserInfo.sp > 0 ? <span onClick={() => increaseSTR()} className="status__wrap__info__card__border__text__plus">+</span> : ""}
                            </div>
                            {/*
                            <div className="status__wrap__info__card__border__text">
                                INT: {currentUserInfo.intelligence} {currentUserInfo.sp > 0 ? <span onClick={() => increaseINT()} className="status__wrap__info__card__border__text__plus">+</span> : ""}
                            </div>
                            */}
                            <div className="status__wrap__info__card__border__text">
                                VIT: {currentUserInfo.vitality} {currentUserInfo.sp > 0 ? <span onClick={() => increaseVIT()} className="status__wrap__info__card__border__text__plus">+</span> : ""}
                            </div>
                            
                            <div className="status__wrap__info__card__border__text">
                                SP: {currentUserInfo.sp}
                            </div>
                            <div className="status__wrap__info__card__border__text--name">
                                {currentUserInfo.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="status__wrap__deck">
                    <div className="status__wrap__deck__button">
                        <div onClick={() => switchButtons(setEquipItemButton)} className={equipItemButton == true ? "status__wrap__deck__button__equipItem--true":"status__wrap__deck__button__equipItem"}>
                            EQUIP ITEMS
                        </div>
                        <div onClick={() => switchButtons(setEquipSpellsButton)} className={equipSpellsButton == true ? "status__wrap__deck__button__equip--true":"status__wrap__deck__button__equip"}>
                            EQUIP SPELLS
                        </div>
                        <div onClick={() => switchButtons(setAllButton)} className={allButton == true ? "status__wrap__deck__button__all--true" : "status__wrap__deck__button__all"}>
                            ALL SPELLS
                        </div>  
                    </div>
                    {
                        equipItemButton == true ? 
                        ( 
                            <div className="status__wrap__deck__wrap">
                                Not here yet
                            </div>
                        ) :  equipSpellsButton == true ? 
                        (
                            <div className="status__wrap__deck__wrap">
                                <div className="status__wrap__deck__wrap__cards">
                                    {
                                        currentUserInfo.name != undefined ? currentUserInfo.deck.length > 0 ? (
                                            currentUserInfo.deck.map((card) => 
                                            <div key={card.id} onClick={() => removeCardFromDeck(card.id)} className="status__wrap__deck__wrap__cards__spell">
                                                <div className="status__wrap__deck__wrap__cards__spell__border">
                                                    <div className={"status__wrap__deck__wrap__cards__spell__border__rarity status__wrap__deck__wrap__cards__spell__border__rarity--"+card.rarity}>
                                                    
                                                    </div>
                                                    <div className={"status__wrap__deck__wrap__cards__spell__border__leftBox status__wrap__deck__wrap__cards__spell__border__leftBox--"+card.element}>

                                                    </div>
                                                    <div className={"status__wrap__deck__wrap__cards__spell__border__rightBox--"+ card.type}>

                                                    </div>
                                                    <div className="status__wrap__deck__wrap__cards__spell__border__name">
                                                        {card.cardname}
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                            
                                        ) : null : null
                                    } 
                                </div>
                            </div>
                        ) : allButton == true ? 
                        (
                            <div className="status__wrap__deck__wrap">
                                <div className="status__wrap__deck__wrap__cards">
                                    {
                                       currentUserInfo.name != undefined ? currentUserInfo.ownspells.length > 0 ? (
                                            currentUserInfo.ownspells.map((spell) => 
                                                <div key={spell.id} onClick={() => addCardToDeck(spell.id)} className="status__wrap__deck__wrap__cards__spell">
                                                    <div className="status__wrap__deck__wrap__cards__spell__border">
                                                        <div className={"status__wrap__deck__wrap__cards__spell__border__rarity status__wrap__deck__wrap__cards__spell__border__rarity--" + spell.rarity}>
                                                        
                                                        </div>
                                                        <div className={"status__wrap__deck__wrap__cards__spell__border__leftBox status__wrap__deck__wrap__cards__spell__border__leftBox--" + spell.element}>

                                                        </div>
                                                        <div className={"status__wrap__deck__wrap__cards__spell__border__rightBox--" + spell.type}>

                                                        </div>
                                                        <div className="status__wrap__deck__wrap__cards__spell__border__name">
                                                            {spell.cardname}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        ): null :null
                                    }
                                    
                                    
                                </div>
                            </div>
                        ) : null
                    }

                </div>
            </div>
        </div>
    )
}

export default Status;