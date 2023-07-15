import { useRef, useEffect, useState } from "preact/hooks"
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { TipTapPluginNanoha } from "../../utils/tiptap/PluginNanoha.ts"
import {
  IconNote,
  IconNoteOff,
} from '@tabler/icons-preact'
/**
 * TextNote
 * @remarks
 * テキスト版のノート(単体)のComponent
 */
export default () => {
  const noteRef = useRef(null)
  const [editor, setEditor] = useState<Editor>()
  useEffect(() => {
    setEditor(new Editor({
      element: noteRef.current!,
      extensions: [
        StarterKit,
        TipTapPluginNanoha,
      ],
      content: `<h2>NanohaNoteへようこそ!</h2><p>NanohaNoteは、「じぶん」で作る、学習用ノートブックです!<span class="nanoha-sheet">こんな感じに隠せます</span></p>`
    }))
  }, [])
  return <div>
    {/* ContentEditable */}
    <div ref={noteRef}></div>
    <div>
      <button onClick={()=>{
        editor?.chain().focus().toggleBold().run()
      }}>
        { editor?.isActive('sheet') ? <IconNote /> : <IconNoteOff />}
      </button>
    </div>
  </div>
}