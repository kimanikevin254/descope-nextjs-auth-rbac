'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import { cn } from '@/lib/utils'

const Tiptap = ({ setContent }) => {
    
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit
    ],
    editorProps: {
        attributes: {
          class: cn(
            'prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc',
            'min-h-96 p-3 rounded border border-input hover:outline-none'
          ),
        }
    },
    parseOptions: {
      preserveWhitespace: 'full',
    },
    
    onUpdate: ({ editor }) => {
        setContent(editor.getHTML())
    }
  })

  return (
    <div className='flex flex-col'>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
