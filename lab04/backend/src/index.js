import { app } from './app.js';
import { initDatabase } from './init.js'

try {
    await initDatabase();

    const PORT = 3001;
    app.listen(PORT);
    console.info(`express server running on http://localhost:${PORT}`);
} catch (err) {
    console.error('error connecting to database: ', err);
}
