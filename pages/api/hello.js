// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const result = {
    "payload": "{\"userId\": \"user-id-001\"}",
    "payload2": "user-id-002",
    "body": req.body,
    "name": "Example user", 
    "zip_codes": ["31123", "31125"], 
    "billing": [{ "key": "key_1", "value": "value_1" }, { "key": "key_2", "value": "value_2" }]
  };
  res.status(200).json(result)
}
