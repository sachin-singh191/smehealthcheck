const { Sequelize, DataTypes } = require('sequelize');

// Replace 'your_username', 'your_password', and 'your_database' with your actual database credentials and name
const sequelize = new Sequelize('postgres://your_username:your_password@localhost:5432/your_database', {
    logging: console.log 
});

const Company = sequelize.define('Company', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyUEN: {
        type: DataTypes.STRING(9),
        allowNull: false
    },
    applicantEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
    },
    applicantPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { is: /^\+65\d{8}$/ }
    },
    position: {
        type: DataTypes.STRING(9),
        allowNull: false
    },
    termsAccepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    documentURLs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    }
}, {
    tableName: 'Companies' 
});

sequelize.sync({ force: true }) 
    .then(() => {
        console.log("The Company table has been successfully created!");
    })
    .catch(e => {
        console.error("Error creating the Company table:", e);
    });

module.exports = Company;
