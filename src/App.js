import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Recommended Videos */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
