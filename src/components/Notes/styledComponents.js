import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 260px;
  width: 75%;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
`

export const TitleInput = styled.input`
  width: 100%;
  margin: 10px;
  border-style: none;
  outline: none;
`

export const AddButton = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 5px;
  border-style: none;
  width: 100px;
  height: 40px;
  margin-left: 0px;
`

export const NoteList = styled.ul`
  width: 75%;
  list-style-type: none;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
`

export const NoteInput = styled.textarea`
  width: 100%;
  margin: 10px;
  border-style: none;
  outline: none;
`
export const NoNote = styled.div`
  text-align: center;
`
