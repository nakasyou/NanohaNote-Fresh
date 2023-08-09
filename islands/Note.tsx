import { PageProps } from "$fresh/server.ts"
import { useEditor, EditorContent } from 'tiptap-preact'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from "preact/hooks"

const Tiptap = () => {
  const [editor, setEditor] = useState(null)
  useEffect(() => {
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      content: '<p>Hello World!</p>',
    })
    setEditor(editor)
  }, [])
  return (
    <EditorContent editor={editor} />
  )
}

export interface Props {
  pageProps: PageProps,
}

export default function(props: Props){
  return <>
    <div>NanohaNote</div>
    <Tiptap />
  </>
}
