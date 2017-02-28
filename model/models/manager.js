/**
 * Created by jiangjun on 2017/1/14.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var Manager=sequelizer.define("t_manager",{//定义表
    id:{
	    //
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:"pk"
    },
    phone:{
        //
        type:Sequelize.STRING,
        allowNull: false,
        comment:"teacher phone"
    },
    userName:{
		//
        type:Sequelize.STRING,
        allowNull: false,
        comment:"teacher or manager name"
    },
    password:{
        //
        type:Sequelize.STRING,
        allowNull: false,
        comment:"password"
    },
    authorityType:{
        type:Sequelize.ENUM("1","2","3"),
        /*
         1:for normal teacher
         2:for manager
         3:for super manager

         */

        allowNull:false,
        comment:"Authority Level: 1 for normal teacher, 2 for manager, 3 for super manager"
    },
    workType:{
        type:Sequelize.ENUM("1","2"),
        allowNull:false,
        comment:"1 for teacher, 2 for manager"
    }

});
Manager.sync();//生成表
module.exports=Manager;