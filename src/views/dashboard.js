import React, { Component } from 'react';
import '../dashboard.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faCaretDown,
  faSignOutAlt,
  faAngleRight,
  faPlus,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import DashboardRouting from '../router/dashboardRoutes';
import { AllRoutes, AllRoles } from '../utils/constants';
// import { logoutUser } from '../actions/authedUser';
// import { tokenKey } from '../services/auth';

const SubMenu = Menu.SubMenu;

class Dashboard extends Component {
  state = {
    showSideBar: false,
    activeRoute: 'dashboard',
    showChildren: false,
  };

  handleLogoutUser = () => {
    // localStorage.removeItem(tokenKey);
    // this.props.dispatch(logoutUser());
    // this.props.history.push('/');
  };

  render() {
    document.title = 'Dashboard';

    const { showSideBar, showChildren } = this.state;
    const { authedUser } = this.props;

    return (
      <div className="grid-container">
        <div className="top-nav-container-responsive">
          {/* <div
            className="menu-icon pt-4"
            onClick={() => this.setState({ showSideBar: true })}
          >
            <FontAwesomeIcon icon={faBars} size="2x" color="#3cb3e0" />
          </div> */}
          <div className="new-logo-container">
            <span className="new-logo">Logo Here</span>
          </div>
          <div className="new-menu-container">
            <div className="new-menu-item">
              <span className="new-menu-text">Messages</span>
            </div>
            <div className="new-menu-item">
              <span className="new-menu-text">Automation</span>
            </div>
            <div className="new-menu-item new-menu-item-active">
              <span className="new-menu-text new-menu-text-active">
                Contacts
              </span>
            </div>
            <div className="new-menu-item">
              <span className="new-menu-text">Media Library</span>
            </div>
          </div>

          <header className="header header-responsive">
            <div className="header__element br-right pr-3">
              <FontAwesomeIcon icon={faBell} size="lg" color="#42495b" />
            </div>
            <div className="header__element">
              <Menu mode="horizontal" className="home-menu">
                <SubMenu
                  title={
                    <>
                      <div className="user-avatar-container">
                        <div className="avatar-container">
                          {/* <img
                            src={require('../assets/main-logo.png')}
                            className="user-avatar"
                            alt="avatar"
                          /> */}
                          <span className="override-menu-dashboard mr-2">
                            {`${authedUser.stdFname} ${authedUser.stdLname}`}
                          </span>
                        </div>
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          size="1x"
                          color="#42495b"
                        />
                      </div>
                    </>
                  }
                  className="main-color override-menu-item-dashboard"
                >
                  <Menu.Item key="setting:2">
                    <button
                      className="no-anchor-decoration main-color override-menu logout-btn"
                      onClick={this.handleLogoutUser}
                    >
                      Logout
                    </button>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </header>
        </div>

        <aside className={`sidenav ${showSideBar && `active`}`}>
          <div
            className="sidenav__close-icon"
            onClick={() => this.setState({ showSideBar: false })}
          >
            <FontAwesomeIcon icon={faTimes} size="sm" color="#3CC6BC" />
          </div>
          <div className="sidenav-container">
            <div className="dashboard-logo-container mb-4 sidenav-padding">
              <div>
                <span className="sidenav-title">Lists</span>
              </div>
              <div className="plus-icon-container">
                <span className="plus-icon">+</span>
              </div>
            </div>

            {/* <ul className="sidenav__list"></ul> */}
            <div className="sidenav-list">
              <div className="sidenav-item-container px-4 py-2">
                <div>
                  <span className="sidenav-item-title">All Contacts</span>
                </div>
                <div>
                  <span className="sidenav-item-description">
                    10 000 contacts
                  </span>
                </div>
              </div>
              <div className="sidenav-item-container px-4 py-2">
                <div>
                  <span className="sidenav-item-title">
                    A Long List Name Line Special for you
                  </span>
                </div>
                <div>
                  <span className="sidenav-item-description">250 contacts</span>
                </div>
              </div>
              <div className="sidenav-item-container px-4 py-2">
                <div>
                  <span className="sidenav-item-title">List</span>
                </div>
                <div>
                  <span className="sidenav-item-description">250 contacts</span>
                </div>
              </div>
              <div className="sidenav-item-container px-4 py-2 sidenav-item-container-active">
                <div>
                  <span className="sidenav-item-title">List</span>
                </div>
                <div>
                  <span className="sidenav-item-description">250 contacts</span>
                </div>
              </div>
              <div className="sidenav-item-container px-4 py-2">
                <div>
                  <span className="sidenav-item-title">List</span>
                </div>
                <div>
                  <span className="sidenav-item-description">250 contacts</span>
                </div>
              </div>
              <div className="sidenav-item-container px-4 py-2">
                <div>
                  <span className="sidenav-item-title">List</span>
                </div>
                <div>
                  <span className="sidenav-item-description">250 contacts</span>
                </div>
              </div>
              <div className="sidenav-item-container px-4 py-2">
                <div>
                  <span className="sidenav-item-title">List</span>
                </div>
                <div>
                  <span className="sidenav-item-description">250 contacts</span>
                </div>
              </div>
            </div>
            {/* <div className="dashboard-logout-container br-top pt-4">
               <div
                className="sidebar-content show-cursor"
                onClick={this.handleLogoutUser}
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  size="2x"
                  color="#42495b"
                  className="sidebar-content-icon logout-icon"
                />
                <span className="h6 ml-3">Logout</span>
              </div> 
            </div> */}
          </div>
        </aside>

        <main className="main">
          <DashboardRouting />
        </main>

        <footer className="footer dashboard-footer">
          <div className="footer__signature">
            <span className="h6">
              COPYRIGHT {new Date().getFullYear()}{' '}
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    //   TODO: Remove this
    authedUser: { stdFname: 'Lucinda', stdLname: 'Henry', type: 'admin' },
  };
};

export default connect(mapStateToProps)(Dashboard);
