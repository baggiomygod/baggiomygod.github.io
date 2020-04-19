onmessage = (e) => {
    console.log('Worker: Message received from main script')

    let result = e.data[0] * e.data[1]

    if(isNaN(result)) {
        postMessage('请输入值')
    } else {
        let workerResult = 'result:' + result
        console.log('worker: 将数据发回给main')
        postMessage(workerResult)
    }
}