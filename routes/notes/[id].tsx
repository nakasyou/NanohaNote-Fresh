import { Head } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"
import { useState } from "preact/hooks"
import Sheet from "../../components/notes/sheet.tsx"

export default (props: PageProps) => {
  const [text,setText] = useState(``)
  const onInput = e => {
    setText(e.target.innerHTML)
  }
  return <>
    <Head>
      <title>{ props.params.id } | NanohaNote</title>
    </Head>
    <div>
      <textarea></textarea>
    </div>
  </>
}
