

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/bag.css";
import UserContext from "../state/UserContext.js";
const Bag = () => {

    const [currentUserInfo, setCurrentUserInfo] = useContext(UserContext);
    const [itemDetails, setItemDetails] = useState();

    console.log(currentUserInfo)
    function displayThisItem(itemId){
        //go through bag, find the item == itemId
        //give that to itemDetails
        for(let i =0; i < currentUserInfo.bag.length; i++){
            if(currentUserInfo.bag[i].id == itemId){
                setItemDetails(currentUserInfo.bag[i]);
                break;
            }
        }
    }   

    return(
        <div className="bag">
            <div className="bag__title">
                <div className="bag__title__text">
                    BAG
                </div>
                <div className="bag__title__text">
                    COIN: {currentUserInfo.coins}
                </div>
                <Link to="/" className="bag__title__home">
                    HOME
                </Link>
            </div>
            <div className="bag__wrap">
                <div className="bag__wrap__slots">
                    {
                        currentUserInfo.bag.map((item) => (
                            <div key={item.id} onClick={() => displayThisItem(item.id)} className="bag__wrap__slots__slot">
                                <div className="bag__wrap__slots__slot__image">
                                    <div className="bag__wrap__slots__slot__image__card">
                                        <div className="bag__wrap__slots__slot__image__card__border">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    
                </div>
                <div className="bag__wrap__info">
                    {
                        itemDetails ? (
                            <div className="bag__wrap__info--holder">
                                <div className="bag__wrap__info__image">
                                    <div className="bag__wrap__info__image__border">
                                        <div className="bag__wrap__info__image__border__card">
                                            <div className="bag__wrap__info__image__border__card__border">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bag__wrap__info__details">
                                    <div className="bag__wrap__info__details__name">
                                        {itemDetails.name}
                                    </div>
                                    <div className="bag__wrap__info__details__text">
                                        Amount: {itemDetails.amount}
                                    </div>
                                </div>
                            </div>
                        
                        ) : null
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Bag;