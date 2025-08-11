"use client";

import { useState } from "react";

import type { getDictionary } from "@/features/internationalization/get-dictionaries";

export function CounterComponent({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [count, setCount] = useState(0);

  return (
    <p>
      This component is rendered on the client: <br />
      <button onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </button>{" "}
      <br />
      <span>
        <span className="text-2xl px-4 font-bold">Current count: {count}</span>
      </span>
      <br />
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  );
}
