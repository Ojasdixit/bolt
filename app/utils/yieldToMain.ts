export async function yieldToMain(): Promise<void> {
  // Prefer a macrotask that lets the browser paint; raf is a good balance
  await new Promise<void>((resolve) => {
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => resolve());
    } else {
      setTimeout(() => resolve(), 0);
    }
  });
}
