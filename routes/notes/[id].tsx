import { Head } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"
import { h, useState } from "$fresh/runtime.ts";

export default (props: PageProps) => {
  const [text,setText] = useState(`
    aaaaaaaa
  `)
  return <>
    <Head>
      <title>{ props.params.id } | NanohaNote</title>
    </Head>
    <div>
      {text}
    </div>
  </>
}
