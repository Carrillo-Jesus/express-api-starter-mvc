require('module-alias/register');
const app = require('@/routes/app');

app.listen(app.get('port'), () => {
    console.log(`Server on port http://localhost:${app.get('port')}`);
});
