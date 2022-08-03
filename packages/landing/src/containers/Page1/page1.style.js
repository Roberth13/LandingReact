import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 36px;
    line-height: 56px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    @media only screen and (max-width: 1440px) {
      font-size: 34px;
      line-height: 48px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      line-height: 42px;
    }
  }

  h2 {
    color: ${themeGet('colors.heading', '#191919')};
    font-size: 40px;
    line-height: 56px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    @media only screen and (max-width: 1440px) {
      font-size: 36px;
      line-height: 52px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 30px;
      line-height: 46px;
    }
  }

  h3 {
    color: ${themeGet('colors.heading3', '#273343')};
    font-size: 24px;
    line-height: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    @media only screen and (max-width: 1440px) {
      font-size: 22px;
      line-height: 32px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 30px;  
    }
  }

  h4 {
    font-size: 22px;
    line-height: 32px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    @media only screen and (max-width: 1440px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  p {
    color: ${themeGet('colors.text', '#4E5865')};
    font-size: 16px;
    line-height: 26px;
    font-family: 'Roboto', sans-serif;
    @media only screen and (max-width: 1440px) {
      font-size: 15px;
    }
  }


  section {
    position: relative;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Modal style */ 
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;
    &.alt {
      color: ${themeGet('colors.heading', '#191919')} !important;
      background-color: ${themeGet('colors.primary', '#FDEF00')} !important;
      box-shadow: 0 8px 38px rgba(253, 239, 0, 0.5) !important;
    }
  }

  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 5px !important;
        }
      }
    }

    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }

    .innerRndComponent {
      padding-right: 0 !important;
    }
  }

  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder.login-modal{
    .reusecore__button {
      color: ${themeGet('colors.link', '#352FD9')};
      &.default {
        color: ${themeGet('colors.heading', '#191919')};
        background-color: ${themeGet('colors.primary', '#FDEF00')};
        &:hover {
          box-shadow: none;
        }
      }
    }
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }

  .reuseModalHolder.search-modal{
    top: 0!important;
    left: 0!important;
    max-width: 100%!important;
    max-height: 100%!important;
    width: 100%;
    height: 100%;
  }

  .reuseModalHolder.login-modal .innerRndComponent{
    overflow-y: auto;
    padding-right: 30px !important;
    margin-right: -30px;
    overflow-x: hidden;
  }

  /* Drawer style */
  .drawer {
    .drawer-content-wrapper {
      @media only screen and (max-width: 480px) {
        width: 320px !important;
      }

      button {
        position: absolute;
        top: 35px;
        right: 27px;
        border: 0;
        padding: 0;
        background: transparent;
        cursor: pointer;
        > i svg {
          width: auto;
          height: 35px;
          fill: ${themeGet('colors.heading', '#191919')};
        }
        &:hover {
          > i svg {
            fill: ${themeGet('colors.link', '#352FD9')};
          }
        }
      }

      .scrollspy__menu {
        padding: 60px 71px;
        max-height: 505px;
        overflow-x: auto;
        @media only screen and (max-width: 375px) {
          padding: 45px 56px;
        }
        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }
        li {
          margin: 35px 0;
          @media only screen and (max-width: 667px) {
            margin: 30px 0;
          }
          &:first-child {
            margin-top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
          a {
            display: block;
            color: ${themeGet('colors.heading', '#060F1E')};
            font-size: 22px;
            font-weight: 400;
            transition: all 0.3s ease;
            @media only screen and (max-width: 667px) {
              font-size: 20px;
            }
            &:hover {
              color: ${themeGet('colors.link', '#352FD9')};
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.link', '#352FD9')};
              position: relative;
              &:before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: ${themeGet('colors.link', '#352FD9')};
                position: absolute;
                top: calc(50% - 8px / 2);
                left: -20px;
              }
            }
          }
        }
      }
      .copyright_section {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-left: 71px;
        padding-bottom: 56px;
        background-color: ${themeGet('colors.white', '#ffffff')};
      }
    }
  }
`;

const Page1Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
`;

export {
  GlobalStyle,
  Page1Wrapper,
  ContentWrapper
};
