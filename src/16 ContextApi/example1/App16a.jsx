import React from 'react'
import Counter from './Counter'
import CounterProvider from "./CounterContext";

const App16a = () => {
  return (
    <section>
      <article>
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </article>
    </section>
  );
}

export default App16a