import { Worker } from 'worker_threads'
import { cpus } from 'os'

export const performCalculations = async () => {
    // Write your code here

    function runService(workerData) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            })
        })
      }
      
    async function run(i) {
        const res = {
            status: null,
            data: null,
        }

        try {
            const data = await runService(i);
            res.status = 'resolved';
            res.data = data;
        } catch {
            res.status = 'error';
            res.data = null;
        }

        return res;
    }
      
      
    function createRuns() {
        const cpusNum = cpus().length;
        const promiseArray = [];
        for (let i = 10 ; i < cpusNum + 10; i++) {
            promiseArray.push(run(i).catch(err => console.error(err)))
        }

        return promiseArray
    }
      
    Promise.all(createRuns()).then((e) => console.log(e))
};

performCalculations();