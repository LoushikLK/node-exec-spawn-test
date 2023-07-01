import cors from "cors";

const topMiddleware = (app, express) => {
  app.use(cors());
  app.use(
    express.urlencoded({
      extended: true,
      limit: "50mb",
    })
  );
  app.use((req, res, next) => {
    console.table([
      {
        path: req?.originalUrl,
        method: req?.method,
        ip: req?.ip,
        os: req?.headers?.["sec-ch-ua-platform"],
        platform: req?.headers?.["sec-ch-ua"],
      },
    ]);
    next();
  });
  app.use(express.json());
};

export default topMiddleware;
