export default function handler(req,res){
    return new Response(
        JSON.stringify({
          name: 'Nazir abdullah',
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
          },
        }
      )
}

export const config = {
    runtime: 'experimental-edge',
  }