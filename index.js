const { Octokit } = require('@octokit/rest');
const got = require('got');

addEventListener('fetch', event => {
  event.passThroughOnException();
  const { request } = event
  return event.respondWith(handleRequest(request))
})

async function handleRequest(request) {

const octokit = new Octokit({
  auth: GH_AUTH,
});

  // NOTE: Step 1 will be handled by the Guild Scribe
  // Test locally HTTPIE hit the Worker endpoint - This will simulate the POST from Guild Scribe
  // Get the  {owner: string; repo: string;} & First Issue information from POST coming from Guild Scribe
  // 1. Use Object to get GH Repo data 
  
  // The following steps are handled by the worker:
  //*  2. Use First Issue Config to know what data to parse (file types) (other configs Raid Leader, Repo Name, Raid Name)
  //*  3. Take parsed repo from GH Octokit (content URL to Array [{RawUrl}]: DirectoriesInRepo RawURL gives the file content) 
  //*  4. Utilize the file content and file name to generate a issue using the GH Octokit 

// Get the contents URL for the passed repo
const rawResponse = await octokit.repos.getContent({ owner: 'OpenSourceRaidGuild', repo: 'TEST', path: '*' }) 
const { contents_url: contentsUrl } = rawResponse.data

console.log('URL for the repo contents: ', contentsUrl);
const { data } = await got(contentsUrl)
const contentUrls = rawContentData.json().map(file => file.download_url);

//! Currently not seeing the data in "request" when hitting the Worker endpoint with the POST body HTTPIE



    return new Response(contentsUrl, {
      headers: { 'Content-Type': 'application/json' },
    })

  // raidsWebhook.on('issue.opened', testHook);
}
