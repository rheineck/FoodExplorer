import styled from "styled-components";
import logoImg from '../../assets/Logo.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  height: 30px;
  width: 30px;
  background: url(${logoImg});
  margin-right: 12px;
`