const Status = {
  'Pending': 'pending',
  'Fullfilled': 'fullfilled',
  'Rejected': 'rejected',
}
const isfn = (fn) => typeof fn === 'function'
class MyPromise {
  status = 'pending'
  value = undefined
  reason = undefined
  constructor(excute) {
    this.status = Status.Pending
    excute(this.resolve, this.reject)
  }
  resolve = (value) => {
    if (this.status === Status.Pending) {
      this.status = Status.Fullfilled
      this.value = value
    }
  }
  reject = (reason) => {
    if (this.status === Status.Pending) {
      this.status = Status.Rejected
      this.reason = reason
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = isfn(onFulfilled) ? onFulfilled : val => val
    onRejected = isfn(onRejected) ? onRejected : err => { throw err }
    if (this.status === 'fullfilled') {
      onFulfilled(this.value)
    }
    if (this.status === 'Rejected') {
      onRejected(this.reason)
    }

  }
  catch(fn) {
    if (isfn) {
      fn(this.reason)
    }
  }
}

const promiseA = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promiseA`)
  }, 0);
})
promiseA.then(data => console.log(data), reason => console.log(reason))

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promiseB`)
  }, 0);
})
promiseB.then(data => console.log(data), reason => console.log(reason))


function deferred() {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

module.exports = { deferred };