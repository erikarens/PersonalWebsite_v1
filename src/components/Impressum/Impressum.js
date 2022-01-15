import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./ImpressumStyles";

const Impressum = () => (
   <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            Impressum
         </SectionTitle>
         <SectionText>
            Inhaber: Erik Arens
            <br />
            <br />
            Johannesstraße, 29 A<br />
            57368 Lennestadt
            <br />
            Deutschland
            <br />
            <br />
            Telefon: 0151 12463317
            <br />
            Mail: erikarens@netzhero.de
            <br />
            Verantwortlich gemäß § 55 RStV: Erik Arens
            <br />
            Johannesstraße 29 A<br />
            57368 Lennestadt
            <br />
            <br />
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. Wir sind
            bereit, an einem außergerichtlichen Schlichtungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Zuständig ist die Allgemeine Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V.,
            Straßburger Straße 8, 77694 Kehl am Rhein, <a href="www.verbraucher-schlichter.de">www.verbraucher-schlichter.de</a>.
         </SectionText>
      </LeftSection>
   </Section>
);

export default Impressum;
