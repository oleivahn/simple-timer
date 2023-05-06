# Auth Notes

Auth0 Video
https://www.youtube.com/watch?v=dyZmsz6usWk&ab\_channel=AmbientCoder

Ended up using this video first to auth just React first... 
[https://www.youtube.com/watch?v=vFHGDaMO-0M&t=208s&ab_channel=OktaDev](James Q Quick Video... the easy one. Using the SDK)
 Now I can an access token and use that to validate on the api hopefully

Create an API on Auth0
`MAKE SURE YOU CREATE THE API WITH THE HS256 ALGORITHM... OTHERWISE NODE WONT VERIFY CORRECTLY`
Get the Name and Identifier

<br>
### Packages

`On Node`:
Packages to create permissions to be added on the Auth request
npm i express-oauth2-jwt-bearer
npm install express-jwt-permissions

<br>
`React`
`.env` When you create an App on Auth0... make sure you extract the Client ID and Client Secret from it