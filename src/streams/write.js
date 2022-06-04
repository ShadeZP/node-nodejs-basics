import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { stdin } from 'process';

export const write = async () => {
    // Write your code here 

    const PATH_TO_WRITE = './src/streams/files/fileToWrite.txt';

    const writeStream = createWriteStream(PATH_TO_WRITE);

    pipeline(
        stdin,
        writeStream,
        (err) => {
            console.log(err);
        }
    );
};

write();