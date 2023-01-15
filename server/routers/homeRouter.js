const { Router } = require("express")
const homeRouter = Router()
const { calculation } = require("../controllers/calculateController")

// homeRouter.post("/calculate", calculation)
homeRouter.post("/calculate", (request, response) => {
  console.log(request.body, "+++")

  response.send("ok")
})

module.exports = homeRouter