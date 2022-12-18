import { Button } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { ACCESS_TOKEN, PROFILE, ROUTES } from "../constants";
export default function Header({ isScrolled }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(PROFILE);
    setTimeout(() => {
      navigate(ROUTES.LOGIN);
    }, 1000);
  };
  const menu = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
    { name: "Cinema", link: "/cinema-system" },
  ];

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex">
          <div className="brand common-flex">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu flex">
            {menu.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .right{
      align-items:center;
    }
    .left {
    align-items:center;
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .menu {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }    
    }
  }
`;
