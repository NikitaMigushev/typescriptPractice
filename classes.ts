class Department {
    private id: number
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    getName() {
        return this.name;
    }

    getEmployees() {
        return this.employees;
    }
}

const firstDep = new Department(1,'first', []);
firstDep.addEmployee('First employee')

console.log(firstDep.getName());
console.log(firstDep.getEmployees());

class ITDepartment extends Department {
    private admins: string[];

    constructor(id: number, admins: string[]) {
        super(id, "IT", ['Nick', 'Jack']);
        this.admins = admins;
    }
}

const itDep = new ITDepartment(1, ['Nick', 'Jack']);
console.log(itDep);

