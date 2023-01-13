import React from "react";
import '../CSS/Fomos-exp.css';
import {Route, Routes, Link} from 'react-router-dom';


function Fomosexp() {
    
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
                    <h1>NOWCAST EXPERT</h1><h2> Hospitalisierungsinzidenz in Deutschland (COVID-19)</h2> 
                </div> 
            </div>
       

        {/* Expert Mode Button */}
                <Link style={navStyle} to="/fomos">
                <div class="button rounded expbutton-expon expbutton-expon-over" >
                    <p class="text-expon">Expertenmodus an</p>
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
                    <span class="hovertext" data-hover="Informationstext für Button2">
                    <div class="button rounded infobutton"> 
                        <p class="text-fix">7-Tage-Fallzahlen</p>
                        <p class="text-var">xxx</p>
                    </div> 
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover="Informationstext für Button3">
                    <div class="button rounded infobutton"> 
                        <p class="text-fix">Neue Fallzahlen</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover="Informationstext für Button4 bla bla bla bla hdg hdga auhf sjjhui hjdfjh ">
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
                Es gibt unterschiedliche Nowcasting-Verfahren. Diese werden in dem sogenannten Ensemble-Nowcast zu einer Prognose kombiniert. Gleichzeitig haben wir ein wissenschaftliches Interesse, die verschiedenen Nowcasting-Verfahren miteinander zu vergleichen.
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
                <span class="hovertext hovertext-method" data-hover="Informationstext für Methoden">
                <p>
                <button class="btn btn-light button-method-exp"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <i class="fa-solid fa-caret-down"></i> Methoden einblenden</button>
                </p>
                </span>
                <div>
                <div class="collapse collapse-horizontal collapse-method" id="collapseWidthExample">
                    <div class="card card-body input-table card-body-method" >
                    <table>
                        <tr><button type="button" class="btn btn-outline-dark">Datenstand x </button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">Datenstand x</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">Epiforecasts-independent</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">ILM-prop</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">KIT-simple_nowcast</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">LMU_StaBLab-GAM_nowcast</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">NowcastHub-MeanEnsemble</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">NowcastHub-MedianEnsemble</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">RIVM-KEW</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">RKI-weekly-report</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">SU-hier_bayes</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">SZ-hosp_nowcast</button></tr>
                        </table>
                    </div>
                </div>
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

export default Fomosexp;