"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePartner = exports.updatePartner = exports.createPartner = exports.getPartners = void 0;
const Partner_1 = __importDefault(require("../models/Partner"));
const getPartners = async (req, res) => {
    try {
        const partners = await Partner_1.default.find();
        res.status(200).json(partners);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getPartners = getPartners;
const createPartner = async (req, res) => {
    try {
        const partner = new Partner_1.default(req.body);
        await partner.save();
        res.status(201).json(partner);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createPartner = createPartner;
const updatePartner = async (req, res) => {
    try {
        const partner = await Partner_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(partner);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updatePartner = updatePartner;
const deletePartner = async (req, res) => {
    try {
        await Partner_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Partner deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deletePartner = deletePartner;
