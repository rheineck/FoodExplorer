import styled from "styled-components";

export const Container = styled.div`

  margin: 0px auto;

  main {
    height: 100vh;
    margin: 56px 35px 122px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 18px;
  }

  #orderTable {
    font-family: 'Roboto';
    margin-bottom: 18px;
    display: grid;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 8px;
    padding: 16px 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 14px;
    grid-template-areas: 
    'id status timestamp'
    'order order order'
    ;
  }

  #id {
    grid-area: id;
  }

  #status {
    grid-area: status;
  }

  #timestamp {
    grid-area: timestamp;
  }

  #id, #status, #timestamp {
    height: 22px;
    margin-bottom: 16px;
  }

  .order {
    grid-area: order;
    text-align: justify;
  }

  .desktopOnly {
   display: none 
  }

  @media(min-width: 1366px) {

    main {
      margin: 123px;
    }

    .mobileOnly {
      display: none;
    }

    #orderTable {
      display: none;
    }

    .desktopOnly {
      display: flex;
    }

    table {
      border-radius: 8px 8px 0 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      font-family: 'Roboto';
      font-weight: 400;
    }

    thead {
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      height: 64px;
    }
  }
`