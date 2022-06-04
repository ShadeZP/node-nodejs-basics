import { stdout } from 'process';
import { pipeline } from 'stream';
import { open } from 'fs/promises';

export const read = async () => {
    // Write your code here 

    const PATH = './src/streams/files/fileToRead.txt';

    const fd = await open(PATH);
    const readStream = fd.createReadStream();

    pipeline(
        readStream,
        stdout,
        (err) => {
            console.log(err);
        }
    );
};

read();