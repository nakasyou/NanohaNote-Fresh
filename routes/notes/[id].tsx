import { Head } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"
import { useState } from "preact/hooks"
import Sheet from "../../components/notes/sheet.tsx"

export default (props: PageProps) => {
  const [text,setText] = useState(`
    aaaaaaaa
  `)
  return <>
    <Head>
      <title>{ props.params.id } | NanohaNote</title>
    </Head>
    <div>
      <div contentEditable="true">Content Editable</div>
    </div>
  </>
}
