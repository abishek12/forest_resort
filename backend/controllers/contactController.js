import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

// @desc    Fetch all contacts
// @route   GET /api/contacts
// @access  Public
const getAllContacts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: "i",
      },
    }
    : {};

  const count = await Contact.countDocuments({ ...keyword }); // Count the documents matching the keyword
  const contacts = await Contact.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ contacts, page, pages: Math.ceil(count / pageSize) }); // Use the actual count for pagination
});

// @desc    Fetch single contact
// @route   GET /api/contacts/:id
// @access  Public
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    res.json(contact);
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
const removeContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    await contact.remove();
    res.json({ message: "Contact removed" });
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

// @desc    Create a contact
// @route   POST /api/contacts
// @access  Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("CONTACT", req.body)

  const contact = new Contact({
    name: name || "-",
    email: email || "-",
    phone: phone || "-",
    message: message || "-",
  });

  const createdContact = await contact.save();
  res.status(201).json(createdContact);
});

// @desc    Update a contact
// @route   PUT /api/contacts/:id
// @access  Private/Admin
const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;

  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    contact.message = message;
    contact.viewed = viewed;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

const updateContactViewedStatus = asyncHandler(async (req, res) => {
  const { viewed } = req.body;

  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.viewed = viewed;
    const updatedContact = await contact.save();
    res.json(updatedContact);
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

// @desc    Get top rated contacts 
// @route   GET /api/contacts/top
// @access  Public
const getTopContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ rating: -1 }).limit(3);

  res.json(contacts);
});

export {
  getAllContacts,
  getContactById,
  removeContact,
  createContact,
  updateContact,
  getTopContacts,
  updateContactViewedStatus
};
