import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

let startTime;

export let options = {
  stages: [
    { duration: '1m', target: 20 },
    { duration: '39s', target: 50 },
    { duration: '1m', target: 0 },
    { duration: '23s', target: 10 },
    { duration: '30s', target: 90 },
    { duration: '54s', target: 100 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.10"],
    http_req_duration: ['p(95)<1000'],
  },
};

export function handleSummary(data) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`;
  const reportName = `./report/report-getDataProfileByID-${timestamp}.html`;
  return {
    [reportName]: htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export function setup() {
  startTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
}

export function teardown() {
  const executionTime = new Date() - new Date(startTime);
  console.log('Execution Time:', executionTime / 1000, 'seconds');
}

export default function () {
  // Ganti URL sesuai dengan endpoint yang sesuai
  let res = http.get('INPUT_YOUR_URL_OR_ENDPOINT');
  
  // Lakukan pemeriksaan terhadap respons
  check(res, { 'status is 200': (r) => r.status === 200 });
  
  sleep(5);
}
