import { parentPort, workerData } from 'worker_threads'

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const index = workerData

    const fibNum = nthFibonacci(index)
    
    parentPort.postMessage(fibNum)
}

sendResult();
