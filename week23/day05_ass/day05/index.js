const express = require("express");
const app = express();

app.get("/", function (request, response) {
  console.log("Backend home route has been hit!");
  response.send({
    status: "success",
    msg: "Request was received successfully",
  });
});

app.use(express.json());

app.get("/api/users/", function (req, res) {
 
  const mockUsers = require("./users.json");
  
  let filterdUsers = mockUsers;
  
  if (req.query.city) {
    filterdUsers = [];
    for (let i = 0; i < mockUsers.length; i++) {
      if (
        mockUsers[i].address.city == req.query.city &&
        mockUsers[i].address.zipcode == req.query.pincode
      ) {
        filterdUsers.push(mockUsers[i]);
      }
    }
  }

  if (filterdUsers.length === 0 && req.query.zipcode) {
    res.status("400").send("Use pincode in the query instead of zipcode");
  } else if (filterdUsers.length === 0) {
    res.status("404").send("The user requested was not found in the system");
  }

  res.send(filterdUsers);
});

app.get("/api/users/:userId", function (req, res) {
  if (req.params.userId) {
    const mockUsers = require("./users.json");
    let filterdUser;
    for (let i = 0; i < mockUsers.length; i++) {
      if (mockUsers[i].id == req.params.userId) {
        filterdUser = mockUsers[i];
        break;
      }
    }

    res.json(filterdUser);
  }
});

app.post("/api/users/", function (req, res) {
  console.log(req.body);
  const mockUsers = require("./users.json");
  mockUsers.push(req.body);
  res.send(mockUsers);
});

app.delete("/api/users/:userId", function (req, res) {
  const id = req.params.userId;
  const mockUsers = require("./users.json");
  let remainingUsers = [];
  for (let i = 0; i < mockUsers.length; i++) {
   
    if (mockUsers[i].id != id) {
      remainingUsers.push(mockUsers[i]);
    }
  }
  res.send(remainingUsers);
});

// Run the server
app.listen(8000, function () {
  console.log("Server has started");
});
















// const express = require("express");
// const res = require("express/lib/response");
// const fs = require("file-system");

// // Express Application Object - all the methods useful to run servers and make APIs
// const app = express();

// // http://localhost:8000/
// // API that can handle GET requests on the path - '/'

// app.get("/", function (request, response) {
//   console.log("Backend home route has been hit!");
//   response.send({
//     status: "success",
//     msg: "Request was received successfully",
//   });
// });

// // Mock database - JS file - create an array of users

// app.use(express.json());

// app.get("/api/users/", function (req, res) {
//   console.log(req.query);
//   const mockUsers = require("./user-service/mockUsers.json");
//   let filterdUsers = mockUsers;
//   // {city: "a", pincode: "1234", company: "xyz"}
//   // let query = "select * "
//   if (req.query.city) {
//     // do some filter with query received on the users list
//     // filterdUsers = mockUsers.filter((user) => {
//     //   console.log(user.address.city, req.query.city);
//     //   user.address.city == req.query.city;
//     // })

//     filterdUsers = [];
//     for (let i = 0; i < mockUsers.length; i++) {
//       if (
//         mockUsers[i].address.city == req.query.city &&
//         mockUsers[i].address.zipcode == req.query.pincode
//       ) {
//         filterdUsers.push(mockUsers[i]);
//       }
//     }
//   }

//   if (filterdUsers.length === 0 && req.query.zipcode) {
//     res.status("400").send("Use pincode in the query instead of zipcode");
//   } else if (filterdUsers.length === 0) {
//     res.status("404").send("The user requested was not found in the system");
//   }

//   res.send(filterdUsers);
// });

// app.get("/api/users/:userId", function (req, res) {
//   console.log(req.params);
//   if (req.params.userId) {
//     // Filter this user with this userId inside the users mock data and return this user
//     const mockUsers = require("./user-service/mockUsers.json");
//     let filterdUser;
//     for (let i = 0; i < mockUsers.length; i++) {
//       if (mockUsers[i].id == req.params.userId) {
//         filterdUser = mockUsers[i];
//         break;
//       }
//     }

