import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/zuzukemal.jpg"
          class="w-40 h-32"
          alt="Zuzu Kemal"
        />
        <p class="my-6">
          <p>
            <h5>
              Ben Kemal, 1967'den beri <i>computer* </i>üstünde yenilikleri izliyor ve uyguluyorum.
            </h5>
            <p>
              Çeşitli konulardaki görüşlerimi, deneyimlerimi, özlü sözleri, burada paylaşmaktayım. Çizgim Atatürk
              çizgisidir, ikinci vazifemiz devrimleri Anadolu'ya yaymaktır.
            </p>
            <p> *bilgisayar değil, bilgi soyuttur sayılamaz</p>
          </p>
        </p>
        <img
          src="/ogrenmek.jpg"
          class="w-50 h-32"
          alt="öğrenmek"
        />
      </div>
    </>
  );
}
