import { Provider } from "react-redux";
import store from './store';
import Counter from './components/counter/Counter';
import PostList from "./components/postList/PostList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
