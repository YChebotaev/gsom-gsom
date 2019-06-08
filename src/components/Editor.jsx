import React, { useState } from 'react'
import './styles/Editor.scss'
import RichTextEditor from 'react-rte'
import { Block } from '../commons/Block'

export const Editor = ({ disabled, onChange }) => {
  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue()
  )

  const handleChange = nextEditorState => {
    setEditorState(nextEditorState)
    onChange(nextEditorState.toString('markdown'))
  }

  return (
    <Block name='Editor'>
      <RichTextEditor
        value={editorState}
        onChange={handleChange}
        placeholder='Мое псто'
        disabled={disabled}
      />
    </Block>
  )
}
