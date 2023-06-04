"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serverConfig_json_1 = require("./serverConfig.json");
const jobs_1 = __importDefault(require("./models/jobs"));
const dbConnection_1 = __importDefault(require("./db/dbConnection"));
(0, dbConnection_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const jobs_2 = __importDefault(require("./routes/jobs"));
app.use('/api/v1/jobs', jobs_2.default);
// app.get('/api/v1/jobs/:id', (req: Request, res: Response) => {
//   console.log('finding one job');
//   Job.findOneAndUpdate({ _id: '123' }, { job: 'Frontend Developer' })
//     .then((job) => {
//       console.log(job);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });
app.delete('/api/v1/jobs/:id', (req, res) => {
    jobs_1.default.findOneAndDelete({ _id: '123' })
        .then(() => {
        console.log('Job deleted successfully');
    })
        .catch((err) => {
        console.error(err);
    });
});
app.listen(serverConfig_json_1.port, () => {
    console.log(`Server is listening on port ${serverConfig_json_1.port}...`);
});
