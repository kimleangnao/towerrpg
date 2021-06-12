

const DisplayUpperDeck = ({upperDeck, selectCard}) => {
    return(
        <div className="zonebattle__wrap__top">
            {
                upperDeck.length > 0 ? (
                    upperDeck.map((card) => 
                        <div key={card.id} onClick={ () => selectCard(card.id, "upper")} className={card.select == true ? "zonebattle__wrap__top__card zonebattle__wrap__top__card--select":"zonebattle__wrap__top__card"}>
                            <div className="zonebattle__wrap__top__card__border">
                                <div className="zonebattle__wrap__top__card__border__rarity rarity--blue">
                                
                                </div>
                                <div className={"zonebattle__wrap__top__card__border__leftBox box--"+card.element}>
                                
                                </div>
                                <div className={"zonebattle__wrap__top__card__border__rightBox box--"+card.type}>
                                
                                </div>
                                <div className="zonebattle__wrap__top__card__border__name">
                                    {card.cardname}
                                </div>
                            </div>
                        </div>
                    )
                ) : null
            }
        </div>
    )
}

export default DisplayUpperDeck;