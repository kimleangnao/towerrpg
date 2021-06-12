

import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/zonebattle.css"

import DisplayUpperDeck from "./DisplayUpperDeck"

import UserContext from "../state/UserContext.js";

const Zonebattle = ({zones}) => {

    const [currentUserInfo, setCurrentUserInfo] = useContext(UserContext);
    const [currentZone, setCurrentZone] = useState([])
    const [upperDeck, setUpperDeck] = useState([])
    const [lowerDeck, setLowerDeck] = useState([])
    const [showDeck, setShowDeck] = useState(false);

    const [level, setLevel] = useState([
        {
            "level" : 1,
            "expNeed": 120,
        },
        {
            "level" : 2,
            "expNeed": 240,
        },
        {
            "level" : 3,
            "expNeed": 480,
        },
        {
            "level" : 4,
            "expNeed": 960,
        },
        {
            "level" : 5,
            "expNeed": 1920,
        },
        {
            "level" : 6,
            "expNeed": 3840,
        },
        {
            "level" : 7,
            "expNeed": 7680,
        },
        {
            "level" : 8,
            "expNeed": 15360,
        },
        {
            "level" : 9,
            "expNeed": 30720,
        },
        {
            "level" : 10,
            "expNeed": 61440,
        },
        {
            "level" : 11,
            "expNeed": 122880,
        },
        {
            "level" : 12,
            "expNeed": 245760,
        },
        {
            "level" : 13,
            "expNeed": 491520,
        },
        {
            "level" : 14,
            "expNeed": 983040,
        },
        {
            "level" : 15,
            "expNeed": 1966080,
        },
        {
            "level" : 16,
            "expNeed": 3932160,
        },
        {
            "level" : 17,
            "expNeed": 7864320,
        },
        {
            "level" : 18,
            "expNeed": 15728640,
        },
        {
            "level" : 19,
            "expNeed": 31457280,
        },
        {
            "level" : 20,
            "expNeed": 62914560,
        }
    ])

    const [showCard, setShowCard] = useState(false);
    const [showCreatureCard, setShowCreatureCard] = useState(false);

    const [userStatusEffect, setUserStatusEffect] = useState([]);
    const [creatureStatusEffect, setCreatureStatusEffect] = useState([]);
    const [currentCardSelect, setCurrentCardSelect] = useState();
    const [showCurrentCard, setShowCurrentCard] = useState([]);

    //what turn, who turn is it
    //in attacking action
    const [attacking, setAttacking] = useState(false);
    const [turn, setTurn] = useState("user");
    const [turnCount, setTurnCount] = useState(1);

    const [win, setWin] = useState(false);
    const [reward, setReward] = useState([]);

    const [keepTrackOfText, setKeepTrackOfText] = useState();
    const [showText, setShowText] = useState(false);

    let didTheCreatureDie = false;
    let isItMonsterTurn = false;


    function checkingForCreatureTurn(){
        let zoneCreatureSkill = currentZone.skills[0];
        //console.log(currentZone.hitpoint)
        //console.log("creature:", didTheCreatureDie);
        if(didTheCreatureDie == false){
            //console.log("creature checking attack!")
            setAttacking(true);
            setShowCreatureCard(true);
            setCurrentCardSelect(zoneCreatureSkill);
            //set attacking to true
            //showCreatureCard
            //currentCardSelect
            //console.log("zoneSkill:", zoneCreatureSkill)
            //user hp
            let updatingUserInfo = {...currentUserInfo};
            
            setTimeout(function(){
                //then do damage
             
                updatingUserInfo.hitpoint = Math.floor(updatingUserInfo.hitpoint - zoneCreatureSkill.attackPower);
                setCurrentUserInfo(updatingUserInfo);
                setKeepTrackOfText("Monster use " + zoneCreatureSkill.name + " and did " + zoneCreatureSkill.attackPower + " damages.")
                setShowText(true);
                //localStorage.setItem("userInfo", JSON.stringify((updatingUserInfo)))
            }, 500)
            //then clear it all back to nothing, hideshowCreatureCard
            setTimeout(function(){
                //clear
                setAttacking(false);
                setTurn("user");
                setShowCreatureCard(false);
                setCurrentCardSelect()
                let currentTurnCount = turnCount + 1;
                setTurnCount(currentTurnCount)
                isItMonsterTurn = false;
                setKeepTrackOfText("")
                setShowText(false);
            }, 2000)
        }else{
            console.log("check!")
            setWin(true);
        }  
    }
  

    useEffect(() => {
        if(currentZone.hitpoint <= 0){
            //get reward
            let rewards = [];
            let RNG = Math.floor(Math.random() * 100);
         
            let id = Math.floor(Math.random() * 1000000);
            let item = {
                "id": id,
                "name" : "",
                "type": "",
                "amount": 0,
            }
            //console.log("RNG:", RNG);
            //look through reward for the one that is 1% or less
            for(let i = 0; i < currentZone.rewards.length; i++){
                if(currentZone.rewards[i].percentage >= RNG){
                    item.name = currentZone.rewards[i].name;
                    item.type = currentZone.rewards[i].type;
                    item.amount = currentZone.rewards[i].amount;
                    if(currentZone.rewards[i].type == "card"){
                        item["cardType"] = currentZone.rewards[i].cardType;
                        item["rarity"] = currentZone.rewards[i].rarity;
                        item["cardElement"] = currentZone.rewards[i].cardElement;
                        item["cardAttack"] = currentZone.rewards[i].cardAttack;
                    }
                    rewards.push(item);
                    //reset
                    item = {
                        "id": id,
                        "name" : "",
                        "type": "",
                        "amount": 0,
                        "cardType": "",
                        "rarity": "",
                        "cardElement": "",
                        "cardAttack": ""
                    }
                }
            }
            setReward(rewards);
            //give it to user bag
            /*
                {
                    "id": 102,
                    "cardname": "RAPID FIREBALL",
                    "attack": 4.8,
                    "rarity": "white",
                    "effect": [],
                    "element": "fire",
                    "type": "attack"
                } 
            */
            let copyUserInfo = {...currentUserInfo};
            for(let i = 0; i < rewards.length; i++){
               //currency, go to coin

               //item
               //go to bag
        
               //card
               //go to spell
                if(rewards[i].type == "currency"){
                    copyUserInfo.coins  =  copyUserInfo.coins + rewards[i].amount;
                }else if (rewards[i].type == "item"){
                    copyUserInfo.bag.push(rewards[i]);
                }else if (rewards[i].type == "card"){
                    let id = Math.floor(Math.random() * 1000000);
                    let newCard = {
                        "id": id,
                        "cardname": rewards[i].name,
                        "attack": rewards[i].cardAttack,
                        "rarity": rewards[i].rarity,
                        "effect": [],
                        "element":  rewards[i].cardElement,
                        "type":  rewards[i].cardType
                    }
                    
                    copyUserInfo.ownspells.push(newCard);
                }else if (rewards[i].type == "exp"){
                    //give exp to user
                    let currentExp = copyUserInfo.exp;
                    let currentLevel = copyUserInfo.level;

                    for(let index = 0; index < level.length; index++){
                      
                        if(level[index].level == currentLevel){
                            if (currentExp + rewards[i].amount >= level[index].expNeed){
                                //need to level up
                                let whatLeft = (currentExp + rewards[i].amount) -  level[index].expNeed;
                                copyUserInfo.level = currentLevel + 1;
                                copyUserInfo.exp = whatLeft;
                                copyUserInfo.sp =  copyUserInfo.sp  + 5;
                            }else {
                                //only need to increase the exp
                                copyUserInfo.exp = copyUserInfo.exp + rewards[i].amount;
                            }
                        }
                    }

                }
               
            }   

            //update HP and MP back to normal
            copyUserInfo.hitpoint = copyUserInfo.vitality * 10;
            copyUserInfo.manapoint = copyUserInfo.intelligence * 5;

         
            //setUserInfo(copyUserInfo);
            setCurrentUserInfo(copyUserInfo);
      
            localStorage.setItem("userInfo", JSON.stringify(copyUserInfo))
            setShowCreatureCard(false);
            setWin(true);
            didTheCreatureDie = true;
            console.log("creature:", didTheCreatureDie);
        }else{
            setWin(false);
        }
  
    }, [currentZone.hitpoint])

    useEffect(() => {
        //console.log("checking mon:", isItMonsterTurn)
        if(turn=="creature"){
            if(currentZone.hitpoint > 0){
                checkingForCreatureTurn();
            }
        }

    }, [turn])

    function selectCard(id, deck){
        let whatisselect = {...currentCardSelect};
        if(deck == "upper"){
            //make sure that is no card select yet
            if(whatisselect.id == undefined){
                //console.log("true")
                for(let i = 0 ; i < upperDeck.length; i++){
                    if(upperDeck[i].id == id){
                        if(upperDeck[i].select){
                            upperDeck[i].select = false;
                      
                            if(whatisselect.id != undefined){
                                whatisselect.splice(0,1);
                            }
                            setCurrentCardSelect(whatisselect);
                            
                            break;
                            
                        }else{
                    
                            upperDeck[i].select = true;
                            whatisselect = upperDeck[i];
                            setCurrentCardSelect(whatisselect);
                            break;
                        }
                    
                    }
                }
            }else if (whatisselect.id != undefined){
                for(let i = 0 ; i < upperDeck.length; i++){
                    if(upperDeck[i].id == id){
                        if(upperDeck[i].select){
                            upperDeck[i].select = false;
                            setCurrentCardSelect({});
                            break;
                        }
                    }
                }
            }
            
        }

    }

    function determineAttackingCard(){
        let currentCard = {...currentCardSelect}
        //console.log(currentZone)
        let currentZoneMonster = {...currentZone};
        //console.log("currentCard:", currentCard)
        setTimeout(function(){
            setShowCard(true);
            setShowCurrentCard(currentCard);
            //do damage
            if(currentCard.type == "attack"){
                //attack
                let creatureElement = currentZoneMonster.element;
                let creatureHitpoint = currentZoneMonster.hitpoint;

                let attackPower = currentCard.attack;
                let attackElement = currentCard.element;
                
                let strPower= attackPower * currentUserInfo.strength;


                if(attackElement == "fire" && creatureElement == "water"){
                    //lose benefit
                    strPower = (attackPower*(.90)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "fire" && creatureElement == "wind"){
                    //win benefit
                    strPower = (attackPower*(1.10)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "water" && creatureElement == "fire"){
                    //win benefit
                    strPower = (attackPower*(1.10)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "water" && creatureElement == "earth"){
                    //lose benefit
                    strPower = (attackPower*(.90)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "wind" && creatureElement == "earth"){
                    //win benefit
                    strPower = (attackPower*(1.10)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "wind" && creatureElement == "fire"){
                    //lose benfit
                    strPower = (attackPower*(.90)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "earth" && creatureElement == "water"){
                    //win benefit
                    strPower = (attackPower*(1.10)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else if (attackElement == "earth" && creatureElement == "wind"){
                    //lose benefit
                    strPower = (attackPower*(.90)) * currentUserInfo.strength;
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }else{
                    //normal
                    currentZoneMonster.hitpoint = Math.floor(creatureHitpoint - strPower);

                    if(currentZoneMonster.hitpoint <= 0){
                        currentZoneMonster.hitpoint = 0;
                    }
                }

            }else if (currentCard.type == "buff"){
                //buff
                //not handle yet, we only have attack card here

            }else {
                //debuff
                //not handle yet, we only have attack card here

            }
            setKeepTrackOfText("You use "+ currentCard.cardname +" and did " + Math.floor(currentCard.attack * currentUserInfo.strength) + " damages.")
            setShowText(true);
            
            setCurrentZone(currentZoneMonster);

        }, 500)
        setTimeout(function(){
            setShowCard(false);
            let currentCardSpliceOut =  currentCard;
            setCurrentCardSelect(currentCard);
            setShowCurrentCard();
            //stop highlight the card in the upperDeck or lowerDeck
            //console.log("currentCardSpliceOut:", currentCardSpliceOut)
            let currentUpperDeck = [...upperDeck];
            let currentLowerDeck = [...lowerDeck];
            let found = false;
            for(let i =0; i < currentUpperDeck.length; i++){
                //console.log("finding!")
                if(currentUpperDeck[i].id == currentCardSpliceOut.id){
                    //console.log("found!")
                    currentUpperDeck[i].select = false;
                    found = true;
                    break;
                }
            }
            if(found == false){
                for(let i =0; i < currentLowerDeck.length; i++){
                    //console.log("finding!")
                    if(currentLowerDeck[i].id == currentCardSpliceOut.id){
                        //console.log("found!")
                        currentLowerDeck[i].select = false;
                        found = true;
                        break;
                    }
                } 
            }
            
            setUpperDeck(currentUpperDeck);
            setLowerDeck(currentLowerDeck);
            let newTurn = "creature";
            setTurn(newTurn);
            setAttacking(false);
            let currentTurnCount = turnCount + 1;
            setTurnCount(currentTurnCount)
            isItMonsterTurn = true;
            //console.log("monster:", isItMonsterTurn)
            setKeepTrackOfText("")
            setShowText(false);
            //console.log("turn:",turn)
            //console.log("attack:", attacking)
        }, 2000)
    }

    function attack(){
        //check if it's user turn
        //console.log(turn)
        if(turn == "user"){
            //user can click
            setShowDeck(false);
            determineAttackingCard();
            setAttacking(true);
        }
    
    }
    function skip(){
        setShowDeck(false);
    }

    let id = useParams();
    useEffect(() => {
        let currentDeck = [];
        let currentLowerDeck = [];
        for(let i = 0; i < currentUserInfo.deck.length; i++){
    
            if(i <= 5){
                currentDeck.push(currentUserInfo.deck[i]);
            }else{
                currentLowerDeck.push(currentUserInfo.deck[i]);
            }
        }
        setUpperDeck(currentDeck);
        setLowerDeck(currentLowerDeck);

        for(let i = 0; i < zones.length; i++){
            if(zones[i].battle == id.id){
                setCurrentZone(zones[i]);
                break;
            }
        }

    },[])

   


  
    return(
        <div className="zonebattle">
            <div className="zonebattle__help">
                <div className="zonebattle__help__wrap">
                    <p className={showText ? "zonebattle__help__wrap__text" : "zonebattle__help__wrap__text--hide"}>{keepTrackOfText}</p>
                </div>
            </div>
            <div className={win ? "zonebattle__reward" : "zonebattle__reward--hide"}>
                <div className="zonebattle__reward__box">
                    <p className="zonebattle__reward__box__text">VICTORY</p>
                    {
                        reward ? 
                            reward.map((item,index) => (
                            <div key={index} className="zonebattle__reward__box__item">
                                <div className="zonebattle__reward__box__item__name">
                                    {item.name}
                                </div>
                                <div className="zonebattle__reward__box__item__x">
                                    X
                                </div>
                                <div className="zonebattle__reward__box__item__amount">
                                    {item.amount}
                                </div>
                            </div>
                            ))
                         : null
                    }
                    
                 
                    <div className="zonebattle__reward__box__buttons">
                        <Link to="/" className="zonebattle__reward__box__buttons__home">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            <div className={currentUserInfo.hitpoint <= 0 ? "zonebattle__reward" : "zonebattle__reward--hide"}>
                <div className="zonebattle__reward__box">
                    <p className="zonebattle__reward__box__text">You died!</p>
                    <div className="zonebattle__reward__box__buttons">
                        <Link to="/" className="zonebattle__reward__box__buttons__home">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            <div className="zonebattle__top">
                <div className="zonebattle__top__title">
                    TURN {turnCount}
                </div>
                <Link to="/" className="zonebattle__top__run">
                    RUN
                </Link>
            </div>
            <div className="zonebattle__wrap">
                <div className={showDeck ? "zonebattle__wrap__absolute" : "zonebattle__wrap__absolute zonebattle__wrap__absolute--hide " }>
                    <DisplayUpperDeck upperDeck={upperDeck} selectCard={selectCard} />
                    <div className="zonebattle__wrap__actions">
                        
                        <div onClick={() => skip()} className="zonebattle__wrap__actions__button">
                            CLOSE
                        </div>
                        <div onClick={() => skip()} className="zonebattle__wrap__actions__button">
                            SKIP
                        </div>
                        <div onClick={() => attack()} className="zonebattle__wrap__actions__button">
                            ATTACK
                        </div>
                    </div>
                    <div className="zonebattle__wrap__top">
                        {
                            lowerDeck.length > 0 ? (
                                lowerDeck.map((card) => (
                                    <div key={card.id} className={card.select == true ? "zonebattle__wrap__top__card zonebattle__wrap__top__card--select":"zonebattle__wrap__top__card"}>
                                        <div className="zonebattle__wrap__top__card__border">
                                            <div className="zonebattle__wrap__top__card__border__rarity rarity--white">
                                            
                                            </div>
                                            <div className="zonebattle__wrap__top__card__border__leftBox box--fire">
                                            
                                            </div>
                                            <div className="zonebattle__wrap__top__card__border__rightBox box--circle">
                                            
                                            </div>
                                            <div className="zonebattle__wrap__top__card__border__name">
                                                {card.cardname}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ): null
                        }
                        
                        
                       
                    </div>
                </div>
                <div className={showDeck ? "zonebattle__wrap__background--hide": "zonebattle__wrap__background"}>
                    <div className="zonebattle__wrap__background__background">

                    </div>
                    <div className="zonebattle__wrap__background__standon">

                    </div>
                    <div className="zonebattle__wrap__background__user">
                        <div className="zonebattle__wrap__background__user__card">
                            <div className="zonebattle__wrap__background__user__card__border">
                                <div className="zonebattle__wrap__background__user__card__border__rarity rarity--white">
                                
                                </div>
                                <div className="zonebattle__wrap__background__user__card__border__box">
                                    HP: {currentUserInfo.hitpoint}
                                </div>
                                <div className="zonebattle__wrap__background__user__card__border__box">
                                    MP: {currentUserInfo.manapoint}
                                </div>
                                <div className="zonebattle__wrap__background__user__card__border__box">
                                    STATUS EFFECTS: NONE
                                </div>
                                <div className="zonebattle__wrap__background__user__card__border__box">
                                  
                                </div>
                                <div className="zonebattle__wrap__background__user__card__border__box">
                                 
                                </div>
                                <div className="zonebattle__wrap__background__user__card__border__box user--name">
                                    SULLEN KITTEN
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="zonebattle__wrap__background__creature">
                        <div className="zonebattle__wrap__background__creature__card">
                            <div className="zonebattle__wrap__background__creature__card__border">
                                <div className="zonebattle__wrap__background__creature__card__border__rarity rarity--white">

                                </div>
                                <div className="zonebattle__wrap__background__creature__card__border__box">
                                    HP: {currentZone.hitpoint}
                                </div>
                                <div className="zonebattle__wrap__background__creature__card__border__box">
                                    MP: {currentZone.manapoint}
                                </div>
                                <div className="zonebattle__wrap__background__creature__card__border__box">
                                    STATUS EFFECTS: NONE
                                </div>
                                <div className="zonebattle__wrap__background__creature__card__border__box">
                               
                                </div>
                                <div className="zonebattle__wrap__background__creature__card__border__box">
                               
                                </div>
                                <div className={"zonebattle__wrap__background__creature__card__border__leftBox box--"+currentZone.element}>

                                </div>
                                <div className={"zonebattle__wrap__background__creature__card__border__rightBox box--"+currentZone.type}>

                                </div>
                                <div className="zonebattle__wrap__background__creature__card__border__box creature--user">
                                    {currentZone.name}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={showCard ? "zonebattle__wrap__background__card" : "zonebattle__wrap__background__card--hide"}>
                        {
                            showCurrentCard ? (
                                <div className="zonebattle__wrap__background__card__wrap">
                                    <div className="zonebattle__wrap__background__card__wrap__border">
                                        <div className="zonebattle__wrap__background__card__wrap__border__rarity rarity--white">

                                        </div>
                                        <div className={"zonebattle__wrap__background__card__wrap__border__leftBox box--" + showCurrentCard.element}>

                                        </div>
                                        <div className={"zonebattle__wrap__background__card__wrap__border__rightBox box--"+showCurrentCard.type}>

                                        </div>
                                        <div className="zonebattle__wrap__background__card__wrap__border__name">
                                            {showCurrentCard.cardname}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                        

                    </div>
                    <div className={showCreatureCard ? "zonebattle__wrap__background__card zonebattle__wrap__background__card__creature--creature": "zonebattle__wrap__background__card zonebattle__wrap__background__card--hide"}>
                     
                        {
                            currentCardSelect ? (
                                <div className="zonebattle__wrap__background__card__wrap">
                                    <div className="zonebattle__wrap__background__card__wrap__border">
                                        <div className="zonebattle__wrap__background__card__wrap__border__rarity rarity--white">

                                        </div>
                                        <div className={"zonebattle__wrap__background__card__wrap__border__leftBox box--" + currentCardSelect.element}>

                                        </div>
                                        <div className={"zonebattle__wrap__background__card__wrap__border__rightBox box--"+ currentCardSelect.type}>

                                        </div>
                                        <div className="zonebattle__wrap__background__card__wrap__border__name">
                                            {currentCardSelect.name}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }

                    </div>
                    <div onClick={() => attacking == false ? turn == "user" ? setShowDeck(true) : null : null} className="zonebattle__wrap__background__deck">
                        <div className="zonebattle__wrap__background__deck__card">
                            <div className="zonebattle__wrap__background__deck__card__border">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zonebattle;