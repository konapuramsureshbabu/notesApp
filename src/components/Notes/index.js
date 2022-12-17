import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Container,
  Form,
  Head,
  Input,
  TextArea,
  Button,
  NoteList,
  Img,
  Text,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [dis, setDis] = useState('')
  const [noteList, setNoteList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeDis = event => {
    setDis(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      dis,
    }

    if (title !== '' && dis !== '') {
      setNoteList(prevState => [...prevState, newNote])
      setTitle('')
      setDis('')
    }
  }

  const noteListBool = noteList.length === 0

  return (
    <Container>
      <Head>Notes</Head>
      <Form onSubmit={onAddNote}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextArea
          type="text"
          placeholder="Take a Note..."
          value={dis}
          onChange={onChangeDis}
        />
        <Button type="submit">Add</Button>
      </Form>
      <NoteList>
        {noteListBool && (
          <Container>
            <Img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <Head>No Notes Yet</Head>
            <Text>Notes you add will appear here</Text>
          </Container>
        )}

        {noteList.map(each => (
          <NoteItem key={each.id} noteDetails={each} />
        ))}
      </NoteList>
    </Container>
  )
}
export default Notes
