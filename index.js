"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serverConfig_json_1 = require("./serverConfig.json");
const dbConnection_1 = __importDefault(require("./db/dbConnection"));
(0, dbConnection_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const jobs_1 = __importDefault(require("./routes/jobs"));
const users_1 = __importDefault(require("./routes/users"));
app.use('/api/v1/jobs', jobs_1.default);
app.use('/api/v1/user', users_1.default);
app.listen(serverConfig_json_1.port, () => {
    console.log(`Server is listening on port ${serverConfig_json_1.port}...`);
});
