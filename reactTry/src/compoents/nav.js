import {NavLink} from 'react-router-dom'
import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Navgitor extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
 
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem >
                <NavLink to='/' exact>首页</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/news'>新闻</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/product'>产品中心</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/cart'>购物车</NavLink>
              </NavItem><NavItem>
                <NavLink to='/about'>关于我们</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
