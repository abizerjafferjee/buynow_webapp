import React, { useState, useLayoutEffect } from 'react'

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

export function shortenText(text, charLength) {
  if (text.length <= charLength) {
    return text
  }
  return text.slice(0, charLength) + '...'
}

export const getData = (ref) => {
  return new Promise((resolve, reject) => {
    const onError = error => reject(error)
    const onData = snap => resolve(snap.val())

    ref.on("value", onData, onError);
  })
}

export const handleError = (error) => {
  console.log(error)
}