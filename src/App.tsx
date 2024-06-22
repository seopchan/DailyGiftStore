import './App.css';
import routes from '@/routes.tsx';
import { useRoutes } from 'react-router-dom';

function App() {
  const allPages = useRoutes(routes);

  return (
    <div className="App">
      {allPages}
    </div>
  )
}

export default App;
