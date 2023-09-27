import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  height: 70px;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 2rem;
  margin: auto;
  border-radius: 6px;
  overflow: hidden;
  z-index: 99;
  transition: 0.7s cubic-bezier(0.44, -0.61, 0.01, 1.15);

  .icon {
    width: 25%;
    background: #000404;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92% !important;
  }
  .message {
    width: 100%;
    height: 80%;
  }

  &.load::after {
    content: "";
    height: 8%;
    bottom: 0;
    position: absolute;
    background-color: var(--alert-red-500);
    animation-name: load;
    animation-delay: 0.7s;
    animation-duration:3.2s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-play-state: paused;
  }

  &.running::after{
    animation-play-state: running;
  }

  &.load:hover::after{
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  
  &:hover {
    cursor: pointer;
  }

  &.danger::after {
    background-color: var(--alert-red-500);
  }

  &.success::after {
    background-color: var(--green-500);
  }


  p {
    min-width: 0;
    margin-bottom: 0;
    font-family: var(--bodyFont);
    font-size: large;
    height: min-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
  }

  .warning-icon {
    color: var(--alert-red-500);
  }

  .svg-icon {
    font-size: 2rem;
  }

  .success-icon {
    color: var(--green-600);
  }

  .danger-message {
    background-color: var(--alert-red-100);
    color: var(--alert-red-700);
  }

  .success-message {
    background-color: #f0ffe8;
    color: var(--green-700);
   }

  @keyframes load {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export default Wrapper;
