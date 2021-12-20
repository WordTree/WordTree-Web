class DataLoader {

    constructor() {
        this.weeklyDates = this.getWeeklyDate().reverse();
    }

    // 获得前七天的日期
    getWeeklyDate() {
		let days = [];
		var date = new Date();
		for(let i=0; i<=144;i+=24){		
			let dateItem=new Date(date.getTime() - i * 60 * 60 * 1000);
			let m = dateItem.getMonth() + 1;	
			let d= dateItem.getDate();
			m = this.formatDate(m);	
			d = this.formatDate(d);	
			let valueItem = m + '-' + d;	
			days.push(valueItem);	
		}
		return days;		
	}
    // 格式化日期
    formatDate(time) {
		if (time.toString().length == 1) {
			time = '0' + time.toString();
		}
		return time;
    }
    // 初始化数据
    initData(type) {
        switch (type) {
            case "column": {
                var initValue = [];
                for(var date of this.weeklyDates){
                    initValue.push({
                        date:date,
                        value:0,
                        type:"Learn"
                    });
                    initValue.push({
                        date:date,
                        value:0,
                        type:"Review"
                    });
                }
                return initValue;
            }
            case "line": {
                var initValue = [];
                for(var date of this.weeklyDates){
                    initValue.push({
                        date:date,
                        time:0
                    });
                }
                return initValue;
            }
        }
    }
    // 装载数据
    loadData(type,data){
        switch(type){
            case "column":{
                var initData = this.initData(type);
                for(var item of data){
                    var index = this.weeklyDates.indexOf(item.date);
                    if(item.type=="Learn"){
                        initData[2*index].value = item.value;
                    }else{
                        initData[2*index+1].value = item.value;
                    }
                }
                return initData;
            }
            case "line": {
                var initData = this.initData(type);
                for(var item of data){
                    var index =  this.weeklyDates.indexOf(item.date);
                    initData[index].time = item.time;
                }
                return initData;
            }
        }
    }
}

export default DataLoader