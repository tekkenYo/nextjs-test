// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  const result = {
    proctorGroup: "kimoyo_wa_v1menu_tst",
    body: body
  };
  res.status(200).json(result)
}
