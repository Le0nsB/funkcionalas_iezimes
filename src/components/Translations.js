import TranslationTable from "./TranslationTable";

const translations = [
  { en: "Feature", lv: "Funkcija, Funkcionālā iezīme" },
  { en: "Background", lv: "Konteksts" },
  { en: "Rule", lv: "Noteikums, Nosacījums" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
  { en: "Examples", lv: "Piemēri" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "But", lv: "Bet" },
  { en: "Or", lv: "Vai" }
];


function Translations() {
  return <TranslationTable data={translations} />;
}

export default Translations;
