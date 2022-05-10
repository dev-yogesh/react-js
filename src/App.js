import { useRoutes } from 'react-router-dom';

import { routes } from './routes';
import './styles.css';

const App = () => {
  const appRoutes = useRoutes(routes);

  return appRoutes;
};

export default App;
