/**
 * Created by Yu on 2017/2/28.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var Course=sequelizer.define("t_course",{//定义表
    id:{
        //
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:"pk,course id"
    },
    number:{
        type:Sequelize.STRING,
        allowNull: true,
        comment:"course number"
    },
    name:{
        //
        type:Sequelize.STRING,
        allowNull: true,
        comment:"course name"
    },
    subjectId:{
        //
        type:Sequelize.STRING,
        allowNull: true,
        comment:"subject id"
    },
    teacherId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"teacher pk"
    },
    teacherName:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:"teacher name"

    },
    address:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:"course address"
    },
    beginDate:{
        type:Sequelize.DATE,
        allowNull:true,
        comment:"begin date"
    },
    endDate:{
        type:Sequelize.DATE,
        allowNull:true,
        comment:"end date"
    },
    times:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"course lesson number"
    },
    fee:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"fee for the course"
    },
    description:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"descriptions"
    }



});
Course.sync();//生成表
module.exports=Course;