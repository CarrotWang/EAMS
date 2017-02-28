/**
 * Created by Yu on 2017/2/28.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var Course=sequelizer.define("t_course", {//定义表
    id: {
        //
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "pk,course id"
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false,
        comment:"subject name"
    }
});