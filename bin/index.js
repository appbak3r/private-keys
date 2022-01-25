#!/usr/bin/env node
const yargs = require("yargs");
const { generateKeys } = require("../lib");

yargs
  .command(
    "$0 [count]",
    "Generates private keys and addresses. To specify amount of keys provide count argument",
    () => {},
    argv => {
      generateKeys(argv.count);
    }
  )
  .parse();
