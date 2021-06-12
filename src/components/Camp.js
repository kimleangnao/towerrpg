

import { Link } from "react-router-dom";
import "../styles/camp.css";

const Camp  = () => {



    
    return(
        <div className="camp">
            <div className="camp__ontop">
                <div className="camp__ontop__show">
                    <div className="camp__ontop__show__border">

                    </div>
                    <div className="camp__ontop__show__image">

                    </div>
                    <div className="camp__ontop__show__rarity">

                    </div>
                    <div className="camp__ontop__show__leftElement">

                    </div>
                    <div className="camp__ontop__show__rightElement">

                    </div>
                    <div className="camp__ontop__show__name">
                        BLESSING
                    </div>
                </div>
                <div className="camp__ontop__title">
                    <div className="camp__ontop__title__name">
                        THE FALLEN'S TOWER
                    </div>
                    <div className="camp__ontop__title__extend">
                        STARWAY TO HAVEN
                    </div>
                </div>
                <div className="camp__ontop__buttons">
                    <Link to="/npc" className="camp__ontop__buttons__button">
                    NPC
                    </Link>
                    <Link to="/bag" className="camp__ontop__buttons__button">
                    BAG
                    </Link>
                    <Link to="/status" className="camp__ontop__buttons__button">
                    STATUS
                    </Link>
                    <Link to="/zones" className="camp__ontop__buttons__button">
                    ZONES
                    </Link>
                </div>
                <Link to="/tower" className="camp__ontop__tower">
                    CLIMB - 0
                </Link>
            </div>
        </div>
    )
}

export default Camp;