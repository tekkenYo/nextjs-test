// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  const result = {
  session: {
    namespace: 'myNamespace',
    data: { variable: 'test123' },
  },
  messages: [{ type: 'text', config: { textMessages: [{ text: 'random message 1' }] } }]
};
  
  
  res.status(200).json(result)
}
