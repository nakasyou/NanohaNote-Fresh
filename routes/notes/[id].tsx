import { Head } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"
import Note from "../../islands/Note.tsx"

export default (props: PageProps) => {
  return <>
    <Head>
      <title>{ props.params.id } | NanohaNote</title>
    </Head>
    <div>
      <Note pageProps={props} />
    </div>
  </>
}
