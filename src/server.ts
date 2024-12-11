import app from './app';
import config from './app/config';

import mongoose from 'mongoose';

async function startServer() {
    // Database Connection
    await mongoose.connect(config.databaseUrl as string);

    // server listening
    app.listen(config.port, () => {
        console.log(`BookShop is listening on port ${config.port}`);
    });
}

startServer();
