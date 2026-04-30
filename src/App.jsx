import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import DetailsPage from './DetailsPage';
import ProjectEdit from './ProjectEdit';
import ProjectList from './ProjectList';
import ProjectView from './ProjectView';
import './App.css';
import ProjectResults from './ProjectResults';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/home" element={<DetailsPage />} />
        <Route path="/projectdetails" element={<DetailsPage />} />
        <Route path="/projectdetails/:id" element={<DetailsPage />} />
        <Route path="/" element={<Layout />}>
         <Route path="/project/view/:id" element={<ProjectView />} />
          <Route index element={<ProjectList />} />
          <Route path="project" element={<ProjectList />} />
          <Route path="project/new" element={<ProjectEdit />} />
          <Route path="project/edit/:id" element={<ProjectEdit />} />
          <Route path="project/results" element={<ProjectResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}