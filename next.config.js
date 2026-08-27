/** @type {import('next').NextConfig} */
const nextConfig = {
  // 개발 중 휴대폰 등 다른 기기에서 LAN IP로 dev 서버에 접속해 테스트할 수 있도록 허용
  allowedDevOrigins: ["172.30.1.6"],
};
module.exports = nextConfig;
