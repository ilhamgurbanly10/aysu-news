import { BrowserRouter } from "react-router-dom";

import Layout from './pages/Layout';
import Routing from './components/Routing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './assets/scss/library.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
      <BrowserRouter>
        <Layout>
            <Routing/>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
