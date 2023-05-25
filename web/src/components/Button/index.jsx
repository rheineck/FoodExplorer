import { Container } from './styles'

export function Button({ children, isRed, icon, ...rest}) {
  return (
    <Container
      type='button'
      isRed={isRed}
      {...rest}
    >
      {children}
    </Container>
  )
}