const Sequelize = require('sequelize');
const db = require('../db');

const PageLink = db.define('pageLink', {
    link: {type: Sequelize.STRING},
    title: {type: Sequelize.STRING},
    image: {type: Sequelize.STRING},
    /**
     * Room for additional features for links.
     */
});

module.exports = PageLink;