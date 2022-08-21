import Layout from "./components/layout/Layout";
import styles from "./App.module.css";
import TopBar from "./components/top-navbar/TopBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <TopBar />
      <Layout></Layout>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
