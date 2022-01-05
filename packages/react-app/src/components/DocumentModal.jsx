import React,{useState} from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const DocumentModal = ({open, onClose, onOpen}) => {
 
  return (
    <Modal
      open={open}
      onClose={onClose}
      onOpen={onOpen}
     
    >
      <Modal.Header>Imagen de perfil</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='/images/wireframe/image.png' wrapped />

        <Modal.Description>
          <p>
            Este es un ejemplo de contenido expandido que causara que el modal haga scroll.
            </p>

          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image src='/images/wireframe/paragraph.png' />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button onClick={() => {onClose}} primary>
          Proceed <Icon name='chevron right' />
        </Button> */}
      </Modal.Actions>
    </Modal>
  )
}

export default DocumentModal