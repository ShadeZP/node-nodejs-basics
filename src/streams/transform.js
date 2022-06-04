import { stdout, stdin } from 'process';
import { pipeline, Transform } from 'stream';

export const transform = async () => {
    // Write your code here 

    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
          const str = chunk.toString().trim();
          const reversedStr = str.split('').reverse().join('');

          callback(null, `${reversedStr}\n`);
        }
      });
    

    pipeline(
        stdin,
        myTransform,
        stdout,
        (err) => {
            console.log(err);
        }
    );
};

transform();