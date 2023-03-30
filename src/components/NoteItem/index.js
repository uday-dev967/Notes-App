import {ListItem} from './styledComponents'

const NoteItem = props => {
  const {NoteDetails} = props
  const {note, title} = NoteDetails
  return (
    <ListItem>
      <h1>{title}</h1>
      <p>{note}</p>
    </ListItem>
  )
}

export default NoteItem
