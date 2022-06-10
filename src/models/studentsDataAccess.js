const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

exports.getAll = async () => {
  try {
    return await prisma.student.findMany()
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
}

exports.createOne = async (student) => {
  try {
    return await prisma.student.create({
      data: { ...student },
    })
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
}

exports.updateOne = async (studentId, data) => {
  try {
    return await prisma.student.update({
      where: { id: studentId },
      data: { ...data },
    })
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
}

exports.getUnique = async (studentId) => {
  try {
    return await prisma.student.findUnique({ where: { id: studentId } })
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
}

exports.removeOne = async (studentId) => {
  try {
    return await prisma.student.delete({ where: { id: studentId } })
  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
}
