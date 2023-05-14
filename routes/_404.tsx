import { Head } from "$fresh/runtime.ts"
import Header from "../components/Header.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>404 Not found</title>
      </Head>
      <Header />
      <div>
        <div class="mx-auto text-xl">404</div>
        <div class="mx-auto">Not found</div>
      </div>
    </>
  );
}
