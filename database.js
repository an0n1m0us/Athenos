var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://athenos:708119@ds255767.mlab.com:55767/athenos", {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Conectado ao BANCO DE DADOS!");
})

var User = new Schema({
    _id: {
        type: String
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    }
})

var Guild = new Schema({
    _id: {
        type: String
    },
    welcome: {
        type: Boolean,
        default: false
    },
    welcomechannel: {
        type: String,
        default: "Nenhum"
    },
    welcomemsg: {
        type: String,
        default: "Nenhuma"
    },
    byebye: {
        type: Boolean,
        default: false
    },
    byebyechannel: {
        type: String,
        default: "Nenhum"
    },
    byebyemsg: {
        type: String,
        default: "Nenhuma"
    }
})

var Cla = new Schema({
    _nome: {
        type: String
    },
    imagem: {
        type: String,
        default: "https://i.imgur.com/4JaNmFp.png",
    },
    dono: {
        type: String
    },
    public: {
        type: Boolean,
        default: false
    },
    points: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    userssize: {
        type: Number,
        default: 0
    },
    staff1: {
        type: String,
        default: "Ninguem"
    },
    staff2: {
        type: String,
        default: "Ninguem"
    },
    staff3: {
        type: String,
        default: "Ninguem"
    },
    membro4: {
        type: String,
        default: "Ninguem"
    },
    membro5: {
        type: String,
        default: "Ninguem"
    },
    membro6: {
        type: String,
        default: "Ninguem"
    },
    membro7: {
        type: String,
        default: "Ninguem"
    },
    membro8: {
        type: String,
        default: "Ninguem"
    },
    membro9: {
        type: String,
        default: "Ninguem"
    },
    membro10: {
        type: String,
        default: "Ninguem"
    },

})

var Loteria = new Schema({
    _lot: {
        type: String,
        default: "loteria"
    },
    ganhador: {
        type: String,
        default: "Ninguem"
    },
    valor: {
        type: Number,
        default: 0
    },
    aberta: {
        type: Boolean,
        default: false
    },
    numero: {
        type: Number,
        default: 0
    }
})

var Users = mongoose.model("Users", User);
var Guilds = mongoose.model("Guilds", Guild);
var Clas = mongoose.model("Clas", Cla);
var Loterias = mongoose.model("Loterias", Loteria);
exports.Users = Users
exports.Guilds = Guilds
exports.Clas = Clas
exports.Loterias = Loterias