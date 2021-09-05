import { Webhooks } from '@octokit/webhooks';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: GH_AUTH,
});


addEventListener('fetch', event => {
  const { request } = event
  if (request.method === "POST") {
    return event.respondWith(handleRequest(request))
  }
  return
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  //! Test locally HTTPIE hit the Worker endpoint
  //! Get the  {owner: string; repo: string;} & First Issue information from POST coming from Guild Scribe
  //*  1. Use Object to get GH Repo data  
  //*  2. Use First Issue Config to know what data to parse (file types) (other configs Raid Leader, Repo Name, Raid Name)
  //*  3. Take parsed repo from GH Octokit (content URL to Array [{RawUrl}]: DirectoriesInRepo RawURL gives the file content) 
  //*  4. Utilize the file content and file name to generate a issue using the GH Octokit 

 // Partial implemention of #1  
//  const issues = await octokit.issues({owner: string; repo: string;}).list()
  
//! Currently not seeing the data in "request" when hitting the Worker endpoint with the POST body HTTPIE
console.log(request)

    return new Response(JSON.stringify(request), {

      headers: { 'Content-Type': 'application/json' },

    })
  
  return
  // raidsWebhook.on('issue.opened', testHook);
}
