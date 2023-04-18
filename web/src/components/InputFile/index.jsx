import { UploadSimple } from '@phosphor-icons/react'

import { Container } from './styles'

export function InputFile() {
  return (
    <Container>
      <UploadSimple size={24}/>
      Selecione a imagem
      <input
        type="file" 
      />
    </Container>
  )
}