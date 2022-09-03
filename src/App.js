import PageTitle from "./components/PageTitle";
import styles from './styles/modules/app.module.scss';
import AppHeader from "./components/AppHeader";

const App = () => {
    return (
        <div className="App">
            <PageTitle>Todo List</PageTitle>
            <div className={styles.app__wrapper}>
                <AppHeader></AppHeader>
            </div>
        </div>
    )
}

export default App;