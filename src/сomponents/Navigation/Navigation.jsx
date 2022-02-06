import { LinkStyled, Header } from "../../styled/Styled";

const Navigation = () => {
  return (
    <Header>
      <nav>
        <LinkStyled to="/">HOME</LinkStyled>
        <LinkStyled to="/movies">MOVIES</LinkStyled>
      </nav>
    </Header>
  );
};

export default Navigation;
