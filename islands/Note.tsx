import { PageProps } from "$fresh/server.ts"
import TextNote from "../components/notes/TextNote.tsx"
export interface Props {
  pageProps: PageProps,
}

export default function(props: Props){
  return <>
    <div>NanohaNote</div>
    <TextNote />
  </>
}
