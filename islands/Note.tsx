import { PageProps } from "$fresh/server.ts"
import { useEditor, EditorContent } from 'tiptap-preact'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
  })

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