//     res.json(filterdUser);
//   }
// });

// app.get("/api/users/:city", function (req) {
//   console.log("This is city param api", req.params);
// });

// app.post("/api/users/", function (request, response) {
//   console.log(request.body);
//   const mockUsers = require("./user-service/mockUsers.json");
//   mockUsers.push(request.body);
//   // @TODO - Write this new mockUsers array inside JSON file
//   response.send(mockUsers);
// });

// app.delete("/api/users/:userId", function (req, res) {
//   const id = req.params.userId;
//   const mockUsers = require("./user-service/mockUsers.json");
//   let remainingUsers = [];
//   for (let i = 0; i < mockUsers.length; i++) {
//     // If the id of the current user is not same as the id received the url, then add this user
//     // to the new data array
//     if (mockUsers[i].id != id) {
//       remainingUsers.push(mockUsers[i]);
//     }
//   }
//   // Update the mockUSers.json file with the data present in remainingUsers
//   res.send(remainingUsers);
// });

// app.put("/api/users/:userId", function (req, res) {
//   console.log(req.body);
//   const id = req.params.userId;
//   const mockUsers = require("./user-service/mockUsers.json");
//   const newEmail = req.body.email;
//   const newZipcode = req.body.zipcode;
//   let updatedUser;
//   for (let i = 0; i < mockUsers.length; i++) {
//     if (mockUsers[i].id == id) {
//       mockUsers[i].email = newEmail;
//       mockUsers[i].address.zipcode = newZipcode;
//       updatedUser = mockUsers[i];
//       break;
//     }
//   }
//   // JSON file -> re write the whole file using mockUsers
//   fs.writeFile("./user-service/mockUsers.json", JSON.stringify(mockUsers));
//   res.send(updatedUser);
// });

// // Run the server
// app.listen(8000, function () {
//   console.log("Server has started");
// });

// const response = [];





// const express = require("express");
// const app = express();


// app.get("/api/users", function (req, res) {
//   const main = require("./main.js");
//   let filterUsers = main;
//   if (req.query.age) {
//     filterUsers = [];
//     for (let i = 0; i < main.length; i++) {
//       if (main[i].age == req.query.age) {
//         filterUsers.push(main[i]);
//       } else {
//         res.status("404").send("The user requested was not found");
//       }
//     }
//     res.send(filterUsers);
//   }
// });

// app.get("/api/users/:id", function (req, res) {
//   if (req.params.userId) {
//     const main = require("./main.js");
//     let filterdUser;
//     for (let i = 0; i < main.length; i++) {
//       if (main[i].id == req.params.userId) {
//         filterdUser.main[i];
//       } else {
//         res.status("404").send("The user requested was not found");
//       }
//     }
//     res.send(filterdUser);
//   }
// });

// app.post("/api/users/", function (request, response) {
//   const main = require("./main.js");
//   main.push(request.body);
//   response.send(main);
// });

// app.put("/api/users/:id", function (req, res) {
//   const id = req.params.id;
//   const main = require("./main.js");
//   const newEmail = req.body.email;
//   const newZipcode = req.body.zipcode;
//   let updatedUsers;
//   for (let i = 0; i < main.length; i++) {
//     if (main[i].id == id) {
//       main[i].email = newEmail;
//       main[i].address.zipcode = newZipcode;
//       updatedUsers = main[i];
//     }
//   }
//   res.send(updatedUsers);
// });

// app.delete("/api/users/:id", function (request, response) {
//   const id = request.params.id;
//   const main = require("./main.js");
//   let remainingUsers = [];
//   for (let i = 0; i < main.length; i++) {
//     if (main[i].id != id) {
//       remainingUsers.push(main[i]);
//     }
//   }
//   response.send(remainingUsers);
// });

// app.listen(8000, function () {
//   console.log("Server is started");
// });