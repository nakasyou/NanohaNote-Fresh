import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NanohaNote</title>
      </Head>
      <div>
        <div>
          <img src="/NanohaNote.svg" class="mx-auto"/>
        </div>
        <div class="text-center">NanohaNoteは、「じぶん」で作る学習用ノートブックです。</div>
      </div>
    </>
  );
}
