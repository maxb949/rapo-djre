import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <NavItem className="d-flex align-items-center">
        <span>
          <strong>{user ? `Здравствуйте, ${user.username}` : ""}</strong>
        </span>
        <NavLink className="font-weight-bold" href="/login/">
          Выйти
        </NavLink>
      </NavItem>
    );

    const guestLinks = (
      <NavItem className="d-flex align-items-center">
        <NavLink className="font-weight-bold" href="/login/">
          Вход
        </NavLink>
      </NavItem>
    );
    const AVATAR = "/static/frontend/logo.png";

    return (
      <header>
        <Navbar
          fixed="top"
          color="dark"
          light
          expand="xs"
          className="border-bottom border-gray bg-white"
          style={{ height: 60 }}
        >
          <Container>
            <Row
              noGutters
              className="position-relative w-100 align-items-center"
            >
              <Col className="d-none d-lg-flex ">
                <Nav className="mrx-auto" navbar>
                  <NavbarBrand
                    className="d-inline-block p-0"
                    href="/"
                    style={{ width: 80 }}
                  >
                    <img
                      src={AVATAR}
                      alt="logo"
                      className="position-relative img-fluid"
                    />
                  </NavbarBrand>

                  <NavItem className="d-flex">
                    <NavLink className="font-weight-bold" href="/about">
                      О КОМПАНИИ
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex">
                    <NavLink className="font-weight-bold" href="/">
                      КОМПЕТЕНЦИИ
                    </NavLink>
                  </NavItem>

                  <UncontrolledDropdown className="d-flex" nav inNavbar>
                    <DropdownToggle className="font-weight-bold" nav caret>
                      РЕШЕНИЯ
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem divider />
                      <DropdownItem
                        header
                        className="font-weight-bold text-secondary text-uppercase"
                      >
                        АВТОМАТИЗАЦИЯ
                      </DropdownItem>
                      <DropdownItem className="font-weight-bold text-secondary text-uppercase">
                        ИНТЕГРАЦИЯ
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem className="font-weight-bold text-secondary text-uppercase">
                        ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Col>

              <Col className="d-none d-lg-flex justify-content-end">
                {isAuthenticated ? authLinks : guestLinks}
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Header);
