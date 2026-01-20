import "./App.css";
import Translations from "./components/Translations";
import FeatureDefinition from "./components/FeatureDefinition";
import UserStory from "./components/UserStory";
import Scenarios from "./components/Scenarios";
import RubiksCube from "./components/RubiksCube";
import HappyPath from "./components/HappyPath";
import ProfilePic from "./components/ProfilePic";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gherkin un funkcionālo iezīmju ceļvedis</h1>
        <p className="subtitle">Rokasgrāmata Gherkin terminoloģijai un funkcionālo iezīmju veidošanai</p>
      </header>

      <main className="App-main">
        <section className="section">
          <h2 className="section-title">Gherkin terminoloģija</h2>
          <div className="card">
            <Translations />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Funkcionālo iezīmju veidošana</h2>
          <div className="card">
            <FeatureDefinition />
          </div>
          <div className="card">
            <UserStory />
          </div>
          <div className="card">
            <Scenarios />
          </div>
          <div className="card">
            <RubiksCube />
          </div>
          <div className="card">
            <HappyPath />
          </div>
          <div className="card">
            <ProfilePic />
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2026 - Leona super duper react darbs</p>
      </footer>
    </div>
  );
}

export default App;
