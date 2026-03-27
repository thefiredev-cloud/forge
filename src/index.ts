import 'dotenv/config';
import { createServer } from './api/server';
import { Director } from './orchestrator/director';

async function main() {
  const port = process.env.PORT ?? 3101;

  const app = createServer();
  app.listen(port, () => {
    console.log(`Forge API running on port ${port}`);
  });

  const director = new Director();
  await director.init();

  console.log('Forge engine initialized. Ready to spawn dream teams.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
