import { UploadSimple } from '@phosphor-icons/react'

import { Container } from './styles'

export function InputFile() {
  return (
    <Container>
      <UploadSimple size={24}/>
      Seleciona a imagem para alterá-la
      <input
        type="file" 
      />
    </Container>
  )
}