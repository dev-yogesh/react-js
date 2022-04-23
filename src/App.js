import { ParentComponent } from './hooks/useCallback/example_v1.0';
import { Main } from './hooks/useCallback/example_v2.0';

const App = () => {
  return (
    <div className='top_center'>
      <ParentComponent />
      <Main />
    </div>
  );
};

export default App;
