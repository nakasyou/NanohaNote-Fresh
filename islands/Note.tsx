import { PageProps } from "$fresh/server.ts"
import { useEditor, EditorContent } from 'tiptap-preact'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from "preact/hooks"
import { IS_BROWSER } from "$fresh/runtime.ts"

const Tiptap = () => {
  const [editor, setEditor] = useState(null)
  if (IS_BROWSER) {
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      content: '<p>Hello World!</p>',
    })
    setEditor(editor)
  }
  return (<div>
    { IS_BROWSER ? "SSR" : <EditorContent editor={editor} /> }
  </div>)
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
