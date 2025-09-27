export interface GreetingOptions {
  readonly name?: string;
}

export const createGreeting = (options: GreetingOptions = {}): string => {
  const sailorName = options.name ?? "Sailor";
  return `Ahoy, ${sailorName}! Welcome aboard Set-Sail.`;
};

if (require.main === module) {
  // eslint-disable-next-line no-console
  console.log(
    `${createGreeting()}\nChart a voyage via docs/VISION.md and docs/ROADMAP.md.`
  );
}

export default createGreeting;
