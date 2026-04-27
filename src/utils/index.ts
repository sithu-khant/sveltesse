import { format, isSameYear } from 'date-fns';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay, ...args);
  };
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function capitalizeFirstLetter(letter: string) {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
}

export function formatDate(date: Date | string | number) {
  const d = new Date(date);
  const now = new Date();

  if (isSameYear(d, now)) {
    return format(d, 'MMM dd');
  }

  return format(d, 'MMM dd, yyyy');
}
