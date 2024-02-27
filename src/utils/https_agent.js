import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: true }); // Set to true to verify the certificate

export default httpsAgent;
