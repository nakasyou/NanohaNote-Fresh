import { PageProps } from "$fresh/server.ts"
import { useRef, useEffect } from "preact/hooks"
import {
  Editor,
} from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { TipTapPluginNanoha } from "../utils/tiptap/PluginNanoha.ts"
export interface Props {
  pageProps: PageProps,
}
import {
  IconNote,
  IconNoteOff,
} from "@tabler/icons-preact"

export default function(props: Props){
  const noteRef = useRef(null)
  useEffect(() => {
    const editor = new Editor({
      element: noteRef.current,
      extensions: [
        StarterKit,
        TipTapPluginNanoha,
      ],
      content: `<h2>NanohaNoteへようこそ!</h2><p>NanohaNoteは、「じぶん」で作る、学習用ノートブックです!<span class="nanoha-sheet">こんな感じに隠せます</span></p>`
    })
  }) 
  return <>
    <div>NanohaNote</div>

    <div ref={noteRef}>a</div>
  </>
}
