const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: GH_AUTH,
});

addEventListener('fetch', event => {
  const { request } = event
  return event.respondWith(handleRequest(request))
})

async function handleRequest(request) {
// Handled by the Guild Scribe: Get the  {owner: string; repo: string;} & First Issue information from POST coming from Guild Scribe

// The following steps are handled by the worker:
//*  TODO: 
//*   1. Use First Issue Config to know what data to parse (file types) (other configs Raid Leader, Repo Name, Raid Name)
//*  2. Take parsed repo from GH Octokit (content URL to Array [{RawUrl}]: DirectoriesInRepo RawURL gives the file content) 
// Get the contents URL for the passed repo
const rawResponse = await octokit.repos.getContent({ owner: 'OpenSourceRaidGuild', repo: 'TEST', path: '' }) 
const { data: allRefs } = rawResponse;

// Get the download URLS for each file at that path
const downloadUrls = allRefs.map(ref => ref.download_url);

// Get the contents of those files
let rawFileContents = await fetch(downloadUrls[1]);
let fileContents = rawFileContents.body;


return new Response(fileContents, {
  headers: { 'Content-Type': 'application/json' },
})

  // TODO:
  //*  3. Utilize the file content and file name to generate a issue using the GH Octokit
  // octokit.issues.create()
  
}
