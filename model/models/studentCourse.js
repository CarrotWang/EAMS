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
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"teacher pk"

    },
    courseId:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:"course address"
    },
    courseNum:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:"course number"
    },
    courseName:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:"course address"
    },
    enrollTime:{
        type:Sequelize.DATE,
        allowNull:true,
        comment:""
    },
    infoType:{
        type:Sequelize.ENUM('1','2'),
        allowNull:true,
        comment:"the type of get the information,1:other recommend,2:old student"
    },
    recordPerson:{
        type:Sequelize.STRING,
        allowNull:true,
        comment:""
    },
    feePaid:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"fee paid"
    },
    feeType:{
        type:Sequelize.ENUM('1','2'),
        allowNull:true,
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