import fetch from 'node-fetch';

async function ok() {
 try {
const opts = {
    headers: {
        cookie: 'SESSION$STATE=23474f996ad0d545f6799913f03ef70f95dc99641404748c8b917ab6f4f14fd4a6da2274d6b616251a2c8b7294a3d88a095cf39e6173a4f5a7225017493260b6; Path=/; Secure; SameSite=None' 

    }
};
const result = await fetch(`http://localhost:8080/data/rest/v2.0/messages?dataLevel=10&ids=23474f996ad0d5451c958b6e0f24e8c08d9904e13f5d8c14&ids=23474f996ad0d5451c958b6e0f24e8c0e4e63d9dc183c538&ids=23474f996ad0d5451c958b6e0f24e8c050df425b34da4884&ids=23474f996ad0d545fd0cee4c1dd5f16717cf5ea899cd9e42&ids=23474f996ad0d545fd0cee4c1dd5f167acd116df06bee3d7&ids=23474f996ad0d5455b0e1f01eb6bee1d4aa2c91d5357a5b0&ids=23474f996ad0d5451472a8ea98e8a6301f6a484a08a56818&ids=23474f996ad0d5452731e5d0e73e8f64&ids=23474f996ad0d545d2b9098d70f3c523&ids=23474f996ad0d545c63dd032c5f14487&ids=23474f996ad0d545384b3ff41be96f0b&pageSize=11`, opts);
console.log(result);
  }
 catch(e) { console.log(e); }
}
ok();
