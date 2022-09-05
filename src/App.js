import styles from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="App">
        <PageTitle>Todo List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader></AppHeader>
          <AppContent></AppContent>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
};

export default App;
