import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProjectDetails from './ProjectDetails';
import ProjectEdit from './ProjectEdit';
import Layout from './Layout';
import ProjectList from './ProjectList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       < Route path="/project/new" element={<Layout><ProjectList /></Layout>} />
       
               <Route path="/project/new" element={<Layout><ProjectDetails /></Layout>} />
        <Route path="/project/edit/:id" element={<Layout><ProjectEdit /></Layout>} />
        <Route path="/" element={<Layout><ProjectEdit /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


