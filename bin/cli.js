#!/usr/bin/env node
 const {execSync} = require('child_process');
 
 const runCommand = command => {
    try {
        execSync(`${command}`,{stdio:'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`,e)
        return false ;
    }
    return true ;
 }
 const repoName = process.argv[2]
 const gitCheckoutCommand = `git clone --depth 1 https://github.com/donnie3237/DosE-WebToDesktopApp ${repoName}`
 const installDepsCommand =`cd ${repoName} && npm install`

  console.log(`cloning with name ${repoName}`)

  const checkOut = runCommand(gitCheckoutCommand);
  if(!checkOut) process.exit(-1)

  console.log(`installing ${repoName}`);
  const installedDeps = runCommand(installDepsCommand);
  if(!installedDeps) process.exit(-1)
  
console.log('------------------------------------')
console.log('------------------------------------')
console.log(' =====      ===    //==\\\\ ||====')
console.log('  ||  \\\\  ||   ||  ||     ||')
console.log('  ||   || ||   ||    \\\\   ||====')
console.log('  ||  //  ||   ||     ||  ||')
console.log(' =====      ===   \\\\==//  ||====')
console.log('------------------------------------')
console.log('------------------------------------')
console.log('You are ready !!, follow this below to start ')
console.log(`cd ${repoName} && npm run dose`)
console.log('DOSE :)')