import { Head } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"

export default (props: PageProps) => {
  
  return <>
    <Head>
      <title>{ props.params.id } | NanohaNote</title>
    </Head>
    <div>
      
    </div>
  </>
}
