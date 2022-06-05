import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async () => {
    // Write your code here 

    const PATH = 'src/zip/files/fileToCompress.txt';
    const COMPRESSED_PATH = 'src/zip/files/archive.gz';

    const gzip = createGzip();
    const source = createReadStream(PATH);
    const destination = createWriteStream(COMPRESSED_PATH);

    pipeline(
        source,
        gzip, 
        destination, 
        (err) => {
            if (err) {
                console.log(err);
                process.exitCode = 1;
            }
      });
};

compress();
