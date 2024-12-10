import { Request, Response } from "express";
import Partner from "../models/Partner";

export const getPartners = async (req: Request, res: Response) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPartner = async (req: Request, res: Response) => {
  try {
    const partner = new Partner(req.body);
    await partner.save();
    res.status(201).json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePartner = async (req: Request, res: Response) => {
  try {
    const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePartner = async (req: Request, res: Response) => {
  try {
    await Partner.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Partner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
