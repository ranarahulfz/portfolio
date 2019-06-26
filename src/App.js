import React from 'react';
import './App.css';
import Main from './components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="navbar-container">
        <Layout>
          <Header
              className="header-color main-header"
              title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>}
              scroll>
            <Navigation>
              <Link className="nav-link" to="/Resume">Resume</Link>
              <Link className="nav-link" to="/AboutMe">About Me</Link>
              <Link className="nav-link" to="/Projects">Projects</Link>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
              className="drawer-color side-bar"
              title={
                  <Link style={{textDecoration: 'none'}} to="/">MyPortfolio</Link>
              }
          >
            <Navigation>
              <Link className="nav-link" to="/Resume">Resume</Link>
              <Link className="nav-link" to="/AboutMe">About Me</Link>
              <Link className="nav-link" to="/Projects">Projects</Link>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
        <style jsx>{`
          .header-color{
            background: #833ab4;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }
          .header-text {
            font-family: "Product Sans", Arial, Helvetica, sans-serif;
            color: white;
            position: relative;
            top: -6px;
            left: -5px;
            text-transform: uppercase;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
          .nav-link {
            font-family: ALISEO;
            text-transform: uppercase;
          }
        `}</style>
      </div>
  );
}

export default App;
