
import { useState, useEffect,} from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Camp from "./components/Camp.js";
import Npc from "./components/Npc.js";
import Bag from "./components/Bag.js";
import Status from "./components/Status.js";
import Zones from "./components/Zones.js";
import Tower from "./components/Tower.js";
import Zonebattle from "./components/Zonebattle.js";


import './App.css';

import UserContext from "./state/UserContext.js";

const App = () => {
    //default creation
    //vitality * 10 = hp
    //intelligence * 5 = MANA
    // 1 sp = 1 increase in STR, VIT, OR INT
    
    const [userInfo, setUserInfo] = useState({
        "id": 1,
        "name": 'User Test #1',
        "level": 1,
        "exp": 0,
        "hitpoint" : 100,
        "manapoint": 50,
        "defense": 15,
        "strength": 10,
        "vitality": 10,
        "intelligence" : 10,
        "sp": 0,
        "coins": 10,
        "deck": [
            {
                "id": 100,
                "cardname": "FIREBALL",
                "attack": 4.5,
                "effect": [],
                "element": "fire",
                "type": "attack",
                "rarity": "white",
                "select": false
            },
            {
                "id": 101,
                "cardname": "LAVA POOL",
                "attack": 3.5,
                "rarity": "white",
                "effect": [
                    {
                        "name" : "Burning",
                        "duration": 5
                    }
                ],
                "element": "fire",
                "type": "attack",
                "select": false
            },
            {
                "id": 102,
                "cardname": "RAPID FIREBALL",
                "attack": 4.8,
                "rarity": "white",
                "effect": [],
                "element": "fire",
                "type": "attack",
                "select": false
            }     
        ],
        "ownspells": [
            {
                "id": 100,
                "cardname": "FIREBALL",
                "attack": 4.5,
                "rarity": "white",
                "effect": [],
                "element": "fire",
                "type": "attack"
            },
            {
                "id": 101,
                "cardname": "LAVA POOL",
                "attack": 3.5,
                "rarity": "white",
                "effect": [
                    {
                        "name" : "Burning",
                        "duration": 5
                    }
                ],
                "element": "fire",
                "type": "attack"
            },
            {
                "id": 102,
                "cardname": "RAPID FIREBALL",
                "attack": 4.8,
                "rarity": "white",
                "effect": [],
                "element": "fire",
                "type": "attack"
            } 
            
        ],
        "equipeditems":[
            /*
            {
                "id": 300,
                "itemName": "name",
                "strength": 2.5,
                "vitality": 1.5,
                "intelligence": 2.5,
                "agility": 1,
                "luck": 2,
                "for": "weapon"
            }
            */
            
        ],
        "bag": [
            /*
            {
                "id": 1000,
                "name": "Health Potion",
                "hitpoint": 200,
                "type": "heal"  
            }
            */
        ],
        "towerprogress": {
            "highest": 1
        }
    });

    const [zones, setZones] = useState([
        {
            "id" : 10500,
            "name": "Wandering Ghost",
            "battle": 1,
            "zone": "d",
            "element": "fire",
            "type": "attack",
            "hitpoint": 150,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 555,
                    "name": "CLAW",
                    "element": "fire",
                    "type": "attack",
                    "attackPower": 15,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 30,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 100,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "VEIL",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 2.5,
                    "name" : "HEAL",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "HEALTH BOOST",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10501,
            "name": "WOLF'S DEN",
            "battle": 2,
            "zone": "d",
            "element": "fire",
            "type": "attack",
            "hitpoint": 300,
            "manapoint": 100,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "BITE",
                    "mana": 25,
                    "element": "fire",
                    "type": "attack",
                    "attackPower": 30,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 60,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 200,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "Tiger's Hide",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "wind",
                    "cardAttack": 5.5,
                    "name" : "WIND STRIKE",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "wind",
                    "cardAttack": 6,
                    "name" : "WHIRLWIND",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10502,
            "name": "IRON TOOTH BOAR",
            "battle": 3,
            "zone": "d",
            "element": "fire",
            "type": "attack",
            "hitpoint": 600,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "RUN IN",
                    "mana": 25,
                    "element": "fire",
                    "type": "attack",
                    "attackPower": 60,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 120,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 300,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "IRON TOOTH FROM BOAR",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "wind",
                    "cardAttack": 5.5,
                    "name" : "TORNADO",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10503,
            "name": "DEMON TREE'S BRANCH",
            "battle": 4,
            "zone": "d",
            "element": "earth",
            "type": "attack",
            "hitpoint": 800,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "WHIP",
                    "mana": 25,
                    "element": "earth",
                    "type": "attack",
                    "attackPower": 70,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 240,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 500,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "DEMON TREE'S LEAF",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "earth",
                    "cardAttack": 5.5,
                    "name" : "EARTH'S SPIKE",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10504,
            "name": "EARTH'S DEMON",
            "battle": 5,
            "zone": "d",
            "element": "earth",
            "type": "attack",
            "hitpoint": 900,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "WHIP",
                    "mana": 25,
                    "element": "earth",
                    "type": "attack",
                    "attackPower": 80,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 480,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 600,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "DEMON'S BLOOD",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "earth",
                    "cardAttack": 5.5,
                    "name" : "ERUPTION",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10505,
            "name": "MUD MONSTER",
            "battle": 6,
            "zone": "d",
            "element": "earth",
            "type": "attack",
            "hitpoint": 1000,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "WHIP",
                    "mana": 25,
                    "element": "earth",
                    "type": "attack",
                    "attackPower": 90,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 960,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 700,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "DEMON'S TEAR",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "earth",
                    "cardAttack": 5.5,
                    "name" : "GOLEM'S FIST STRIKE",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10506,
            "name": "CORRUPTED WITCH",
            "battle": 7,
            "zone": "d",
            "element": "water",
            "type": "attack",
            "hitpoint": 1200,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "CURSE",
                    "mana": 25,
                    "element": "water",
                    "type": "attack",
                    "attackPower": 100,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 1920,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 1000,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "WITCH'S NOTEBOOK",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "water",
                    "cardAttack": 5.5,
                    "name" : "WATER BLAST",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10507,
            "name": "THE FOREST",
            "battle": 8,
            "zone": "d",
            "element": "water",
            "type": "attack",
            "hitpoint": 1400,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "SCREAM",
                    "mana": 25,
                    "element": "water",
                    "type": "attack",
                    "attackPower": 110,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 3840,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 1100,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "THE FOREST'S MAP",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "water",
                    "cardAttack": 5.5,
                    "name" : "FROZEN FIST",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        },
        {
            "id" : 10508,
            "name": "ROUGE MAGE",
            "battle": 9,
            "zone": "d",
            "element": "water",
            "type": "attack",
            "hitpoint": 1500,
            "manapoint": 150,
            "attack": 50,
            "defense": 30,
            "dodge": 50,
            "skills":[
                {
                    "id": 556,
                    "name": "WATER BLAST",
                    "mana": 25,
                    "element": "water",
                    "type": "attack",
                    "attackPower": 120,
                    "cooldown": 1, 
                    "select": false
                }
            ],
            "rewards": [
                {
                    "percentage": 100,
                    "type": "exp",
                    "name" : "EXP",
                    "amount": 7680,
                },
                {
                    "percentage": 100,
                    "type": "currency",
                    "name" : "COIN",
                    "amount": 1200,
                },
                {
                    "percentage": 80,
                    "type": "item",
                    "name" : "MAGE'S PENDANT",
                    "amount": 1,
                },
                {
                    "percentage": 10,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "attack",
                    "cardElement": "water",
                    "cardAttack": 5.5,
                    "name" : "ICE SPEAR",
                    "amount": 1,
                },
                {
                    "percentage": 0.001,
                    "type": "card",
                    "rarity": "blue",
                    "cardType": "buff",
                    "cardElement": "light",
                    "cardAttack": 3.5,
                    "name" : "ATTACK INCREASE",
                    "amount": 1,
                }
            ]
        }
    ]);

    /*
    useEffect(() => {
        let tryToGetLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
        console.log("what", tryToGetLocalStorage);
        if(tryToGetLocalStorage && tryToGetLocalStorage.length > 0){
            console.log("Oh we already have it!")
            setUserInfo(tryToGetLocalStorage[0]);
        }else{
            console.log("We don't have one!")
            localStorage.setItem('userInfo', JSON.stringify([{
                "id": 1,
                "name": 'SULLEN KITTEN',
                "level": 1,
                "exp": 0,
                "hitpoint" : 100,
                "manapoint": 50,
                "defense": 15,
                "strength": 10,
                "vitality": 10,
                "intelligence" : 10,
                "sp": 0,
                "coins": 10,
                "deck": [
                    {
                        "id": 100,
                        "cardname": "FIREBALL",
                        "attack": 4.5,
                        "effect": [],
                        "element": "fire",
                        "type": "attack",
                        "rarity": "white",
                        "select": false
                    },
                    {
                        "id": 101,
                        "cardname": "LAVA POOL",
                        "attack": 3.5,
                        "rarity": "white",
                        "effect": [
                            {
                                "name" : "Burning",
                                "duration": 5
                            }
                        ],
                        "element": "fire",
                        "type": "attack",
                        "select": false
                    },
                    {
                        "id": 102,
                        "cardname": "RAPID FIREBALL",
                        "attack": 4.8,
                        "rarity": "white",
                        "effect": [],
                        "element": "fire",
                        "type": "attack",
                        "select": false
                    }     
                ],
                "ownspells": [
                    {
                        "id": 100,
                        "cardname": "FIREBALL",
                        "attack": 4.5,
                        "rarity": "white",
                        "effect": [],
                        "element": "fire",
                        "type": "attack"
                    },
                    {
                        "id": 101,
                        "cardname": "LAVA POOL",
                        "attack": 3.5,
                        "rarity": "white",
                        "effect": [
                            {
                                "name" : "Burning",
                                "duration": 5
                            }
                        ],
                        "element": "fire",
                        "type": "attack"
                    },
                    {
                        "id": 102,
                        "cardname": "RAPID FIREBALL",
                        "attack": 4.8,
                        "rarity": "white",
                        "effect": [],
                        "element": "fire",
                        "type": "attack"
                    } 
                    
                ],
                "equipeditems":[
                  
                    {
                        "id": 300,
                        "itemName": "name",
                        "strength": 2.5,
                        "vitality": 1.5,
                        "intelligence": 2.5,
                        "agility": 1,
                        "luck": 2,
                        "for": "weapon"
                    }
                    
                    
                ],
                "bag": [
                  
                    {
                        "id": 1000,
                        "name": "Health Potion",
                        "hitpoint": 200,
                        "type": "heal"  
                    }
                    
                ],
                "towerprogress": {
                    "highest": 1
            }}]));
        }
        console.log("go through me 1")
    }, [])
    */

    const userState = useState({
        "id": 1,
        "name": 'Alpha Tester #1',
        "level": 1,
        "exp": 0,
        "hitpoint" : 100,
        "manapoint": 50,
        "defense": 15,
        "strength": 10,
        "vitality": 10,
        "intelligence" : 10,
        "sp": 0,
        "coins": 10,
        "deck": [
            {
                "id": 100,
                "cardname": "FIREBALL",
                "attack": 4.5,
                "effect": [],
                "element": "fire",
                "type": "attack",
                "rarity": "white",
                "select": false
            },
            {
                "id": 101,
                "cardname": "LAVA POOL",
                "attack": 3.5,
                "rarity": "white",
                "effect": [
                    {
                        "name" : "Burning",
                        "duration": 5
                    }
                ],
                "element": "fire",
                "type": "attack",
                "select": false
            },
            {
                "id": 102,
                "cardname": "RAPID FIREBALL",
                "attack": 4.8,
                "rarity": "white",
                "effect": [],
                "element": "fire",
                "type": "attack",
                "select": false
            }     
        ],
        "ownspells": [
            {
                "id": 100,
                "cardname": "FIREBALL",
                "attack": 4.5,
                "rarity": "white",
                "effect": [],
                "element": "fire",
                "type": "attack"
            },
            {
                "id": 101,
                "cardname": "LAVA POOL",
                "attack": 3.5,
                "rarity": "white",
                "effect": [
                    {
                        "name" : "Burning",
                        "duration": 5
                    }
                ],
                "element": "fire",
                "type": "attack"
            },
            {
                "id": 102,
                "cardname": "RAPID FIREBALL",
                "attack": 4.8,
                "rarity": "white",
                "effect": [],
                "element": "fire",
                "type": "attack"
            } 
            
        ],
        "equipeditems":[
            /*
            {
                "id": 300,
                "itemName": "name",
                "strength": 2.5,
                "vitality": 1.5,
                "intelligence": 2.5,
                "agility": 1,
                "luck": 2,
                "for": "weapon"
            }
            */
            
        ],
        "bag": [
            /*
            {
                "id": 1000,
                "name": "Health Potion",
                "hitpoint": 200,
                "type": "heal"  
            }
            */
        ],
        "towerprogress": {
            "highest": 1
        }
    });
    
    let tryToGetLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
    //run it once
    useEffect(() => {
        if(tryToGetLocalStorage == null){
            //console.log("1",tryToGetLocalStorage)
            localStorage.setItem("userInfo", JSON.stringify((userInfo)))
        }else{
            //console.log("2",tryToGetLocalStorage)
            userState[1](tryToGetLocalStorage)
        }
    }, [])

    
    return(
        <Router>
            <UserContext.Provider value={userState}>
                <div className="app" >
                    <Switch>
                        <Route path="/npc">
                            <Npc />
                        </Route>
                        <Route path="/bag">
                            <Bag userInfo={userInfo} />
                        </Route>
                        <Route path="/status">
                            <Status  />
                        </Route>
                        <Route exact path="/zones">
                            <Zones />
                        </Route>
                        <Route path="/zones/:id">
                            <Zonebattle userInfo={userInfo} zones={zones} setUserInfo={setUserInfo} />
                        </Route>
                        <Route path="/tower">
                            <Tower />
                        </Route>
                        <Route exact path="/">
                            <Camp />
                        </Route>
                    </Switch>
                </div>
            </UserContext.Provider>
        </Router>
    )
}

export default App;
