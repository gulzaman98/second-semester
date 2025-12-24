class Student{

    constructor(name , age , address , year){
        this.name = name;
        this.age = age;
        this.address = address;
        this.year = year;
    }

    exam(){
        document.write(`${this.name} your exam has been scheduled at 25th of jan <br>`)
    }

      std_age(){
        document.write(`your age is ${this.age} <br>`)
    }

  
    
  std_add(){
        document.write(`your address is ${this.address} <br> `)
    }

  

    std_year(){
        document.write(`your passing year is ${this.year} <br>`)
    }
}

let obj1 = new Student("Gulzaman" , 27 ,  "Karachi" ,   2026)

obj1.exam()
obj1.std_age()
obj1.std_add()
obj1.std_year()










