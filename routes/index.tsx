import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NanohaNote</title>
      </Head>
      <div class="mx-auto">
        <div class="mx-auto">
          <img src="/NanohaNote.svg"/>
        </div>
        <div>NanohaNoteは、「じぶん」で作る学習用ノートブックです。</div>
      </div>
    </>
  );
}
