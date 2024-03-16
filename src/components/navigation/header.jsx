export default function Header() {
  return (
    <header className="max-w-[1280px] mx-auto header px-6 md:px-12 fixed top-0 left-0 z-[1000] flex justify-center items-center w-full py-4">
      <a href="/" rel="home">
        <img
          class="w-[300px]"
          src="/images/logos/logo-wordmark-blue.png"
          alt=""
        />
      </a>
      <ul>
        <a href="/about">About</a>
      </ul>
    </header>
  );
}
