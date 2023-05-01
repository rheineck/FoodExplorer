import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  grid-template-areas: 
  'header'
  'content'
  'footer';


  margin: 0px auto;

  main {
    grid-area: content;
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
      margin: 0 auto;
      width: 60%;
      margin-top: 35px;
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

    .backbutton {
      margin-bottom: 32px;
    }

    table {
      border-radius: 8px 8px 0 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      border-collapse: collapse;
      font-family: 'Roboto';
      font-weight: 400;
      text-align: justify;
      font-size: 14px;
      flex-direction: column;
    }

    thead {
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      height: 64px;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    th {
      width: 152px;
      padding: 21px 24px;
    }

    th:nth-child(3) {
      width: 677px;
    }

    td {
      padding: 16px 24px;
      width: 152px;
      border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    td:nth-child(3) {
      width: 677px;
    }

    td:last-child {
      border-right: none;
    }
  }
`