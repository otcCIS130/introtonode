import chalk from 'chalk';
import axios from 'axios';

console.log(chalk.blue('Hello world!'));
import scripts from './scripts.js';
import { configs } from './scripts.js';
scripts();
configs();

axios.get("https://dog.ceo/api/breeds/image/random")
.then (res => {
    console.log(res.data)
})