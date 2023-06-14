import { PageProps } from "$fresh/server.ts"

export interface Props {
  pageProps: PageProps,
}
export default function(props: Props){
  return <>
    <div>NanohaNote</div>
  </>
}
