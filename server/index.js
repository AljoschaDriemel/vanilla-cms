const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MemberModel = require("./models/members")

const cors = require('cors');


app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.rxyt27g.mongodb.net/scms?retryWrites=true&w=majority"
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/getMembers", (req, res) => {
    MemberModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


app.post("/createMember", async (req, res) => {
  const member = req.body;
  const newMember = new MemberModel(member);
  await newMember.save();

  res.json(member);
});



MemberModel.findByIdAndRemove({  }, (error, deletedRecord) => {
  if (!error) {
    console.log(deletedRecord);
  }
})

app.delete("/getMember/:id", (req, res) => {
  const { id } = req.params;

  MemberModel.findByIdAndRemove(id, (error, deletedRecord) => {
    if (!error) {
      console.log(deletedRecord);
    }
  })

})


app.listen(3001, () => {
  console.log("listen on port 3001");
});

