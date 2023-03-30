import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  Title,
  Form,
  TitleInput,
  NoteInput,
  AddButton,
  NoteList,
  NoNote,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNote = event => setNote(event.target.value)
  const onAddNote = event => {
    event.preventDefault()
    const newNote = {title, note, id: uuidv4()}
    setNoteList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }
  return (
    <AppContainer>
      <Title>Notes</Title>
      <Form onSubmit={onAddNote}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <NoteInput
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
          rows="6"
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
      {noteList.length === 0 ? (
        <NoNote>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here</p>
        </NoNote>
      ) : (
        <NoteList>
          {noteList.map(each => (
            <NoteItem key={each.id} NoteDetails={each} />
          ))}
        </NoteList>
      )}
    </AppContainer>
  )
}

export default Notes
