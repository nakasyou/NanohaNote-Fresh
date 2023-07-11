import { PageProps } from "$fresh/server.ts"
import { useRef, useEffect } from "preact/hooks"
import {
  Editor,
} from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

export interface Props {
  pageProps: PageProps,
}
export default function(props: Props){
  
  const noteRef = useRef(null)
  useEffect(() => {
    const editor = new Editor({
      element: noteRef.current,
      extensions: [
        StarterKit,
      ],
      content: [...Array(10)].map(()=>'<p>これはTipTapのテストですわよ。<span class="nanoha-sheet">a</span></p>').join(""),
    })
  }) 
  return <>
    <div>NanohaNote</div>
    <div ref={noteRef}>a</div>
  </>
}
