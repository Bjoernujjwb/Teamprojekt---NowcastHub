import React from "react";
import '../CSS/Footer.css';

import {Route, Routes, Link} from 'react-router-dom';



function Footer() {

return (
        

<section id="footer">
    <footer>
        <div class="row rowfooter">
            <div class="col-lg-8 col-md-8 col-sm-12">
                <h1 class="footer-h1">NOWCAST</h1>
                <div>
                <p>Statistische Methoden und Ökonometrie (KIT) </p>
                <p>Computational Statistics Gruppe (HITS) </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 ">
                <table>
                <tr><p><Link to="/FAQ"><p>FAQ</p></Link></p></tr>
                <tr><Link to="/kontakt"><p>Kontakt</p></Link></tr>
                <tr><p><a href="erklärung.html">Datenschutz | Impressum</a></p></tr>
                <tr>
                    <p>Copyright ⓒ {new Date().getFullYear()}</p>
                </tr>
            
                </table>
            </div>
        </div>  
    </footer>
</section>
  

    );
}
    
export default Footer;