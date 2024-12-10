"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const partnerController_1 = require("../controllers/partnerController");
const router = express_1.default.Router();
router.route("/")
    .get(partnerController_1.getPartners)
    .post(partnerController_1.createPartner);
router.route("/:id")
    .put(partnerController_1.updatePartner)
    .delete(partnerController_1.deletePartner);
exports.default = router;
