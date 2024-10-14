import React from "react";
import { Link } from "react-router-dom";
import './CardsGuid.css';
import Button from "../UI/Button";
const INFO =[
    {
        text:'Alle Toren'
    },
    {
        text:'Ausländische Touren'
    },
    {
        text:'Inlandstouren'
    },
    {
        text:'eintägige Tour'
    },
    {
        text:'mehrtägige Tour'
    },
    {
        text:'Naturtour'
    },
    {
        text:'Abenteuertour'
    }
]
function CardsGuid(){
    return(
        <>
        <div className="container">
            <div className="tour__tabs">
                <div className="tour__wrapper">
                    <ul className="nav-tabs">
                        {
                        INFO.map((item,index)=>
                            <li key={index}>
                            <Link to="/" className="anchor">
                            <h5>{item.text}</h5>
                            </Link>
                            </li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="tour__tabs">
            <div className="tab-content">
                <div className="tab-pane">
                    <header className="tab-header">
                        <div className="tab-text">
                            Tour
                        </div>
                        <div className="tab-sort-filter tab-text">
                        Sortiert nach
                        <span className="selectTours">
                            <select className="tab-sort-input">
                                <option value="neueste">Neueste</option>
                                <option value="günstigsten">Günstigsten</option>
                                <option value="meistenbesucht">meisten besucht</option>
                            </select>
                        </span>
                        </div>
                    </header>
                    <div className="tabs-content">
                        <ul>
                            <li>
                                <Link className="anchor">
                                    <span>Düsseldorf-Tour 2 Tage und 3 Nächte</span>
                                    <p>Ab 150 Euro</p>
                                    <p>Vom 2. bis 4. Oktober</p>
                                    <p>Unternehmen für Urlaubsreisen</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="anchor">
                                    <span>München-Tour 2 Tage und 3 Nächte</span>
                                    <p>Ab 180 Euro</p>
                                    <p>Vom 6. bis 8. Oktober</p>
                                    <p>Unternehmen für Urlaubsreisen</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="more-tour-button">
                            <Button buttonStyle="btn--tour" buttonSize="btn--large">mehr Tour</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardsGuid;