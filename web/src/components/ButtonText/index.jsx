import { Container } from './styles'

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      <button>
        {Icon && <Icon size={16} />}  
        {title}
      </button>
    </Container>
  )
}