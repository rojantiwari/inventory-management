installing or setting up backing

steps:

npm init -y

typescript

npm install typescript
npx tsc --init
npm i typescript @types/node ts-node --save -dev / npm i -D ts-node typescript @types/node
npm i express @types/express

setting up prisma

npm i prisma @prisma/client
npx prisma init
//setting up model

npx prisma generate  
npx prisma migrate dev --name init

AWS //

setting up involving vpc
step-1 - create own vpn by choosing own region
step2 - setting up subnet as after settingup subnet we only can deploy our project
to access vpc or subnet need to setup internet gateway
