const e=require("./helper/sendToWebContents");module.exports={send:(t,o)=>{e(windows.home,"terminal-output",{path:t,data:o})}};