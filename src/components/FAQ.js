import React from "react";
import '../CSS/FAQ.css';
import {Route, Routes, Link} from 'react-router-dom';


function FAQ() {
    return (
    <div>
            
        <section id="title">
        {/* Überschrift */}
        <div class="title">
          <i class="fa-regular fa-dash line"></i>
            <div class="titel-text">
            <h1>FAQ</h1>
            </div>
        </div>
    </section>


    <section id="FAQ">


    <div class="FAQintro">
        Bliblablub Methoden dis das.
    </div>
    <br />
    <br />

{/* button 1  */}
<div class="AuswahlFAQ">
<p>
    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
    Was ist das Ziel dieser Plattform? </a>
 </p>

  <div class="row row-background">
    <div class="col">
      <div class="collapse" id="Collapse1">
        <div class="card card-body Klapptext">
        Das Hauptziel dieses Projekts besteht darin, die Werte der 7-Tages-Hospitalisierungsinzidenz für Deutschland und die Bundesländer zuverlässig zu schätzen und aus vorläufigen Daten aktuelle Trends herauszuarbeiten. Die häufig angegebenen jeweils neuesten Werte der rohen Hospitalisierungsinzidenz unterschätzen die entsprechende wahre Zahl der Hospitalisierungen (siehe dazu die Antworten zu den weiteren Fragen). Nowcast-Korrekturen dieser Zahlen erlauben eine bessere Einschätzung der derzeitigen epidemischen Lage.
        Gleichzeitig haben wir ein wissenschaftliches Interesse, verschiedene Nowcasting-Verfahren miteinander zu vergleichen und zu untersuchen, ob die Kombination verschiedener Nowcasts zu verlässlicheren Ergebnissen führt. 
        </div>
      </div>
    </div>
    </div>

   {/* zweiter button */}
    <p>
        <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">
        Was ist die 7-Tage-Hospitalisierungsinzidenz? </a>
    </p>

      <div class="row row-background">
        <div class="col">
          <div class="collapse" id="Collapse2">
            <div class="card card-body Klapptext">
            Wir richten uns hier nach der Definition des Robert-Koch-Instituts. Die heutige 7-Tage-Hospitalisierungsinzidenz ist die Anzahl an hospitalisierten COVID-19 Fällen (absolut oder pro 100.000 Einwohner) deren Meldedatum, also das Datum an dem das lokale Gesundheitsamt die zugehörige COVID-19 Infektion elektronisch erfasst hat, in den 7 vorangegangenen Tagen liegt. Es handelt sich also nicht um die Zahl der neuen Hospitalisierungen in den letzten 7 Tagen. Auch berücksichtigt die 7-Tage-Hospitalisierungsinzidenz nicht, ob der Hospitalisierungsgrund COVID-19 oder ein anderer ist (siehe nächste Frage).
            Weitere Informationen sowie die aktuellen und vergangenen 7-Tage-Hospitalisierungsinzidenzen finden sich auf der GitHub Seite des Robert Koch-Instituts.
            Wir weisen in diesem Zusammenhang darauf hin, dass manche Bundesländer auch eigene Hospitalisiserungsinzidenzen veröffentlichen, deren Definitionen von der des RKI abweichen (z.B. zeitliche Aggregierung nach Hospitalisierungsdatum statt Meldedatum der Infektion; siehe Nachrichtenartikel des NDR). Wir betrachten ausschließlich den Indikator des RKI. 
            </div>
          </div>
        </div>
        </div>
        {/* 3 button */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">
            Wird unterschieden zwischen Hospitalisierungen, bei denen COVID-19 der Hauptgrund der Hospitalisierung ist und solchen, bei denen dies nicht der Fall ist? 
            </a>
         </p>

          <div class="row row-background">
            <div class="col">
              <div class="collapse" id="Collapse3">
                <div class="card card-body Klapptext">
                <blockquote>
                Die Hospitalisierungsinzidenz wie vom RKI definiert unterscheidet nicht nach dem Hauptgrund der Hospitalisierung (“mit oder wegen COVID”). Unsere Analysen bauen auf diesem Indikator auf und betreffen einzig die Problematik der Verzüge und der resultierenden Unvollständigkeit der letzten Inzidenzwerte (siehe nächste Frage). Die Schwierigkeit, dass nur ein Teil der erfassten Hospitalisierungen tatsächlich aufgrund einer COVID-Erkrankung erfolgen verbleibt also. Nach unserem Kenntnisstand stehen derzeit auf Bundesebene keine belastbaren Daten zu dieser Frage zur Verfügung. Mit der mutmaßlich im Mittel milder verlaufenden Omikron-Variante ist es möglich, dass sich der Anteil an Hospitalisierungen, bei denen COVID nur eine Begleiterscheinung ist, erhöht. Dies kann die Vergleichbarkeit der Inzidenzwerte über die verschiedenen Phasen der Pandemie hinweg einschränken und muss bei der Interpretation berücksichtigt werden. Allerdings ist auch zu beachten, dass selbst eine Hospitalisierung, bei der COVID nicht der Einlieferungsgrund ist für die Krankenhäuser Zusatzaufwand bedeutet, etwa aufgrund von Isolationsmaßnahmen.
                Eine umfassendere Darstellung dieser Thematik findet sich für die Bundesländer Rheinland-Pfalz und Baden-Württemberg in Nachrichtenartikeln des SWR. Demzufolge entfiel Ende Januar 2022 in Rheinland-Pfalz nur etwa ein Drittel der Hospitalisierungsinzidenz auf Fälle mit COVID-19 als primärem Hospitalisierungsgrund, während es in Baden-Württemberg fast zwei Drittel waren. Analysen für die Länder Bayern und Saarland finden sich im CODAG-Bericht Nr. 26 der LMU München.     
                </blockquote>
                </div>
              </div>
            </div>
            </div>
        {/* 4 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">
                Warum sind die berichteten Werte der letzten Tage unzuverlässig und warum ist das ein Problem? </a>
             </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse4">
                    <div class="card card-body Klapptext">
                    <blockquote>
                    Zwischen dem Meldedatum und dem Datum, an welchem ein hospitalisierter Fall vom Robert Koch-Institut in die 7-Tage-Hospitalisierungsinzidenz aufgenommen wird, können mehrere Tage oder sogar Wochen vergehen. Hier spielen mehrere Faktoren eine Rolle. Erstens kann es sein, dass eine Person am Meldedatum nicht in einem Zustand ist, der eine Hospitalisierung erfordert, jedoch später hospitalisiert werden muss. In diesem Fall wird rückwirkend die Zahl der Hospitalisierungen für das entsprechende Meldedatum um eins erhöht. Zweitens kann es Meldeverzüge zwischen dem tatsächlichen Hospitalisierungsdatum und der Erfassung der Hospitalisierungen in den Daten des RKI geben.
                    Deswegen werden die täglichen nach Meldedatum ausgewiesenen Hospitalisierungen in der Regel nachträglich nach oben korrigiert. Die meisten Nachtragungen erfolgen innerhalb von wenigen Tagen, sodass vor allem die Werte der jeweils letzten Tage betroffen sind. Diese unterschätzen die tatsächlichen Hospitalisierungen oft deutlich (siehe z.B. diesen Nachrichtenartikel des NDR oder CODAG-Bericht Nr. 21 der LMU München). Das macht es sehr schwierig, aktuelle Tendenzen aus der rohen 7-Tage-Hospitalisierungsinzidenz abzulesen. Insbesondere kann der Eindruck einer fallenden Hospitalisierungsinzidenz entstehen, selbst wenn diese in Wirklichkeit steigt. 
                    </blockquote>
                    </div>
                  </div>
                </div>
                </div>
         {/* 5 button */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">
                    Was bedeutet das für die Schwellenwerte, die für die 7-Tage-Hospitalisierungsinzidenz festgelegt wurden? </a>
                 </p>

                  <div class="row row-background">
                    <div class="col">
                    <div class="collapse" id="Collapse5">
                    <div class="card card-body Klapptext">
                    <blockquote>
                    Die im September 2021 vom RKI vorgeschlagenen Schwellenwerte (Abbildung 1) von 1.5 und 5 beziehen sich ausdrücklich auf die vorläufigen tagesaktuell berichteten Werte (siehe Punkt “eingefrorene Zeitreihe” unten). Sie beziehen die Unvollständigkeit der Daten also mit ein. Der Regierungsbeschluss vom 18.11.2021 (Punkt 9) spezifiziert nicht explizit, ob sich die Schwellenwerte 3, 6 und 9 auf vorläufige tagesaktuelle oder auf finale Werte beziehen. Medienberichten zufolge werden Schwellenwerte allerdings ebenfalls auf die vorläufigen tageaktuellen Werte angewendet. 
                    </blockquote>
                    </div>
                    </div>
                    </div>
                    </div>
        {/*  6 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse6" role="button" aria-expanded="false" aria-controls="multiCollapseExample6">
                Was bedeutet Nowcasting und wie sollten die Nowcasts interpretiert werden? 
                </a>
            </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse6">
                    <div class="card card-body Klapptext">
                    Nowcasting bezeichnet ein statistisches Korrekturverfahren, das ausgehend von vorläufigen Messungen schätzt, welchen Wert die selben Größen in einer späteren finalen Version eines Datensatzes annehmen werden. In unserem Anwendunsfall schätzen wir beruhend auf den Hospitalisierungen, die bis zum heutigen Tag für ein bestimmtes Meldedatum (siehe oben) bekannt geworden sind, wie hoch die Zahl der Hospitalisierungen für dieses Datum nach Vorliegen aller Meldungen insgesamt liegen wird. Dabei werden Daten aus der Vergangenheit mit vollständiger Information genutzt.
                    <br/>
                    <br/>
                    Klassischerweise bezieht sich Nowcasting auf Ereignisse, die bereits eingetreten sind, aber noch nicht vollständig gemessen oder erfasst sind. Bei COVID-19-Fallzahlen schätzt man mittels Nowcasting-Verfahren beispielsweise, wie viele Infektionen insgesamt an einem bestimmten Tag erfasst worden sind bevor diese Daten vollständig an zentraler Stelle zusammengetragen sind. Im Fall der Hospitalisierungen trifft dies nicht ganz zu, denn es ist möglich, dass Hospitalisierungen, die einem bestimmten (Fall-)Meldedatum zuzuordnen sind zum Zeitpunkt des Nowcasts noch gar nicht passiert sind. Wir verwenden dennoch den Begriff des Nowcasting, der sich auch für diese Art von Analyse eingebürgert hat.
                    Die hier präsentierten Nowcasts sollten als Wahrscheinlichkeitsaussagen interpretiert werden. Eine exakte Bestimmung der tatsächlichen Hospitalisierungszahl ist nicht möglich und Nowcasts geben lediglich einen Bereich wahrscheinlicher Werte an (siehe unten). 
                    </div>
                  </div>
                </div>
                </div>

        {/* 7 button  */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse7" role="button" aria-expanded="false" aria-controls="multiCollapseExample7">
            Wieso werden mehrere verschiedene Nowcasts gezeigt? Was ist ein Ensemble-Nowcast? 
            </a>
        </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse7">
                <div class="card card-body Klapptext">
                    <blockquote>
                    Bei der Erstellung von Nowcasts wird stets eine Reihe von Annahmen getroffen. Zudem können unterschiedliche Modelle unterschiedliche zusätzliche Datenquellen mit einbeziehen. Daher können sich die Ergebnisse verschiedener Verfahren unterscheiden, und es ist es sinnvoll, mehrere Nowcasts zu vergleichen und die Bandbreite der Vorhersagen zu berücksichtigen. Zudem kann es vorteilhaft sein, verschiedene Nowcasts in einem sogenannten Ensemble-Nowcast zusammenzuführen, um eine robustere Schätzung zu erhalten. Dies hat sich beispielsweise in der Wettervorhersage, aber auch in epidemiologischen Anwendungen bewährt.
                    Hinweis: Die im Ensemble zusammengefassten Modelle sind unter Umständen nicht jeden Tag die selben (z.B. werden am Wochenende manche Modelle aktualisiert, andere nicht). Dadurch kann es sein, dass das Ensemble an aufeinanderfolgenden Tagen etwas unterschiedlich aussieht. 
                    </blockquote>
                </div>
            </div>
            </div>
            </div>

        {/* <!-- 8 button--> */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse8" role="button" aria-expanded="false" aria-controls="multiCollapseExample8">
                Warum ist es wichtig, Unsicherheitsintervalle mit anzugeben? 
                </a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse8">
                    <div class="card card-body Klapptext">
                        <blockquote>
                        Kein Modell ist perfekt und die genaue Zahl der Hospitalisierungen zu einem bestimmten Meldedatum kann nicht exakt vorhergesagt werden. Die Nowcasts, die hier dargestellt werden, quantifizieren deshalb explizit ihre Unsicherheit, d.h. geben mit an, als wie verlässlich sie ihre eigene Schätzung ansehen. Dies geschieht mittels Intervallen, die den wahren Wert mit einer bestimmten Wahrscheinlichkeit (50% oder 95%) enthalten sollen. 
                        </blockquote>
                    </div>
                </div>
                </div>
                </div>


        {/* <!-- 9 button--> */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse9" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                    Wie verlässlich sind die Nowcasts? </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse9">
                <div class="card card-body Klapptext">
                Die Evaluation der verschiedenen Verfahren ist ein wichtiges Ziel dieses Projekts (siehe unten). Jedoch liegt es in der Natur des Problems, dass erst mit größerem zeitlichem Abstand systematisch ausgewertet werden kann, wie zuverlässig die Nowcasts waren. Das Visualisierungs-Tool erlaubt es, mittels der Datumsauswahl zu früheren Datenständen und den damals erstellten Nowcasts zurückzukehren und so einen Eindruck von der Qualität der Nowcasts zu gewinnen. Z.B. der Nowcast für Sachsen vom 18. November liegt deutlich unter den in der Folge beobachteten Werten, was vermutlich der Überlastung des Meldesystems geschuldet ist (siehe nächste Frage). 
                </div>
            </div>
            </div>
        </div>

            {/*10 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse10" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">
                Was sind mögliche Probleme und Schwächen? Wann muss man bei der Interpretation besonders vorsichtig sein? 
                </a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse10">
                    <div class="card card-body Klapptext">
                    Die zentrale Annahme, auf der die meisten Nowcasts beruhen ist, dass die Verzögerungen zwischen Meldedatum und Erscheinen einer Hospitalisierung in den Daten des RKI auch in Zukunft ähnlichen Mustern folgen werden wie in der Vergangenheit. Ist dies nicht mehr der Fall, etwa aufgrund gewichtiger Änderungen der Teststrategie oder einer Überlastung der Gesundheitsämter, so kann die Qualität der Nowcasts beeinträchtigt werden. Werden etwa die mittleren Verzögerungen größer, so können die Nowcasts dazu neigen, die wahren Werte zu unterschätzen. 
                    </div>
                </div>
                </div>
            </div>

            
        {/* <!-- 11 button--> */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse11" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                    Wie oft werden die Nowcasts aktualisiert? </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse11">
                <div class="card card-body Klapptext">
                Die Nowcasts werden täglich gegen 13:00 aktualisiert. Solange ein Team seinen Nowcast noch nicht aktualisiert hat wird der Nowcast des Vortages angezeigt (oder der neueste Nowcast aus den letzten sieben Tagen).
                Gelegentlich kann es zu Verzögerungen kommen, z.B. wenn die Ausgangsdaten des RKI später als gewöhnlich online erscheinen. Wir versuchen, auch in diesem Fall zeitnah aktualisierte Nowcasts zu erstellen, jedoch benötigen manche der Modelle eine gewisse Rechenzeit. 
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 12 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse12" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                 Wieso gibt es eine Schaltfläche, um die Nowcasts des heutigen und gestrigen Tages auszublenden? </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse12">
                <div class="card card-body Klapptext">
                Für den heutigen und gestrigen Tag werden besonders viele Fälle nachgemeldet. Dadurch sind auch die Nowcasts für diese Tage weniger zuverlässig als für Tage, die weiter in der Vergangenheit liegen. Zu Beginn unseres Projektes zeigten wir die Nowcasts für den heutigen und gestrigen Tag aus diesem Grund standardmäßig nicht an. Mittlerweile konnten wir feststellen, dass die Nowcasts für diese beiden Tage ähnlich zuverlässig wie für die anderen Tage funktionieren, wenn man die breiteren Unsicherheitsintervalle mit einbezieht. Wir haben deshalb entschieden, sie nun standardmäßig mit einzublenden. 
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 13 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse13" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                Was zeigt die “Zeitreihe nach Erscheinen in RKI-Daten”? </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse13">
                <div class="card card-body Klapptext">
                Eine Alternative zum Nowcast der Hospitalisierungsinzidenz nach Meldedatum (also dem Datum, an dem die Infektion im lokale Gesundheitsamt elektronisch erfasst wurde, siehe oben) ist es, Hospitalisierungszahlen nach dem Zeitpunkt ihres Auftauchens im Datensatz des RKI zu aggregieren. Diese Zahlen ändern sich in den darauffolgenden Tagen nicht mehr, sodass Trends einfacher zu interpretieren sind. Die resultierende Kurve ist gegenüber der 7-Tages-Inzidenz nach Meldedatum in der Regel nach rechts verschoben, da es oft eine Verzögerung zwischen dem Meldedatum und dem Auftauchen einer Hospitalisierung in den Daten gibt. 
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 14 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse14" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                Was zeigt die “Zeitreihe eingefrorener Werte”? </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse14">
                <div class="card card-body Klapptext">
                Eine weitere Alternative zum Nowcasting besteht darin, für jedes Meldedatum die 7-Tage-Hospitalisierungsinzidenz gemäß des Datenstandes am jeweiligen Datum zu zeigen. Hierdurch sind alle gezeigten Werte ähnlich unvollständig und somit besser über die Zeit hinweg vergleichbar. Ein Nachteil dieser Herangehensweise ist, dass nur ein Teil der bereits verfügbaren Information genutzt wird. 
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 15 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse15" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                Was ist mit “nachträglich erstellten Nowcasts” gemeint? </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse15">
                <div class="card card-body Klapptext">
                Das Hauptziel dieses Projekts ist es, Nowcasts in Echtzeit zur Verfügung zu stellen um eine verbesserte Lageeinschätzung zu ermöglichen. Um verschiedene Modellierungsansätze besser wissenschaftlich vergleichen zu können, sammeln wir aber auch Nowcasts, die rückwirkend erzeugt wurden. So können wir evaluieren, wie diese in der Vergangenheit abgeschnitten hätten. Wichtig für einen fairen Vergleich ist hierbei, dass auch bei den nachträglich erstellten Nowcasts nur Daten in das Modell einfließen, die zum jeweiligen Nowcast-Zeitpunkt bereits verfügbar waren. 
                </div>
            </div>
            </div>
        </div>

    
    </div>
    </section>



    </div>
    );
}

export default FAQ;