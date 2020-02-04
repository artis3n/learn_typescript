"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return {
            name
        };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins = []) {
        super(id, 'IT');
        this.admins = admins;
        this.admins.push('An admin');
    }
    describe() {
        console.log(`IT department ID: ${this.id}`);
    }
    printAdminInformation() {
        console.log(this.admins.length);
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports = []) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
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
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
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
//# sourceMappingURL=classes.js.map