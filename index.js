import { Webhooks } from '@octokit/webhooks';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: GH_AUTH,
});


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
   const raidsWebhook = new Webhooks({
    secret: RAID_HOOK_SECRET,
    path: '/raid-hooks',
  });
 const issues = await octokit.issues.list()
  
console.log(issues.data)
    return new Response(JSON.stringify(issues.data), {

      headers: { 'Content-Type': 'application/json' },

    })
  

  // raidsWebhook.on('issue.opened', testHook);
}
