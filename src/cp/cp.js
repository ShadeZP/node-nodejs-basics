import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    // Write your code here

    const PATH = './src/cp/files/script.js';

    const cp = fork(PATH, args);
};

const args = ['firstArg', 'secondArg', 'thirdArg'];

spawnChildProcess(args);