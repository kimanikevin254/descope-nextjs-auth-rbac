import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Quote, Code, Undo, Redo } from 'lucide-react'
import { Toggle } from "@/components/ui/toggle"

export default function Toolbar({ editor }) {
    if(!editor) return null

  return (
    <div
      className='border border-input px-3 py-2 rounded-tr rounded-tl'
    >
        <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
          <Toggle
            size='sm'
            pressed={editor.isActive("heading", { level: 2 })}
            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Heading2 className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('bold')}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Bold className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('italic')}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Italic className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('strike')}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Strikethrough className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('bulletList')}
            onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <List className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('orderedList')}
            onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <ListOrdered className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('blockquote')}
            onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Quote className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('code')}
            onPressedChange={() => editor.chain().focus().toggleCode().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Code className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('undo')}
            onPressedChange={() => editor.chain().focus().undo().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Undo className='h-4 w-4' />
          </Toggle>

          <Toggle
            size='sm'
            pressed={editor.isActive('redo')}
            onPressedChange={() => editor.chain().focus().redo().run()}
            className='bg-transparent hover:bg-transparent hover:text-black data-[state=on]:bg-gray-900 data-[state=on]:text-white'
          >
            <Redo className='h-4 w-4' />
          </Toggle>
      </div>
    </div>
  )
}
