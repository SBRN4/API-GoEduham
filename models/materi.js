module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        materi: {
            type: Sequelize.STRING,
        },
        categoryId: {
            type: Sequelize.INTEGER,
        },
        
    });
    return Materi;
}