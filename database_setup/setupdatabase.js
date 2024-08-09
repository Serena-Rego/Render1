import db from '../models/index.js';

const setupDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });

        await db.Account.bulkCreate([
            { actName: 'John Doe', actType: 'Savings' },
            { actName: 'Willams', actType: 'Deposit' }
        ]);

        console.log('Database setup complete.');
    } catch (error) {
        console.error('Database setup error:', error);
    }
};

setupDatabase();