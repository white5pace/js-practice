console.log('Start')

setTimeout(() => {console.log('i am a zero second timeout')}, 0)

console.log('Start 2')

function timeout2sec() {
  console.log('Inside timeout, after 2 seconds');
}

setTimeout(function () {
  console.log('Inside timeout, after 5 seconds')
}, 5000)

setTimeout(timeout2sec, 2000)

console.log('End')

