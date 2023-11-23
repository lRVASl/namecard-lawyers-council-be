import * as nodemailer from 'nodemailer';
import config from 'src/configs';

export async function sendEmail(
  recipient: string,
  subject: string,
  qrcodeId: string,
  name: string,
  lastname_th: string,
  nameGroup: string,
): Promise<void> {
  const { urlImage, emailSender, emailSenderPass } = config();
  const imageLogo = `${urlImage}/image/Logo.png`;
  const imageQrcode = `${urlImage}/qr-code/${qrcodeId}`;
  const imageBg = `${urlImage}/image/2BG_PST.png`;

  const file = `${urlImage}/image/file-in-mail.png`;
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: emailSender,
        pass: emailSenderPass,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });
    const mailOptions = {
      from: emailSender,
      to: recipient,
      subject: subject,
      attachments: [
        {
          filename: 'ยุทธศาสตร์ชาติ 15 กย.png',
          path: file,
        },
      ],
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="description" content="baru belajar html"/>
          <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"/>
      <style>
        @import url('https://fonts.cdnfonts.com/css/kanit');
          body {
            text-align: center;
            font-family: "Cordia New", sans-serif;
            padding:5%;
          }
        
          .h1notAlliances {
            color: #54565A;
            font-weight:500;
            margin: 0 0 0 0
          }
      
          p {
            color: #54565A;
            font-weight:200;
            margin: 0 0 0 0
          }
        
          .h1Alliances {
            background: linear-gradient(
                    to right, #D87531 35%, #293D90 65%
        );
           -webkit-text-fill-color: transparent;
           -webkit-background-clip: text;
           font-weight:500;
           margin: 0 0 0 0
          }
          .bg-qr{
            justify-content: center;
            display: flex;
          }
       
          .bg-center{
            text-align:center;
            width:700px;
            justify-content:center;
            align-items:center;
            display:flex;
          }
          
          .bg{
            background-image: url('${imageBg}');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            justify-content: center;
            display: flex;
            width: 200px;
            padding:20px 20px 20px 20px;
          }
          .bg-agenda {
            width: 500px;
            padding:20px 20px 20px 20px;
          }
          .bg-footer {
            width: 1000px;
          }
          .p1{
            text-align:start;
            margin-bottom: 20px;
          }
          .p2{
              text-align:start;
              margin-left: 40px;
            }
          .p3{
                text-align:start;
            }
        </style>
      </head>
      <body>
        <div class="p1"> <p>เรียน คุณ ${name} ${lastname_th},</p></div>
        <div class="p2"> <p>ขอบคุณสำหรับการลงทะเบียนเข้าร่วมงาน “ปาฐกถา และการนำเสนอยุทธศาสตร์เชิงปฏิบัติการต่อสาธารณะ”</p></div>
          <div class="p3"> <p>ของนักศึกษาหลักสูตรการพัฒนาการเมืองและการเลือกตั้งระดับสูง รุ่นที่ 13 (พตส.13) ในวันศุกร์ที่ 15 กันยายน 2566</p></div>
        <div class="p3"> <p>ณ ห้องประชุมห้องประชุมสโมสรราชพฤกษ์ นอร์ธปาร์ค ถนนวิภาวดีรังสิต แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร</p></div>
        <br/>
          <div class="p3"> <p>ขอเรียนให้ท่านทราบว่า <b>ระบบได้ทำการลงทะเบียนให้ท่านเรียบร้อยแล้ว</b></p>			</div>
        <br/>
        <div class="p3"> <p>กรุณาแสดง QR Code ณ จุดลงทะเบียน เพื่อทำการเช็คอิน และรับของที่ระลึกก่อนเข้าร่วมงาน </p></div>
          <div class="p3"> <p>เริ่มลงทะเบียนเวลา 12.00 – 13.00 น.</p></div>
        <br/>
       	<div class="bg-center">
          <div class="bg">
            <img src="${imageQrcode}" alt="qrcode">
          </div>
        </div>
        <div class="bg-center">
            <p style="font-size:10px; color:#F6635C">(*กลุ่ม ${nameGroup})</p>
        </div>
        <br/> 
        <div class="p3"> <p>ท่านสามารถศึกษาข้อมูลเพิ่มเติม เกี่ยวกับงาน “ปาฐกถา และการนำเสนอยุทธศาสตร์เชิงปฏิบัติการต่อสาธารณะ” ได้จาก</p></div>
        <div class="p3"> <p>เอกสารแนบ</p></div>
        <br/> 
        <div class="p3"> <p>Location: ณ ห้องประชุมห้องประชุมสโมสรราชพฤกษ์ นอร์ธปาร์ค ชั้น 2 </p></div>
        <div class="p3"><p><a href="https://goo.gl/maps/9u8KK7QbhQzYAL6A7">https://goo.gl/maps/9u8KK7QbhQzYAL6A7</a></p></div>
        <br/> 
        <div class="p3"> <p>ขอขอบพระคุณ</p></div>
        <div class="p3"> <p>พตส. 13</p></div>
        <br/>
        <div class="bg-logo">
        	<img src="${imageLogo}" alt="logo" style="width:200px;">
        </div>
      </body>
      </html>`,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(`Failed to send email ${name} ${lastname_th}`);
    throw new Error(`Failed to send email ${name} ${lastname_th}`);
  }
}
