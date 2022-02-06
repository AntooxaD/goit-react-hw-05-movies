import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Rings } from "react-loader-spinner";

export const Container = styled.div`
  margin: 0, auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 24px;
  width: 100%;
`;
export const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

export const Movie = styled.li`
  width: 250px;
  &:hover {
    box-shadow: 3px 3px 6px rgba(51, 50, 50, 0.25);
    border-radius: 3px;
    transform: scale(1.03);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  span {
    margin-right: 10px;
    padding: 24px;
  }
`;

export const StyledLoader = styled(Rings)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.header`
  border-bottom: 1px black solid;
  padding: 24px;
`;

export const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 5px;
  }
  &.active {
    color: blue;
  }
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  padding: 24px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 46px;
  font: inherit;
  font-size: 20px;
  border: 1px gray solid;
  border-radius: 5px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const BackButton = styled.button`
  padding: 5px;
  width: 75px;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;

export const FilmContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 24px;
  align-items: center;
  gap: 20px;
`;

export const ImgThumb = styled.div`
  max-width: 250px;
`;
export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
export const Actors = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px;
`;
export const Actor = styled.li`
  display: flex;
  gap: 25px;
  width: 400px;
  border: 1px grey solid;
  border-radius: 15px;
  padding: 16px;
  :not(last-child) {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 65px;
  }
`;
export const ReviewsList = styled.ul`
  list-style: none;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  li {
    padding: 16px;
    border: 1px grey solid;
    border-radius: 10px;
  }
  h2 {
    border-bottom: 1px black solid;
  }
  p {
    padding: 24px;
    width: 500px;
  }
`;
