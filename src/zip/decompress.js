import { pipeline } from 'stream';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
    // Write your code here 

    const PATH = 'src/zip/files/archive.gz';
    const DECOMPRESSED_PATH = 'src/zip/files/fileToCompress.txt';

    const unzip = createUnzip();
    const source = createReadStream(PATH);
    const destination = createWriteStream(DECOMPRESSED_PATH);

    pipeline(
        source,
        unzip, 
        destination, 
        (err) => {
            if (err) {
                console.log(err);
                process.exitCode = 1;
            }
      });
};

decompress();
