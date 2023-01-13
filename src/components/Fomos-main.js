import React from "react";
import '../CSS/Fomos-main.css';
import {Route, Routes, Link} from 'react-router-dom';


function Fomosmain() {

    const navStyle={
        textDecoration: 'none',
    };


    return (
        <div>
        <section id="title">
        
        {/* Überschrift */}
            <div class="title">
            <i class="fa-regular fa-dash line"></i>
                <div class="titel-text-main">
                    <h1>NOWCAST</h1><h2> Hospitalisierungsinzidenz in Deutschland (COVID-19)</h2> 
                </div> 
            </div>
       

        {/* Expert Mode Button */}
                <Link style={navStyle} to="/fomosexpert">
                <div class="button rounded expbutton-expoff" >
                    <p class="text-expoff">Expertenmodus aus</p>
                </div>
                </Link>
                

        </section>

        <section id="entrance">
            {/* Buttons */}
            <div class="row rowbuttons">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <span class="hovertext" data-hover="Anzahl der hospitalisierten COVID-19 Fällen pro 100.000 Einwohner deren Meldedatum in den letzten 7 Tagen liegt.">
                    <div class="button rounded infobutton" >
                        <p class="text-fix">7-Tage-Hospitalisierungsinzidenz</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <span class="hovertext" data-hover="Anzahl der gemeldeten neuen Fälle in den letzten 7 Tagen.">
                    <div class="button rounded infobutton"> 
                        <p class="text-fix">7-Tage-Fallzahlen</p>
                        <p class="text-var">xxx</p>
                    </div> 
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover="Anzahl der gemeldeten neuen Fälle in den letzten 24 Stunden. ">
                    <div class="button rounded infobutton"> 
                        <p class="text-fix">Neue Fallzahlen</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover="Gibt die Tendenz des Graphen der letzten 7 Tage an.">
                    <div class="button rounded infobutton"> 
                    <table class="button-table">
                        <tr>
                        <td class="text-fix breit">Letzte Tendenz des Graphen</td>
                        <td class="ext-var">xxx</td>
                        </tr>
                    </table>
                    </div>
                    </span>
                </div>  
            </div>
            


            {/* Text */}
            <section id="text">
            <div class="text-intro">
                <p>
                Die 7-Tages-Hospitalisierungsinzidenz ist einer der Leitindikatoren für die COVID-19 Pandemie in Deutschland. Diese Plattform vereint Nowcasts der 7-Tages-Hospitalisierungsinzidenz basierend auf verschiedenen statistischen Korrekturverfahren, mit dem Ziel einer verlässlichen Einschätzung der aktuellen Trends. Dadurch ist es möglich, eine bessere Einschätzung der derzeitigen epidemischen Lage zu bekommen.
                </p>
                <p>
                Aufgrund von Verzögerungen sind die für die letzten Tage veröffentlichten rohen Inzidenzwerte stets zu niedrig. Nowcasts helfen, diese Werte zu korrigieren. Sie stellen eine Vorhersage dafür dar, um wie viel die Hospitalisierungsinzidenz noch nach oben korrigiert werden wird. Wir zeigen die Nowcasts gemeinsam mit Unsicherheitsintervallen, die den späteren korrigierten Wert mit einer gegebenen Wahrscheinlichkeit enthalten sollen (95%).
                </p>
                <p>
                Es gibt unterschiedliche Nowcasting-Verfahren. Diese werden in dem sogenannten Ensemble-Nowcast zu einer Prognose kombiniert.  
                </p>
            </div>
            </section>
            </section>

        {/* Chart overall */}
        {/* Methode  */}

        <section id="chart" >
        {/* Chart to be inserted*/}

        <div class="row row-chart">
        <div class="col-lg-6 col-md-6 col-sm-12 date" >
            
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 method">
                <span class="hovertext hovertext-method" data-hover="Kombination unterschiedliche Nowcasting-Verfahren zu einer Prognose">
                <p>
                <button class="btn btn-light button-method"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Ensemble-Nowcast
                </button>
                </p>
                </span>
                <div>
                </div> 
        </div>
        </div>


        </section>

        <section id="text2">
            <div class="text-intro">
                <p>
                Hinweis: Unregelmäßigkeiten oder Überlastungen im Meldeprozess können die Zuverlässigkeit der Nowcasts beeinträchtigen.
                </p>
                
            </div>
            </section>

        

        </div>
       
            );
        }

export default Fomosmain;
