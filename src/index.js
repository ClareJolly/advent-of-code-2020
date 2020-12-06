import yargs from 'yargs';
const argv = yargs.argv;

const run = async () => {
  const day = argv.day || argv.d;
  await import(`./${day}`);
};

run();
