const accountModel = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        actName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        actType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Account;
};


export default accountModel;
