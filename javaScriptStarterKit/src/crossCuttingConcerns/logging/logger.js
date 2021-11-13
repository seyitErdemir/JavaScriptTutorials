export    class BaseLogger{
    log(data ){
        console.log( "base logger"+ data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("logged to elastix  " + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to Mongo   " + data)
    }
}

