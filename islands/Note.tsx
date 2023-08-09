import { PageProps } from "$fresh/server.ts"
import { useEditor, EditorContent } from 'tiptap-preact'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from "preact/hooks"
import { IS_BROWSER } from "$fresh/runtime.ts"

const Tiptap = () => {
  if (IS_BROWSER) {
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      content: '<p>Hello World!</p>',
    })
    /*return <>
      <EditorContent editor={editor} />
    </>*/
  }
  return (<div>
    { IS_BROWSER ? "SSR" : "Browser" }
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
