let url = "http://localhost:3030";
if (location.hostname === 'ng.gz-nevergiveup.cn') {
  url = 'http://ng.gz-nevergiveup.cn:3030';
} else {
  url = "http://localhost:3030";
}

export { url };
