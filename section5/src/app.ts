abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];

    protected constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
        return {
            name
        }
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[] = []) {
        super(id, 'IT');
        this.admins.push('An admin');
    }

    describe(): void {
        console.log(`IT department ID: ${this.id}`);
    }

    printAdminInformation() {
        console.log(this.admins.length);
        console.log(this.admins);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[] = []) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (!AccountingDepartment.instance) {
            this.instance = new AccountingDepartment('d3');
        }
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department ID: ${this.id}`);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.describe();
// accounting.printEmployeeInformation();

const employee1 = Department.createEmployee('Max');
console.log(employee1);

const it = new ITDepartment('d2');
it.describe();
it.printAdminInformation();

const newAccounting = AccountingDepartment.getInstance();
const singletonAccounting = AccountingDepartment.getInstance();

console.log(newAccounting === singletonAccounting);

newAccounting.addReport('Something went wrong');
console.log(newAccounting.mostRecentReport);
newAccounting.mostRecentReport = 'A new report';
console.log(newAccounting.mostRecentReport);

newAccounting.addEmployee('Max');
newAccounting.addEmployee('Manu');
newAccounting.describe();
newAccounting.printReports();
newAccounting.printEmployeeInformation();
