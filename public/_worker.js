export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "tokennara.com") {
      url.hostname = "www.tokennara.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
