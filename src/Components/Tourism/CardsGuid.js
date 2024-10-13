import React from "react";
import CardItem from "./CardItem";
import './CardsGuid.css';

function CardsGuid(){
    return(
        <div className="cards">
            <h1>
            Der beste Reiseführer für Reisen nach Deutschland, Reisen um die Welt, den Kauf von Flugtickets, die Beantragung eines Visums, die Buchung von Hotels, Übernachtungsmöglichkeiten und Reisen
            </h1>
            <p>Ein umfassendes Touren- und Reiseportal</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="card__item">
                        <CardItem
                        src="image/compare.png"
                        title="Information"
                        text="Vorstellen die Sehenswürdigkeiten Deutschland und der Welt"
                        />
                        <CardItem
                        src="image/compare.png"
                        title="Erweiterte Suche"
                        text="Durchsuchen Sie alle Ihre Reiseziele"
                        />
                        <CardItem
                        src="image/compare.png"
                        title="Umfassender Reise- und Unterhaltungsführer"
                        text="Reiseführer zu Städten in Deutschland und der Welt"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsGuid;