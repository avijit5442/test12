var p={
    full:function(){return `${this.firstname} ${this.last}`    
    }
}
var Avijit={firstname:"Avijit",last:"Behera"}
p.full.call(Avijit)
'Avijit Behera'
p.full.apply(Avijit)
'Avijit Behera'

var p={
    full:function(){return `${this.firstname} ${this.last} ${this.city} ${this.state} ${this.nation}`    
    }
}
var Avijit={firstname:"Avijit",last:"Behera",city:"BBSR",state:"Odisha",nation:"India"}

p.full.call(Avijit)
'Avijit Behera BBSR Odisha India'

