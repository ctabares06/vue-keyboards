export const fakeRequest = (cb, time, success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        const data = cb();
        return resolve(data);
      }
      return reject("template error reason");
    }, time);
  })
}