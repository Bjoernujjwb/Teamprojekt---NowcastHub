import { MenuScope } from "./BundeslandFilter";
import { MenuAge } from "./AlterFilter";
import { Anzeige } from "./Anzeige";
import { Unsicherheitsintervall } from "./Unsicherheitsintervall";
import { DatePicker } from "./DatePicker";

export const FilterAufbau = () =>{
    return(
    <div id="menuBand"> 
          <div id="datenstand" className="menuOptionen">
          <t className="einführung">Datenstand</t>
            <div id="inhalt">
              <DatePicker />
            </div>
          </div>

          <div id="filter" className="menuOptionen">
            <t className="einführung">Filter</t>
            <div id="inhalt">
              <MenuScope />
              <MenuAge />
            </div>
          </div>

          <div id="anzeige" className="menuOptionen">
            <t className="einführung">Anzeige</t>
            <div id="inhalt">
              <Anzeige />
            </div>
          </div>

          <div id="unsicherheitsintervall" className="menuOptionen">
            <t className="einführung">Unsicherheitsintervall</t>
            <div id="inhalt">
              <Unsicherheitsintervall />
      </div>
          </div>
        </div>
        );
        }