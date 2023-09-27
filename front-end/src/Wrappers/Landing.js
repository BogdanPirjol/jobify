import styled from "styled-components";
import breakpoints from "../graphics/devices-sizes";

const Wrapper = styled.main`
  & {
    min-width: min-content;
  }

  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 4vh;
  }

  .nav {
    background-color: var(--white);
    height: 6rem;
    border-radius: var(--borderRadius);
    overflow: hidden;
  }

  .logo {
    display: block;
    object-fit: cover;
    width: 10rem;
  }

  .btn {
    display: block;
    width: 16rem;
    font-size: 1.35rem;
    margin: 10vh;
    text-align: center;
  }

  .landing-info {
    p {
      margin-left: 2.25rem;
    }
  }

  .landing-graphic {
    grid-area: 1 / 2 / span 1 / span 1;
    min-width: 50rem;
    margin: 5rem 0 0 auto;

    img {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    :root {
      margin: 0;
    }

    .landing-graphic {
      display: none;
    }

    .main-content {
      width: 100%;
      display: block;
    }

    .landing-info {
      p {
        margin: 0;
        min-width: 0;
      }
    }

    .logo {
      display: block;
      width: 100%;
      height: 6rem;
      object-fit: contain;
    }

    h2 {
      margin: 0 auto;
    }

    .btn {
      margin: 5vh auto;
    }
  }
`;

export default Wrapper;
