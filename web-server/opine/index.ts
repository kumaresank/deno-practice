import { opine } from 'https://deno.land/x/opine@0.23.1/mod.ts';

const app = opine();

app.use((req, res) => {
  res.send('Deno Opine Web APP');
});

app.listen(3000);