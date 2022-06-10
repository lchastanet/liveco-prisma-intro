const {
  getAll,
  createOne,
  updateOne,
  getUnique,
  removeOne,
} = require("../models/studentsDataAccess")

exports.getAll = async (req, res) => {
  const students = await getAll()

  res.status(200).json(students)
}

exports.getOne = async (req, res) => {
  const studentId = parseInt(req.params.id)

  const message = await getUnique(studentId)

  res.status(200).json(message)
}

exports.createOne = async (req, res) => {
  const { firstname, lastname, age, remote } = req.body
  const message = await createOne({ firstname, lastname, age, remote })

  res.status(201).json(message)
}

exports.updateOne = async (req, res) => {
  const studentId = parseInt(req.params.id)

  const message = await updateOne(studentId, req.body)

  res.status(200).json(message)
}

exports.deleteOne = async (req, res) => {
  const studentId = parseInt(req.params.id)

  const message = await removeOne(studentId)

  res.status(200).json(message)
}
