const routes = [
    { path: "/", file: "index.html" },
    { path: "/gettingstarted", file: "getstarted.html" },
    { path: "/whatwedo", file: "whatwedo.html" },
  ];

  // Define routes using the routes array

  // Catch-all route
  app.get("/*", (req, res) => {
    res.redirect("/404");
  });
