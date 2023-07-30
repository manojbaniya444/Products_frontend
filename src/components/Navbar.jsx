import React from "react";
import { styled } from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav__left">
          <h3>
            Product <span>Sansaar</span>
          </h3>
        </div>
        <div className="nav__right">
          <div className="link">
            <FavoriteBorderIcon /> Wish list
          </div>
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            <div className="link">
              <LoginIcon /> Sign In
            </div>
          </Link>
        </div>
      </nav>
      {/* //! This is search section */}
      <section className="search__section">
        <h2>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            P<span>S</span>
          </Link>
        </h2>
        <div className="search__section__searchbar">
          <input type="search" placeholder="Enter keywords to search" />
          <SearchIcon />
        </div>
        <div className="search__section__cart">
          <ShoppingCartIcon />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .search__section {
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    gap: 30px;
    padding: 0 2rem;
    h2 {
      font-size: 2.5rem;
      font-style: italic;
      span {
        color: ${({ theme }) => theme.colors.main};
      }
    }
    .search__section__searchbar {
      display: flex;
      align-items: center;
      flex: 1;
      border-radius: 4px;
      input {
        padding: 10px;
        flex: 1;
        border: none;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        &:focus {
          outline: none;
        }
      }
      .MuiSvgIcon-root {
        font-size: 2.5rem;
        cursor: pointer;
      }
    }

    .search__section__cart {
      .MuiSvgIcon-root {
        font-size: 2.5rem;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
  }
  nav {
    height: 60px;
    background-color: #000000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1.4px solid gray;
    .nav__left {
      h3 {
        font-size: 1.25rem;
        span {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
    .nav__right {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;
      .link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
  }
`;

export default Navbar;
