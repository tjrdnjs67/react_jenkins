import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  // localhost:3000/favorites
  // my-page.com/
  return <div>
    <Layout>
      {/* 이건 라우터 dom v5 */}
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    
    {/* <Routes>
      <Route path='/' element={<AllMeetupsPage />} />
      <Route path='/new-meetup' element={<NewMeetupsPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes> */}
    </Layout>

    
  </div>;
}

export default App;
