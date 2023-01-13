import React from "react";
import '../CSS/Kontakt.css';
import {Route, Routes, Link} from 'react-router-dom';


function Kontakt() {
    return (
    <div>
            
            <section id="title">
      {/* Überschrift */}
       <div class="title">
        <i class="fa-regular fa-dash line"></i>
          <div class="titel-text">
          <h1>KONTAKT</h1>
          </div> 
      </div>
     </section>
    
    

    <section id="explanation">
    <div class="expl">

        Diese Plattform wird betrieben von Mitgliedern des Lehrstuhls für Statistik und Ökonometrie am Karlsruher Institut für Technologie und der Computational Statistics Gruppe am Heidelberger Institut für Theoretische Studien.
        Sie können uns unter forecasthub@econ.kit.edu kontaktieren. Technische Hinweise können Sie auch als Issue in unserem GitHub Repositoryabgeben.

    </div>
     </section>


    </div>
    );
}

export default Kontakt;