export default () => ({
  env: process.env.NODE_ENV ?? 'local',
  port: process.env.PORT || 4000,
  id24Url: process.env.ID24_URL || 'http://192.168.59.191:8815',
  qrcodeUrlMember: process.env.QR_CODE_URL_MEMBER,
  urlImage: process.env.URL_IMAGE,
  emailSender: process.env.EMAIL,
  emailSenderPass: process.env.EMAIL_PASS,
  id24TokenPublicKey: process.env.ID24_TOKEN_PUBLIC_KEY,
});
