import TranslationTable from "./TranslationTable";

const translations = [
  { en: "Feature", lv: "Funkcionalitāte" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
];

function Translations() {
  return <TranslationTable data={translations} />;
}

export default Translations;
