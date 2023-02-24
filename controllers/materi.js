const db = require("../models");
const materi = require('../models/materi')
const Materi = db.materi;

// create: untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Materi.create(req.body)
        res.status(200).json({
            message: "Quiz created succesfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }  
}

// read: menampilkan atau mengambil semua data quuiz sesuai model dari database
exports.getAll = async(req, res) => {
    try {
        const materi = await Materi.findAll()
        res.json ({
            message: "Quizzes retrived successfully.",
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
         });
    }
};

// Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
        materi.update(req.body, {
            where: {id}
        })
        res.json({
            message: `Data dengan id=${id} berhasil diubah.`,
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }  
}

// Mengahapus data sesuai id
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })

        materi.destroy()

        res.json({
            message: "Quiz deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
}

// Menampilkan data quiz berdasarkan id tertentu
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Quizzes retrieved successfully with id=${id}.`,
            data: materi,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
};

// Menampilkan data quiz berdasarkan kategori tertentu\
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const materi = await Materi.findAll({
        where: {
            categoryId: id
        }
    })
    res.json ({
        message: `Quizzes retrieved successfully with categoryId=${id}.`,
        data: materi,
    });
}