import React from "react";
import '../CSS/Hintergrund.css';
import {Route, Routes, Link} from 'react-router-dom';


function Hintergrund() {
    return (
    <div>

    <section id="title">
        {/* Überschrift */}
        <div class="title">
          <i class="fa-regular fa-dash line"></i>
            <div class="titel-text">
            <h1>HINTERGRUND</h1>
            </div>
        </div>
    </section>

        {/* Info Texte */}
    <section id="hintergrund">
        <div class="textbereich">

            <div class="Abschnitt1">
                <h3 class="texttitle">Hinweis</h3>
                Nowcasts können weniger verlässlich sein, wenn sich Meldeverzögerungen z.B. aufgrund starken Meldeaufkommens anders verhalten als in früheren Phasen der Pandemie. Außerdem ist zu beachten, dass sich der Anteil der in der Hospitalisierungsinzidenz erfassten Personen, bei denen COVID-19 tatsächlich der primäre Hospitalisieurngsgrund ist über die Zeit ändern kann (z.B. aufgrund der vermutlich milderen Omikron-Variante). Dies schränkt de Vergleichbarkeit über verschiedene Zeiträume hinweg ein.
            </div>
            <br />
            <div class="Beteiligte-Gruppen">
            <h3 class="texttitle"> Beteiligte-Gruppen</h3>
            Diese Plattform wird von Mitgliedern des Lehrstuhls für Ökonometrie und Statistik am Karlsruher Institut für Technologie sowie der Computational Statistics Gruppe am Heidelberger Institut für Theoretische Studien betrieben. Mehrere unabhängige weitere Gruppen aus Wissenschaft und Medien tragen Nowcasts bei (siehe auch Metadata-Files in unserem GitHub Repository):
                <br />
                <br />
            <ul>
                    <li> <a href="https://www.tu-ilmenau.de/stochastik/"> Institut für Mathematik, TU Ilmenau</a></li>
                    <li><a href="https://corona.stat.uni-muenchen.de/">Statistisches Beratungslabor, LMU München</a></li>
                    <li> <a href="https://www.rivm.nl/en"> RIVM (Rijksinstituut voor Volksgezondheid en Milieu), Bilthoven, Niederlande </a></li>
                    <li> <a href="https://www.su.se/english/profiles/fegu7762-1.554768"> Department Mathematik, Universität Stockholm</a></li>
                    <li><a href="https://www.sueddeutsche.de/thema/Coronavirus"> Süddeutsche Zeitung</a></li>
                    <li><a href="https://epiforecasts.io/">London School of Hygiene and Tropical Medicine / epiforecasts</a></li>
            </ul>
                <br />
                    Außerdem zeigen wir die <a href="https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland"> adjustierten Hospitalisierungsinzidenzen </a> des Robert Koch Instituts.
            </div>
            <br />
            <br />

            <div class="GitHub">
                <h3 class="texttitle"> GitHub Repository und Nutzung von Ergebnissen </h3>
                Alle Nowcasts sind unter offenen Lizenzen in einem <a href="https://github.com/KITmetricslab/hospitalization-nowcast-hub"> öffentlichen GitHub Repository </a> verfügbar. Sie können für eine Vielzahl von Zwecken weiterverwendet werden, sofern die Quelle angegeben wird (siehe die entsprechenden Lizenzfiles für Details). Wenn Sie Nowcasts aus dieser Plattform für öffentliche Darstellungen weiterverwenden freuen wir uns über eine kurze Nachricht an das Organisationsteam oder die Autoren des jeweiligen Nowcasts. Derzeit werden Nowcasts aus unserer Plattform z.B. von <a href="https://www.zeit.de/wissen/aktuelle-corona-zahlen-karte-deutschland-landkreise"> Zeit Online</a>, der < a href ="https://www.nzz.ch/visuals/corona-deutschland-alle-zahlen-und-regeln-ld.1656184"> Neuen Zürcher Zeitung </a>, <a href="https://www.ndr.de/nachrichten/info/Corona-Wie-hoch-ist-die-Hospitalisierungsrate-wirklich-,hospitalisierung106.html"> Norddeutschen Rundfunk </a> sowie dem <a href="https://www.swr.de/swraktuell/coronavirus-karte-100.html"> Südwestrundfunk</a> verwendet.
            </div>

            <br />
            <br />

            <div>
                <h3 class="texttitle">Evalutationsstudie</h3>
                Wir planen, die verschiedenen Nowcasting-Verfahren in einer prospektiven Evaluationsstudie systematisch zu vergleichen. Hierfür haben wir ein <a href="https://osf.io/mru75/">öffentliches Studienprotokoll</a> hinterlegt (ähnlich dem <a href="https://osf.io/zkdvb/"> Protokoll </a> zu einer früheren <a href="https://www.nature.com/articles/s41467-021-25207-0"> Studie über Kurzzeitvorhersagen</a> ).
            </div>

            <br />
            <br />

            <div>
                <h3 class="texttitle"> Bundeslandspezifische Erhebungen der Hospitalisierungsrate </h3>
                Einige Bundesländer veröffenltichen vom RKI abweichende Daten zur Hospitalisierungsinzidenz, bei denen die Meldeproblematik teils weniger ausgeprägt ist oder zusätzliche Informationen zur Unterscheidung zwischen Einlieferungen mit oder wegen COVID-19 verfügbar sind (Details zur Erhebung sind in der Regel auf den entsprechenden Seiten verfügbar): <a href="https://data.lageso.de/lageso/corona/archiv/berlin-website-2022-02-03.html#start"> Berlin </a>, <a href="https://www.gesundheit.bremen.de/corona/zahlen/corona-fallzahlen-37649">Bremen </a>, <a href="https://www.lagus.mv-regierung.de/Gesundheit/InfektionsschutzPraevention/Daten-Corona-Pandemie"> Mecklenburg-Vorpommern </a>,<a href="https://www.niedersachsen.de/Coronavirus/aktuelle_lage_in_niedersachsen/niedersachsen-und-corona-aktuelle-leitindikatoren-203487.html"> Niedersachsen </a>, <a href="https://www.giscloud.nrw.de/corona-dashboard-desktop.html">Nordrhein-Westphalen</a>, <a href="https://lua.rlp.de/de/unsere-themen/infektionsschutz/meldedaten-coronavirus/covid-19-wochenberichte/">Rheinland-Pfalz</a>, <a href="https://verbraucherschutz.sachsen-anhalt.de/hygiene/infektionsschutz/infektionskrankheiten/coronavirus/">Sachsen</a>.
            </div>

            <br />
            <br />

            <div>
                <h3 class="texttitle"> Verwandte Projekte und Analysen </h3>
                <ul>
                    <li>Der <a href="https://covid19forecasthub.eu/">europäische</a> , <a href="https://covid19forecasthub.org/">US-amerikanische </a> und <a href="https://kitmetricslab.github.io/forecasthub/">deutsch/polnische </a> COVID-19 Forecast Hub mit Kurzzeitvorhersagen von Fall- und Todeszahlen (eine bis vier Wochen voraus).
                    </li>
                    <li> <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Projekte_RKI/Nowcasting.html">Nowcasts für Fallzahlen und die effektive Reproduktionszahl in Deutschland</a>  des Robert Koch Instituts.</li>
                    <li> <a href="https://corona.stat.uni-muenchen.de/nowcast/">Nowcasts für Fallzahlen und die effektive Reproduktionszahl in Bayern </a> der CODAG Gruppe an der LMU München.</li>
                    <li>Der <a href="https://covid19scenariomodelinghub.org/"> US Scenario Modelling Hub </a> mit längerfristigen Szenario-Projektionen.</li>
            </ul>


            </div>


            <br />

        </div>
    </section>


    <section id="erklärungmethoden">
    
    <section id="title">
        {/* Überschrift */}
        <div class="title">
          <i class="fa-regular fa-dash line"></i>
            <div class="titel-text">
            <h1>METHODEN</h1>
            </div>
        </div>
    </section>

    <div class="Methodenintro">
        Bliblablub Methoden dis das.
    </div>
    <br />
    <br />

{/* button 1  */}
<div class="AuswahlMethoden">
<p>
    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">ILM-prop (TU Ilmenau)</a>
 </p>

  <div class="row row-background">
    <div class="col">
      <div class="collapse" id="Collapse1">
        <div class="card card-body Klapptext">
        Diese Nowcasts verwenden die in der Vergangenheit beobachteten an der 7-Tage-Inzidenz der COVID-19 Fällen anteiligen 7-Tage-Hospitalisierungsinzidenz nach einer, zwei usw. Wochen. Von der heute bekannten 7-Tage-Inzidenz werden dann diese Anteile berechnet und aufsummiert um die finale Anzahl an 7-Tage-Hospitalisierungen vorherzusagen. Die Unsicherheit wird durch Anwendung der Methode auf vergangene Zeitpunkte quantifiziert, wobei eine Log-Normalverteilung (Altersgruppen) beziehungsweise Normalverteilung (Summe über alle Altersgruppen) für die Vorhersagefehler angesetzt wird.
        Die Hauptannahme dieses Verfahrens ist, dass sich der Anteil von Hospitalisierungen an der 7-Tage-Inzidenz und die Verzüge von Meldedatum des Falls bis dieser in den RKI-Daten erscheint nur langsam ändert.
        </div>
      </div>
    </div>
    </div>

   {/* zweiter button */}
    <p>
        <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">KIT-simple_nowcast (Karlsruher Institut für Technologie)</a>
    </p>

      <div class="row row-background">
        <div class="col">
          <div class="collapse" id="Collapse2">
            <div class="card card-body Klapptext">
            Das Nowcasting beruht auf einer einfachen Schätzung der Verteilung der Verzögerungsdauern zwischen Meldedatum und Erscheinen einer Hospitalisierung in den RKI-Daten (basierend auf den letzten 60 Tagen). Aus diesen werden Multiplikationsfaktoren abgeleitet, mit denen die jeweils unvollständigen aktuellsten Beobachtungen nach oben korrigiert werden. Um die Nowcast-Unsicherheit zu beurteilen werden derartige korrigierte Werte auch für vergangene Zeitpunkte (basierend jeweils auf der damals verfügbaren Information) generiert und mit den entsprechenden später gemachten Beobachtungen verglichen. Hierfür wird eine negative Binomialverteilung angenommen, deren Streuungsparameter vom zeitlichen Abstand zwischen Meldedatum und Zeitpunkt des Nowcats abhängt. Die Schätzung der Streuungsparameter erfolgt mittels der Maximum Likelihood-Methode.
Dieses Verfahren ist bewusst einfach gehalten und hat die Funktion eines Referenz-/Baseline-Modells in unserer vergleichenden Evaluationsstudie (siehe unten). Die zentrale Annahme besteht darin, dass die Struktur der Meldeverzüge zeitlich stabil bleibt. Z.B. Wochentagseffekte oder Entwicklungen der Fallzahlen werden nicht berücksichtigt.
            </div>
          </div>
        </div>
        </div>
        {/* 3 button */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">LMU_StaBLab-GAM_nowcast (LMU München)</a>
         </p>

          <div class="row row-background">
            <div class="col">
              <div class="collapse" id="Collapse3">
                <div class="card card-body Klapptext">
                  <blockquote>
Die Nowcasts beruhen auf einem generalisierten additiven Modell und der sequenziellen Multinomialstruktur der zeitlichen Verzögerungen. Das Modell ist eine geringfügig angepasste Version des Verfahrens von <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/bimj.202000143" target="_blank">Schneble et al.&nbsp;(2020)</a> zum Nowcasting von tödlich verlaufenden Infektionen.
</blockquote>
                </div>
              </div>
            </div>
            </div>
        {/* 4 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">RIVM-KEW (RIVM (Rijksinstituut voor Volksgezondheid en Milieu), Bilthoven, Niederlande)</a>
             </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse4">
                    <div class="card card-body Klapptext">
                      <blockquote>
Dieses Modell ist eine vereinfachte Version des Verfahrens von van de Kassteele, Eilers und Wallinga (<a href="https://doi.org/10.1097/ede.0000000000001050" target="_blank">Epidemiology, 2019</a>). Für die berichteten Zählwerte pro Meldedatum und Verzögerung wird eine negative Binomialverteilung angenommen. Die erwarteten Werte werden mittels einer zweidimensionalen P-Spline-Oberfläche und weiteren Kovariablen modelliert. Diese Oberfläche wird für die noch nicht beobachteten Kombinationen von Datums- und Verzögerungswert extrapoliert. Der Nowcast für ein Meldedatum entspricht dann der Summe über die entsprechenden beobachteten und extrapolierten Zählwerte pro Verzögerungsdauer. Vorhersageintervalle werden per Monte-Carlo-Simulation aus der entsprechenden prädiktiven Verteilung generiert. Die vereinfachte Version des Modells enthält keine Interaktionsterme für Kalenderzeit und Verzögerung und keine Unimodalitäts- oder Boundary-Restriktionen. Das Modell wird mittels des R-Pakets <a href="https://cran.r-project.org/web/packages/mgcv/index.html" target="_blank">mgcv</a> angepasst.
</blockquote>
      </div>
                  </div>
                </div>
                </div>
         {/* 5 button */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">RKI-weekly_report (Robert Koch Institut)</a>
                 </p>

                  <div class="row row-background">
                    <div class="col">
                      <div class="collapse" id="Collapse5">
                        <div class="card card-body Klapptext"><blockquote>
Hierbei handelt es sich um Schätzungen, die zunächst jeweils Donnerstags in den <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html" target="_blank">Wochenberichten des Robert Koch Instituts</a> veröffentlicht wurden und mittlerweile täglich im <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/COVID-19-Trends/COVID-19-Trends.html?__blob=publicationFile#/home">COVID-19 Trends Dashboard</a> erscheinen. Diese basieren auf einer modifizierten Variante der <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Projekte_RKI/Nowcasting.html" target="_blank">Nowcastingberechnung zur 7-Tage-Inzidenz</a>.
</blockquote>
                    </div>
                      </div>
                    </div>
                    </div>
        {/*  6 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse6" role="button" aria-expanded="false" aria-controls="multiCollapseExample6">SU-hier_bayes (Universität Stockholm)</a>
         </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse6">
                    <div class="card card-body Klapptext">
                      tba
                    </div>
                  </div>
                </div>
                </div>

        {/* 7 button  */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse7" role="button" aria-expanded="false" aria-controls="multiCollapseExample7">SZ-hosp_nowcast (Süddeutsche Zeitung) </a>
        </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse7">
                <div class="card card-body Klapptext">
                  <blockquote>
Die SZ schätzt die Werte für das Nowcasting der Hospitalisierungsinzidenz auf Basis der Abweichungen zwischen täglich veröffentlichten und nachträglich korrigierten Werten, die durch Nachmeldungen entstehen. Dabei werden die archivierten Datensätze des Robert-Koch-Instituts (<a href="https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland" class="uri">https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland</a>) der vergangenen 60 Tage analysiert. Jeweils für die 25 Tage vor dem letzten Datum im Datensatz wird berechnet, um wie viel Prozent der an späteren Tagen gemeldete korrigierte Wert von der ursprünglich gemeldeten Hospitalisierungsinzidenz abweicht. Für diese abgeleiteten Multiplikationsfaktoren werden Quantile berechnet. Die aktuell veröffentlichte Inzidenz wird mit den berechneten Quantilen multipliziert, um die Hospitalisierungsinzidenz zu schätzen. Abschließend wird die Hospitalisierungsinzidenz über ein Drei-Tage-Fenster geglättet, um unrealistische größere Schwankungen auszugleichen.
</blockquote>
                </div>
            </div>
            </div>
            </div>

        {/* <!-- 8 button--> */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse8" role="button" aria-expanded="false" aria-controls="multiCollapseExample8">
                    Epiforecasts-independent (London School of Hygiene and Tropical Medicine / epiforecasts)
                </a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse8">
                    <div class="card card-body Klapptext">
                      <blockquote>
Ein semiparametrisches Nowcasting-Verfahren für rechszensierte Hospitalisierungen nach Datum des positiven Tests. Hospitalisierungen werden mittels eines Random-Walk auf der log-Skala modelliert. Reporting-Verzögerungen werden anschließend parametrisch mit einer log-Normalverteilung modelliert, wobei der log-Erwartungswert und die log-Standardabweichung einem wöchentlichen Random-Walk mit gemeinsamer Standardabweichung folgen. Wochentagseffekte im Reporting werden mit zufälligen Effekten modelliert, wobei Feiertage wie Sonntage behandelt werden. Nowcasts für Altersgruppen und geographische Einheiten werden jeweils separat erstellt (daher der Name des Modells). Das Modell ist im R-Paket <a href="https://epiforecasts.io/epinowcast" target="_blank">epinowcast</a> implementiert. Der Analyse-Code ist <a href="https://github.com/epiforecasts/eval-germany-sp-nowcasting" target="_blank">hier</a> verfügbar. Anmerkung: In einer zweiten Version des Modells (bisher nicht angezeigt) werden die verschiedenen Zeitreihen gemeinsam modelliert (<a href="https://github.com/KITmetricslab/hospitalization-nowcast-hub/tree/main/data-processed/Epiforecasts-hierarchical" target="_blank">Epiforecasts-hierarchical</a>).
</blockquote>
                    </div>
                </div>
                </div>
                </div>


        {/* <!-- 9 button--> */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse9" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">NowcastHub-MeanEnsemble</a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse9">
                <div class="card card-body Klapptext">
                Dieses Ensemble berechnet sich als der quantilsweise Mittelwert der eingereichten Modelle mit vollständigen Nowcasts (28 bis 0 Tage vor dem aktuellen Datum).
                </div>
            </div>
            </div>
        </div>

            {/*10 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse10" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">NowcastHub-MedianEnsemble</a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse10">
                    <div class="card card-body Klapptext">
                   Dieses Ensemble berechnet sich als der quantilsweise Median der eingereichten Modelle mit vollständigen Nowcasts (28 bis 0 Tage vor dem aktuellen Datum).
                    </div>
                </div>
                </div>
            </div>

</div>

<br />
<br />
<br />
<br />


    </section>


    </div>
    );
}

export default Hintergrund;