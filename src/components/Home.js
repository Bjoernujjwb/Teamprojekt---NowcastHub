import React from "react";
import '../App.css';
import '../CSS/Home.css';
import {Route, Routes, Link} from 'react-router-dom';
import covidlogo from '../images/covid.jpeg';
import KITlogo from '../images/KITlogo.jpeg';

/* Inhalt von der Fomos Main page */

function Home() {

  return (

    /* Einleitungstext */
    <div>
    <section id="text">
            <div class="text-intro">
                <p>Das Hauptziel dieses Projekts besteht darin, verschiedene Inzidenz Werte für Deutschland und die Bundesländer zuverlässig zu schätzen und aus vorläufigen Daten mithilfe statistischen Korrekturverfahren aktuelle Trends herauszuarbeiten. Nowcast-Korrekturen dieser Zahlen erlauben eine bessere Einschätzung der tatsächlichen Lage.  </p>
                <p>Gleichzeitig haben wir ein wissenschaftliches Interesse, verschiedene Nowcasting-Verfahren miteinander zu vergleichen und zu untersuchen, ob die Kombination verschiedener Nowcasts zu verlässlicheren Ergebnissen führt.</p>
            </div>
    </section>
    
    
    {/* Projekte */}
    <section id="projects"> 
        { /* erste Reihe  */ }
      <div class="card-group">
          <div class="card rounded project-box">
            <img src={covidlogo}  class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body card-project">
              <h5 class="card-title">Forecasting Corona</h5>
              <p class="card-text">Kurzerkärung Forecasting 1</p>
              <Link to="/fomos">
                <a href="index.html" class="btn btn-outline-secondary forecastingbutton">Zum Forecasting</a>
              </Link>
            </div>
          </div>

          <div class="card rounded project-box">
            <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body">
              <h5 class="card-title">Forecasting Energie</h5>
              <p class="card-text">Kurzerkärung Forecasting 2</p>
              <a href="#" class="btn btn-outline-secondary forecastingbutton">Forecasting</a>
            </div>
          </div>

          <div class="card rounded project-box">
            <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body">
              <h5 class="card-title">Forecasting 3</h5>
              <p class="card-text">Kurzerkärung Forecasting 3</p>
              <a href="#" class="btn btn-outline-secondary forecastingbutton">Forecasting</a>
            </div>
          </div>
        </div>

        {/*zweite Reihe*/ }
      <div class="card-group">
        <div class="card rounded project-box">
          <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
          <div class="card-body">
            <h5 class="card-title">Forecasting 4</h5>
            <p class="card-text">Kurzerkärung Forecasting 4</p>
            <a href="#" class="btn btn-outline-secondary forecastingbutton">Forecasting</a>
          </div>
        </div>

        <div class="card rounded project-box" href="https://getbootstrap.com/docs/5.2/components/card/">
          <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
          <div class="card-body">
            <h5 class="card-title">Forecasting 5</h5>
            <p class="card-text">Kurzerkärung Forecasting 5</p>
            <a href="#" class="btn btn-outline-secondary forecastingbutton">Forecasting</a>
          </div>
        </div>

        <div class="card rounded project-box">
          <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
          <div class="card-body">
            <h5 class="card-title">Forecasting 6</h5>
            <p class="card-text">Kurzerkärung Forecasting 6</p>
            <a href="#" class="btn btn-outline-secondary forecastingbutton">Forecasting</a>
          </div>
        </div>
      </div>
    </section>







    </div>
  );
}

export default Home;