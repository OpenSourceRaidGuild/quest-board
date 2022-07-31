# [quest-board](https://osrg.netlify.app/)
System of services that are related to Quests in GitHub &amp; the Website Platform. The idea is to use the forked repository issues as a way configure the Raid itself in the Website, and to auto generate the issues for Raid Parties to pick up and mob on together. 
- Event Driven (GitHub WebHooks)
- Serverless Functions
- First Issue as Config File (This will go into Guild Scribe)
   - Raid Leader
   - Parse Files by Raid Type
- Create Quests/Issues from parsed files 

# Toolchain 
- npx wrangler
  - https://developers.cloudflare.com/workers/wrangler/get-started/
