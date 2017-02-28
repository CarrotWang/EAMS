/**
 * Created by Yu on 2017/2/28.
 */
/**
 * Created by Yu on 2017/2/28.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var StudentCourse=sequelizer.define("t_student_course",{//定义表
    id:{
        //
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:"pk"
    },
    studentId:{
        type:Sequlize.INTEGER,
        allowNull:false,
        comment:"teacher pk"

    },
    courseId:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:"course address"
    },
    courseNum:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:"course number"
    },
    courseName:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:"course address"
    },
    infoType:{
        type:Sequelize.ENUM(1,2),
        allowNull:false,
        comment:"the type of get the information,1:other recommend,2:old student"
    },
    recordPerson:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:""
    },
    feeType:{
        type:Sequelize.ENUM(1,2),
        allowNull:false,
        comment:"the type of fee, 1:vista,2:"
    },
    description:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"descriptions"
    }



});
StudentCourse.sync();//生成表
module.exports=StudentCourse;