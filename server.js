// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public"));
