const { PageLink } = require("../database/models");

const getUserLinks = async (id) => {
  try {
    return await PageLink.findAll({ where: { userId: id } });
  } catch (err) {
    return err;
  }
};

const updatePageLink = async (id, pageLink) => {
  const { link, title, imageURL } = pageLink;
  const updatedPageLink = {
    link: link,
    title: title,
    image: imageURL,
  };
  try {
    const oldPageLink = await PageLink.findByPk(id);
    await oldPageLink.set(updatedPageLink);
    return await oldPageLink.save();
  } catch (err) {
    return err;
  }
};

const addPageLink = async (pageLink) => {
  const { link, title, imageURL, userId } = pageLink;
  const newPageLink = {
    link: link,
    title: title,
    imageURL: imageURL,
    userId: userId,
  };
  try {
    return await PageLink.create(newPageLink);
  } catch (err) {
    return err;
  }
};

const deletePageLink = async (id) => {
  try {
    const pageLink = await PageLink.findByPk(id);
    pageLink.destroy();
  } catch (err) {
    return err;
  }
};

module.exports = {
  getUserLinks,
  addPageLink,
  updatePageLink,
  deletePageLink,
};
