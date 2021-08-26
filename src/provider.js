export default class Provider {
  static async network(url) {
    const res = await fetchTimeout(url, 10000);
    try {
      if (!res.ok) {
        throw new Error('unable to fetch source')
      }
      return await res.json()
    } catch (e) {
      throw e
    }
  }

  static async local() {
    const source = await import('../x26.json')

    if (source.mode == "local") {
      return source
    }

    if (!source.url) {
      throw new Error('url must be provided when not using local mode')
    }

    return await this.network(source.url)
  }
}

/**
 * fetch with timeout seconds
 * @param {String} url 
 * @param {Number} timeout
 * @param {RequestInit} opt 
 * @returns 
 */
async function fetchTimeout(url, timeout, opt) {
  let timer = null;
  const ctrl = new AbortController()

  timer = setTimeout(function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    ctrl.abort()
    throw new Error("fetch timeout");
  }, timeout);

  const res = await fetch(url, {
    signal: ctrl.signal,
    ...opt
  });

  clearTimeout(timer);
  timer = null;

  return res;
}
