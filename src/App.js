import Layout from "./components/layout/Layout";
import styles from "./App.module.css";
import TopBar from "./components/top-navbar/TopBar";

function App() {
  return (
    <div className={styles.app}>
      <TopBar />
      <Layout></Layout>
    </div>
  );
}

export default App;
