require('dotenv').config();


const APS_CLIENT_ID = 'Jd6fakVvq6IB90CAoelpOMVemrDltTR0XeZVuMjF77h0peG2';
const APS_CLIENT_SECRET = 'du8A6ZYScIAQ7h4KFsIuY2kWyiFlL4Ddkv4zh5wcLilXHHK0U2ylRagCTrwYep8m';
var APS_BUCKET = "testingbucket13"

if (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
APS_BUCKET = APS_BUCKET || `${APS_CLIENT_ID.toLowerCase()}-basic-app`;
PORT = 8080;

module.exports = {
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    APS_BUCKET,
    PORT
};