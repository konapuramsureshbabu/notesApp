import {Container, List, Head, Text} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, dis} = noteDetails

  return (
    <Container>
      <List>
        <Head>{title}</Head>
        <Text>{dis}</Text>
      </List>
    </Container>
  )
}
export default NoteItem
