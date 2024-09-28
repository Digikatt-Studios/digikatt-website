import { createSignal } from "solid-js";

export default function Page() {
  return (
    <>
      <div>
        <h1>Digikatt Studios</h1>
        Chase and Catch Your Dreams! We're a small team of Filipino game devs that try to make
        games.
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count()}
    </button>
  );
}
